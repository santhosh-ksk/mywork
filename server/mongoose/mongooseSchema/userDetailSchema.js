
var mongoose = require('mongoose');
var connection = require('./../connection/connectToMongo.js');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  userID: { type:String, required: true, unique:true },
  password:{type:String, required: true},
},{ collection: 'usercredentials' });

var User = mongoose.model('User', userSchema);

module.exports = User;
