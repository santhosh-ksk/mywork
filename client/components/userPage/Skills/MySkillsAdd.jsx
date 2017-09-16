/*
  ------------------------
  Display Consumer Journey
  ------------------------
*/

import React from 'react';

// Semantic UI imports
import { Dropdown,
         Button,
         Breadcrumb,
         Icon,
         List,
         Header,
         Segment,
         Form
       } from 'semantic-ui-react';

const options = [
  { key: 'Angular', text: 'Angular', value: 'Angular' },
  { key: 'CSS', text: 'CSS', value: 'CSS' },
  { key: 'Graphic Design', text: 'Graphic Design', value: 'Graphic Design' },
  { key: 'Ember', text: 'Ember', value: 'Ember' },
  { key: 'HTML', text: 'HTML', value: 'HTML' },
  { key: 'Information Architecture', text: 'Information Architecture', value: 'Information Architecture' },
  { key: 'Javascript', text: 'Javascript', value: 'Javascript' },
  { key: 'Mechanical Engineering', text: 'Mechanical Engineering', value: 'Mechanical Engineering' },
  { key: 'Meteor', text: 'Meteor', value: 'Meteor' },
  { key: 'NodeJS', text: 'NodeJS', value: 'NodeJS' },
  { key: 'Plumbing', text: 'Plumbing', value: 'Plumbing' },
  { key: 'Python', text: 'Python', value: 'Python' },
  { key: 'Rails', text: 'Rails', value: 'Rails' },
  { key: 'React', text: 'React', value: 'React' },
  { key: 'Kitchen Repair', text: 'Kitchen Repair', value: 'Kitchen Repair' },
  { key: 'Ruby', text: 'Ruby', value: 'Ruby' },
  { key: 'UI Design', text: 'UI Design', value: 'UI Design' },
  { key: 'User Experience', text: 'User Experience', value: 'User Experience' },
];

export default class MySkillsAdd extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectSkill: true,
      confirmSkill: false,
      completeSkill: false,
      dropdownVal: [],
      nextButtonErrorDisplay: 'none',
      feedbackVal: '',
      feedbackFormDisplay: 'none'
    }
  }

  selectDropdown(event, {value}) {
    console.log(value); 
    this.setState({
      dropdownVal: value,
      nextButtonErrorDisplay: 'none'
    });
  }

  next() {
    const { selectSkill, confirmSkill, completeSkill, dropdownVal } = this.state;
    if(selectSkill)
    {
      console.log(dropdownVal.length);
      if(dropdownVal.length > 0)
      {
        this.setState({
          selectSkill: false,
          confirmSkill: true
        });
      }
      else
      {
        this.setState({
          nextButtonErrorDisplay: 'block'
        });
      }
    }
    else if(confirmSkill)
    {
      this.props.submitSkill(dropdownVal);

      this.setState({
        confirmSkill: false,
        completeSkill: true
      });
    }
  }

  back() {
    const { selectSkill, confirmSkill, completeSkill, dropdownVal } = this.state;
      this.setState({
        selectSkill: true,
        confirmSkill: false
      });      
  }

  feedbackSubmit(e) {
    e.preventDefault();
    console.log(this.state.feedbackVal);

    this.setState({ feedbackVal: '', feedbackFormDisplay: 'none' });
  }

  feedbackChangeHandle(e, {value}) {
    console.log(value);
    this.setState({ feedbackVal: value });
  }

  feedbackSkill() {
    this.setState({ feedbackFormDisplay: 'initial' });
  }

  render(){
    const { selectSkill, confirmSkill, completeSkill, dropdownVal, feedbackVal } = this.state;
    
    return(
        <div>
          <Segment>
            <Breadcrumb style={{padding: '5px 5px'}}>
              <Breadcrumb.Section active={selectSkill}>Select your skills</Breadcrumb.Section>
              <Breadcrumb.Divider icon='right chevron' />
              <Breadcrumb.Section active={confirmSkill}>Confirm your skills</Breadcrumb.Section>
              <Breadcrumb.Divider icon='right chevron' />
              <Breadcrumb.Section active={completeSkill}>Success</Breadcrumb.Section>
            </Breadcrumb>
          </Segment>
          <div style={{paddingTop: '25px', minHeight: '200px'}}>
          {(selectSkill==true) &&
            <div>
              <div>
                <Dropdown
                    placeholder='Skills'
                    multiple
                    search
                    selection
                    closeOnChange
                    value={dropdownVal}
                    options={options}
                    onChange={this.selectDropdown.bind(this)}
                    noResultsMessage='Skill not Found.'
                    style={{maxWidth: '80%', marginTop: '20px', minWidth: '50%'}}/>
                <Button
                    basic
                    color='green'
                    circular
                    style={{marginTop: '22px', float: 'right'}}
                    onClick={this.next.bind(this)}>
                  Next <Icon name='arrow right' />
                </Button>
                <p style={{color: 'red', display: this.state.nextButtonErrorDisplay}}><i>Please select atleast one skill !</i></p>
              </div>
              <div style={{paddingTop: '30px'}}>
                <a onClick={this.feedbackSkill.bind(this)}>My Skill is not listed!</a>
                
                <Form style={{paddingTop: '20px', display: 'none'}}>                  
                    <Form.Input
                        placeholder='Skill name'
                        label='We are all ears. Please put down the missing skill.'
                        name='skill'
                        onChange={this.feedbackChangeHandle.bind(this)}
                        value={feedbackVal} />                    
                    <Form.Button onClick={this.feedbackSubmit.bind(this)}>Submit</Form.Button>
                </Form>
                
              </div>
            </div>
          }

          {(confirmSkill==true) &&
            <div>
              <Header as='h3'>
                <Header.Content>
                  Confirm Your Skills
                  <Header.Subheader>
                    Request will be sent to Manager for Approval 
                  </Header.Subheader>
                </Header.Content>
              </Header>
              <List>
              { dropdownVal.map(function(skill, k) {
                  return(
                    <List.Item as='a' key={k}>
                      <Icon name='right triangle' />
                      <List.Content>
                        <List.Description>
                          {skill}
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  )
                })
              }
              </List>
              
              <Button
                  color='green'
                  circular
                  style={{float: 'right', marginBottom: '20px'}}
                  onClick={this.next.bind(this)}>
                Submit
              </Button>
              <Button
                  basic
                  circular
                  style={{marginBottom: '20px', float: 'right'}}
                  onClick={this.back.bind(this)}>
                <Icon name='arrow left' /> Back
              </Button>
            </div>
          }

          {(completeSkill==true) &&
            <div style={{textAlign: 'center'}}>
              <div style={{color: 'green'}}>
                <b>
                  Skill Requested Successfully.
                </b>
              </div>
              <div style={{color: 'grey'}}>
                Skill change will reflect post Approval.
              </div>
            </div>
          }
          </div>

        </div>
    );
  }
}
