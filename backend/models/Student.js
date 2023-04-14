import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";

const student = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    validate: validator.isEmail,
  },

  hashedPassword: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [6, "Password must be at least 6 characters"],
    select: false, //if we select the user password would not be shown
  },
  role: {
    type: String
  },

  avatar: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  department: {
    type: String,
    required: [true,"Please enter the department to which the user is belonging"]
  },
  dob: {
    type: String,
  },
  joiningYear: {
    type: String,
  },
  year: {
    type: Number,
  },
  gender: {
    type: String,
  },
  batch: {
    type: String,
  },
  contactNumber: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  resetPasswordToken: String,
  resetPasswordExpire: String,
});

student.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); //during updating profile if we are not modifying the password then no need to hash the password
});

student.methods.getJWTToken = function () {
  return jwt.sign({ _id: this._id }, "asdfghjkl", {
    expiresIn: "15d",
  });
};

export const Student = mongoose.model("Student", student);
