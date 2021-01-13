const { model, Schema } = require('mongoose');

const challengeSchema = new Schema({
  title: { type: String, required: true, unique: true },
  date: { type: String, required: true },
  miniDescription: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  target: { type: Number, required: true },
  collected: { type: Number, required: true },
  participants: { type: Number, required: true },
  days: { type: Number, required: true },
  creator: { type: String, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
});

module.exports = model('challenge', challengeSchema);
