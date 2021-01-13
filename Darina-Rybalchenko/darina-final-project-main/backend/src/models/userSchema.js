const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  displayName: String,
  uid: String,
  email: String,
  photoURL: String,
  age: Number,
  days: [{ type: Schema.Types.ObjectId, ref: 'Schedule' }]
});

module.exports = model('User', userSchema);
