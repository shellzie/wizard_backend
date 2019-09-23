const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const wizardRoutes = express.Router();
const PORT = 4000;

const User = require('./user.model');
const UserPreference = require('./userPreference.model');

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
  });
  res.send(user.id); //this format works too

});

wizardRoutes.route('/user_preference').post(function(req, res) {
  let userPreference = new UserPreference(req.body);
  userPreference.save(function(err, userPreference) {
    if (err) return console.log(err);
  });
  res.send(userPreference.id);

});


process.on( 'SIGINT', function() {
  console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
  // some other closing procedures go here
  process.exit( );
});