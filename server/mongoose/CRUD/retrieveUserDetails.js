const login = require('express').Router();
var mongoose = require('mongoose');
var session = require('express-session');
var cookieparser = require('cookie-parser');
var User = require('./../mongooseSchema/userDetailSchema.js');
var passport = require('passport');


login.post('/loginCredentials',
  passport.authenticate('local', {
    successRedirect: '/loginSuccess',
    failureRedirect: '/loginFailure'
  })
);
login.get('/loginFailure', function(req, res, next) {
  res.send('Failed');
});

login.get('/loginSuccess', function(req, res, next) {
  res.send('Success');
});
module.exports = login;
