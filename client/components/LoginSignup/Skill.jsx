import React from 'react';
import {
  Icon,
  Form,
  Input,
  Button,
  Dropdown
} from 'semantic-ui-react';
const options = [
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

export default class skill extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      primaryTechSkill:[],
      secondaryTechSkill:[],
      functionalSkill:'',
      processSkill:'',
      certification:'',
      errorPrimary:false,
      errorSecondary:false,
      errorFunctional:false,
      errorProcess:false,
      errorCertification:false
    };
  }
  //validatePrimary
  validatePrimary(){
    const{primaryTechSkill}=this.state;
    if(primaryTechSkill==''){
      this.setState({errorPrimary:true})
    }
    else{
      this.setState({errorPrimary:false})
    }
  }
  //validateSecondary
  validateSecondary(){
    const{secondaryTechSkill}=this.state;
    if(secondaryTechSkill==''){
      this.setState({errorSecondary:true})
    }
    else{
      this.setState({errorSecondary:false})
    }
  }
  //validateFunctional
  validateFunctional(){
    const{functionalSkill}=this.state;
    if(functionalSkill==''){
      this.setState({errorFunctional:true})
    }
    else{
      this.setState({errorFunctional:false})
    }
  }
  //validateProcess
  validateProcess(){
    const{processSkill}=this.state;
    if(processSkill==''){
      this.setState({errorProcess:true})
    }
    else{
      this.setState({errorProcess:false})
    }
  }
  //validateCertification
  validateCertification(){
    const{certification}=this.state;
    if(certification==''){
      this.setState({errorCertification:true})
    }
    else{
      this.setState({errorCertification:false})
    }
  }

  //handleChangeof the form fields
  handleChange(e,{name,value}){
    this.setState({[name]:value});
  }

  //handleChangePrimarySkills
  handleChangePrimarySkill(event,data){
    this.setState({primaryTechSkill:data.value});
  }

  //handleChangeSecondarySkills
  handleChangeSecondarySkill(event,data){
    this.setState({secondaryTechSkill:data.value});
  }

  //handlechange page
  handleChangePage(e){
    e.preventDefault();
    const {primaryTechSkill, secondaryTechSkill, functionalSkill, processSkill, certification}=this.state;
    if(primaryTechSkill==''){
      this.setState({errorPrimary:true})
    }
    if(secondaryTechSkill==''){
      this.setState({errorSecondary:true})
    }
    if(functionalSkill==''){
      this.setState({errorFunctional:true})
    }
    if(processSkill==''){
      this.setState({errorProcess:true})
    }
    if(certification==''){
      this.setState({errorCertification:true})
    }
    if(primaryTechSkill!=''&&secondaryTechSkill!=''&&functionalSkill!=''&&processSkill!=''&&certification!=''){
      var skillObj={
        'primaryTechSkill':primaryTechSkill,
        'secondaryTechSkill':secondaryTechSkill,
        'functionalSkill':functionalSkill,
        'processSkill':processSkill,
        'certification':certification
      }
      this.props.buttonClicked(skillObj);
    }
  }
  render(){
    const {functionalSkill, processSkill, certification, errorPrimary, errorSecondary, errorFunctional, errorProcess, errorCertification}=this.state;
    return(
      <div>
        <Dropdown fluid multiple search selection value={this.state.primaryTechSkill} options={options} onChange={this.handleChangePrimarySkill.bind(this)} placeholder='Primary Skill' onBlur={this.validatePrimary.bind(this)} error={errorPrimary}/><br/>
        <Dropdown fluid multiple search selection value={this.state.secondaryTechSkill} options={options} onChange={this.handleChangeSecondarySkill.bind(this)} placeholder='Secondary Skill' onBlur={this.validateSecondary.bind(this)} error={errorSecondary}/><br/>
          <Form.Field inline error={errorFunctional}>
            <Input fluid type='text' name='functionalSkill' onBlur={this.validateFunctional.bind(this)} value={functionalSkill}  onChange={this.handleChange.bind(this)} placeholder='Functional Skill'/>
          </Form.Field>
          <Form.Field inline error={errorProcess}>
            <Input fluid type='text' name='processSkill' onBlur={this.validateProcess.bind(this)} value={processSkill} onChange={this.handleChange.bind(this)} placeholder='Process Skill'/>
          </Form.Field>
          <Form.Field inline error={errorCertification}>
            <Input fluid type='text' name='certification' onBlur={this.validateCertification.bind(this)} value={certification} onChange={this.handleChange.bind(this)} placeholder='Certification'/>
          </Form.Field>
          <br/>
          <Button color='green'  style={{marginTop:"10px"}} onClick={this.handleChangePage.bind(this)}  animated>
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden><Icon name='right arrow'/></Button.Content>
          </Button>
      </div>
    );
  }
}
