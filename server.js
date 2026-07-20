require('dotenv').config();

const express = require("express");
const app = express();

const connectDB = require("./DB/connection");

const userRoutes = require("./routes/user.route");
const messageRoutes = require("./routes/message.route");

app.use(express.json());

// ننتظر الاتصال بالداتابيز قبل معالجة أي طلب
app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (err) {
        res.status(500).json({ error: "Database connection failed" });
    }
});

app.use("/users", userRoutes);
app.use("/messages", messageRoutes);

// للتشغيل محلياً فقط
if (process.env.NODE_ENV !== "production") {
    connectDB().then(() => {
        app.listen(3000, () => {
            console.log("Server running on port 3000");
        });
    });
}

module.exports = app;