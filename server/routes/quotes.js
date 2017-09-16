const quotes = require('express').Router();

var quoteOfTheDay={"quote":"Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself",
                     "author":"Henry James"}


//to give content for quote component in home page
quotes.get("/quotes",function(req,res){

    res.send(quoteOfTheDay);
})

module.exports = quotes;
