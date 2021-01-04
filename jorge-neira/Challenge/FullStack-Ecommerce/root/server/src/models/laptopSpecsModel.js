const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const productGeneralSpecsSchema = new Schema({
  screen: String,
  cpu: String,
  'memory-ram': String,
  gpu: String,
  os: String,
  color: String,
});

module.exports = model('laptopspec', productGeneralSpecsSchema, 'laptopspecs');
