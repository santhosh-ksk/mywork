const express=require('express');
var static=require('express-static');
var app=express();
var path = require('path');
var landingPage=require('./routes/landingPage.js');
var quote=require('./routes/quotes.js');
var announcements=require('./routes/announcements.js');
var news=require('./routes/news.js')
var star=require('./routes/StarOfTheMonth.js');
var techForum=require('./routes/techForum.js');
var quizPoll=require('./routes/quizPoll.js');
var signup =require('./routes/Signup.js');
var loginForm =require('./mongoose/CRUD/retrieveUserDetails.js');
var client =require('./routes/ClientImage.js');
var bodyParser = require('body-parser');
var cookieparser = require('cookie-parser')
var session = require('express-session');
const multer = require('multer');
var passport = require('passport');


let storage = multer.diskStorage({
     destination: function(req, file, cb) {
         cb(null, './Files');
     },
     filename: function(req, file, cb) {
         cb(null, file.fieldname + '-' + Date.now()+'.jpg');
     }
 });
 const upload = multer({storage: storage});
 const fs = require('fs');


 require('./config/passport.js')(passport); // pass passport for configuration

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//cookieparser
app.use(cookieparser());
//session
//to serve our index.js file
app.use(express.static(path.resolve(__dirname+'./../')));

app.use(session({secret:"sigdaiudpsad21343", resave:false, saveUninitialized:true}));
app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions


//to allow cross origin resource sharing
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


//middleware to serve all our routes
app.use('/',function(err,res,next){
  next();
},landingPage,quote,announcements,news,star,techForum,quizPoll,signup,client,loginForm);

app.post('/uploadimage', upload.any('image'), function(req, res) {
    res.end('yes');
});

app.delete('/deleteimage',function(req,res){
  console.log(req.body);
  fs.unlink('./Files/'+req.body.imgurl, (err) => {
    var files = fs.readdirSync('./Files');
    console.log('successfully deleted');
      res.send(files);
  });

});
//Running the server in port number 3000
app.listen(3000,function(){
console.log("Server started in 3000");
})
