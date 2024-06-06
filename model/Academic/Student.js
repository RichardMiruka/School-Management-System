const mongoose = require("mongoose"); // import mongoose
const { Schema } = mongoose; // import Schema from mongoose

const studentSchema = new mongoose.Schema( // create a schema, our blueprint for documents in this collection
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        studentId: {
            type: String,
            required: true,
            default: function () {
                return (
                    "STU" +
                    Math.floor(Math.random() * 900) +
                    Date.now().toString().slice(2, 4) +
                    this.name
                        .split(" ")
                        .map(name => name[0])
                        .join("")
                        .toUpperCase()
                );
            },
        },
        isWithdrawn: {
            type: Boolean,
            default: false
        },
        role: {
            type: String,
            default: "student"
        },
        // classes are from level 1 to 6
        // keep track of classes that are assigned to the student
        classLevels: [
            {
                type: Schema.Types.ObjectId,
                ref: "ClassLevel",
                default: [], // default value is an empty array
            },
        ],
        currentClassLevel: {
            type: String,
            default: function () {
                return this.classLevels[this.classLevels.length - 1];
            }
        },
        academicYear: {
            type: Schema.Types.ObjectId,
            ref: "AcademicYear",
            required: true,
        },
        dateAdmitted: {
            type: Date,
            default: Date.now
        },
        examResults: [
            {
                type: Schema.Types.ObjectId,
                ref: "ExamResult",
                default: [], // default value is an empty array
            },
        ],

        program: {
            type: Schema.Types.ObjectId,
            ref: "Program",
            required: true
        },
        isPromotedToLevel200: {
            type: Boolean,
            default: false,
        },
        isPromotedToLevel300: {
            type: Boolean,
            default: false,
        },
        isPromotedToLevel400: {
            type: Boolean,
            default: false,
        },
        isGraduated: {
            type: Boolean,
            default: false,
        },
        isWithdrawn: {
            type: Boolean,
            default: false,
        },
        isSuspended: {
            type: Boolean,
            default: false,
        },
        prefectName: {
            type: String
        },
        yearGraduated: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

// model
const Student = mongoose.model("Student", studentSchema);
module.exports = Student; // export the model
