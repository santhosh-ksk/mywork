const news = require('express').Router();

//to give content for news component in home page
news.get("/news",function(req,res){
  var newsData=[
    {
      "news":"GST gonna affect all prices from July 1",
      "source":"Economic Times"
    },
    {
      "news":"Virat kohli becomes No.1 batsman in ODI",
      "source":"Star Sports"
    },
    {
      "news":"RBI started printing 200rs notes",
      "source":"Indian Express"
    },
    {
      "news":"Vijaykanth's speech goes viral",
      "source":"TN Mirror"
    }
  ];
    res.send(newsData);
})

module.exports = news;
