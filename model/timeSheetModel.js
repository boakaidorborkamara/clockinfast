const mongoose = require("mongoose");

// create schema
const timeSheetSchema = new mongoose.Schema({
  date: { type: Date, required: true, trim: true },

  isClockedIn: { type: Boolean, default: false },

  isClockedOut: { type: Boolean, default: false },

  clock_in_time: { type: Date, required: true, trim: true },

  clock_out_time: { type: Date, required: true, trim: true },

  user_id: { type: ObjectId, required: true, trim: true },
});

// create model
const TimeSheet = mongoose.model("Member", timeSheetSchema);

module.exports = { TimeSheet };
