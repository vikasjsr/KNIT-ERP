import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";


const admin = new mongoose.Schema({
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
    default:"admin"
  },

  avatar: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
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
  createdAt: {
    type: Date,
    default: Date.now,
  },

  resetPasswordToken: String,
  resetPasswordExpire: String,
});

admin.pre("save", async function (next) {
  if (!this.isModified("hashedPassword")) return next(); //during updating profile if we are not modifying the password then no need to hash the password
});

admin.methods.getJWTToken = function () {
  return jwt.sign({ _id: this._id }, "asdfghjkl", {
    expiresIn: "15d",
  });
};

export const Admin = mongoose.model("Admin", admin);
