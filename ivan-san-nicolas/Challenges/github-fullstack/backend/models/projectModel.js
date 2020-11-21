const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
  creator: { type: Schema.Types.ObjectId, ref: 'users' },
});

module.exports = model('projects', projectSchema);
