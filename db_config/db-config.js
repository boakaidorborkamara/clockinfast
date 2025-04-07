require("dotenv").config();

// getting-started.js
const mongoose = require("mongoose");

// connect to mongodb database
async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);

    console.log("Database connected successfully!");
  } catch (err) {
    console.log(err);
  }
}

module.exports = { connectDB };
