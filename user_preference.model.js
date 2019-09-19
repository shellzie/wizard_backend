const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userPreference = new Schema({
  bookType: [String],
  age: [String],
  subject: [String]
});

module.exports = mongoose.model('userPreference', userPreference);