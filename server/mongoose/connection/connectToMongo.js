//connection
var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost:27017/test');

//exporting our connection
module.exports = connection;
