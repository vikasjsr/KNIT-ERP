import express from "express";
import { login, logout } from "../controllers/authController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// user login check
router.get('/me', isAuthenticated, (req,res)=> {

    res.send({
        success : true,
        message : 
        "User logged in",
        user : req.admin
    })
})

// login user
router.route("/login").post(login);

// logout
router.route("/logout").get(logout);

export default router;
