import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { Login } from "../models/Login.js";
import ErrorHandler from "../utils/errorHandler.js";


export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new ErrorHandler("Please enter all field", 400));

  const user = await Login.findOne({ email }).select("+hashedPassword");

  if (!user) return next(new ErrorHandler("Incorrect Email or Password", 401));

  // compare password will work only for { user } not for whole model { User }
  const isMatch = await user.comparePassword(password);

  if (!isMatch)
    return next(new ErrorHandler("Incorrect Email or Password", 401));

  //   sendToken(res, user, "Welcome back", 200);
  const token = user.getJWTToken();
  res
    .status(200)
    .cookie('token', token, { httpOnly: true })
    // .cookie("token", token, options)
    .json({
      success: true,
      user,
      message: `${user.role} logged in successfully`,
    });
});

export const logout = catchAsyncError(async (req, res, next) => {
  res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .json({
      success: true,
      message: "Logged Out Successfully",
    });
});
