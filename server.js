const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const wizardRoutes = express.Router();
const PORT = 4000;

let User = require('./user.model');
let userPreference = require('./user_preference.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/wizard', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
  console.log("MongoDB database connection established successfully");
});

app.use('/wizard', wizardRoutes);

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

wizardRoutes.route('/user').post(function(req, res) {
  let user = new User(req.body);
  user.save(function(err, user) {
    if (err) return console.log(err);
    console.log(user.email + " saved to User collection");
  });
});

wizardRoutes.route('/user_preference').post(function(req, res) {
  let user_preference = new userPreference(req.body);
  user_preference.save(function(err, user_preference) {
    if (err) return console.log(err);
    console.log(user_preference.id + " saved to userPreferences collection");
  });
});