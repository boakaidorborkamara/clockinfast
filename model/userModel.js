const mongoose = require("mongoose");

// create schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxLength: 50 },

  profile_image: { type: String, trim: true },

  email: { type: String, required: true, trim: true, maxLength: 20 },

  password: { type: String, required: true, trim: true },

  role: {
    type: String,
    enum: {
      values: ["admin", "standard"],
      message: "{VALUE} is not a valid role",
    },
    lowercase: true,
  },

  institution_id: { type: mongoose.Types.ObjectId, required: true, trim: true },
});

// create model
const User = mongoose.model("User", userSchema);

module.exports = { User };
