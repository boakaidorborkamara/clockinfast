const mongoose = require("mongoose");

// create schema
const groupSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxLength: 15 },

  profile_image: { type: String, required: true, trim: true },

  institution_id: { type: ObjectId, required: true, trim: true },
});

// create model
const Group = mongoose.model("Group", groupSchema);

module.exports = { Group };
