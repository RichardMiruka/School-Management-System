const express = require("express");    // import express
const morgan = require("morgan");      // import morgan
const adminRouter = require("../routes/staff/adminRouter"); // import admin router

// call express and assign it to a variable called app
const app = express(); // create express app

// set up middleware
app.use(morgan("dev")); // log requests to the console
app.use(express.json()); // parse incoming requests with JSON payloads

// set up routes
// define a route handler for the root path
app.get("/", (req, res) => {
    res.send("Welcome to the School Management System API");
});

// admin registration
app.use("/api/v1/admins/register", adminRouter);

module.exports = app; // export app module  