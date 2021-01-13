/* eslint-disable node/handle-callback-err */
const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const scheduleSchema = new Schema({
  day: String,
  time: String,
  workout: String,
  participants: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Schedule', scheduleSchema);
