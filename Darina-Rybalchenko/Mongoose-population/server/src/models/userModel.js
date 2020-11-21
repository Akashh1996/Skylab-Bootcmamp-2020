const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: { type: String },
  age: { type: Number },
  address: { type: Schema.Types.ObjectId, ref: 'addresses' },
});

module.exports = model('users', userSchema);
