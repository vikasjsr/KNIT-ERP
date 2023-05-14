import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { Admin } from "../models/Admin.js";
import { Login } from "../models/Login.js";
import { Faculty } from "../models/Faculty.js";
import bcrypt from "bcrypt";
import { Student } from "../models/Student.js";
import { Subject } from "../models/Subject.js";
import {Department} from "../models/Department.js"

// create admin
export const createAdmin = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new ErrorHandler("Please enter all field", 400));

  const existingAdmin = await Admin.findOne({ email });

  if (existingAdmin) return next(new ErrorHandler("User Already Exist", 409));

  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = await Admin.create({
    email,
    hashedPassword,
  });

  await Login.create({
    email,
    hashedPassword,
    role:"admin",
  });

  const token = admin.getJWTToken();

  const options = {
    expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    sameSite: "none",
  };

  res.status(200).cookie("token", token, options).json({
    success: true,
    message: "Admin created successfully",
    admin,
  });
});

//add faculty
export const createFaculty = catchAsyncError(async (req, res, next) => {
  const { email, password, department } = req.body;

  if (!(email && password && department))
    return next(new ErrorHandler("Please enter all field", 400));

  const existingFaculty = await Faculty.findOne({ email });

  if (existingFaculty) return next(new ErrorHandler("Faculty Already Exist", 409));

  const hashedPassword = await bcrypt.hash(password, 10);

  const faculty = await Faculty.create({
    email,
    hashedPassword,
    department,
  });

  await Login.create({
    email,
    hashedPassword,
    role:"faculty",
  });

  const token = faculty.getJWTToken();

  const options = {
    expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    // secure: true,
    sameSite: "none",
  };

  res.status(200).cookie("token", token, options).json({
    success: true,
    message: "Faculty created successfully",
    faculty,
  });
});

//add Student
export const createStudent = catchAsyncError(async (req, res, next) => {
  const { email, password, year, department } = req.body;

  if (!email || !password || !year || !department)
    return next(new ErrorHandler("Please enter all field", 400));

  const existingStudent = await Student.findOne({ email });

  if (existingStudent) return next(new ErrorHandler("Student Already Exist", 409));

  const hashedPassword = await bcrypt.hash(password, 10);

  const student = await Student.create({
    email,
    hashedPassword,
    department,
    year,
  });

  await Login.create({
    email,
    hashedPassword,
    role:"student",
  });

  const token = student.getJWTToken();

  const options = {
    expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    // secure: true,
    sameSite: "none",
  };

  res.status(200).cookie("token", token, options).json({
    success: true,
    message: "Student created successfully",
    student,
  });
});

export const getMyProfile = catchAsyncError(async (req, res, next) => {
  const admin = await Admin.findById(req.params.id);

  res.status(200).json({
    success: true,
    admin,
  });
});

export const changePassword = catchAsyncError(async (req, res, next) => {
  const { oldPassword, newPassword, email } = req.body;

  if (!oldPassword || !newPassword)
    return next(new ErrorHandler("Please enter all field", 400));

  const admin = await Admin.findOne({ email });
  const second = await Login.findOne({ email }).select("+hashedPassword");

  const isMatch = await second.comparePassword(oldPassword);

  if (!isMatch) return next(new ErrorHandler("Incorrect Old Password", 400));

  // before storing password dont forget to save in database
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  admin.hashedPassword = hashedPassword;
  second.hashedPassword = hashedPassword;

  await admin.save();
  await second.save();

  res.status(200).json({
    success: true,
    message: "Password Changed Successfully",
  });
});

// add department
export const addDepartment = catchAsyncError(async (req, res, next) => {
  const { HOD, departmentCode, departmentName } = req.body;

  if (!(HOD && departmentCode && departmentName))
    return next(new ErrorHandler("Please enter all field", 400));

  const existingDepartment = await Department.findOne( {departmentCode} );

  if(existingDepartment) return next(new ErrorHandler("Either Department is present already or check your departmentCode", 400));
  // check either HOD is existing in faculty table or not?
  const _id = HOD;
  const HODpresent = await Faculty.findOne({_id});
   
  if(!HODpresent) return next(new ErrorHandler("HOD is not present in faculty department or invalid HOD", 400));

  const department = await Department.create({
    departmentName,
    departmentCode,
    HOD,
  });

  res.status(200).json({
    success: true,
    department,
    message: "Department added successfully",
  });
});

