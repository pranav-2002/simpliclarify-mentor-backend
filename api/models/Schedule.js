"use strict";

import { CustomError, expressUtils } from "../helpers";
import MentorScheduleSchema from "../schemas/MentorScheduleSchema";
import MentorSchedule from "../schemas/MentorSchedule";
import Mentor from "../schemas/Mentor";
import nodeSchedule from "node-schedule";

const ScheduleModel = {
  setSchemaForMentors,
  getSchedule,
  updateScheduleForMentor,
  updateSchemaForMentor,
  getSchemaForMentor,
};

export default ScheduleModel;

function formatDateToString(date) {
  return (
    (date.getDate() < 10 ? "0" : "") +
    date.getDate() +
    "-" +
    (date.getMonth() < 9 ? "0" : "") +
    (date.getMonth() + 1) +
    "-" +
    date.getFullYear()
  );
}

async function checkIfMentorSchemaAlreadyExists(mentorId) {
  const result = await MentorScheduleSchema.findOne({ mentorId });
  return result;
}

async function setSchemaForMentors(body) {
  const { mentorId, data } = body;

  const mentor = await Mentor.findOne({ _id: mentorId });
  if (!mentor) {
    throw new CustomError({ message: "Mentor does not exist" });
  }

  const sentSchedules = data;
  const schedules = [];
  schedules.push(sentSchedules.Sunday);
  schedules.push(sentSchedules.Monday);
  schedules.push(sentSchedules.Tuesday);
  schedules.push(sentSchedules.Wednesday);
  schedules.push(sentSchedules.Thursday);
  schedules.push(sentSchedules.Friday);
  schedules.push(sentSchedules.Saturday);
  const existingMentorSchema = await checkIfMentorSchemaAlreadyExists(mentorId);
  if (existingMentorSchema !== null) {
    existingMentorSchema.schedules = schedules;
    existingMentorSchema.markModified("schedules");

    await existingMentorSchema.save();
    return "Successfully updated the schema for the mentor";
  }

  // Create the schedule schema
  const mentorScheduleSchemaObj = new MentorScheduleSchema({
    mentorId,
    schedules,
  });
  await mentorScheduleSchemaObj.save();
  await createScheduleForMentor(mentorId);
  mentor.status = "ACCEPTED";
  await mentor.save();

  return "Successfully set the schema for the mentors";
}

async function createScheduleForMentor(mentorId) {
  const mentorScheduleSchema = await MentorScheduleSchema.findOne({ mentorId });
  if (!mentorScheduleSchema) {
    throw new CustomError({
      message: "Mentor ScheduleSchema not found",
    });
  }
  const currentDate = new Date();
  const finalScheduleObj = {};
  let count = 14;
  while (count-- > 0) {
    const dayToAdd = currentDate.getDay();
    const scheduleArrayToAdd = mentorScheduleSchema.schedules[dayToAdd];
    const formattedDateToAdd = formatDateToString(currentDate);

    finalScheduleObj[formattedDateToAdd] = scheduleArrayToAdd;
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const mentorScheduleObj = new MentorSchedule({
    mentorId,
    schedules: finalScheduleObj,
  });

  await mentorScheduleObj.save();
  return "Created the schedule for the mentor";
}

async function updateDates() {
  try {
    console.log(
      "MENTOR SCHEDULES UPDATING THROUGH CRON JOB / ON SERVER STARTUP"
    );
    const mentorSchedules = await MentorSchedule.find();
    const dateToAdd = new Date();
    const DAYS_TO_ADD = 13;
    dateToAdd.setDate(dateToAdd.getDate() + DAYS_TO_ADD);
    const dayToAdd = dateToAdd.getDay();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    for (let i = 0; i < mentorSchedules.length; i++) {
      const eachMentorSchedule = mentorSchedules[i];
      const mentorId = eachMentorSchedule.mentorId;

      // Get the mentor schedule schema to lookup the day
      const mentorScheduleSchema = await MentorScheduleSchema.findOne({
        mentorId,
      });
      if (!mentorScheduleSchema) {
        console.log("Mentor ScheduleSchema not found for ", mentorId);
        continue;
      }

      const scheduleToAdd = mentorScheduleSchema.schedules[dayToAdd];
      const formattedDateToAdd = formatDateToString(dateToAdd);
      eachMentorSchedule.schedules[formattedDateToAdd] = scheduleToAdd;

      const formatteedDateToRemove = formatDateToString(yesterday);
      delete eachMentorSchedule.schedules[formatteedDateToRemove];

      eachMentorSchedule.markModified("schedules");
      await eachMentorSchedule.save();
    }
  } catch (e) {
    console.log(e);
  }
}

function scheduleJob() {
  // updateDates()
  // nodeSchedule.scheduleJob('RECURRING JOB FOR ADDING MENTOR SCHEDULE', '0 0 * * *', updateDates)
}

scheduleJob();

async function getSchedule(body) {
  const { mentorId } = body;
  const schedule = await MentorSchedule.findOne({ mentorId }).lean();
  if (!schedule) {
    throw new CustomError({ message: "Cannot find schedule for mentor" });
  }
  let result = schedule.schedules;

  return result;
}

async function updateSchemaForMentor(body) {
  let { mentorId, day, schedule } = body;

  const mentor = await Mentor.findOne({ _id: mentorId });
  if (!mentor) {
    throw new Error("Mentor does not exist");
  }

  const mentorScheduleSchema = await MentorScheduleSchema.findOne({ mentorId });
  if (!mentorScheduleSchema) {
    throw new Error("Mentor schema does not exist");
  }

  const dayToIndex = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const indexToUpdate = dayToIndex.findIndex(
    (el) => el.toLowerCase() == day.toLowerCase()
  );
  mentorScheduleSchema.schedules[indexToUpdate] = schedule;

  mentorScheduleSchema.markModified("schedules");
  await mentorScheduleSchema.save();

  return "Updated schema for mentor";
}

async function updateScheduleForMentor(body) {
  const { mentorId, date, schedule } = body;

  const mentor = await Mentor.findOne({ _id: mentorId });
  if (!mentor) {
    throw new Error("Mentor does not exist");
  }

  const mentorSchedule = await MentorSchedule.findOne({ mentorId });
  if (!mentorSchedule) {
    throw new Error("Mentor schedule does not exist");
  }

  if (date in mentorSchedule.schedules === false) {
    throw new Error("Invalid date passed");
  }

  mentorSchedule.schedules[date] = schedule;

  mentorSchedule.markModified("schedules");
  await mentorSchedule.save();

  return "Update schedule for mentor";
}

async function getSchemaForMentor(body) {
  const { mentorId } = body;
  const schema = await MentorScheduleSchema.findOne({ mentorId }).lean();
  if (!schema) {
    throw new CustomError({ message: "Cannot find schema for mentor" });
  }
  let result = {};
  result["Sunday"] = schema.schedules[0];
  result["Monday"] = schema.schedules[1];
  result["Tuesday"] = schema.schedules[2];
  result["Wednesday"] = schema.schedules[3];
  result["Thursday"] = schema.schedules[4];
  result["Friday"] = schema.schedules[5];
  result["Saturday"] = schema.schedules[6];
  return result;
}
