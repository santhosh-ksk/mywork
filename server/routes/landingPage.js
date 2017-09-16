const landingPage = require('express').Router();

//to give content for milestone component in home page
landingPage.get("/landingpage",function(req,res){
  var milestoneData = [
    { year: '1997', caption: 'Enabler is born as a Spin-off from Sonae', logo: ['Sonae.png']},
    { year: '1999', caption: 'Enabler into International Engagements', logo: ['Despar.png', 'Nisa.png']},
    { year: '2006', caption: 'Wipro acquires Enabler - a Divison of Wipro', logo: ['Tesco.png']},
    { year: '2007', caption: 'Enabler/Wipro enters multiple Transformation Programmes',
                       logo: ['AholdUSA.png', 'Supervalu.png', 'Morrisons.png']},
    { year: '2013', caption: 'Wipro enters a cycle of Multiple Logo wins as ORGP',
                       logo: ['Primark.png', 'Debenhams.png', 'Ahorro.png']},
    { year: '2016', caption: 'ORGP Established as a clear Leader in the Market', logo: ['Makro.png']}
  ];
    res.send(milestoneData);
})

module.exports = landingPage;
