const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userPreference = new Schema({
  userId: {type: Number, index: true},
  bookType: [String],
  age: [String],
  subject: [String]
}, { autoIndex: false });

// Mongoose will call createIndex for each index sequentially, and emit an 'index'
// event on the model when all the createIndex calls succeeded or when there was an error.
// While nice for development, it is recommended this behavior be disabled in production since index
// creation can cause a significant performance impact.

module.exports = mongoose.model('userPreference', userPreference);