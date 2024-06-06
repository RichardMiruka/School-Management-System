const express = require("express"); // import express

const {
    globalErrorHandler,
    notFoundHandler,
} = require("../middlewares/globalErrHandler");

const adminRouter = require("../routes/staff/adminRouter");

const app = express();


//Middlewares
app.use(express.json()); //pass incoming json data

//Routes
app.use("/api/v1/admins", adminRouter);

//Error middlewares
app.use(notFoundErr);
app.use(globalErrHandler);

module.exports = app;
