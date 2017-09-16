import React from 'react';

import {Header,Form,Input,TextArea,Button,Dropdown,Icon} from 'semantic-ui-react';


const freeResources = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'ia', text: 'Information Architecture', value: 'ia' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' },
  { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
  { key: 'meteor', text: 'Meteor', value: 'meteor' },
  { key: 'node', text: 'NodeJS', value: 'node' },
  { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
  { key: 'python', text: 'Python', value: 'python' },
  { key: 'rails', text: 'Rails', value: 'rails' },
  { key: 'react', text: 'React', value: 'react' },
  { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
  { key: 'ruby', text: 'Ruby', value: 'ruby' },
  { key: 'ui', text: 'UI Design', value: 'ui' },
  { key: 'ux', text: 'User Experience', value: 'ux' },
]

export default class AddTeams extends React.Component{

  constructor(props){
    super(props);
    this.state={
      teamName:"",
      teamLead:"",
      teamResources:[]
    }
    this.handleInputChange=this.handleInputChange.bind(this);
    this.handleCreate=this.handleCreate.bind(this);
  }

  handleInputChange(opt,e,data){
    if(opt=="teamName"){
      this.setState({teamName:data.value})
    }
    else if(opt=="lead"){
      this.setState({teamLead:data.value})
    }
    else{
      //console.log(data.value);
      var temp=[];
      data.value.map((item,i)=>{
        temp.push({"key":item,"value":item,"text":item.charAt(0).toUpperCase()+item.slice(1)})
      })
      this.setState({teamResources:temp})
    }
  }

  handleCreate(){
    var resources=[];
    this.state.teamResources.map((item,i)=>{
      var teamObj={
                    "name":item.value,
                     "url":"./../../../src/images/default.jpg",
                     "designation":"Project Engineer"
                  }
        resources.push(teamObj);
    })
    var obj={
      "Name":this.state.teamName,
      "Resources":resources,
      "TeamLead":this.state.teamLead

    }
      this.props.addTeams(obj);
  }

  render(){

    //console.log(this.state.teamResources);
    //console.log(this.state.teamName,this.state.teamResources.length,this.state.teamLead);
    var disableButton=true;
    if(this.state.teamName!=""&&this.state.teamResources.length>0&&this.state.teamLead!=""){
      disableButton=false;
    }

    return(
      <div>
      <h4 style={{marginLeft:"25%"}}>Team Name</h4>
      <center>
      <Input placeholder='Project Name' style={{width:"50%"}} onChange={this.handleInputChange.bind(this,"teamName")}/>
      </center>
      <h4 style={{marginLeft:"25%"}}>Add Resources</h4>
      <center>
      <Dropdown placeholder='Select Resources' fluid multiple search selection options={freeResources} style={{width:"50%"}} onChange={this.handleInputChange.bind(this,"teamResources")}/>
      </center>
      <h4 style={{marginLeft:"25%"}}>Choose Team Lead</h4>
      <center>
      <Dropdown placeholder='Choose Team Lead' fluid selection search options={this.state.teamResources} style={{width:"50%"}} onChange={this.handleInputChange.bind(this,"lead")}/>
      <Button color="green" style={{margin:"30px"}} onClick={this.handleCreate} disabled={disableButton}>Create</Button>
      </center>
      </div>
    )
  }
}
