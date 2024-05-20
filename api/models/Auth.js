"use strict";

import generator from "generate-password";

import { CustomError } from "../helpers";
import Mentor from "../schemas/Mentor";
import { resetPasswordTemplate } from "../helpers/resetPasswordTemplate";
import _User from "../schemas/_User";
import { sendMail } from "../helpers/sendEmailTemplate";
import Methods from "./../helpers/Methods";

const AuthModel = {
  login,
  forgotPassword,
  updatePassword,
};

export default AuthModel;

async function login(body) {
  try {
    const { email, password } = body;
    const mentor = await Mentor.findOne({ email });
    if (!mentor) {
      throw new CustomError("User does not exist");
    }
    if (!(await Methods.comparePasswords(password, mentor.password))) {
      throw new CustomError("Looks like you have entered wrong password");
    }
    if (mentor.status === "REJECTED" || mentor.status === "PENDING") {
      throw new CustomError(
        `Your profile approval status is ${mentor.status.toLowerCase()}`
      );
    }

    const updatedMentor = mentor.toJSON();
    delete updatedMentor.password;

    return updatedMentor;
  } catch (error) {
    throw new CustomError({ error });
  }
}

async function forgotPassword(body) {
  try {
    const { mentorEmail } = body;
    const mentor = await Mentor.findOne({ email: mentorEmail });
    if (!mentor) {
      throw new CustomError("Mentor not found for given email");
    }
    const subject = "Probuddy Forgot Password";
    const generatedPassword = _generatePassword(8);
    const mailBody = resetPasswordTemplate(mentor.name, generatedPassword);
    const mailSent = await sendMail(
      "probuddy.tech@gmail.com",
      mentor.email,
      subject,
      mailBody
    );
    if (mailSent && mailSent.MessageId) {
      mentor.password = generatedPassword;
      await mentor.save();
      return;
    } else {
      throw new CustomError("Mail Notification Failed");
    }
  } catch (error) {
    console.log(error);
    throw new CustomError(error);
  }
}

async function updatePassword(body) {
  try {
    const { oldPassword, newPassword, mentorId } = body;
    const foundUser = await Mentor.findOne({ _id: mentorId });
    if (foundUser) {
      const matchPwd = await Methods.comparePasswords(
        oldPassword,
        foundUser.password
      );
      if (matchPwd) {
        foundUser.password = newPassword;
        const updatedUser = await foundUser.save();
        return;
      } else {
        throw new CustomError(
          "Looks like you have entered wrong password, please try again!"
        );
      }
    } else {
      throw new CustomError("User not found");
    }
  } catch (error) {
    throw new CustomError(error);
  }
}

function _generatePassword(length) {
  const _generatedPassword = generator.generate({
    length,
    numbers: true,
  });
  return _generatedPassword;
}
