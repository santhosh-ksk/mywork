import React from 'react';

import _ from 'lodash';

import {Grid, Card,Icon,Statistic,Dropdown,Search,Label,Button,Popup,Modal,Header} from 'semantic-ui-react';

import DetailsDialog from './DetailsDialog.jsx';

import SearchBar from './SearchBar.jsx';

import AddProject from './AddProject.jsx';


var data=[
          {
            "ProjectName":"Primark",
            "Description":"Primark is an international company which is a subsidiary of AB Foods, and is headquartered in Dublin.Primark opened its current international headquarters in 2015 in redeveloped Dublin building.",
            "ProjectManager":["Santhosh Kumar K"],
            "Resources":[
                        {
                          "Name":"DEV 1",
                          "Resources":[
                                        {"name":"Tony",
                                         "url":"./../../../src/images/default.jpg",
                                         "designation":"Project Engineer"
                                       },
                                       {"name":"Stark",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Project Engineer"
                                      },
                                      {"name":"Bruce",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Consultant"
                                       },
                                       {"name":"Wayne",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Senior Consultant"
                                      },
                                      {"name":"Peter",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Web Designer"
                                       },
                                       {"name":"Parker",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Web Designer"
                                      },
                                      {"name":"Jackman",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Developer"
                                     }
                                   ],
                            "TeamLead":"Christian Bale"
                        },
                        {
                          "Name":"DEV 2",
                          "Resources":[
                                        {"name":"A",
                                         "url":"./../../../src/images/default.jpg",
                                         "designation":"Project Engineer"
                                       },
                                       {"name":"B",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Project Engineer"
                                      },
                                      {"name":"C",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Consultant"
                                       },
                                       {"name":"D",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Senior Consultant"
                                      },
                                      {"name":"E",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Web Designer"
                                       },
                                       {"name":"F",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Web Designer"
                                      },
                                      {"name":"G",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Developer"
                                     }
                                      ],
                               "TeamLead":"Robert Downey"
                        },
                        {
                          "Name":"TEST 1",
                          "Resources":[
                                        {"name":"H",
                                         "url":"./../../../src/images/default.jpg",
                                         "designation":"Project Engineer"
                                       },
                                       {"name":"I",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Project Engineer"
                                      },
                                      {"name":"J",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Consultant"
                                       },
                                       {"name":"K",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Senior Consultant"
                                      },
                                      {"name":"L",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Web Designer"
                                       },
                                       {"name":"M",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Web Designer"
                                      },
                                      {"name":"N",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Developer"
                                     }
                                      ],
                               "TeamLead":"Jack"
                        },
                        {
                          "Name":"TEST 2",
                          "Resources":[
                                        {"name":"O",
                                         "url":"./../../../src/images/default.jpg",
                                         "designation":"Project Engineer"
                                       },
                                       {"name":"P",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Project Engineer"
                                      },
                                      {"name":"Q",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Consultant"
                                       },
                                       {"name":"R",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Senior Consultant"
                                      },
                                      {"name":"S",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Web Designer"
                                       },
                                       {"name":"T",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Web Designer"
                                      },
                                      {"name":"U",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Developer"
                                     }
                                      ],
                               "TeamLead":"Leonardo"
                        },
                        {
                          "Name":"DEPLOYMENT",
                          "Resources":[
                                        {"name":"V",
                                         "url":"./../../../src/images/default.jpg",
                                         "designation":"Project Engineer"
                                       },
                                       {"name":"W",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Project Engineer"
                                      },
                                      {"name":"X",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Consultant"
                                       },
                                       {"name":"Y",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Senior Consultant"
                                      },
                                      {"name":"Z",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Web Designer"
                                       },
                                       {"name":"AA",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Web Designer"
                                      },
                                      {"name":"BB",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Developer"
                                     }
                                   ],
                            "TeamLead":"David Villa"
                        }
                      ]
          },
          {
            "ProjectName":"Debenhams",
            "Description":"Debenhams plc is a British multinational retailer operating under a department store format in the United Kingdom and Ireland with franchise stores in other countries.",
            "ProjectManager":["Mini Krishnan"],
            "Resources":[
                        {
                          "Name":"DEV 1",
                          "Resources":[
                                        {"name":"Tony",
                                         "url":"./../../../src/images/default.jpg",
                                         "designation":"Project Engineer"
                                       },
                                       {"name":"Stark",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Project Engineer"
                                      },
                                      {"name":"Bruce",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Consultant"
                                       },
                                       {"name":"Wayne",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Senior Consultant"
                                      },
                                      {"name":"Peter",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Web Designer"
                                       },
                                       {"name":"Parker",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Web Designer"
                                      },
                                      {"name":"Jackman",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Developer"
                                     }
                                   ],
                            "TeamLead":"Christian Bale"
                        },
                        {
                          "Name":"DEV 2",
                          "Resources":[
                                        {"name":"A",
                                         "url":"./../../../src/images/default.jpg",
                                         "designation":"Project Engineer"
                                       },
                                       {"name":"B",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Project Engineer"
                                      },
                                      {"name":"C",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Consultant"
                                       },
                                       {"name":"D",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Senior Consultant"
                                      },
                                      {"name":"E",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Web Designer"
                                       },
                                       {"name":"F",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Web Designer"
                                      },
                                      {"name":"G",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Developer"
                                     }
                                      ],
                               "TeamLead":"Robert Downey"
                        },
                        {
                          "Name":"TEST 1",
                          "Resources":[
                                        {"name":"H",
                                         "url":"./../../../src/images/default.jpg",
                                         "designation":"Project Engineer"
                                       },
                                       {"name":"I",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Project Engineer"
                                      },
                                      {"name":"J",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Consultant"
                                       },
                                       {"name":"K",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Senior Consultant"
                                      },
                                      {"name":"L",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Web Designer"
                                       },
                                       {"name":"M",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Web Designer"
                                      },
                                      {"name":"N",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Developer"
                                     }
                                      ],
                               "TeamLead":"Jack"
                        },
                        {
                          "Name":"TEST 2",
                          "Resources":[
                                        {"name":"O",
                                         "url":"./../../../src/images/default.jpg",
                                         "designation":"Project Engineer"
                                       },
                                       {"name":"P",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Project Engineer"
                                      },
                                      {"name":"Q",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Consultant"
                                       },
                                       {"name":"R",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Senior Consultant"
                                      },
                                      {"name":"S",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Web Designer"
                                       },
                                       {"name":"T",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Web Designer"
                                      },
                                      {"name":"U",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Developer"
                                     }
                                      ],
                               "TeamLead":"Leonardo"
                        },
                        {
                          "Name":"DEPLOYMENT",
                          "Resources":[
                                        {"name":"V",
                                         "url":"./../../../src/images/default.jpg",
                                         "designation":"Project Engineer"
                                       },
                                       {"name":"W",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Project Engineer"
                                      },
                                      {"name":"X",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Consultant"
                                       },
                                       {"name":"Y",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Senior Consultant"
                                      },
                                      {"name":"Z",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Web Designer"
                                       },
                                       {"name":"AA",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Web Designer"
                                      },
                                      {"name":"BB",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Developer"
                                     }
                                   ],
                            "TeamLead":"David Villa"
                        }
                      ]
          },
          {
            "ProjectName":"Williams-Sonoma",
            "Description":"Williams-Sonoma, Inc., is an American publicly traded consumer retail company that sells kitchenwares and home furnishings. It is headquartered in San Francisco, California, United States.",
            "ProjectManager":["Jeevan Paul Puthukka"],
            "Resources":[
                        {
                          "Name":"DEV 1",
                          "Resources":[
                                        {"name":"Tony",
                                         "url":"./../../../src/images/default.jpg",
                                         "designation":"Project Engineer"
                                       },
                                       {"name":"Stark",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Project Engineer"
                                      },
                                      {"name":"Bruce",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Consultant"
                                       },
                                       {"name":"Wayne",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Senior Consultant"
                                      },
                                      {"name":"Peter",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Web Designer"
                                       },
                                       {"name":"Parker",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Web Designer"
                                      },
                                      {"name":"Jackman",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Developer"
                                     }
                                   ],
                            "TeamLead":"Christian Bale"
                        },
                        {
                          "Name":"DEV 2",
                          "Resources":[
                                        {"name":"A",
                                         "url":"./../../../src/images/default.jpg",
                                         "designation":"Project Engineer"
                                       },
                                       {"name":"B",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Project Engineer"
                                      },
                                      {"name":"C",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Consultant"
                                       },
                                       {"name":"D",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Senior Consultant"
                                      },
                                      {"name":"E",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Web Designer"
                                       },
                                       {"name":"F",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Web Designer"
                                      },
                                      {"name":"G",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Developer"
                                     }
                                      ],
                               "TeamLead":"Robert Downey"
                        },
                        {
                          "Name":"TEST 1",
                          "Resources":[
                                        {"name":"H",
                                         "url":"./../../../src/images/default.jpg",
                                         "designation":"Project Engineer"
                                       },
                                       {"name":"I",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Project Engineer"
                                      },
                                      {"name":"J",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Consultant"
                                       },
                                       {"name":"K",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Senior Consultant"
                                      },
                                      {"name":"L",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Web Designer"
                                       },
                                       {"name":"M",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Web Designer"
                                      },
                                      {"name":"N",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Developer"
                                     }
                                      ],
                               "TeamLead":"Jack"
                        },
                        {
                          "Name":"TEST 2",
                          "Resources":[
                                        {"name":"O",
                                         "url":"./../../../src/images/default.jpg",
                                         "designation":"Project Engineer"
                                       },
                                       {"name":"P",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Project Engineer"
                                      },
                                      {"name":"Q",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Consultant"
                                       },
                                       {"name":"R",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Senior Consultant"
                                      },
                                      {"name":"S",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Web Designer"
                                       },
                                       {"name":"T",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Web Designer"
                                      },
                                      {"name":"U",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Developer"
                                     }
                                      ],
                               "TeamLead":"Leonardo"
                        },
                        {
                          "Name":"DEPLOYMENT",
                          "Resources":[
                                        {"name":"V",
                                         "url":"./../../../src/images/default.jpg",
                                         "designation":"Project Engineer"
                                       },
                                       {"name":"W",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Project Engineer"
                                      },
                                      {"name":"X",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Consultant"
                                       },
                                       {"name":"Y",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Senior Consultant"
                                      },
                                      {"name":"Z",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Web Designer"
                                       },
                                       {"name":"AA",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Web Designer"
                                      },
                                      {"name":"BB",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Developer"
                                     }
                                   ],
                            "TeamLead":"David Villa"
                        }
                      ]
          },
          {
            "ProjectName":"FedEx",
            "Description":"FedEx Corporation is an American multinational courier delivery services company headquartered in Memphis, Tennessee.",
            "ProjectManager":["Gowtham R"],
            "Resources":[
                        {
                          "Name":"DEV 1",
                          "Resources":[
                                        {"name":"Tony",
                                         "url":"./../../../src/images/default.jpg",
                                         "designation":"Project Engineer"
                                       },
                                       {"name":"Stark",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Project Engineer"
                                      },
                                      {"name":"Bruce",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Consultant"
                                       },
                                       {"name":"Wayne",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Senior Consultant"
                                      },
                                      {"name":"Peter",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Web Designer"
                                       },
                                       {"name":"Parker",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Web Designer"
                                      },
                                      {"name":"Jackman",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Developer"
                                     }
                                   ],
                            "TeamLead":"Christian Bale"
                        },
                        {
                          "Name":"DEV 2",
                          "Resources":[
                                        {"name":"A",
                                         "url":"./../../../src/images/default.jpg",
                                         "designation":"Project Engineer"
                                       },
                                       {"name":"B",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Project Engineer"
                                      },
                                      {"name":"C",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Consultant"
                                       },
                                       {"name":"D",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Senior Consultant"
                                      },
                                      {"name":"E",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Web Designer"
                                       },
                                       {"name":"F",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Web Designer"
                                      },
                                      {"name":"G",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Developer"
                                     }
                                      ],
                               "TeamLead":"Robert Downey"
                        },
                        {
                          "Name":"TEST 1",
                          "Resources":[
                                        {"name":"H",
                                         "url":"./../../../src/images/default.jpg",
                                         "designation":"Project Engineer"
                                       },
                                       {"name":"I",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Project Engineer"
                                      },
                                      {"name":"J",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Consultant"
                                       },
                                       {"name":"K",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Senior Consultant"
                                      },
                                      {"name":"L",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Web Designer"
                                       },
                                       {"name":"M",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Web Designer"
                                      },
                                      {"name":"N",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Developer"
                                     }
                                      ],
                               "TeamLead":"Jack"
                        },
                        {
                          "Name":"TEST 2",
                          "Resources":[
                                        {"name":"O",
                                         "url":"./../../../src/images/default.jpg",
                                         "designation":"Project Engineer"
                                       },
                                       {"name":"P",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Project Engineer"
                                      },
                                      {"name":"Q",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Consultant"
                                       },
                                       {"name":"R",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Senior Consultant"
                                      },
                                      {"name":"S",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Web Designer"
                                       },
                                       {"name":"T",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Web Designer"
                                      },
                                      {"name":"U",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Developer"
                                     }
                                      ],
                               "TeamLead":"Leonardo"
                        },
                        {
                          "Name":"DEPLOYMENT",
                          "Resources":[
                                        {"name":"V",
                                         "url":"./../../../src/images/default.jpg",
                                         "designation":"Project Engineer"
                                       },
                                       {"name":"W",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Project Engineer"
                                      },
                                      {"name":"X",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Consultant"
                                       },
                                       {"name":"Y",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Senior Consultant"
                                      },
                                      {"name":"Z",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Web Designer"
                                       },
                                       {"name":"AA",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Web Designer"
                                      },
                                      {"name":"BB",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Developer"
                                     }
                                   ],
                            "TeamLead":"David Villa"
                        }
                      ]
          },
          {
            "ProjectName":"Nisa",
            "Description":"Nisa Corporation is an American multinational courier delivery services company headquartered in Memphis, Tennessee.",
            "ProjectManager":["Gowtham R"],
            "Resources":[
                        {
                          "Name":"DEV 1",
                          "Resources":[
                                        {"name":"Tony",
                                         "url":"./../../../src/images/default.jpg",
                                         "designation":"Project Engineer"
                                       },
                                       {"name":"Stark",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Project Engineer"
                                      },
                                      {"name":"Bruce",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Consultant"
                                       },
                                       {"name":"Wayne",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Senior Consultant"
                                      },
                                      {"name":"Peter",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Web Designer"
                                       },
                                       {"name":"Parker",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Web Designer"
                                      },
                                      {"name":"Jackman",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Developer"
                                     }
                                   ],
                            "TeamLead":"Christian Bale"
                        },
                        {
                          "Name":"DEV 2",
                          "Resources":[
                                        {"name":"A",
                                         "url":"./../../../src/images/default.jpg",
                                         "designation":"Project Engineer"
                                       },
                                       {"name":"B",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Project Engineer"
                                      },
                                      {"name":"C",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Consultant"
                                       },
                                       {"name":"D",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Senior Consultant"
                                      },
                                      {"name":"E",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Web Designer"
                                       },
                                       {"name":"F",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Web Designer"
                                      },
                                      {"name":"G",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Developer"
                                     }
                                      ],
                               "TeamLead":"Robert Downey"
                        },
                        {
                          "Name":"TEST 1",
                          "Resources":[
                                        {"name":"H",
                                         "url":"./../../../src/images/default.jpg",
                                         "designation":"Project Engineer"
                                       },
                                       {"name":"I",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Project Engineer"
                                      },
                                      {"name":"J",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Consultant"
                                       },
                                       {"name":"K",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Senior Consultant"
                                      },
                                      {"name":"L",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Web Designer"
                                       },
                                       {"name":"M",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Web Designer"
                                      },
                                      {"name":"N",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Developer"
                                     }
                                      ],
                               "TeamLead":"Jack"
                        },
                        {
                          "Name":"TEST 2",
                          "Resources":[
                                        {"name":"O",
                                         "url":"./../../../src/images/default.jpg",
                                         "designation":"Project Engineer"
                                       },
                                       {"name":"P",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Project Engineer"
                                      },
                                      {"name":"Q",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Consultant"
                                       },
                                       {"name":"R",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Senior Consultant"
                                      },
                                      {"name":"S",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Web Designer"
                                       },
                                       {"name":"T",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Web Designer"
                                      },
                                      {"name":"U",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Developer"
                                     }
                                      ],
                               "TeamLead":"Leonardo"
                        },
                        {
                          "Name":"DEPLOYMENT",
                          "Resources":[
                                        {"name":"V",
                                         "url":"./../../../src/images/default.jpg",
                                         "designation":"Project Engineer"
                                       },
                                       {"name":"W",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Project Engineer"
                                      },
                                      {"name":"X",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Consultant"
                                       },
                                       {"name":"Y",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Senior Consultant"
                                      },
                                      {"name":"Z",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Web Designer"
                                       },
                                       {"name":"AA",
                                        "url":"./../../../src/images/default.jpg",
                                        "designation":"Web Designer"
                                      },
                                      {"name":"BB",
                                       "url":"./../../../src/images/default.jpg",
                                       "designation":"Developer"
                                     }
                                   ],
                            "TeamLead":"David Villa"
                        }
                      ]
          }
        ]

  const options = [
          { key: 'addteams', text: 'Add Teams', icon: 'add',value:"addteams" },
          { key: 'teams', text: 'View Teams', icon: 'sitemap',value:"teams" },
          { key: 'resources', text: 'View Resources', icon: 'users',value:"resources" },
          { key: 'delete', text: 'Delete Project', icon: 'trash',value:"delete" },
        ]



