const StarOfMonth = require('express').Router();


var starData=[
  {
   image:'../src/images/star_of_the_month/stevie.jpg',
   header:'stevie',
   meta:'Team A',
   description:'Project A'
 },
 {
   image:'../src/images/star_of_the_month/jenny.jpg',
   header:'jenny',
   meta:'Team B',
   description:'Project B'
 },
 {
   image:'../src/images/star_of_the_month/justen.jpg',
   header:'stevie',
   meta:'Team C',
   description:'Project C'
  },
  {
    image:'../src/images/star_of_the_month/nan.jpg',
    header:'nan',
    meta:'Team D',
    description:'Project D'
  },
  {
    image:'../src/images/star_of_the_month/veronika.jpg',
    header:'veronika',
    meta:'Team E',
    description:'Project E'
  }
];

//to give content for starOfTheMonth component in home page
StarOfMonth.get("/star",function(req,res){

    res.send(starData);
})

module.exports = StarOfMonth;
