export {}
const { model, Schema } = require('mongoose')

const userSchema = new Schema({
  id: { type: String },
  name: { type: String },
  username: { type: String },
  location: { type: String },
  photoUrl: { type: String },
  bio: { type: String },
  favourites: [{ type: Schema.Types.ObjectId, ref: 'Games' }],
  events: [{ type: Schema.Types.ObjectId, ref: 'events' }]
})

module.exports = model('Users', userSchema)
