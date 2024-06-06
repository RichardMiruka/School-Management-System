require("dotenv").config(); // load environment variables from .env file
const http = require("http"); // import http module
require("./config/dbConnect"); // connect to database
const app = require("./app/app"); // import express application

// set up server
const PORT = process.env.PORT || 3000; // set port number for our application to listen to

// server 
const server = http.createServer(app); // create http server using express app
server.listen(PORT, () => console.log(`Server started on port ${PORT}`)); // start server and listen for incoming requests
