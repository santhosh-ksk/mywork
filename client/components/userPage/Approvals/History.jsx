import React from 'react';

import { Button, Image, List,Modal,Header,Divider } from 'semantic-ui-react';

import LeaveDetails from './LeaveDetails.jsx';

import SkillDetails from './SkillDetails.jsx';

import SignUpDetails from './SignUpDetails.jsx';

import Filter from './Filter.jsx';

var filterOptions=[
                  { key: 'Approved', text: 'Approved', value: 'Approved' },
                  { key: 'Rejected', text: 'Rejected', value: 'Rejected' },
                  { key: 'None', text: 'None', value: 'None' }
                ];

export default class ApprovalHistory extends React.Component{

  constructor(props){
      super(props);
      this.state={
        dialogOpen:false,
        detailType:"",
        details:{},
        filter:"None"
      }
      this.handleShowDetails=this.handleShowDetails.bind(this);
      this.handleClose=this.handleClose.bind(this);
      this.handleFilterChange=this.handleFilterChange.bind(this);
  }

  handleShowDetails(i){
      var detail=this.props.data[i];
      this.setState({dialogOpen:true,detailType:detail.Type,details:detail})
  }

  handleClose(){
    this.setState({dialogOpen:false})
  }

  handleFilterChange(option){
      this.setState({filter:option})
  }

  render(){

    var display=null;

    var modalContent=null;

    if(this.state.detailType=="Leave"){
      modalContent=<LeaveDetails data={this.state.details} show="block"/>
    }
    else if(this.state.detailType=="SignUp"){
      modalContent=<SignUpDetails data={this.state.details} show="block"/>
    }
    else{
      modalContent=<SkillDetails data={this.state.details} show="block"/>
    }
    var array=[];

    if(this.state.filter=="None"){
      array=this.props.data;
    }
    else{
      array=_.filter(this.props.data, ['Status',this.state.filter]);
    }

    display=array.map((item,i)=>{
      var color="";
      if(item.Status=="Approved"){
        color="green";
      }
      else{
        color="red";
      }
      return(
        <List.Item key={i}>
          <List.Content floated='right'>
            <Button size="mini" onClick={this.handleShowDetails.bind(this,i)}>More Details</Button>
          </List.Content>
          <Image avatar src='./../../../src/images/default.jpg' />
          <List.Content>
            <List.Header>{item.From}</List.Header>
            <List.Description>{item.Type}&nbsp;Request-<b style={{color:color}}>{item.Status}</b></List.Description>
          </List.Content>
        </List.Item>
      )
    })

    return(
      <div>
      <Filter filterOptions={filterOptions} applyFilter={this.handleFilterChange}/>
      <Header as="h4" style={{marginTop:"0px"}}>Today</Header>
      <Divider/>
      <List divided verticalAlign='middle' >
        {display}
      </List>
      <Modal open={this.state.dialogOpen} onClose={this.handleClose}>
        <Modal.Header>
            {this.state.details.From}&ensp;-&ensp;{this.state.detailType}&nbsp;Request&nbsp;Details
            <p style={{fontSize: "13px",color:"rgba(0,0,0,.6)",marginTop:"10px"}}>
             Status-{this.state.details.Status}
           </p>
        </Modal.Header>
        <Modal.Content>{modalContent}</Modal.Content>
      </Modal>
      </div>
    )
  }

}
