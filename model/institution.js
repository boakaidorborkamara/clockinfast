const mongoose = require("mongoose");

// create schema
const institutionSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxLength: 20 },

  email: { type: String, required: true, trim: true, maxLength: 20 },

  password: { type: String, required: true, trim: true },

  logo: { type: String, required: true, trim: true },
});

// create model
const Institution = mongoose.model("Institution", institutionSchema);

module.exports = { Institution };
