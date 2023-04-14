import express from "express";
import {
    createAdmin,
    createFaculty,
    createStudent,
    getMyProfile,
    changePassword,
    addSubject,
    addDepartment,
    addSubjectToDepat,
    getAllAdmins,
    getAllFacultiesDept,
    getAllStudentsDept
    // updateProfile,
    // forgetPassword,
    // resetPassword,
    // changeRole,
  } from "../controllers/adminController.js";

import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// To add a faculty
router.route("/addadmin").post(isAuthenticated, createAdmin);

// To add faculty
router.route("/addfaculty").post(isAuthenticated, createFaculty);

// To add student
router.route("/addstudent").post(isAuthenticated, createStudent);


// Get my profile
router.route("/me/:id").get(isAuthenticated, getMyProfile);

// ChangePassword
router.route("/changepassword").put(isAuthenticated, changePassword);

// add subject
router.route("/addsubject").post(isAuthenticated, addSubject);

// add department
router.route("/addepartment").post(isAuthenticated, addDepartment);

// addsubjectdepartment
router.route("/addsubjectdepartment").post(isAuthenticated, addSubjectToDepat);

// get all admins getAllAdmins
router.route("/getalladmins").get(isAuthenticated, getAllAdmins);

// get all admins faculties by dept.
router.route("/facultybydept").get(isAuthenticated, getAllFacultiesDept);

// get all admins students by dept.
router.route("/studentbydept").get(isAuthenticated, getAllStudentsDept);

// // change Role
// router.route("/admin/:id").put(isAuthenticated, authorizeAdmin, changeRole);

// // UpdateProfile
// router.route("/updateprofile").put(isAuthenticated, updateProfile);

// // ForgetPassword
// router.route("/forgetpassword").post(forgetPassword);  
// // ResetPassword
// router.route("/resetpassword/:token").put(resetPassword);

// router.route("/admin/users").get(getAllUsers);

export default router;
