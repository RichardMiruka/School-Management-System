const mongoose = require("mongoose"); // import mongoose

const { Schema } = mongoose;

const classLevelSchema = new Schema(
    {
        //level 1st, 2nd, 3rd,4th
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Admin",
            required: true
        },
        // we will push the students that are assigned to the class level here
        students: [
            {
                type: Schema.Types.ObjectId,
                ref: "Student",
                default: [], // default value is an empty array
            },
        ],
        // subjects
        subjects: [
            {
                type: Schema.Types.ObjectId,
                ref: "Subject",
                default: [], // default value is an empty array
            },
        ],
        teachers: [
            {
                type: Schema.Types.ObjectId,
                ref: "Teacher",
                default: [], // default value is an empty array
            },
        ],
    },

    {
        timestamps: true
    }
);

// model
const ClassLevel = mongoose.model("ClassLevel", classLevelSchema);
module.exports = ClassLevel;
