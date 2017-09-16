/*
  ------------------------
  
  ------------------------
*/

import React from 'react';

// Semantic UI imports
import { Menu,
         Button,
         Segment
       } from 'semantic-ui-react';

import SwipeableViews from 'react-swipeable-views';

// For Custom Imports
import MySkillsMenuBar from './MySkillsMenuBar.jsx';
import MySkillsContent from './MySkillsContent.jsx';

export default class MySkills extends React.Component{
  constructor(props){
    super(props);
    this.state = {

      menuItemList: ['Primary', 'Secondary', 'Professional', 'Process', 'Functional'],
      
      skillData: {
        Primary: ['ReactJS', 'MongoDB', 'ExpressJS', 'NodeJS', 'Java Programming'],
        Secondary: ['JavaScript', 'JQuery', 'Bootsrtap', 'HTML', 'CSS'],
        Professional: ['ReactJS'],
        Process: [],
        Functional: []
      },
      
      pendingSkillData: {
        Primary: ['AngularJS'],
        Secondary: [],
        Professional: [],
        Process: [],
        Functional: []
      },
      
      swipeIndex: 0
    }
  }

  handleMenuChange(menuItem, index) {
    this.setState({ activeItem: menuItem, swipeIndex: index })
  }

  addSkill(skillName, skillCategory) {
    this.state.pendingSkillData[skillCategory].push.apply(this.state.pendingSkillData[skillCategory],skillName);
    
    this.setState({ pendingSkillData: this.state.pendingSkillData})

    // request with skillname and skillCategory
    // add new skill and send back the array and re-renders
  }

  deleteSkill(indexToDelete, skillCategory) {
    var listData = this.state.skillData[skillCategory];

    listData.splice(indexToDelete, 1); // Automatically updates the state variable.

    // this.state.skillData has latest changes.
    // Post (this.state.skilldate) and update it in the database...    
  }

  cancelSkill(indexToDelete, skillCategory) {
    var listData = this.state.pendingSkillData[skillCategory];
    
    listData.splice(indexToDelete, 1); // Automatically updates the state variable.

    // this.state.skillData has latest changes.
    // Post (this.state.skilldate) and update it in the database...
  }

  render(){
    const { skillData, pendingSkillData, swipeIndex, menuItemList } = this.state;

    return(
        
        <Segment
            loading={false}
            style={{width: '100%',
                minHeight: '400px',
                marginTop: '20px',
                borderRadius: '0px',
                border: '0px',
                boxShadow: '0px 0px'}}>

          <MySkillsMenuBar
              menuItems={menuItemList}
              menuChange={this.handleMenuChange.bind(this)}
          />  

          <MySkillsContent
              swipeIndex={swipeIndex}
              add={this.addSkill.bind(this)}
              delete={this.deleteSkill.bind(this)}
              cancelReq={this.cancelSkill.bind(this)}
              skilList={skillData}
              pendingSkilList={pendingSkillData}
              menuList={menuItemList}
          />

        </Segment>
    );
  }
}
