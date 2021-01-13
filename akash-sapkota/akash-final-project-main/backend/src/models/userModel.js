const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  displayName: { type: String },
  email: { type: String },
  photo: { type: String, default: 'https://avatars3.githubusercontent.com/u/12779984?s=400&u=bd7db8429aee0fa72d76fafd02a6edcdea784789&v=4' },
});

module.exports = model('users', userSchema);
