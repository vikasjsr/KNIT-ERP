import mongoose from "mongoose";

const subject = new mongoose.Schema({
  subjectName: {
    type: String,
    required: true,
    trim: true, //If you add { type: String, trim: true } to a field in your schema, then trying to save strings like " hello" , or "hello " , or " hello " , would end up being saved as "hello" in Mongo - i.e. white spaces will be removed from both sides of the string.
  },
  subjectCode: {
    type: String,
    required: true,
  },
  totalLectures: {
    type: Number,
    default: 10,
  },
  semester: {
    type: String,
    required: true,
  },
  attendence: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "attendence",
  },
});

export const Subject = mongoose.model("Subject", subject);
