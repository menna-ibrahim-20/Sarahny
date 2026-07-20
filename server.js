require('dotenv').config();

const express = require("express");
const app = express();

const connectDB = require("./DB/connection");
connectDB();

const userRoutes = require("./routes/user.route");
const messageRoutes = require("./routes/message.route");

app.use(express.json());
app.use("/users", userRoutes);
app.use("/messages", messageRoutes);

// للتشغيل محلياً فقط
if (process.env.NODE_ENV !== "production") {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}

module.exports = app;