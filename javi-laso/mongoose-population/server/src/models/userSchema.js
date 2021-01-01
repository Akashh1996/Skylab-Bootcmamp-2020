const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: String,
  age: Number,
  address: { type: Schema.Types.ObjectId, ref: 'Address' },
});

module.exports = model('User', userSchema);
