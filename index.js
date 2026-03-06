require("dotenv").config();

const connectDB = require("./src/config/db");
const app = require("./src/app");

// connect database
connectDB();

// DO NOT use app.listen() on Vercel

module.exports = app;