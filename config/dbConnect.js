const mongoose = require("mongoose");
const dbConnect = async () => {
    try {
        await mongoose.connect("url");
        console.log("DB connected Successfully");
    } catch (error) {
        console.log("DB Connection failed", error.mesage);
    }
}
