import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = new mongoose.Schema({
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
  role:{
    type: String,
  } 
});

login.methods.getJWTToken = function () {
  return jwt.sign({ _id: this._id }, "asdfghjkl", {
    expiresIn: "15d",
  });
};

login.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.hashedPassword);
};

login.methods.getResetToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000; //15 minute

  return resetToken;
};

export const Login = mongoose.model("Login", login);
