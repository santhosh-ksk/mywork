const signup = require('express').Router();

signup.post('/signup',function(req,res){
  console.log('got the response', req.body);
})

module.exports = signup;
