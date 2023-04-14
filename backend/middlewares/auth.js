import jwt from "jsonwebtoken";
import ErrorHandler from "../utils/errorHandler.js";
import { catchAsyncError } from "./catchAsyncError.js";
import { Login } from "../models/Login.js";



export const isAuthenticated = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return next(new ErrorHandler("Not Logged In", 401));//unauthorize  401

  const decoded = jwt.verify(token, 'asdfghjkl');
  req.admin = await Login.findById(decoded._id);

  next();
});

// export const authorizeSubscribers = (req, res, next) => {
//   if (req.user.subscription.status !== "active" && req.user.role !== "admin")
//     return next(
//       new ErrorHandler(`Only Subscribers can acces this resource`, 403)
//     );

//   next();
// };

// export const authorizeAdmin = (req, res, next) => {
//   if (req.user.role !== "admin")
//     return next(
//       new ErrorHandler(
//         `${req.user.role} is not allowed to access this resource`,
//         403
//       )
//     );

//   next();
// };