export default class ProjectManagement extends React.Component{

  constructor(props){
    super(props);
    this.state={
      dialogOpen:false,
      view:"",
      selectedProject:"",
      selectedTeam:"",
      searchResults:[],
      errorDialog:false,
      confirmDeleteDialog:false,
      addView:false,
      dialogData:[]
    }
    this.handleDialogOpen=this.handleDialogOpen.bind(this);
    this.handleDialogClose=this.handleDialogClose.bind(this);
    this.handleTeamChange=this.handleTeamChange.bind(this);
    this.handleDropDownClicked=this.handleDropDownClicked.bind(this);
    this.handleSearchResults=this.handleSearchResults.bind(this);
    this.handleErrorDialogClose=this.handleErrorDialogClose.bind(this);
    this.handleConfirmDialogClose=this.handleConfirmDialogClose.bind(this);
    this.handleDeleteProject=this.handleDeleteProject.bind(this);
    this.handleAddClick=this.handleAddClick.bind(this);
    this.handleAddTeams=this.handleAddTeams.bind(this);
  }

   handleDialogOpen(view,project){
     if(this.state.selectedProject!=project){
       this.setState({selectedProject:project})
     }
      var details=(_.filter(data, ['ProjectName',project]));
      this.setState({dialogOpen:true,view:view,selectedTeam:"",dialogData:details})
   }

