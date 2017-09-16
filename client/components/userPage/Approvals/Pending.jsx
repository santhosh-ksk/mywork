import React from 'react';

import { Button, Card, Header, Image,Segment,Table,Icon,Label } from 'semantic-ui-react';

import LeaveDetails from './LeaveDetails.jsx';

import SkillDetails from './SkillDetails.jsx';

import SignUpDetails from './SignUpDetails.jsx';

import Filter from './Filter.jsx';

var filterOptions=[
                  { key: 'Leave', text: 'Leave Request', value: 'Leave' },
                  { key: 'Skills', text: 'Skills Request', value: 'Skills' },
                  { key: 'SignUp', text: 'SignUP Request', value: 'SignUp' },
                  { key: 'None', text: 'None', value: 'None' }
                ];

export default class Pending extends React.Component{

  constructor(props){

      super(props);
      this.state={
        expandIndex:-1,
        actions:[],
        filter:"None"
      }
      this.handleExpand=this.handleExpand.bind(this);
      this.handleActions=this.handleActions.bind(this);
      this.handleFilterChange=this.handleFilterChange.bind(this);
  }

  handleExpand(i){
    if(i==this.state.expandIndex){
      this.setState({expandIndex:-1})
    }
    else{
    this.setState({expandIndex:i})
  }
  }

  handleActions(i,action){
    var arr=this.state.actions;
    var obj={"Index":i,"Action":action};
    arr.push(obj);
    this.setState({actions:arr})
  }

  handleFilterChange(option){
      this.setState({filter:option})
  }

  render(){

    var display=null;

    var array=[];

    if(this.state.filter=="None"){
      array=this.props.data;
    }
    else{
      array=_.filter(this.props.data, ['Type',this.state.filter]);
    }

    display=array.map((item,i)=>{

      var content=null;
      var icon=null;
      var show="none";
      if(i==this.state.expandIndex){
        show="block";
      }
      var actions=null;
      if(_.filter(this.state.actions,['Index',i]).length>0){
        if(_.filter(this.state.actions,['Index',i])[0].Action=="Approve"){
          actions=<Label style={{float:"right"}} color="green"><Icon name='checkmark'/>Approved</Label>
        }
        else{
          actions=<Label style={{float:"right"}} color="red"><Icon name='remove'/>Declined</Label>
        }
      }
      else{
          actions=<div>
                  <Button style={{float:"right"}} basic color="red" size="tiny" onClick={this.handleActions.bind(this,i,"Decline")}>Decline</Button>
                  <Button style={{float:"right"}} basic color="green" size="tiny" onClick={this.handleActions.bind(this,i,"Approve")}>Approve</Button>
                  </div>
      }
      if(item.Type=="Leave"){
        content=<LeaveDetails data={item} show={show}/>
      }
      else if(item.Type=="Skills"){
        content=<SkillDetails data={item} show={show}/>
      }
      else{
        content=<SignUpDetails data={item} show={show}/>
      }
      if(this.state.expandIndex==-1){
        icon=<Icon name="chevron down" style={{float:"right",cursor:"pointer",marginTop:"10px"}} onClick={this.handleExpand.bind(this,i)}/>
      }
      else{
        icon=<Icon name="chevron up" style={{float:"right",cursor:"pointer",marginTop:"10px"}} onClick={this.handleExpand.bind(this,i)}/>
      }

      return(
      <Card key={i} style={{marginBottom:"0px"}}>
      <Card.Content>
        <Image size='mini' src='./../../../src/images/default.jpg' floated='left'/>
        <Card.Header>
          {item.From}
          {actions}
        </Card.Header>
        <Card.Meta>
          {item.Time}
        </Card.Meta>
        <Card.Description>
          <Header as="h4" style={{display:"inline"}}>{item.Type} Request</Header>
          {icon}
          {content}
        </Card.Description>
      </Card.Content>
    </Card>
     )
     
    })

    return(
      <div>
       <Filter filterOptions={filterOptions} applyFilter={this.handleFilterChange}/>
       <Card.Group itemsPerRow={1}>
          {display}
       </Card.Group>
      </div>
    )
  }

}
