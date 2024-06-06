// Define Admin user schema with name, email, hashed password (using bcrypt), 
// role (default: admin), and references to related models 
// (AcademicTerm, Program, YearGroup, AcademicYear, ClassLevel, Teacher, Student).
const bcrypt = require("bcryptjs");

const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: "admin",
        },
        academicTerms: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "AcademicTerm",
            },
        ],
        programs: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Program",
            },
        ],
        yearGroups: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "YearGroup",
            },
        ],
        academicYears: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "AcademicYear",
            },
        ],
        classLevels: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ClassLevel",
            },
        ],
        teachers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Teacher",
            },
        ],
        students: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Student",
            },
        ],
    },
    {
        timestamps: true,
    }
);

//model
const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
