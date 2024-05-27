const mongoose = require("mongoose"); // import mongoose
const { Schema } = mongoose;

const AcademicTermSchema = new Schema(
    {
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
            default: "4 months"
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Admin",
            required: true
        }
    },
    {
        timestamps: true
    }
);

const AcademicTerm = mongoose.model("AcademicTerm", AcademicTermSchema);

module.exports = AcademicTerm;
