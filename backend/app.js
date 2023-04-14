import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import ErrorMiddleware from "./middlewares/Error.js";

const app = express();

// Parse JSON request body
// Using Middlewares
// if we cannot use this middleware then all the fields will return the undefined value;
// if these middlewares are not used then "Cannot destructure property 'title' of 'req.body' as it is undefined."
const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));app.use(express.json());
app.use(
    express.urlencoded({
      extended: true,
    })
  );

app.use(cookieParser());

// Importing & Using Routes
//necessary to specify something.js
import admin from "./routes/adminRoutes.js"
import auth from "./routes/authRoutes.js"
import faculty from "./routes/facultyRoutes.js"
app.use("/api/v1", admin);
app.use("/api/v1", auth);
app.use("/api/v1", faculty);

export default app;

// jab jab next call hoga aur koi middleware bacha nhi hoga tb ye middleware last me call hoga
app.use(ErrorMiddleware);