const { model, Schema } = require('mongoose');

const projectSchema = new Schema({
  name: String,
  description: String,
  urlGit: String,
  participants: [{ type: Schema.Types.ObjectId, ref: 'user' }],
  creator: { type: Schema.Types.ObjectId, ref: 'user' },
  price: Number,
  categories: [String],
});

module.exports = model('project', projectSchema);
