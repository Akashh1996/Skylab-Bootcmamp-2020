const mongoose = require('mongoose')

const { Schema, model } = mongoose

interface Establishments {
  name: string,
  ubication: string,
  coords: object,
  city: string,
  photo: string,
  promotions: string,
  description: string,
  rating: string
}

const establishmentsSchema: Establishments = new Schema({
  name: { type: String },
  ubication: { type: String },
  coords: { latitude: { type: Number }, longitude: { type: Number } },
  city: { type: String },
  photo: { type: String },
  promotions: [{ type: Schema.Types.ObjectId, ref: 'promotions' }],
  description: { type: String },
  rating: { type: String }
})

export default model('establishments', establishmentsSchema)
