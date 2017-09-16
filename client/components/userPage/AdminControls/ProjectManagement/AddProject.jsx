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


export default class AddProject extends React.Component{
  constructor(props){
    super(props);
    this.state={
      projectName:"",
      description:"",
      resources:[],
      projectManager:""
    }
    this.handleInputChange=this.handleInputChange.bind(this);
    this.handleCreate=this.handleCreate.bind(this);
  }

  handleInputChange(opt,e,data){
    if(opt=="name"){
      this.setState({projectName:data.value})
    }
    else if(opt=="desc"){
      this.setState({description:data.value})
    }
    else if(opt=="res"){
      var temp=[];
      data.value.map((item,i)=>{
        temp.push({"key":item,"value":item,"text":item.charAt(0).toUpperCase()+item.slice(1)})
      })
      this.setState({resources:temp})
    }
    else{
      this.setState({projectManager:data.value.charAt(0).toUpperCase()+data.value.slice(1)})
    }
  }

  handleCreate(){
      //console.log(this.state.projectName,this.state.description,this.state.resources,this.state.projectManager);
      var resources=[];
      this.state.resources.map((item,i)=>{
        var resourcesObj={
                       "name":item.value.charAt(0).toUpperCase()+item.value.slice(1),
                       "url":"./../../../src/images/default.jpg",
                       "designation":"Project Engineer"
                    }
          resources.push(resourcesObj);
      })
      var teamsObj={
                    "Name":this.state.projectName,
                    "Resources":resources,
                    "TeamLead":this.state.projectManager
                  }
      var obj={
                "ProjectName":this.state.projectName,
                "Description":this.state.description,
                "ProjectManager":this.state.projectManager,
                "Resources":[teamsObj]
              }
      this.props.data.push(obj);
      this.props.close();
  }

  render(){
    var disableButton=true;
    if(this.state.projectName!=""&&this.state.description!=""&&this.state.resources.length>0&&this.state.projectManager!=""){
      disableButton=false;
    }

    return(
      <div>
      <center>
        <Header as="h3">
        <Header.Content>New Project</Header.Content>
        <Icon style={{float:"right",cursor:"pointer"}} name='remove' size="small" onClick={this.props.toggle}/>
        </Header>
        </center>
        <h4 style={{marginLeft:"25%"}}>Project Name</h4>
        <center>
        <Input placeholder='Project Name' style={{width:"50%"}} onChange={this.handleInputChange.bind(this,"name")}/>
        </center>
        <h4 style={{marginLeft:"25%"}}>Description</h4>
        <center>
        <Form>
          <TextArea placeholder='Tell us more about the project...' style={{minHeight: 100,width:"50%"}} onChange={this.handleInputChange.bind(this,"desc")}/>
        </Form>
        </center>
        <h4 style={{marginLeft:"25%"}}>Add Resources</h4>
        <center>
        <Dropdown placeholder='Select Resources' fluid multiple search selection options={freeResources} style={{width:"50%"}} onChange={this.handleInputChange.bind(this,"res")}/>
        </center>
        <h4 style={{marginLeft:"25%"}}>Choose Project Manager</h4>
        <center>
        <Dropdown placeholder='Choose Project Manager' fluid selection search options={this.state.resources} style={{width:"50%"}} onChange={this.handleInputChange.bind(this,"manager")}/>
        <Button color="green" style={{margin:"10px"}} onClick={this.handleCreate} disabled={disableButton}>Create</Button>
        </center>
        </div>

    )
  }
}
