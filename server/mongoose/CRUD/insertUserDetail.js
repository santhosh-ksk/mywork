var mongoose = require('mongoose');
var User = require('./../mongooseSchema/userDetailSchema.js');

var newUser = User({
  userID: 'sa351586',
  password:'qwerty12345',
});

newUser.save(function(err){
  if(err) throw err;

  console.log('user created');
})
