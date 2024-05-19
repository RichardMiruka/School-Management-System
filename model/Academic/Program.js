const mongoose = require("mongoose"); // import mongoose

const { Schema } = mongoose;
const ProgramSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        default: "4 years"
    },
    // created automatically by the system / generated randomly
    // CSFTY
    code: {
        type: String,
        default: function () {
            return(
                this.name
                .spilt(" ")
                .map(name => name[0])
                .join("")
                .toUpperCase() +
                Math.floor(Math.random() * 90) +
                Math.floor(Math.random() * 90)
            );
        },
        unique: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "Admin",
        required: true
    },
    // we will push the teachers that are assigned to the program here
    teachers: [
        {
            type: Schema.Types.ObjectId,
            ref: "Teacher",
            default: [], // default value is an empty array
        },
    ],
    students: [
        {
            type: Schema.Types.ObjectId,
            ref: "Student",
            default: [],
        },
    ],
    //we will push the courses that are assigned to the program here when the program is created
    subjects: [
        {
            type: Schema.Types.ObjectId,
            ref: "Subject",
            default: [],
        },
    ],
}, {
    timestamps: true
}
);

// model
const Program = mongoose.model("Program", ProgramSchema); // convert schema into model i.e compile our schema to a model
module.exports = Program;