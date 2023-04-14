import { Faculty } from "../models/Faculty.js";
import { Login } from "../models/Login.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import bcrypt from 'bcrypt';

// change password
export const changePasswordFaculty = catchAsyncError(async (req, res, next) => {
    const { oldPassword, newPassword, email } = req.body;
  
    if (!oldPassword || !newPassword)
      return next(new ErrorHandler("Please enter all field", 400));
  
    const faculty = await Faculty.findOne({ email });
    const second = await Login.findOne({ email }).select("+hashedPassword");
  
    const isMatch = await second.comparePassword(oldPassword);
  
    if (!isMatch) return next(new ErrorHandler("Incorrect Old Password", 400));
  
    // before storing password dont forget to save in database
    const hashedPassword = await bcrypt.hash(newPassword, 10);
  
    faculty.hashedPassword = hashedPassword;
    second.hashedPassword = hashedPassword;
  
    await faculty.save();
    await second.save();
  
    res.status(200).json({
      success: true,
      message: "Password Changed Successfully",
    });
  });
  

export const markAttendence = catchAsyncError(async(req, res, next) => {
  const { selectedStudents, subjectName, department, year, section } =
  req.body;

const sub = await Subject.findOne({ subjectCode });

const allStudents = await Student.find({ department, year, section });

for (let i = 0; i < allStudents.length; i++) {
  const pre = await Attendence.findOne({
    student: allStudents[i]._id,
    subject: sub._id,
  });
  
  if (!pre) {
    const attendence = new Attendence({
      student: allStudents[i]._id,
      subject: sub._id,
    });
    attendence.totalLecturesByFaculty += 1;
    await attendence.save();
  } else {
    pre.totalLecturesByFaculty += 1;
    await pre.save();
  }
}

for (var a = 0; a < selectedStudents.length; a++) {
  const pre = await Attendence.findOne({
    student: selectedStudents[a],
    subject: sub._id,
  });
  if (!pre) {
    const attendence = new Attendence({
      student: selectedStudents[a],
      subject: sub._id,
    });

    attendence.lectureAttended += 1;
    await attendence.save();
  } else {
    pre.lectureAttended += 1;
    await pre.save();
  }
}
res.status(200).json({ message: "Attendance Marked successfully" });
})  
  

export const getAllUsers = async (req, res, next) => {
  res.send("userController is working");
};
