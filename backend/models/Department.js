import mongoose from "mongoose";

const department = new mongoose.Schema({
  departmentName: {
    type: String,
    required: true,
  },
  departmentCode: {
    type: String,
    required: true,
    unique: true,
  },
  HOD: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Faculty",
  },
  subjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
    },
  ],
});

export const Department = mongoose.model("Department", department);
