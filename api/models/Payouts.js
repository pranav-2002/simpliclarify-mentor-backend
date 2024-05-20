"use strict";

import { RAZORPAYX_CONFIG } from "../../config";
import { CustomError } from "../helpers";
import Booking from "../schemas/_Booking";
import Mentor from "./../schemas/Mentor";
import fetch from "node-fetch";

const Payouts = {
  payoutBookingList,
  capturePayout,
  fetchPayouts,
};

export default Payouts;

async function payoutBookingList(body) {
  try {
    const { mentorId, personaType } = body;

    if (!_checkType(personaType)) {
      throw new CustomError("Invalid personaType");
    }

    const date = new Date();
    const endDate = _endDate(date);
    const data = await Booking.find({
      mentorId,
      paymentStatus: "ACCEPT",
      created_at: { $lte: endDate },
      payOuts: 0,
      personaType,
    })
      .populate({
        path: "userId",
        select: "userName",
      })
      .select("meetingDate meetingTimings mentorCut updatedAt created_at");
    return data;
  } catch (error) {
    throw new CustomError(error);
  }
}

async function capturePayout(body) {
  try {
    const {
      RAZORPAYX: {
        RAZORPAYX_KEYID,
        RAZORPAYX_KEYSECRET,
        RAZORPAYX_ACCOUNT_NUMBER,
      },
      ALLOW_PAYOUTS,
    } = RAZORPAYX_CONFIG;

    const { mentorId, bookingIds, account_type, bank_account } = body;

    // ALLOW_PAYOUTS set to 0 -> Block payouts
    if (!parseInt(ALLOW_PAYOUTS)) {
      throw new CustomError({
        statusCode: 400,
        message: "Sorry! Payouts are temporarily disabled",
      });
    }
    const mentor = await Mentor.findOne({ _id: mentorId });
    if (!mentor) {
      throw new CustomError("Mentor does not exist");
    }
    const { name, email, contactNumber } = mentor;
    const contactObject = {
      name,
      email,
      contact: contactNumber,
      reference_id: mentorId,
    };
    const amount = await _calculatePayoutAmount(bookingIds);

    if (amount == 0) {
      throw new CustomError("We couldn't find bookings related to this payout");
    }
    const capturePayoutPayload = {
      account_number: RAZORPAYX_ACCOUNT_NUMBER,
      amount: amount * 100,
      currency: "INR",
      mode: "NEFT",
      purpose: "payout",
      fund_account: {
        account_type,
        bank_account,
        contact: contactObject,
      },
    };
    const URL = `https://${RAZORPAYX_KEYID}:${RAZORPAYX_KEYSECRET}@api.razorpay.com/v1/payouts`;

    const response = await (
      await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(capturePayoutPayload),
      })
    ).json();

    const { error = {} } = response;

    if (Object.keys(error).length > 0) {
      if (
        error.description ===
        "Your account does not have enough balance to carry out the payout operation."
      ) {
        throw new CustomError("Payout failed, Please contact support");
      } else {
        throw new CustomError(`${error.description}`);
      }
    }
    await _updateBookings(bookingIds);
    return;
  } catch (error) {
    throw new CustomError(error);
  }
}

async function fetchPayouts() {
  try {
    const {
      RAZORPAYX: {
        RAZORPAYX_KEYID,
        RAZORPAYX_KEYSECRET,
        RAZORPAYX_ACCOUNT_NUMBER,
      },
    } = RAZORPAYX_CONFIG;

    const URL = `https://${RAZORPAYX_KEYID}:${RAZORPAYX_KEYSECRET}@api.razorpay.com/v1/payouts?account_number=${RAZORPAYX_ACCOUNT_NUMBER}`;

    const response = await (
      await fetch(URL, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
    ).json();

    return response;
  } catch (error) {
    throw new CustomError(error);
  }
}

function _endDate(date) {
  const CALCULATE_END_DAYS_LIMIT = 10;
  const d = new Date(date.setHours(0, 0, 0, 0));
  d.setDate(d.getDate() - CALCULATE_END_DAYS_LIMIT);
  return d;
}

function _findBooking(id) {
  return Booking.findOne({ _id: id, payOuts: 0 });
}

async function _calculatePayoutAmount(bookingIds) {
  const promises = bookingIds.map((id) => {
    return _findBooking(id);
  });
  const promiseResult = await Promise.all(promises);
  if (promiseResult.length == 1 && !promiseResult[0]) return 0;

  const amount = promiseResult.reduce((accumulator, current) => {
    return accumulator + current.mentorCut;
  }, 0);
  return amount;
}

async function _updateBookings(bookingIds) {
  try {
    return await Booking.updateMany(
      { _id: { $in: bookingIds } },
      { $set: { payOuts: 1 } },
      { multi: true }
    );
  } catch (error) {
    return error;
  }
}

function _checkType(personaType) {
  const personaTypes = ["MASTERS", "JOB", "ENTREPRENEURSHIP", "K12"];
  return personaTypes.includes(personaType);
}
