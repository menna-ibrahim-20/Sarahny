const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");


router.get("/", userController.getAllUsers);


router.get("/:id", userController.getUserById);


router.post("/", express.json(), userController.addUser);

module.exports=router;