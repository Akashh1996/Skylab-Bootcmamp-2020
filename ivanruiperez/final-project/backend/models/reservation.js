const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const reservationSchema = new Schema({
  userId: String,
  barber: String,
  service: String,
  month: String,
  year: String,
  day: String,
  weekDay: String,
  hour: String,
});

module.exports = model('reservations', reservationSchema);
