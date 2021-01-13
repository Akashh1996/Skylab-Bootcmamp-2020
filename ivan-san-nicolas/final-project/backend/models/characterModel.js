const { Schema, model } = require('mongoose');

const characterSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'users' },
  name: { type: String },
  game: { type: String },
  race: { type: String },
  characterClass: { type: String },
  lvl: { type: String },
  uniqueKey: { type: String },
  sheet: {
    public: { type: Boolean },
    uploads: [{
      uniqueKey: { type: String },
      imageBase64: { type: String },
    }],
  },
  inventory: {
    public: { type: Boolean },
    categories: [{
      title: { type: String },
      uniqueKey: { type: String },
      items: [{
        itemTitle: { type: String },
        properties: [{}],
        uniqueKey: { type: String },
        categoryKey: { type: String },
      }],
    }],
  },
  notes: {
    public: { type: Boolean },
    characterNotes: [{
      uniqueKey: { type: String },
      title: { type: String },
      entries: [{
        uniqueKey: { type: String },
        text: { type: String },
      }],
    }],
  },

});

module.exports = model('characters', characterSchema);
