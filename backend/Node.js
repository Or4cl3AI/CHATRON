// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Conversation = require('./conversationModel');

// Create an instance of Express
const app = express();

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB database
/**
 * Connect to the MongoDB database.
 * 
 * @returns {Promise<void>} A promise that resolves when the connection is successful.
 */
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define routes
/**
 * Handle POST request for the root URL ("/").
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
 */
app.post('/', (req, res) => {
  const { user, messages } = req.body;
  
  const conversation = new Conversation({
    user,
    messages
  });
  
  conversation.save()
    .then(() => res.status(201).send('Conversation saved successfully!'))
    .catch((error) => {
      console.error('Error saving conversation:', error);
      res.status(500).send('Error saving conversation');
    });
});

// Start the server
const port = process.env.PORT || 3000;
/**
 * Start the server and listen on the specified port.
 * 
 * @returns {void}
 */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});