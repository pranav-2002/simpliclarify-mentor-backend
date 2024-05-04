import mongoose from "mongoose";

const rejectMentorSchema = mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  languages: [{ type: String }],
  countryCode: { type: String, required: true },
  contactNumber: { type: String, required: true },
  linkedInUrl: { type: String },
  educationInformation: [{
    universityName: { type: String },
    universityLogo: { type: String },
    country: { type: String },
    degreeType: { type: String },
    city: { type: String },
    courseSpecialization: { type: String },
    startYear: { type: String },
    endYear: { type: String },
    studentType: { type: String },
    course: { type: String }
  }],
  meetLink: { type: String },
  workExperience: [{
    companyName: { type: String },
    companyLogo: { type: String },
    designation: { type: String },
    startYear: { type: String },
    startMonth: { type: String },
    endYear: { type: String, default: 'Current' },
    endMonth: { type: String, default: 'Current' },
    city: { type: String },
    country: { type: String },
    workExperienceType: { type: String }
  }],
  masters: {
    offerings: { type: [String], default: undefined },
    suggestedHourlyPrice: { type: String },
    rank: { type: Number },
    requested: { type: Boolean },
    accepted: { type: Boolean },
    introduction: { type: String },
    ranking: { type: Number },
    mentorPrice: { type: String },
    mentorCut: { type: String }
  },
  job: {
    offerings: { type: [String], default: undefined },
    modeOfPlacement: { type: String },
    suggestedHourlyPrice: { type: String },
    gitHubLink: { type: String },
    requested: { type: Boolean },
    accepted: { type: Boolean },
    introduction: { type: String },
    ranking: { type: Number },
    mentorPrice: { type: String },
    mentorCut: { type: String }
  },
  entrepreneurship: {
    offerings: { type: [String], default: undefined },
    entrepreneurType: { type: String },
    link: { type: String },
    requested: { type: Boolean },
    accepted: { type: Boolean },
    introduction: { type: String },
    suggestedHourlyPrice: { type: String },
    ranking: { type: Number },
    mentorPrice: { type: String },
    mentorCut: { type: String }
  },
  status: {
    type: String,
    enum: ['REJECTED', 'SCHEDULE', 'ACCEPTED', 'PENDING'],
    default: 'PENDING'
  },
  suggestions: {
    type: String
  },
  personas: {
    type: [String],
    enum: ['MASTERS', 'JOB', 'ENTREPRENEURSHIP']
  }
})

const RejectMentor = new mongoose.model("RejectMentor", rejectMentorSchema);

export default RejectMentor
