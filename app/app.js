const express = require("express");
const {
    globalErrHandler,
    notFoundErr,
} = require("../middlewares/globalErrHandler");
const academicTermRouter = require("../routes/academics/academicTerm");
const academicYearRouter = require("../routes/academics/academicYear");

const adminRouter = require("../routes/staff/adminRouter");

const app = express();

//Middlewares
app.use(express.json()); //pass incoming json data

//Routes
app.use("/api/v1/admins", adminRouter);
app.use("/api/v1/academic-years", academicYearRouter);
app.use("/api/v1/academic-terms", academicTermRouter);

//Error middlewares
app.use(notFoundErr);
app.use(globalErrHandler);

module.exports = app;
