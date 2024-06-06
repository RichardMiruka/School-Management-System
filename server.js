require("dotenv").config(); // load environment variables from .env file
const http = require("http"); // import http module
require("./config/dbConnect"); // connect to database
const app = require("./app/app"); // import express application

// create http server using express application
const PORT = process.env.PORT || 3000; // set port number for our application to listen to

// set up http server 
const server = http.createServer(app); // c
server.listen(PORT, () => console.log(`Server started on port ${PORT}`)); // start server and listen for incoming requests
