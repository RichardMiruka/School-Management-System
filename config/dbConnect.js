const mongoose = require("mongoose");
const dbConnect = async () => {
    try {
        console.log(process.env);
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connected Successfully");
    } catch (error) {
        console.log("DB Connection failed", error.mesage);
    }
}

dbConnect(); // connect to database
