

const express = require("express");
const router = express.Router();
const messageController = require("../controllers/message.controller");

router.get("/:userId", messageController.getMessagesForUser);
router.post("/", express.json(), messageController.addMessage);

module.exports = router;
