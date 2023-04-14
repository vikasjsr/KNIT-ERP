import express from 'express';

import { getAllUsers, changePasswordFaculty } from "../controllers/facultyControllers.js"
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// check 
router.route("/getallusers").get(getAllUsers);

// change password of faculty
router.route("/faculty/changepassword").put(isAuthenticated, changePasswordFaculty);

// upload marks 


export default router;