const mongoose = require('mongoose');

const ConversationSchema = new mongoose.Schema({
  user: String,
  messages: Array
});

module.exports = mongoose.model('Conversation', ConversationSchema);
