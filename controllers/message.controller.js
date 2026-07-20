const Message = require("../Models/message");

const messageController = {
  getMessagesForUser: async (req, res) => {
    try {
      const userId = req.params.userId;
      const userMessages = await Message.find({ recevierId: userId });

      if (userMessages.length > 0) {
        res.json(userMessages);
      } else {
        res.status(404).json({ message: "No messages found for this user" });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  addMessage: async (req, res) => {
    try {
      const newMessage = await Message.create({
        recevierId: req.body.userId,
        senderId: req.body.senderId || null,
        content: req.body.text,
        isAnonymous: req.body.anonymous ?? true
      });
      res.status(201).json(newMessage);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

module.exports = messageController;