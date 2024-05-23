require("dotenv").config(); // load environment variables from .env file
const http = require("http");
require("./config/dbConnect"); // connect to database
const app = require("./app/app");

// set up server
const PORT = process.env.PORT || 2020; // set port number for our application to listen to

// server 
const server = http.createServer(app);
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
