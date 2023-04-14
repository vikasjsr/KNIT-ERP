import mongoose from "mongoose";

const attendence = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subject",
  },

  markAttendence: {
    type: Number,
  },
  lectureAttended: {
    type: Number,
    default: 0,
  },
});

export const Attendence = mongoose.model("Attendence", attendence);
