const express = require("express");    // import express
const morgan = require("morgan");      // import morgan
const adminRouter = require("./routes/staff/adminRouter"); // import admin router

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
app.post("/api/v1/admins/register", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Admin registered successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            error: error.message
        })
    }
    
});

// admin login
app.post("/api/v1/admins/login", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data : "Admin logged in successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
    
});

//admin logout
app.post("/api/v1/admins/logout", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Admin logged out successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
    
});

// get all admins
app.get("/api/v1/admins/", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "All admins fetched successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
    
});

// get single admin
app.get("/api/v1/admins/:id", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Admin fetched successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
    
});

// update admin
app.put("/api/v1/admins/:id", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Admin updated successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
    
});

// delete admin
app.delete("/api/v1/admins/:id", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Admin deleted successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
    
});

// admin suspending a teacher account
app.put("/api/v1/admins/suspend/teacher/:id", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Teacher account suspended successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
    
});

// admin unsuspending a teacher account
app.put("/api/v1/admins/unsuspend/teacher/:id", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Teacher account unsuspended successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
    
});

// admin withdrawing a teacher account
app.put("/api/v1/admins/withdraw/teacher/:id", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Teacher account withdrawn successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
    
});

// admin unwithdrawing a teacher account
app.put("/api/v1/admins/unwithdraw/teacher/:id", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Teacher account unwithdrawn successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
    
});

// admin approving a teacher account
app.put("/api/v1/admins/approve/teacher/:id", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Teacher account approved successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
    
});

// admin rejecting a teacher account
app.put("/api/v1/admins/reject/teacher/:id", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Teacher account rejected successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
    
});

// admin publishing exam results
app.put("/api/v1/admins/publish/exam/:id", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Exam results published successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
    
});

// admin un-publishing exam results
app.put("/api/v1/admins/unpublish/exam/:id", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Exam results unpublished successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
    
});

// admin deleting exam results
app.delete("/api/v1/admins/delete/exam/:id", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Exam results deleted successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
    
});


module.exports = app; // export app
