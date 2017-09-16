const techForum = require('express').Router();


var techForumData=[
  {
    question:"Why window.event is not working in firefox browser?",
    answers:[
      {
        name: "Jeevan",
        answer: "Try getting the event using the parameter passed"
      },
      {
        name: "Srini",
        answer: "Because window.event doesn't exist in Firefox"
      },
      {
        name: "Ruban",
        answer: "window.event is a proprietary Microsoft Internet Explorer property which is only available while a DOM event handler is being called. Its value is the Event object currently being handled"
      }
    ],
    name: "Gowtham",
    time: "10.20 AM 28th June 2017"
  },
  {
    question: "How do I include a JavaScript file in another JavaScript file?",
    answers: [
      {
        name:"Gowtham",
        answer:"Try using recent versions of JavaScript with include statements"
      },
      {
        name:"Karthik",
        answer:"Node.js is currently using a module.exports/require system.You can use babel to transpile if you want the import syntax"},{"name":"Arun","answer":"Use the functions included in your newly loaded file right after loading it"
      }
    ],
    name: "Mini",
    time: "4:01 PM 27th June 2017"
  },
  {
    question: "How to vertically center a div for all browsers?",
    answers: [
      {
        name:"Ganesh",
        answer:"https://stackoverflow.com/questions/396145/how-to-vertically-center-a-div-for-all-browsers"
      }
    ],
    name: "Santhosh",
    time: "12:01 AM 27th June 2017"
  }
];


techForum.get("/techForum",function(req,res){
    res.send(techForumData);
})

techForum.put("/techForum/addAnswer",function(req,res){
  var obj={"name":req.body.name,"answer":req.body.answer};
  techForumData[req.body.qnIndex].answers.unshift(obj);
  res.send(techForumData);
})

module.exports = techForum;
