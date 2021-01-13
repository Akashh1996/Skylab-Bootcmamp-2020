const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const workoutSchema = new Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  image: { type: String },
  duration: { type: String },
  place: { type: String },
  scheduleInfo: { type: String },
  description2: { type: String },
  days: [{ type: Schema.Types.ObjectId, ref: 'Schedule' }]
});

module.exports = mongoose.model('Workout', workoutSchema);
