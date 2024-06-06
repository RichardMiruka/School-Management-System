const mongoose = require("mongoose"); // import mongoose
const adminSchema = new mongoose.Schema({ // create a schema, our blueprint for documents in this collection

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
    role: {
        type: String,
        default: "admin"
    },

}, {
    timestamps: true
}
);

// model
const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;

