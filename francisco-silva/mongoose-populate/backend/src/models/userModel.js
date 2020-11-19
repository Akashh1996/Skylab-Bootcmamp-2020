const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: { type: String },
  age: { type: Number },
  adrees: { type: Schema.Types.ObjectId, ref: 'Story' },
});

model.exports = model('User', userSchema);
