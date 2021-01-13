const mongoose = require('mongoose')

const { Schema, model } = mongoose

interface Users {
  admin: boolean,
  username: string,
  password: string,
  name: string,
  surname: string,
  email: string,
  photo: string,
  sub: string,
  favorites: string,
  establishment: string,
  promotions: string
}

const usersSchema: Users = new Schema({
  admin: { type: Boolean },
  username: { type: String },
  password: { type: String },
  name: { type: String },
  surname: { type: String },
  email: { type: String },
  photo: { type: String },
  sub: { type: String },
  favorites: [{ type: Schema.Types.ObjectId, ref: 'establishments' }],
  establishment: { type: Schema.Types.ObjectId, ref: 'establishments' }
})

export default model('users', usersSchema)