   handleDialogClose(){
      this.setState({dialogOpen:false,selectedProject:"",selectedTeam:""})
   }

   handleTeamChange(name){
       this.handleDialogOpen("Resources",this.state.selectedProject);
       this.setState({selectedTeam:name})
   }

   handleDropDownClicked(project,e,options){
     this.setState({selectedProject:project});
     if(options.value=="teams"){
       this.handleDialogOpen("Teams",project)
     }
     else if(options.value=="resources"){
       this.handleDialogOpen("Resources",project)
     }
     else if(options.value=="addteams"){
       this.handleDialogOpen("AddTeams",project)
     }
     else{
       if(_.filter(data, ['ProjectName',project])[0].Resources!=0){
          this.setState({errorDialog:true})
       }
       else{
         this.setState({confirmDeleteDialog:true})
       }
     }
   }

   handleSearchResults(arr){
      this.setState({searchResults:arr})
   }

   handleErrorDialogClose(){
      this.setState({errorDialog:false})
   }

   handleConfirmDialogClose(){
      this.setState({confirmDeleteDialog:false})
   }

   handleDeleteProject(){
      var index=_.findIndex(data, ['ProjectName',this.state.selectedProject])
      data.splice(index,1);
      this.setState({confirmDeleteDialog:false})
   }

