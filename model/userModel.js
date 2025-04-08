const mongoose = require("mongoose");

// create schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxLength: 15 },

  profile_image: { type: String, required: true, trim: true },

  email: { type: String, required: true, trim: true, maxLength: 20 },

  password: { type: String, required: true, trim: true },

  role: {
    type: String,
    enum: {
      values: ["Coffee", "Tea"],
      message: "{VALUE} is not a valid role",
    },
  },

  code: { type: String, required: true, trim: true },
});

// create model
const User = mongoose.model("User", userSchema);

module.exports = { User };
