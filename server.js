const http = require("http");
const app = require("./app/app");

// set up server
const PORT = process.env.PORT || 5000; // set port number for our application to listen to

// server 
const server = http.createServer(app);
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));