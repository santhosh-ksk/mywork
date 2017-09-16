import React, {Component} from 'react';
import {
  Icon,
  Form,
  Input,
  Button,
  Select,
  Message
} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

let options = [
  {
    key: 'm',
    text: 'Male',
    value: 'male'
  }, {
    key: 'f',
    text: 'Female',
    value: 'female'
  }
]

let letter = /^[a-zA-Z]+$/,
    phoneno=/^\d{10}$/;
export default class personal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      mobileNumber: '',
      gender: '',
      startDate: '',
      errorFname: false,
      errorLname: false,
      errorMnumber: false,
      errorGender:false
    };
  }

  //validate firstName
  validateFirstName() {
    const {firstName} = this.state;
    if (firstName == '' || (!(firstName.match(letter)))) {
      this.setState({errorFname: true});
    }
    else{
      this.setState({errorFname:false})
    }
  }
  //validate lastName
  validateLastName() {
    const {lastName} = this.state;
    if (lastName == ''||(!(lastName.match(letter)))) {
      this.setState({errorLname: true});
    }
    else{
      this.setState({errorLname:false})
    }
  }
  //validate mobileNumber
  validateMobileNumber() {
    const {mobileNumber} = this.state;
    if (mobileNumber == ''||(!(mobileNumber.match(phoneno)))) {
      this.setState({errorMnumber: true});
    }
    else{
      this.setState({errorMnumber:false})
    }
  }

  //validate gender
  validateGender(){
    const{gender} = this.state;
    if(gender == ''){
      this.setState({errorGender: true});
    }
    else{
      this.setState({errorGender:false})
    }
  }

  //validate DatePicker
  ValidateDate(){
    const{startDate} = this.state;
    if(startDate == ''){
      this.setState({errorDate:true});
    }
    else{
      this.setState({errorDate:false})
    }
  }

  //handleChange of the form fields
  handleChange(e, {name, value}) {
    this.setState({[name]: value})
  }

  handleChangeGender(event, data) {
    this.setState({gender: data.value});
  }

  //setting DatePicker
  handleChangeDate(date) {
    this.setState({startDate: date});
  }
  //handlechange page
  handleChangePage(e) {
    e.preventDefault();
    const {firstName, lastName, mobileNumber, gender, startDate} = this.state;
    if (firstName == '' || (!(firstName.match(letter)))) {

      this.setState({errorFname: true})
    }
    if (lastName == '' || (!(lastName.match(letter)))) {

      this.setState({errorLname: true})
    }
    if (mobileNumber==''||(!(mobileNumber.match(phoneno)))) {

      this.setState({errorMnumber: true})
    }
    if(gender == ''){

      this.setState({errorGender:true})
    }
    if(startDate == ''){

      this.setState({errorDate:true})
    }

    if(firstName != ''&&lastName!=''&&mobileNumber!=''&&gender!=''&&startDate!='') {
      
      var personalObj={
        'firstName':firstName,
        'lastName':lastName,
        'mobileNumber':mobileNumber,
        'gender':gender,
        'startDate':startDate._d
      };
      this.props.buttonClicked(personalObj);
    }
  }

  render() {
    const {firstName, lastName, mobileNumber, gender, startDate} = this.state;
    return (
      <div>
        <Form.Field inline error={this.state.errorFname}>
          <Input fluid type='text' name='firstName' onBlur={this.validateFirstName.bind(this)} value={firstName} icon='user' iconPosition='left' onChange={this.handleChange.bind(this)} placeholder='First Name'/>
        </Form.Field>
        <Form.Field inline error={this.state.errorLname}>
          <Input fluid type='text' name='lastName' onBlur={this.validateLastName.bind(this)} value={lastName} icon='user' iconPosition='left' onChange={this.handleChange.bind(this)} placeholder='Last Name'/>
        </Form.Field>
        <Form.Field inline error={this.state.errorMnumber}>
          <Input fluid type='text' name='mobileNumber' onBlur={this.validateMobileNumber.bind(this)} value={mobileNumber} icon='mobile' iconPosition='left' onChange={this.handleChange.bind(this)} placeholder='Mobile Number'/>
        </Form.Field>
        <Form.Field fluid control={Select} name='gender' value={gender} options={options} onBlur={this.validateGender.bind(this)} onChange={this.handleChangeGender.bind(this)} placeholder='Gender' error={this.state.errorGender}/ >
        <Form.Field  style={{display:"inline"}} error={this.state.errorDate}>
          <DatePicker
              dateFormat="DD/MM/YYYY"
              selected={startDate}
              onBlur={this.ValidateDate.bind(this)}
              onChange={this.handleChangeDate.bind(this)}
              placeholderText="date of birth"
              maxDate={moment()}
              fixedHeight
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select" />
        </Form.Field>

        <Button  color='green'  style={{marginTop:"10px"}} onClick={this.handleChangePage.bind(this)}  animated>
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden><Icon name='right arrow'/></Button.Content>
        </Button>
      </div>
    );
  }
}
