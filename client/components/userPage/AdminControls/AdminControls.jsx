import React from 'react';

import { Menu,Icon } from 'semantic-ui-react';

import ProjectManagement from './ProjectManagement/ProjectManagement.jsx';

import FeedbackControls from './FeedbackControls/FeedbackControls.jsx';

import AdminControlsMenu from './../Common/ComponentSpecificMenu.jsx';

const options = [
  { key: 'Project Management', name: 'Project Management' },
  { key: 'Skill Management', name: 'Skill Management' },
  { key: 'Feedback Controls', name: 'Feedback Controls' }
]


export default class AdminControls extends React.Component{

  constructor(props){
    super(props);
    this.state={
      active:"Project Management"
    }
    this.handleMenuChange=this.handleMenuChange.bind(this);
  }

  //function for changing the menu item
    handleMenuChange(e,{name}){
      this.setState({active:name})
    }

  render(){
    var contentDisplay=null;
    if(this.state.active=="Project Management"){
      contentDisplay=<ProjectManagement/>
    }
    else if(this.state.active=="Feedback Controls"){
      contentDisplay=<FeedbackControls/>
    }
    else{
      contentDisplay=<h1>{this.state.active}</h1>
    }

    return(
      <div>
      <AdminControlsMenu options={options} active={this.state.active} activeChange={this.handleMenuChange}/>
      <div style={{overflowY:"scroll",height:window.innerHeight-((window.innerHeight*20)/100),overflowX:"hidden"}}>
      {contentDisplay}
      </div>
      </div>
    )
  }
}
