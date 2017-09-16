const ClientImage = require('express').Router();
const fs = require('fs');
//to give content for quote component in home page

ClientImage.get("/clientimage",function(req,res){
  var files = fs.readdirSync('./Files');
  console.log("first response",files);
    res.send(files);
})

module.exports = ClientImage;
