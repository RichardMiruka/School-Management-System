const mongoose = require("mongoose"); // import mongoose
const teacherSchema = new mongoose.Schema({ // create a schema, our blueprint for documents in this collection

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
    dateEmployed: {
        type: Date,
        default: Date.now,
    },
    teacherId: {
        type: String,
        required: true,
        default: function () {
            return(
                "TEA" +
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
    // if withdrawn, teacher will not be able to login
    isWithdrawn: {
        type: Boolean,
        default: false
    },
    // if suspended, teacher can login but cannot perform any task in the system
    isSuspended: {
        type: Boolean,
        default: false
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
        required: true
    },
    applicationStatus: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending"
    },
    program: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Program",
        required: true
    },
    // A teacher can teach in more than one class level
    classLevel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ClassLevel",
        required: true
    },
    academicYear: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AcademicYear",
        required: true
    },
    examsCreated: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exam",
        default: []
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
        required: true
    },
    academicTerm: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AcademicTerm",
        required: true,
    }
}, {
    timestamps: true
}
);

// model
const Teacher = mongoose.model("Teacher", teacherSchema);
module.exports = Teacher;
