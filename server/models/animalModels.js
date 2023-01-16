const mongoose = require('mongoose');
const { Schema } = mongoose;

const animalSchema = new Schema({
  // _id: String,
  // description: String,
  // habitat: String,
  // id: Number,
  img: String,
  // length: String,
  // location1: Number,
  // location2: Number,
  name: String,
  // population: String,
  // scientific: String,
  // status: String,
  // threat1: Number,
  // threat2: Number,
  // weight: String
});

module.export = mongoose.model('Animal', animalSchema);