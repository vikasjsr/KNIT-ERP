import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";

const faculty = new mongoose.Schema({
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
    type: String,
    default:"faculty"
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
    required: [
      true,
      "Please enter the department to which the user is belonging",
    ],
  },
  joiningYear: {
    type: String,
  },
  gender: {
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

faculty.pre("save", async function (next) {
  if (!this.isModified("hashedPassword")) return next(); //during updating profile if we are not modifying the password then no need to hash the password
});

faculty.methods.getJWTToken = function () {
  return jwt.sign({ _id: this._id }, "asdfghjkl", {
    expiresIn: "15d",
  });
};

export const Faculty = mongoose.model("Faculty", faculty);
