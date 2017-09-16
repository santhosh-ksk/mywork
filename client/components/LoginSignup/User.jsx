import React from 'react';
import {Icon, Form, Input, Button} from 'semantic-ui-react';
import passwordHash from 'password-hash';

let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export default class user extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: '',
      mailID: '',
      password: '',
      confirmPassword: '',
      errorUserID: false,
      errormail: false,
      errorPassword: false,
      errorConfirmPassword: false
    };
  }

  //validateUserID
  validateUserID() {
    const {userID} = this.state;
    if (userID == '') {
        this.setState({errorUserID: true});
      } else {
        this.setState({errorUserID: false});
      }
    }

    //validateMailID
    validateMailID() {
      const {mailID} = this.state;
      if (mailID == '' || (!(mailID.match(mailformat)))) {
        this.setState({errormail: true});
      } else {
        this.setState({errormail: false});
      }
    }

    //
    validatePassword() {
      const {password} = this.state;
      if (password == '') {
        this.setState({errorPassword: true});
      } else {
        this.setState({errorPassword: false});
      }
    }

    //validateConfirmPassword
    validateConfirmPassword() {
      const {password, confirmPassword} = this.state;
      if (confirmPassword == '' || (!(confirmPassword.match(password)))) {
        this.setState({errorConfirmPassword: true});
      } else {
        this.setState({errorConfirmPassword: false});
      }
    }
    //handleChangeof the form fields
    handleChange(e, {name, value}) {
      this.setState({[name]: value});
    }

    //handlechange page
    handleChangePage(e) {
      e.preventDefault();
      const {userID, mailID, password, confirmPassword} = this.state;
      if (userID == ''){
          this.setState({errorUserID: true});
        }
        if (mailID == '' || (!(mailID.match(mailformat)))) {
          this.setState({errormail: true});
        }
        if (password == '') {
          this.setState({errorPassword: true});
        }
        if (confirmPassword == '' || (!(confirmPassword.match(password)))) {
          this.setState({errorConfirmPassword: true});
        }

        if (userID != '' && mailID != '' && password != '' && password.match(confirmPassword)) {
          var hashedPassword = passwordHash.generate(password); 
          var userObj={
            'userID':userID,
            'mailID':mailID,
            'password':hashedPassword,
            'confirmPassword':confirmPassword
          };
          this.props.buttonClicked(userObj);
        }
      }
      render() {
        const {userID, mailID, password, confirmPassword, errorUserID, errormail, errorPassword, errorConfirmPassword} = this.state;
        return (
          <div>
            <Form.Field inline error={errorUserID}>
              <Input fluid type='text' name='userID' value={userID} icon='user' iconPosition='left' onBlur={this.validateUserID.bind(this)} onChange={this.handleChange.bind(this)} placeholder='User ID'/>
            </Form.Field>
            <Form.Field inline error={errormail}>
              <Input fluid type='text' name='mailID' value={mailID} icon='user' iconPosition='left' onBlur={this.validateMailID.bind(this)} onChange={this.handleChange.bind(this)} placeholder='Mail ID'/>
            </Form.Field>
            <Form.Field inline error={errorPassword}>
              <Input fluid type='text' name='password' value={password} icon='privacy' iconPosition='left' onBlur={this.validatePassword.bind(this)} onChange={this.handleChange.bind(this)} placeholder='Password'/>
            </Form.Field>
            <Form.Field inline error={errorConfirmPassword}>
              <Input fluid type='text' name='confirmPassword' value={confirmPassword} icon='privacy' iconPosition='left' onBlur={this.validateConfirmPassword.bind(this)} onChange={this.handleChange.bind(this)} placeholder='Confirm Password'/>
            </Form.Field>

            <Button color='green'  style={{marginTop:"10px"}} onClick={this.handleChangePage.bind(this)} animated>
              <Button.Content visible>Next</Button.Content>
              <Button.Content hidden><Icon name='right arrow'/></Button.Content>
            </Button>
          </div>
        );
      }
    }
