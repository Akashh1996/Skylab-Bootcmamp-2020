const { Schema, model } = require('mongoose');

const heroSchema = new Schema({
  slug: { type: String },
});

module.exports = model('equipos', heroSchema);
