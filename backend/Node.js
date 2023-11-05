// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Create an instance of Express
const expressApp = express();

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB database
/**
 * Connect to the MongoDB database.
 *
 * @returns {Promise<void>} A promise that resolves when the connection is successful.
 */
mongoose
  .connect("mongodb://localhost/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Define routes
/**
 * Handle GET request for the root URL ("/").
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
 */
expressApp.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Start the server
const serverPort = process.env.PORT || 3000;
/**
 * Start the server and listen on the specified port.
 *
 * @returns {void}
 */
expressApp.listen(serverPort, () => {
  console.log(`Server is running on port ${serverPort}`);
});
