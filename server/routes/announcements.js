const announcements = require('express').Router();

//to give content for announcements component in home page
announcements.get("/announcements",function(req,res){
  var announcementData=[
    {
      header: 'Project Report - ORSS ',
      description: 'Project Presenation for the web application .',
      name:'Santhosh',
    },

    {
      header: 'Project Report - William Sonoma',
      description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
      name:'Gowtham',
    },
    {
      header: 'Project Report - Debenhams',
      description: 'Survival strategies to ensure proactive domination.',
      name:'Mini',
    },
    {
      header: 'Project Report - Debenhams survival strategies to ensure proactive domination',
      description: 'Survival strategies to ensure proactive domination. Bring to the table win-win survival strategies to ensure proactive domination. ',
      name:'Mini',
    },
  ];
    res.send(announcementData);
})

module.exports = announcements;
