import React from 'react';
import {
  Icon,
  Form,
  Input,
  Button,
  Dropdown,
  List,
  Select
} from 'semantic-ui-react';

import {Link} from 'react-router';


let locations = [
  {
    key: 'b-sjp',
    text: 'Bangalore_sjp',
    value: 'ban-sjp'
  }, {
    key: 'b-ec',
    text: 'Bangalore_ec',
    value: 'ban-ec'
  }, {
    key: 'b-wf',
    text: 'Banglore_whtfld',
    value: 'ban-wf'
  }
];

let towers = [
  {
    key: 't1',
    text: 'Tower1',
    value: 'tower1'
  }, {
    key: 't2',
    text: 'Tower2',
    value: 'tower2'
  }, {
    key: 't3',
    text: 'Tower',
    value: 'tower3'
  }, {
    key: 't4',
    text: 'Tower4',
    value: 'tower4'
  }, {
    key: 't5',
    text: 'Tower5',
    value: 'tower5'
  }
];

let floors = [
  {
    key: '0',
    text: 'Ground',
    value: 'ground'
  }, {
    key: '1',
    text: 'First',
    value: 'first'
  }, {
    key: '2',
    text: 'Second',
    value: 'second'
  }, {
    key: '3',
    text: 'Third',
    value: 'third'
  }, {
    key: '4',
    text: 'Fourth',
    value: 'fourth'
  }
];

let wings = [
  {
    key: 'a',
    text: 'A wing',
    value: 'a wing'
  }, {
    key: 'b',
    text: 'B wing',
    value: 'b wing'
  }
];

export default class office extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      cubicle: '',
      voip: '',
      location: '',
      tower: '',
      floor: '',
      wing: '',
      errorCubicle:false,
      errorVoip:false,
      errorLocation:false,
      errorTower:false,
      errorFloor:false,
      errorWing:false
    };
  }

  //handleChangeof the form fields
  handleChange(e,{name,value}){
    this.setState({[name]:value});
  }
  //setting Location
  handleChangeLocation(event, data) {
    this.setState({location: data.value});
  }

  //setting Tower
  handleChangeTower(event, data) {
    this.setState({tower: data.value});
  }

  //setting Floor
  handleChangeFloor(event, data) {
    this.setState({floor: data.value});
  }

  //setting Wing
  handleChangeWing(event, data) {
    this.setState({wing: data.value});
  }
  //setting role
  handleChangeRole(event, data) {
    this.setState({role: data.value});
  }
  //validateCubicle
  validateCubicle(){
    const{cubicle}=this.state;
    if(cubicle==''){
      this.setState({errorCubicle:true})
    }
    else{
      this.setState({errorCubicle:false})
    }
  }
  //validateVoip
  validateVoip(){
    const{voip}=this.state;
    if(voip==''){
      this.setState({errorVoip:true})
    }
    else{
      this.setState({errorVoip:false})
    }
  }
  //validateLocation
  validateLocation(){
    const{location}=this.state;
    if(location==''){
      this.setState({errorLocation:true})
    }
    else{
      this.setState({errorLocation:false})
    }
  }
  //validateTower
  validateTower(){
    const{tower}=this.state;
    if(tower==''){
      this.setState({errorTower:true})
    }
    else{
      this.setState({errorTower:false})
    }
  }
  //validateFloor
  validateFloor(){
    const{floor}=this.state;
    if(floor==''){
      this.setState({errorFloor:true})
    }
    else{
      this.setState({errorFloor:false})
    }
  }
  //validateWing
  validateWing(){
    const{wing}=this.state;
    if(wing==''){
      this.setState({errorWing:true})
    }
    else{
      this.setState({errorWing:false})
    }
  }

  //handlechange page
  handleChangePage(e){
    e.preventDefault();
    const {cubicle, voip, location, tower, floor, wing}=this.state;
    if(cubicle==''){
      this.setState({errorCubicle:true})
    }
    if(voip==''){
      this.setState({errorVoip:true})
    }
    if(location==''){
      this.setState({errorLocation:true})
    }
    if(tower==''){
      this.setState({errorTower:true})
    }
    if(floor==''){
      this.setState({errorFloor:true})
    }
    if(wing==''){
      this.setState({errorWing:true})
    }
    if(cubicle!=''&&voip!=''&&location!=''&&tower!=''&&floor!=''&&wing!=''){
      var officeObj={
        'cubicle':cubicle,
        'voip':voip,
        'location':location,
        'tower':tower,
        'floor':floor,
        'wing':wing
      }
      this.props.buttonClicked(officeObj);
    }
  }
  render(){
    const {cubicle, voip, location, tower, floor, wing, errorCubicle, errorVoip, errorLocation, errorTower, errorFloor, errorWing}=this.state;
      return(
      <div>
      <Form.Field  fluid control={Select} value={location} onBlur={this.validateLocation.bind(this)} onChange={this.handleChangeLocation.bind(this)} options={locations} placeholder='Location' error={errorLocation}/>
      <Form.Field  fluid control={Select} value={tower} onBlur={this.validateTower.bind(this)} onChange={this.handleChangeTower.bind(this)} options={towers} placeholder='Tower' error={errorTower}/>
      <Form.Field  fluid control={Select} value={floor} options={floors} onBlur={this.validateFloor.bind(this)} onChange={this.handleChangeFloor.bind(this)} placeholder='Floor' error={errorFloor}/>
      <Form.Field  fluid control={Select} value={wing} options={wings} onBlur={this.validateWing.bind(this)} onChange={this.handleChangeWing.bind(this)} placeholder='Wing' error={errorWing}/>
      <Form.Field inline error={errorCubicle}>
        <Input fluid type='text' name='cubicle'value={cubicle} onBlur={this.validateCubicle.bind(this)} onChange={this.handleChange.bind(this)} placeholder='Cubicle number'/>
      </Form.Field>
      <Form.Field inline error={errorVoip}>
        <Input fluid type='text'name='voip' value={voip} onBlur={this.validateVoip.bind(this)} onChange={this.handleChange.bind(this)} placeholder='voip number'/>
      </Form.Field>
      <Button color='green'  style={{marginTop:"10px"}} onClick={this.handleChangePage.bind(this)} animated>
        <Button.Content visible>SIGN UP</Button.Content>
        <Button.Content hidden><Icon name='right arrow'/></Button.Content>
      </Button>
      </div>
    );
  }
}
