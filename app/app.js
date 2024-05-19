const express = require("express");    // import express
const mongoose = require("mongoose");  // import mongoose
const morgan = require("morgan");      // import morgan

// call express and assign it to a variable called app
const app = express(); // create express app

module.exports = app; // export app
