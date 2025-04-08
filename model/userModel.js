const mongoose = require("mongoose");

// create schema
const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true, trim: true, maxLength: 15 },

  middle_name: { type: String, trim: true },

  last_name: { type: String, required: true, trim: true, maxLength: 15 },

  profile_image: { type: String, required: true, trim: true },

  gender: {
    type: String,
    required: true,
    enum: {
      values: ["male", "female"],
      message: "{VALUE} is not a valid gender",
    },
    lowercase: true,
    trim: true,
  },

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

// add method on schema that the full name of the user
userSchema.methods.getFullName = function getFullName() {
  const full_name = `${this.first_name} ${this.last_name}`;
  return full_name;
};

// create model
const User = mongoose.model("User", userSchema);

module.exports = { User };
