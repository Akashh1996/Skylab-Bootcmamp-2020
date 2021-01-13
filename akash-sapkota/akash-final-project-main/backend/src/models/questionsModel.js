const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const questionSchema = new Schema({
  questionTitle: { type: String, required: true },
  questionDescription: { type: String, required: true },
  code: { type: String },
  date: { type: Date, default: new Date() },
  owner: { type: Schema.Types.ObjectId, ref: 'users' },
  answers: [{ type: Schema.Types.ObjectId, ref: 'answers' }],
  tag: { type: String, required: true },

});

module.exports = model('questions', questionSchema);
