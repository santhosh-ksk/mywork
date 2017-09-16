import React, {Component} from 'react';
import {
  Grid,
  Icon,
  Header,
  Form,
  Input,
  Button,
  Dropdown,
  Image,
  List,
  Step,
  Container,
  Select,
  Card,
  Breadcrumb
} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
//import {Link} from 'react-router-dom';
import {Link} from 'react-router';
import request from 'superagent';

import Personal from './Personal.jsx';
import User from './User.jsx';
import Project from './Project.jsx';
import Skill from './Skill.jsx';
import Office from './Office.jsx';
import Media from 'react-media';

let userDetails,
    header;


export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLabel: false,
      personalLabel: true,
      projectLabel: false,
      skillLabel: false,
      officeLabel: false,
      userDisable: true,
      projectDisable: true,
      skillDisable: true,
      officeDisable: true,
      personalData:{},
      userData:{},
      projectData:{},
      skillData:{},
      officeData:{}
    }
      this.switchToSignUp=this.switchToSignUp.bind(this);
  }

  //personal page values
  handleChangePersonalPage(personalObj) {
    this.setState({
      personalData:personalObj,
      userLabel: true,
      personalLabel: false,
      projectLabel: false,
      skillLabel: false,
      officeLabel: false,
      userDisable: false
    })
    header = 'User Details'
  }

  //User page values
  handleChangeUserPage(userObj) {
    this.setState({
      projectLabel: true,
      userData:userObj,
      userLabel: false,
      personalLabel: false,
      skillLabel: false,
      officeLabel: false,
      projectDisable: false
    })
    header = 'Project Details'
  }

  //Project page values
  handleChangeProjectPage(projectObj) {
    this.setState({
      skillLabel: true,
      projectData:projectObj,
      userLabel: false,
      projectLabel: false,
      personalLabel: false,
      officeLabel: false,
      skillDisable: false
    })
    header = 'Skill Details'
  }

  //skill page values
  handleChangeSkillPage(skillObj) {
    this.setState({
      officeLabel: true,
      skillData:skillObj,
      userLabel: false,
      projectLabel: false,
      personalLabel: false,
      skillLabel: false,
      officeDisable: false
    })
    header = 'Office Details'
  }

  // office page redirecting to server
  handleChange(officeObj) {

      this.setState({
        officeData:officeObj
      })

      //request.post('/signup/first').send({'adid': that.state.adID}).end(function(err, res) {})
      request.post('/signup').send({'personal':this.state.personalData,'user':this.state.userData,'project':this.state.projectData,'skill':this.state.skillData,'office':officeObj}).end(function(err, res){

      })
  }

  switchToSignUp(){
  
      this.props.handleSwitch();
  }

  render() {

    //getting personal details
    if (this.state.personalLabel) {
      userDetails =<Personal buttonClicked={this.handleChangePersonalPage.bind(this)}/>
      header="Personal";
    }

    // getting User details
    if ((this.state.userLabel)) {
      userDetails = <User buttonClicked={this.handleChangeUserPage.bind(this)}/>
      header="User";
    }

    //getting project details
    if ((this.state.projectLabel)) {
      userDetails = <Project buttonClicked={this.handleChangeProjectPage.bind(this)}/>
      header="Project";
    }

    //getting skill details
    if (this.state.skillLabel) {
      userDetails = <Skill buttonClicked={this.handleChangeSkillPage.bind(this)}/>
      header="Skill";
    }

    //getting office details
    if (this.state.officeLabel) {
      userDetails =<Office buttonClicked={this.handleChange.bind(this)}/>
      header="Office";
    }

    const styles = {
      FormStyle: {
        width: '100%',
        padding:"0% 30%"
      },
      FormMobileStyle: {
        width: '100%',
        padding:"0% 0%"
      },
      FormTabletStyle: {
        width: '100%',
        padding:"0% 20%"
      }
    }
    let FormComponent =<div>
      <Media query="(min-width: 1280px)">
      <Card fluid style={{backgroundColor:"rgba(255,255,255,0.5)",marginBottom: '50px'}}>
       <Card.Content>
        <Card.Header>SIGN UP</Card.Header>
         </Card.Content>
          <Card.Content>
          <Step.Group >
            <Step icon='user' title='Personal' description='Personal information' completed={!(this.state.userDisable)}/>
            <Step icon='user' title='User' description='User information'  disabled={this.state.userDisable} completed={!(this.state.projectDisable)}/>
            <Step icon='trophy' title='Project' description='Project Information'  disabled={this.state.projectDisable} completed={!(this.state.skillDisable)}/>
            <Step icon='student' title='Skills' description='Skill information 'disabled={this.state.skillDisable} completed={!(this.state.officeDisable)}/>
            <Step icon='building' title='Office' description='Office information'disabled={this.state.officeDisable} />
          </Step.Group>
          <Header size='medium'>{header}</Header>
          <Form style={styles.FormStyle}>
            {userDetails}
          </Form>
          </Card.Content>
          <Card.Content extra>
          <Link to={'login'}><a onClick={this.switchToSignUp}>
          Already have an Account?
        </a></Link>
    </Card.Content>
        </Card>
        </Media>
        <Media query="(min-width: 768px) and (max-width: 1279px)">
        <Card fluid style={{backgroundColor:"rgba(255,255,255,0.5)",marginBottom: '50px'}}>
         <Card.Content>
          <Card.Header>SIGN UP</Card.Header>
           </Card.Content>
            <Card.Content>
        <Breadcrumb>
        <Breadcrumb.Section active>Personal</Breadcrumb.Section>
        <Breadcrumb.Divider icon='right angle'/>
        <Breadcrumb.Section active={!(this.state.userDisable)}>User</Breadcrumb.Section>
        <Breadcrumb.Divider icon='right angle'/>
        <Breadcrumb.Section  active={!(this.state.projectDisable)}>Project</Breadcrumb.Section>
        <Breadcrumb.Divider icon='right angle'/>
        <Breadcrumb.Section  active={!(this.state.skillDisable)}>Skill</Breadcrumb.Section>
        <Breadcrumb.Divider icon='right angle'/>
        <Breadcrumb.Section  active={!(this.state.officeDisable)}>Office</Breadcrumb.Section>
        </Breadcrumb>
        <Header size='medium'>{header}</Header>
        <Form style={styles.FormTabletStyle}>
          {userDetails}
        </Form>
        </Card.Content>
        <Card.Content extra>
      <Link to={'login'}><a onClick={this.switchToSignUp}>
      Already have an Account?
    </a></Link>
  </Card.Content>
      </Card>
      </Media>
      <Media query="(max-width: 767px)">
      <Card fluid style={{backgroundColor:"rgba(255,255,255,0.5)",marginBottom: '50px'}}>
       <Card.Content>
        <Card.Header>SIGN UP</Card.Header>
         </Card.Content>
          <Card.Content>
      <Breadcrumb>
      <Breadcrumb.Section active>Personal</Breadcrumb.Section>
      <Breadcrumb.Divider icon='right angle'/>
      <Breadcrumb.Section active={!(this.state.userDisable)}>User</Breadcrumb.Section>
      <Breadcrumb.Divider icon='right angle'/>
      <Breadcrumb.Section  active={!(this.state.projectDisable)}>Project</Breadcrumb.Section>
      <Breadcrumb.Divider icon='right angle'/>
      <Breadcrumb.Section  active={!(this.state.skillDisable)}>Skill</Breadcrumb.Section>
      <Breadcrumb.Divider icon='right angle'/>
      <Breadcrumb.Section  active={!(this.state.officeDisable)}>Office</Breadcrumb.Section>
      </Breadcrumb>
      <Header size='medium'>{header}</Header>
      <Form style={styles.FormMobileStyle}>
        {userDetails}
      </Form>
      </Card.Content>
      <Card.Content extra>
      <Link to={'login'}><a onClick={this.switchToSignUp}>
      Already have an Account?
      </a></Link>
</Card.Content>
    </Card>
    </Media>
      </div>

    return (
      <Grid textAlign='center' centered style={{paddingTop:"80px"}}>
        <Grid.Row>
          <Grid.Column width={16}>
            <Container>
              {FormComponent}
            </Container>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    );
  }
}
