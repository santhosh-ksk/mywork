const quizPoll = require('express').Router();


var quizData=[
  {
		type: 'poll',
		privacy: 'public',
		heading: "Today's Poll",
		question: "Is the climate awsome?",
		options: ["Yes", "ok ok", "Horrible"],
		answer: [20, 35, 5],
		userResponded: false,
		userAnswer: ''
	},
	{
		type: 'poll',
		privacy: 'private',
		heading: "Vote Your opinion",
		question: "Is your teammates helpfull?",
		options: ["Yes", "Not at All", "Sometimes"],
		answer: [20, 35, 5],
		userResponded: false,
		userAnswer: ''
	},
	{
		type: 'quiz',
		privacy: 'public',
		heading: "Aptitude",
		question: "What is the color of a red car?",
		options: ["Blue", "Green", "Yellow", "Red"],
		answer: 'Red',
		userResponded: false,
		userAnswer: ''
	},
	{
		type: 'quiz',
		privacy: 'private',
		heading: "Quiz of the day",
		question: "Where is Taj Mahal Located?",
		options: ["Mumbai", "Bangalore", "Agra", "Chennai", "Goa"],
		answer: 'Agra',
		userResponded: false,
		userAnswer: ''
	},
];

//to give content for quiz component in home page
quizPoll.get("/quizPoll",function(req,res){
    res.send(quizData);
})

quizPoll.put("/quizPoll/addResponse",function(req,res){

  quizData[req.body.index].userResponded = true;
  quizData[req.body.index].userAnswer = req.body.answer;
  if(quizData[req.body.index].type == 'poll')
  {
  	quizData[req.body.index].answer[req.body.answer] += 1;
  }

  res.send(quizData);
})

module.exports = quizPoll;
