const mongoose = require("mongoose"); // import mongoose

// create a schema, our blueprint for documents in this collection
const academicYearSchema = new mongoose.Schema(

    {
        name: {
            type: String,
            required: true
        },
        fromYear: {
            type: Date,
            required: true
        },
        toYear: {
            type: Date,
            required: true
        },
        isCurrent: {
            type: Boolean,
            default: false
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Admin",
            required: true
        },
        students: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Student",
                default: [],
            },
        ],
        teachers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Teacher",
                default: [],
            },
        ],

    },
    {
        timestamps: true
    }
);

// model
const AcademicYear = mongoose.model("AcademicYear", academicYearSchema);
module.exports = AcademicYear;