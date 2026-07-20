const messages = require("../Models/message");

const messageController = {
 
  getMessagesForUser: (req, res) => {
    const userId = parseInt(req.params.userId);
    const userMessages = messages.filter(msg => msg.userId === userId);

    if (userMessages.length > 0) {
      res.json(userMessages);
    } else {
      res.status(404).json({ message: "No messages found for this user" });
    }
  },

 
  addMessage: (req, res) => {
    const newMessage = {
      id: messages.length + 1,
      userId: parseInt(req.body.userId), 
      text: req.body.text,
      anonymous: req.body.anonymous ?? true 
    };

    messages.push(newMessage);
    res.status(201).json(newMessage);
  }
};

module.exports = messageController;