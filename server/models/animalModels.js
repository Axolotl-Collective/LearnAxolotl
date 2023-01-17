const mongoose = require('mongoose');
const { Schema } = mongoose;

const animalSchema = new Schema({
  description: String,
  habitat: String,
  id: Number,
  img: String,
  length: String,
  location1: Number,
  location2: Number,
  name: String,
  population: String,
  scientific: String,
  status: String,
  threat1: Number,
  threat2: Number,
  weight: String
});

const Animal = mongoose.model('animal', animalSchema);

module.exports = Animal;