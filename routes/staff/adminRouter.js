const express = require("express");

const adminRouter = express.Router();

// admin registration
adminRouter.post("/register", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Admin has been registered successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
});

// admin login
adminRouter.post("/login", (req, res) => {
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
});

// get all admins
adminRouter.get("/", (req, res) => {
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
adminRouter.get("/:id", (req, res) => {
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
adminRouter.put("/:id", (req, res) => {
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
adminRouter.delete("/:id", (req, res) => {
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
adminRouter.put("/suspend/teacher/:id", (req, res) => {
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
adminRouter.put("/unsuspend/teacher/:id", (req, res) => {
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
adminRouter.put("/withdraw/teacher/:id", (req, res) => {
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
adminRouter.put("/unwithdraw/teacher/:id", (req, res) => {
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

// admin publishing exam results
adminRouter.put("/publish/exam/:id", (req, res) => {
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

// admin unpublishing exam results
adminRouter.put("/unpublish/exam/:id", (req, res) => {
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
adminRouter.delete("/delete/exam/:id", (req, res) => {
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

module.exports = adminRouter;