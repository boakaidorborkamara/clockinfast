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
      values: ["admin", "standard"],
      message: "{VALUE} is not a valid role",
    },
    lowercase: true,
  },

  institution_id: { type: ObjectId, required: true, trim: true },
});

// create model
const User = mongoose.model("User", userSchema);

module.exports = { User };
