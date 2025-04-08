const mongoose = require("mongoose");

// create schema
const userSchema = new mongoose.Schema({
  first_name: String,
  middle_name: String,
  last_name: String,
  profile_image: String,
  gender: String,
  email: String,
  password: String,
  role: String,
  code: String,
});

// add method on schema that the full name of the user
userSchema.methods.getFullName = function getFullName() {
  const full_name = `${this.first_name} ${this.last_name}`;
  return full_name;
};

// create model
const User = mongoose.model("User", userSchema);

module.exports = { User };
