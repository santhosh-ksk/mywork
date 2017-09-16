import React from 'react';

import { Modal,Icon } from 'semantic-ui-react';

import TeamsView from './TeamsView.jsx';

import ResourcesView from './ResourcesView.jsx';

import _ from 'lodash';

import AddTeams from './AddTeams.jsx';


export default class DetailsDialog extends React.Component{

  constructor(props){
      super(props);
  }

  render(){

    if(this.props.data.length>0){
    var back=null;
    if(this.props.selectedTeam!=""){
      back=<Icon style={{float:"left"}} name='arrow left' style={{cursor:"pointer"}} onClick={this.props.handleDialogOpen.bind(this,"Teams",this.props.selectedProject)}/>
    }
    var display=null;
    if(this.props.view=="Teams"){
      display=<TeamsView data={this.props.data[0].Resources} addTeams={this.props.handleDialogOpen} project={this.props.selectedProject} handleTeamChange={this.props.handleTeamChange}/>
    }
    else if(this.props.view=="AddTeams"){
      display=<AddTeams addTeams={this.props.addTeams}/>
    }
    else{
      var arr=this.props.data[0].Resources;
      if(this.props.selectedTeam!=""){
        arr=_.filter(this.props.data[0].Resources,['Name',this.props.selectedTeam]);
      }
      display=<ResourcesView data={arr} project={this.props.selectedProject} team={this.props.selectedTeam}/>
    }
  }
    return(
      <Modal open={this.props.dialogOpen} onClose={this.props.handleDialogClose} style={{height:"80%"}}>
        <Modal.Header>
         {back}
        <center style={{whiteSpace:"pre-line"}}>{this.props.selectedProject.toUpperCase()+" "+this.props.selectedTeam}</center>
        </Modal.Header>
        <Modal.Content style={{height:"90%",overflowY:"scroll"}}>
            {display}
        </Modal.Content>
      </Modal>
    )
  }
}