   handleAddClick(){
      var temp=this.state.addView;
      this.setState({addView:!temp})
   }

   handleAddTeams(newTeam){
     var index=_.findIndex(data,['ProjectName',this.state.selectedProject]);
     //console.log(data[index].Resources);
     var arr=data[index].Resources;
     arr.push(newTeam);
     data[index].Resources=arr;
     this.setState({dialogOpen:false})
     //console.log(newTeam);
   }

  render(){

    var display=null;
    var columns=3;
    if(window.innerWidth<768&&window.innerWidth>420){
      columns=2;
    }
    else if(window.innerWidth<420){
      columns=1;
    }
    var array=data;
    if(this.state.searchResults.length>0){
      array=[];
        this.state.searchResults.map((item,i)=>{
          array.push(_.filter(data, ['ProjectName',item.title])[0]);
        })
    }

    display=array.map((item,i)=>{
      var teams=item.Resources.length;
      var resourceSize=0;
      item.Resources.map((ppl,j)=>{
        resourceSize+=ppl.Resources.length;
      })
      return(
          <Card key={i} raised={true}>
            <Card.Content>
              <Card.Header style={{textAlign:"center"}}>
                {item.ProjectName}
                <Dropdown floating={true} trigger={<Icon name='ellipsis vertical'/>} style={{float:"right"}} options={options} pointing='top right' icon={null} onChange={this.handleDropDownClicked.bind(this,item.ProjectName)}/>
              </Card.Header>
              <Card.Description>
                {item.Description}
              </Card.Description>
            </Card.Content>
            <Card.Content>
              <Icon name='briefcase' />
                Project Manager:&ensp;{item.ProjectManager}
            </Card.Content>
            <Card.Content style={{textAlign:"center"}}>
              <Statistic value={teams} label="TEAMS" size="mini" color='blue' style={{cursor:"pointer"}} onClick={this.handleDialogOpen.bind(this,"Teams",item.ProjectName)}/>
              <Statistic value={resourceSize} label="RESOURCES" size="mini" color='blue' style={{cursor:"pointer"}} onClick={this.handleDialogOpen.bind(this,"Resources",item.ProjectName)}/>
            </Card.Content>
          </Card>
      )
    })


    if(this.state.addView){
      return(
        <AddProject toggle={this.handleAddClick} data={data} close={this.handleAddClick}/>
      )
    }
    else{
      return(
        <Grid style={{margin:"0px"}}>
        <Grid.Row style={{paddingTop:"0px"}}>
        <Grid.Column width={2}>
        </Grid.Column>
          <Grid.Column width={12}>
            <center>
                <SearchBar
                 data={data}
                 placeholder="Search Projects"
                 searchResults={this.state.searchResults}
                 handleSearchResults={this.handleSearchResults}
                 searchFilter="ProjectName"/>
            </center>
           </Grid.Column>
          <Grid.Column width={2}>
          <center>
          <Popup
              trigger={<Button icon='add' onClick={this.handleAddClick}/>}
              content='Add Project'
              position='left center'
            />
          </center>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{padding:"0px"}}>
          <Grid.Column>
            <Card.Group itemsPerRow={columns} style={{marginLeft:"-25px"}}>
            {display}
            </Card.Group>
            <DetailsDialog
             handleDialogOpen={this.handleDialogOpen}
             dialogOpen={this.state.dialogOpen}
             handleDialogClose={this.handleDialogClose}
             view={this.state.view}
             selectedProject={this.state.selectedProject}
             handleTeamChange={this.handleTeamChange}
             selectedTeam={this.state.selectedTeam}
             data={this.state.dialogData}
             addTeams={this.handleAddTeams}/>
             <Modal open={this.state.errorDialog} onClose={this.handleErrorDialogClose} size="small">
                <Modal.Header>
                   <Icon name='remove circle' size="big" color="red" />
                   <h2 style={{display:"inline"}}>Error</h2>
                </Modal.Header>
                <Modal.Content>
                    <h3>Number of Resources should zero</h3>
                    <div><u style={{cursor:"pointer"}}>Manage Resources</u></div>
                </Modal.Content>
             </Modal>
             <Modal open={this.state.confirmDeleteDialog} onClose={this.handleConfirmDialogClose} basic size='small'>
                     <Modal.Header>
                        <Icon name='warning' color="yellow" size="big"/>
                        Confirm Delete
                     </Modal.Header>
                    <Modal.Content style={{marginLeft:"10px"}}>
                      <h3>Do you want to delete {this.state.selectedProject} project ?</h3>
                      <p> Warning : All the details about the project will be deleted from database</p>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button basic color='red' inverted onClick={this.handleConfirmDialogClose}>
                        <Icon name='remove' /> No
                      </Button>
                      <Button color='green' inverted onClick={this.handleDeleteProject}>
                        <Icon name='checkmark' /> Yes
                      </Button>
                    </Modal.Actions>
             </Modal>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
    }

  }
}
