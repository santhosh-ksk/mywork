/*
  -----------------------------
  
  -----------------------------
*/

import React from 'react';

// Semantic UI imports
import { 
       } from 'semantic-ui-react';

import SwipeableViews from 'react-swipeable-views';

// For Custom Imports
import MySkillsContentCard from './MySkillsContentCard.jsx';

export default class MySkillsContent extends React.Component{
  constructor(props){
    super(props);
    // this.state = {
    
    // }
  }

  addSkill(skillName, skillCategory) {
    this.props.add(skillName, skillCategory);
  }

  deleteSkill(indexToDelete, skillCategory) {
    this.props.delete(indexToDelete, skillCategory);
  }

  cancelSkill(indexToDelete, skillCategory) {
    this.props.cancelReq(indexToDelete, skillCategory);
  }

  render(){
    // const {  } = this.state; 
    const { swipeIndex, skilList, pendingSkilList, menuList } = this.props;

    const skillContentComponent = menuList.map((menuItem, k) => {
      return(
        <MySkillsContentCard
            skill={menuItem}
            skillList={skilList[menuItem]}
            pendingSkillList={pendingSkilList[menuItem]}
            delete={this.deleteSkill.bind(this)}
            cancelReq={this.cancelSkill.bind(this)}
            add={this.addSkill.bind(this)}
            key={k}
        />
      );
    });
    
    return(
      <div style={{width: '100%', paddingTop: '7px'}}>
        <SwipeableViews index={swipeIndex}>
          {skillContentComponent}
        </SwipeableViews>
      </div>
    );
  }
}
