const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  name: String,
  gitUser: String,
  gitPicture: String,
  collaborating_in: [{ type: Schema.Types.ObjectId, ref: 'project' }],
  owner_of: [{ type: Schema.Types.ObjectId, ref: 'project' }],
});

module.exports = model('user', userSchema);
