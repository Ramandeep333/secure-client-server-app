require("dotenv").config({ path: "./.env" }); // 1️. Load env first

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// 2️. Routes
app.get("/", (req, res) => {
    res.send("Server running");
});

// 3️. Connect DB first, then start server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("DB connected");

        app.listen(5000, () => {
            console.log("Server started on port 5000");
        });
    })
    .catch(err => console.log(err));

console.log("ENV:", process.env.MONGO_URI);