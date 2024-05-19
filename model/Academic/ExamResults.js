const mongoose = require("mongoose"); // import mongoose

const { Schema } = mongoose;

// exam result schema
const examResultSchema = new Schema(
    {
        student: {
            type: Schema.Types.ObjectId,
            ref: "Student",
            required: true
        },
        exam: {
            type: Schema.Types.ObjectId,
            ref: "Exam",
            required: true,
        },
        score: {
            type: Number,
            required: true,
        },
        grade: {
            type: String,
            required: true,
        },
        passMark: {
            type: Number,
            required: true,
            default : 50,
        },
        // status wether it is passed or failed
        status: {
            type: String,
            required: true,
            enum: ["passed", "failed"],
            default: "failed",           
        },
        //remarks
        remarks: {
            type: String,
            required: true,
            enum: ["excellent", "good", "bad", "very bad"],
            default: "bad",
        },
        position: {
            type: Number,
            required: true,
        },
        subject: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subject",
            required: true
        },
        classLevel: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ClassLevel",
            required: true
        },
        academicTerm: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "AcademicTerm",
            required: true,
        },
        academicYear: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "AcademicYear",
            required: true,
        },
        isPublished: {
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true,
    }
);

// model
const ExamResult = mongoose.model("ExamResult", examResultSchema);
module.exports = ExamResult;
        