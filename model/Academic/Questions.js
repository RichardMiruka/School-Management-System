const moongose = require("mongoose"); // import mongoose
const { Schema } = moongose;

//questionsSchema
const questionSchema = new Schema(
    {
        question: {
            type: String,
            required: true
        },
        optionA: {
            type: String,
            required: true
        },
        optionB: {
            type: String,
            required: true
        },
        optionC: {
            type: String,
            required: true
        },
        optionD: {
            type: String,
            required: true
        },
        correctAnswer: {
            type: String,
            required: true
        },
        isCorrect: {
            type: Boolean,
            default: false
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "Teacher",
            required: true,
    },
    },
    {
        timestamps: true
    }
);
// model
const Question = moongose.model("Question", questionSchema);
module.exports = Question; // export the model
