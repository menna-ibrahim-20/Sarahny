
const users = require("../Models/user");

const userController = {
 
  getAllUsers: (req, res) => {
    res.status(200).json(users);
  },

 
  getUserById: (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  },


  addUser: (req, res) => {
    const newUser = {
      id: users.length + 1, 
      name: req.body.name,
      email: req.body.email
    };

    users.push(newUser);
    res.status(201).json(newUser);
  }
};

module.exports = userController;

