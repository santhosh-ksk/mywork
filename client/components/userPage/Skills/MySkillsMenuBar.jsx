/*
  -----------------------------
  
  -----------------------------
*/

import React from 'react';

// Semantic UI imports
import { Menu
       } from 'semantic-ui-react';

// For Custom Imports
// import SkillContent from './SkillContent.jsx';

export default class MySkillsMenuBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeItem: 'Primary',
    }
  }

  handleMenuClick(e, { name, index }){
    this.setState({ activeItem: name });
    this.props.menuChange(name, index);
  }

  render(){
    const { activeItem } = this.state; 
    const { menuItems } = this.props;

    const MenuComponent = menuItems.map((menu, k) => {
      return(
        <Menu.Item
            key={k}
            name={menu}
            index={k}
            content={menu}
            color='blue'
            active={activeItem === menu}
            onClick={this.handleMenuClick.bind(this)} />
      );
    });
    
    return(
        <Menu pointing secondary>
          {MenuComponent}            
        </Menu>
    );
  }
}
