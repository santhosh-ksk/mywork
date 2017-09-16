/*
  ------------------------
  Display Consumer Journey
  ------------------------
*/

import React from 'react';

import Reveal from 'react-reveal';
import 'animate.css/animate.css';
// Semantic UI imports
import { Segment,
         Menu,
       } from 'semantic-ui-react';

// Custom Imports
import SkillsHomeMenuBar from './SkillsHomeMenuBar.jsx';
import MySkills from './MySkills.jsx';
import MyResourcesSkills from './MyResourcesSkills.jsx';

export default class SkillsHome extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeMenuItem: ''
    }
  }

  handleMenuChange(menuItem) {
    this.setState({ activeMenuItem: menuItem })
  }

  render(){
    const { activeMenuItem } = this.state;

    return(
        <div style={{marginTop: '5px'}}>

          <SkillsHomeMenuBar menuChange={this.handleMenuChange.bind(this)} />

          {activeMenuItem == 'My Skills' &&
          <div style={{width: '100%'}}>
            <MySkills />
          </div>
          }

          {activeMenuItem == 'My Resource Skills' &&
          <div style={{width: '100%'}}>
            <MyResourcesSkills />
          </div>
          }

        </div>
    );
  }
}
