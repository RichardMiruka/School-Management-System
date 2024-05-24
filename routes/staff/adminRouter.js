const express = require("express");

const adminRouter = express.Router();

adminRouter.post("/register", (req, res) => {
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
});

module.exports = adminRouter;