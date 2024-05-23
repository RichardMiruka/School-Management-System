const express = require("express");    // import express
const mongoose = require("mongoose");  // import mongoose
const morgan = require("morgan");      // import morgan

// call express and assign it to a variable called app
const app = express(); // create express app

// set up middleware
app.use(morgan("dev")); // log requests to the console
// app.use(express.json()); // parse incoming requests with JSON payloads

// set up routes

// admin register
app.post("/api/v1/admins/register", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Admin registered successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
    
})

// admin login
app.post("/api/v1/admins/login", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Admin logged in successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
    
})

// get all admins
app.post("/api/v1/admins/:id", (req, res) => {
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
    
})

// get single admin
app.get("/api/v1/admin/:id", (req, res) => {
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
    
})
// update admin
app.put("/api/v1/admin/:id", (req, res) => {
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
    
})

// delete admin
app.delete("/api/v1/admin/:id", (req, res) => {
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
    
})

//admin logout
app.post("/api/v1/admin/logout", (req, res) => {
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
    
})

// admin suspending a teacher account
app.put("/api/v1/admin/suspend/teacher/:id", (req, res) => {
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
    
})

// admin unsuspending a teacher account
app.put("/api/v1/admin/unsuspend/teacher/:id", (req, res) => {
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
    
})

// admin withdrawing a teacher account
app.put("/api/v1/admin/withdraw/teacher/:id", (req, res) => {
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
    
})

// admin approving a teacher account
app.put("/api/v1/admin/approve/teacher/:id", (req, res) => {
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
    
})

// admin rejecting a teacher account
app.put("/api/v1/admin/reject/teacher/:id", (req, res) => {
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
    
})
// admin publishing exam results
app.put("/api/v1/admin/publish/exam/:id", (req, res) => {
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
    
})

// admin un-publishing exam results
app.put("/api/v1/admin/unpublish/exam/:id", (req, res) => {
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
    
})

// admin deleting exam results
app.delete("/api/v1/admin/delete/exam/:id", (req, res) => {
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
    
})

module.exports = app; // export app
