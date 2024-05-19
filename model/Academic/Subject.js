const mongoose = require("mongoose"); // import mongoose

const { Schema } = mongoose;
const SubjectSchema = new Schema(

    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        teacher: {
            type: Schema.Types.ObjectId,
            ref: "Teacher",
            required: true
        },
        academicTerm: {
            type: Schema.Types.ObjectId,
            ref: "AcademicTerm",
            required: true
        },
        
        // created automatically by the system / generated randomly
        // CSFTY
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "Admin",
            required: true
        },
        duration: {
            type: String,
            required: "4 months",
        },
    },
        {timestamps: true}

);
// model
const Subject = mongoose.model("Subject", SubjectSchema);
module.exports = Subject;