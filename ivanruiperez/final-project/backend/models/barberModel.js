const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const barberSchema = new Schema({
  name: String,
  photo: String,
  appointment: [{
    type: Schema.Types.ObjectId, ref: 'appointments',
  }],
});

module.exports = model('barbers', barberSchema);
