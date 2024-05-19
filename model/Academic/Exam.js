const mongoose = require("mongoose"); // import mongoose
const { RiMiniProgramFill } = require("react-icons/ri");

const { Schema } = mongoose;
const examSchema = new Schema(

    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        subject: {
            type: Schema.Types.ObjectId,
            ref: "Subject",
            required: true,
        },
       program: {
            type: Schema.Types.ObjectId,
            ref: "Program",
            required: true
        },
        passMark: {
            type: Number,
            required: true,
            default: 50
        },
        totalMark: {
            type: Number,
            required: true,
            default: 100
        },
        academicTerm: {
            type: Schema.Types.ObjectId,
            ref: "AcademicTerm",
            required: true
        },
        duration: {
            type: String,
            default: "2 hours"
        },
        examDate: {
            type: Date,
            required: true,
            default: Date.now
        },
        examTime: {
            type: String,
            required: true,
            default: "08:00 AM"
        },
        examtype: {
            type: String,
            required: true,
            default: "Quiz",
        },
        examStatus: {
            type: String,
            required: true,
            enum: ["pending", "approved", "rejected"],
            default: "pending"
        },
        questions: [
            {
                type: Schema.Types.ObjectId,
                ref: "Question",
            },
        ],
        classLevel: {
            type: Schema.Types.ObjectId,
            ref: "ClassLevel",
            required: true,
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "Teacher",
            required: true
        },
        academicTerm: {
            type: Schema.Types.ObjectId,
            ref: "AcademicTerm",
            required: true
        },

    },
    {
        timestamps: true
    }
);
// model
const Exam = mongoose.model("Exam", examSchema);
module.exports = Exam; // export the model