// addsubject to department 
export const addSubjectToDepat = catchAsyncError(async (req, res, next) => {

  const { departmentCode,SubjectID } = req.body;
  if(!(departmentCode && SubjectID)) return next(new ErrorHandler("All fields required", 400));

  const depat = await Department.findOne({ departmentCode });

  if(!depat) return next(new ErrorHandler("Department is not present", 400));

  const _id = SubjectID;

  const subject = await Subject.findOne({ _id });
  if(!subject) return next(new ErrorHandler("Subject is not present or subjectid is invalid", 400));

  await Department.findByIdAndUpdate(depat._id, {
    $push : {
      subjects : subject
    }},
    {
      safe : true, upsert : true
    },
  );

  res.status(200).json({
    success: true,
    subject,
    message: `Subject added successfully in ${depat.departmentName} department`,
  });
});


// add subject

export const addSubject = catchAsyncError(async (req, res, next) => {

  const { totalLectures, subjectCode, subjectName, semester, department } = req.body;
  const existingSubject = await Subject.findOne({ subjectCode });

  if(existingSubject) return next(new ErrorHandler("Either Subject is present already or check your subjectCode", 400));

  const subject = await Subject.create({
    subjectName,
    subjectCode,
    semester,
    totalLectures,
    department
  });

  res.status(200).json({
    success: true,
    subject,
    message: "Subject added successfully",
  });
});

// getall admins
export const getAllAdmins = catchAsyncError(async (req, res, next) => {
  const admins = await Admin.find({});

  res.status(200).json({
    success: true,
    admins,
  });
});

// get all faculties by dept.
export const getAllFacultiesDept = catchAsyncError(async (req, res, next) => {
  // console.log(req)
  const {department} = req.query;
  if(!department) return next(new ErrorHandler("Please enter the department", 400));

  const faculties = await Faculty.find({department});

  res.status(200).json({
    success: true,
    faculties,
  });
});

// get all students by dept.
export const getAllStudentsDept = catchAsyncError(async (req, res, next) => {

  const {department, year} =  req.query;
  
  if(!department || !year) return next(new ErrorHandler("Please enter the department", 400));
  
  const students = await Student.find({department, year});

  res.status(200).json({
    success: true,
    students,
  });
});


// export const resetPassword = catchAsyncError(async (req, res, next) => {
//   const { token } = req.params;

//   const resetPasswordToken = crypto
//     .createHash("sha256")
//     .update(token)
//     .digest("hex");

//   const user = await User.findOne({
//     resetPasswordToken,
//     resetPasswordExpire: {
//       $gt: Date.now(),
//     },
//   });

//   if (!user)
//     return next(new ErrorHandler("Token is invalid or has been expired", 401));

//   user.password = req.body.password;
//   user.resetPasswordToken = undefined;
//   user.resetPasswordExpire = undefined;

//   await user.save();

//   res.status(200).json({
//     success: true,
//     message: "Password Changed Successfully",
//   });
// });

// export const updateProfile = catchAsyncError(async (req, res, next) => {
//   const { name, email } = req.body;

//   const user = await User.findById(req.user._id);

//   if (name) user.name = name;
//   if (email) user.email = email;

//   await user.save();

//   res.status(200).json({
//     success: true,
//     message: "Profile Updated Successfully",
//   });
// });

// export const forgetPassword = catchAsyncError(async (req, res, next) => {
//   const { email } = req.body;

//   const user = await User.findOne({ email });

//   if (!user) return next(new ErrorHandler("User not found", 400));

//   const resetToken = await user.getResetToken();

//   await user.save();

//   // send token via email

//   const url = `http://localhost:3000/resetpassword/${resetToken}`;

//   const message = `Click on the link to reset your password. ${url}. If you have not request then please ignore.`;

//   // // Send token via email
//   await sendEmail(user.email, "CourseBundler Reset Password", message);

//   res.status(200).json({
//     success: true,
//     message: `Reset Token has been sent to ${user.email}`,
//   });
// });

// export const changeRole = catchAsyncError(async (req, res, next) => {
//   const user = await User.findById(req.params.id);
//   if (!user) return next(new ErrorHandler("User not found", 404));

//   const { newRole } = req.body;

//   user.role = newRole;

//   await user.save();

//   res.status(200).json({
//     success: true,
//     message: "Role Changed Successfully",
//   });
// });

// export const getAllUsers = async (req, res, next) => {
//   res.send("userController is working");
// };
