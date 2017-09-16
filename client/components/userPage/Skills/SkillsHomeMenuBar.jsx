/*
  -----------------------------

  -----------------------------
*/

import React from 'react';

// Semantic UI imports
import { Segment,
         Menu
       } from 'semantic-ui-react';

import SkillsMenu from './../Common/ComponentSpecificMenu.jsx';

// For Custom Imports
// import SkillContent from './SkillContent.jsx';

const options = [
  { key: 'My Skills', name: 'My Skills' },
  { key: 'My Resource Skills', name: 'My Resource Skills' }
]

export default class SkillsHomeMenuBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeItem: 'My Skills'
      // activeItem: 'resSkills'
    }
  }

  handleItemClick(e, { name }){
    this.setState({ activeItem: name })
    this.props.menuChange(name);
  }

  componentDidMount() {
    this.props.menuChange(this.state.activeItem);
  }

  render(){
    // const {  } = this.state;
    const { activeItem } = this.state;
    // const {  } = this.props;

    return(
      <SkillsMenu options={options} active={this.state.activeItem} activeChange={this.handleItemClick.bind(this)}/>
    );
  }
}
