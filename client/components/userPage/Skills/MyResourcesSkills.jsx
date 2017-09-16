/*
  -----------------------------
  Skill - View Resorces Details
  -----------------------------
*/

import React from 'react';

// Semantic UI imports
import { Header,
         Form,
         Radio,
         Dropdown
       } from 'semantic-ui-react';

// For Custom Imports
import MyResourcesSkillsFilter from './MyResourcesSkillsFilter.jsx';
import MyResourcesSkillsContent from './MyResourcesSkillsContent.jsx';

export default class MyResourcesSkills extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedVal: '',
      showContent: 'none',
      searchType: ''
    }
  }

  selected(value, filterType) {    
    this.setState({ selectedVal: value, searchType: filterType, showContent: 'initial' });
  }

  render(){
    const { searchType, selectedVal, showContent } = this.state; 
    // const {  } = this.props;

    return(
        <div style={{paddingTop: '20px', paddingLeft: '5px'}}>
          <Header as='h2'>Search for a Skill / Resource</Header>

          <MyResourcesSkillsFilter onSelect={this.selected.bind(this)}/>

          <div style={{width: '100%', display: showContent}}>
            <MyResourcesSkillsContent type={searchType} val={selectedVal} />
          </div>
        </div>
    );
  }
}
