/*
  -----------------------------

  -----------------------------
*/

import React from 'react';

// Semantic UI imports
import { Card,
         Image,
         Header,
         List,
         Icon
       } from 'semantic-ui-react';

// For Custom Imports
// import SkillContent from './SkillContent.jsx';

export default class MyresourcesSkillsFilterByResource extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      skillTypeList: ['Primary', 'Secondary', 'Professional', 'Process', 'Functional'],
      resourceDetails: {
        name: '',
        team: '',
        project: '',
        proPic: ''
      },
      skillDetails: {
        Primary: ['ReactJS', 'ExpressJS', 'NodeJS', 'MongoDB'],
        Secondary: ['JavaScript', 'JQuery', 'Bootsrtap', 'HTML', 'CSS'],
        Functional: ['C++', 'PL/SQL']
      },
    }
  }

  render(){
    const { skillDetails, skillTypeList } = this.state;
    const { searchVal } = this.props;

    const avatarLocation = './../../../src/images/default.jpg';

    const skillCardComponent = skillTypeList.map((skillType, k1) => {

      if(skillDetails[skillType] != undefined)
      {
        const skillListComponent = skillDetails[skillType].map((skill, k2) => {
          return(
            <List.Item as='a' key={k2}>
              <Icon name='angle double right' />
              <List.Content>
                <List.Description>{skill}</List.Description>
              </List.Content>
            </List.Item>
          );
        });

        return(
          <Card style={{padding: '15px'}} key={k1}>
            <Header as='h4'>
              {skillType} Skill
            </Header>
            <List>
              {skillListComponent}
            </List>
          </Card>
        );
      }
    });

    return(
        <div>
          <Card fluid color='blue'>
            <Card.Content>
              <Image floated='right' width='70' src={avatarLocation} />
              <Card.Header>
                {searchVal}
              </Card.Header>
              <Card.Meta>
                Team A, Project B
              </Card.Meta>
            </Card.Content>
          </Card>

          <Card.Group itemsPerRow={4}>
            {skillCardComponent}
          </Card.Group>
        </div>
    );
  }
}
