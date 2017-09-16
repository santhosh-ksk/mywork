/*
  -----------------------------
  
  -----------------------------
*/

import React from 'react';

// Semantic UI imports
import { Form,
         Radio,
         Dropdown,
         Button
       } from 'semantic-ui-react';

// For Custom Imports
// import SkillContent from './SkillContent.jsx';

const skillOptions = [
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

const resOptions = [
  { key: 'Jeevan', icon: 'user', text: 'Jeevan', value: 'Jeevan', description: 'Team, Project' },
  { key: 'Goutham', icon: 'user', text: 'Goutham', value: 'Goutham', description: 'Team, Project' },
  { key: 'Santhosh', icon: 'user', text: 'Santhosh', value: 'Santhosh', description: 'Team, Project' },
  { key: 'Mini', icon: 'user', text: 'Mini', value: 'Mini', description: 'Team, Project' },
  
]

export default class MyResourcesSkillsFilter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchRadio: 'skill',
      selectedVal: '',
    }
  }

  searchFilterChange(e, { value }) {
    this.setState({ searchRadio: value, selectedVal: '' });
  }

  getOptionList(e, data) {
    console.log(data);
    // HTTP GET Request here!
  }

  selected(e, {value}) {    
    this.setState({ selectedVal: value });
  }

  searchButtonClicked(e) {
    e.preventDefault();
    const { searchRadio, selectedVal } = this.state;
    if(selectedVal.length > 0)
      this.props.onSelect(selectedVal, searchRadio);
  }

  render(){
    const { searchRadio, selectedVal } = this.state; 
    // const {  } = this.props;

    var options = [];
    if(searchRadio == 'skill')
      options = skillOptions;
    else
      options = resOptions;

    // Dropdown Field Placeholder
    var placeholderText = 'Search ' + searchRadio;
    
    return(
      <div>
        <Form style={{marginTop: '35px'}}>
          <Form.Group inline>
            <label>Search by</label>
            <Form.Field
                control={Radio}
                label='Skill'
                value='skill'
                checked={searchRadio === 'skill'}
                onChange={this.searchFilterChange.bind(this)} />
            <Form.Field
                control={Radio}
                label='Resource'
                value='resource'
                checked={searchRadio === 'resource'}
                onChange={this.searchFilterChange.bind(this)} />
          </Form.Group>
          <Form.Group>
            <Form.Field
                control={Dropdown}
                selection
                search
                value={selectedVal}
                options={options}
                onChange={this.selected.bind(this)}
                onSearchChange={this.getOptionList.bind(this)}
                placeholder={placeholderText}
                width='8'
                style={{zIndex: 10}} />
            <Form.Button content='Search' primary onClick={this.searchButtonClicked.bind(this)} />
          </Form.Group>
        </Form>
      </div>
    );
  }
}
