import React from 'react';

import { Menu,Icon } from 'semantic-ui-react';

import Pending from './Pending.jsx';

import ApprovalHistory from './History.jsx';

import ApprovalsMenu from './../Common/ComponentSpecificMenu.jsx';

var data=[
          {
            "From":"Mini K",
            "Type":"Leave",
            "FromDate":"14/08/2017",
            "ToDate":"14/08/2017",
            "Reason":"Going home",
            "Time":"8/08/2017"
          },
          {
            "From":"Santhosh",
            "Type":"Skills",
            "Skills":["ReactJS","NodeJS","ExpressJS","MongoDB"],
            "Time":"7/08/2017"
          },
          {
            "From":"Jeevan",
            "Type":"SignUp",
            "Details":{
                          "Designation":"Project Engineer",
                          "Project":"Ahold US",
                          "MailId":"Jeevan@wipro.com",
                          "Mobile":"0123456789",
                          "Skills":["AngularJS","Socket.io","Redis"]
                        },
           "Time":"06/08/2017"
          }
        ];

var history=[
            {
              "From":"Mini K",
              "Type":"Leave",
              "FromDate":"14/08/2017",
              "ToDate":"14/08/2017",
              "Reason":"Going home",
              "Time":"8/08/2017",
              "Status":"Approved"
            },
            {
              "From":"Santhosh",
              "Type":"Skills",
              "Skills":["ReactJS","NodeJS","ExpressJS","MongoDB"],
              "Time":"7/08/2017",
              "Status":"Approved"
            },
            {
              "From":"Jeevan",
              "Type":"SignUp",
              "Details":{
                            "Designation":"Project Engineer",
                            "Project":"Ahold US",
                            "MailId":"Jeevan@wipro.com",
                            "Mobile":"0123456789",
                            "Skills":["AngularJS","Socket.io","Redis"]
                          },
             "Time":"06/08/2017",
             "Status":"Rejected"
            }
            ];

  const options = [
    { key: 'Pending', name: 'Pending' },
    { key: 'History', name: 'History' }
  ]

export default class Approvals extends React.Component{

  constructor(props){
      super(props);
      this.state={
        active:"Pending"
      }
      this.handleMenuChange=this.handleMenuChange.bind(this);
  }

  handleMenuChange(e,{name}){
  //  console.log(item);
    this.setState({active:name})
  }

  render(){

    var display=null;

    if(this.state.active=="Pending"){
        display=<Pending data={data}/>
    }
    else{
      display=<ApprovalHistory data={history}/>
    }

    return(
      <div>
      <ApprovalsMenu options={options} active={this.state.active} activeChange={this.handleMenuChange}/>
      <div style={{overflowY:"scroll",height:window.innerHeight-((window.innerHeight*20)/100)}}>
      {display}
      </div>
      </div>
    )
  }

}
