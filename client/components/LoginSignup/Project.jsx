import React from 'react';
import {
  Icon,
  Form,
  Input,
  Button,
  Dropdown
} from 'semantic-ui-react';

let roles = [
  {
    key: 'DM',
    text: 'DM',
    value: 'Delivery Manager'
  }, {
    key: 'PM',
    text: 'PM',
    value: 'Project Manager'
  }, {
    key: 'TL',
    text: 'TL',
    value: 'Team Lead'
  }, {
    key: 'EMP',
    text: 'EMP',
    value: 'Employee'
  }
];

export default class project extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      projectName:'',
      teamName:'',
      manager:'',
      role:'',
      errorProjectName:false,
      errorTeamName:false,
      errorManager:false,
      errorRole:false
    };
  }
  //validateProjectName
  validateProjectName(){
    const{projectName}=this.state;
    if(projectName==''){
      this.setState({errorProjectName:true});
    }
    else{
      this.setState({errorProjectName:false});
    }
  }
  //validateTeamName
  validateTeamName(){
    const{teamName}=this.state;
    if(teamName==''){
      this.setState({errorTeamName:true});
    }
    else{
      this.setState({errorTeamName:false});
    }
  }
  //validateManager
  validateManager(){
    const{manager}=this.state;
    if(manager==''){
      this.setState({errorManager:true});
    }
    else{
      this.setState({errorManager:false});
    }
  }
  //validateRole
  validateRole(){
    const{role}=this.state;
    if(role==''){
      this.setState({errorRole:true});
    }
    else{
      this.setState({errorRole:false});
    }
  }
  //handleChangeof the form fields
  handleChange(e,{name,value}){
    this.setState({[name]:value});
  }

  //setting role
  handleChangeRole(event, data) {
    this.setState({role: data.value});
  }
  //handlechange page
  handleChangePage(e){
    e.preventDefault();
    const {projectName, teamName, manager, role}=this.state;
    if(projectName==''){
      this.setState({errorProjectName:true});
    }
    if(teamName==''){
      this.setState({errorTeamName:true});
    }
    if(manager==''){
      this.setState({errorManager:true});
    }
    if(role==''){
      this.setState({errorRole:true});
    }
    if(projectName!=''&&teamName!=''&&manager!=''&&role!=''){
      var projectObj={
        'projectName':projectName,
        'teamName':teamName,
        'manager':manager,
        'role':role,
      };
      this.props.buttonClicked(projectObj);
    }
  }
  render(){
    const{projectName, teamName,  manager, errorProjectName, errorTeamName, errorManager, errorRole}=this.state;
    return(
      <div>
          <Form.Field inline error={errorProjectName}>
            <Input  fluid type='text' name='projectName' onBlur={this.validateProjectName.bind(this)} value={projectName} icon='home' iconPosition='left' onChange={this.handleChange.bind(this)} placeholder='Project Name'/>
          </Form.Field>
          <Form.Field inline error={errorTeamName}>
            <Input fluid type='text' name='teamName' onBlur={this.validateTeamName.bind(this)} value={teamName} icon='object group' iconPosition='left' onChange={this.handleChange.bind(this)} placeholder='Team Name'/>
          </Form.Field>
          <Form.Field inline error={errorManager}>
            <Input fluid type='text' name='manager'  value={manager} icon='user' iconPosition='left' onBlur={this.validateManager.bind(this)} onChange={this.handleChange.bind(this)} placeholder='manager'/>
          </Form.Field>
          <Dropdown fluid labeled button className='icon' icon='users' value={this.state.role} options={roles} onChange={this.handleChangeRole.bind(this)} placeholder='role' onBlur={this.validateRole.bind(this)} error={errorRole}/><br/>
          <br/>
          <Button color='green' style={{marginTop:"10px"}} onClick={this.handleChangePage.bind(this)} animated>
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden><Icon name='right arrow'/></Button.Content>
          </Button>
      </div>
    );
  }
}
