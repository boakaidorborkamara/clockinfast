const mongoose = require("mongoose");

// create schema
const institutionSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxLength: 20 },
  logo: { type: String, required: true, trim: true },
  geolocation: { type: String, required: true, trim: true },
});

// create model
const Institution = mongoose.model("Institution", institutionSchema);

module.exports = { Institution };
