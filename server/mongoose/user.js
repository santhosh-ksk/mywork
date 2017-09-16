// grab the things we need
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

// mongoose.connect('mongodb://127.0.0.1:58365');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
