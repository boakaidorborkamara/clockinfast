const mongoose = require("mongoose");

// create schema
const memberSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxLength: 15 },

  profile_image: { type: String, required: true, trim: true },

  email: { type: String, required: true, trim: true, maxLength: 20 },

  code: { type: String, required: true, trim: true },

  password: { type: String, required: true, trim: true },

  group_id: { type: ObjectId, required: true, trim: true },

  institution_id: { type: ObjectId, required: true, trim: true },
});

// create model
const Member = mongoose.model("Member", memberSchema);

module.exports = { Member };
