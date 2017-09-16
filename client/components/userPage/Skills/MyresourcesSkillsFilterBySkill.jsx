/*
  -----------------------------

  -----------------------------
*/

import React from 'react';

// Semantic UI imports
import { List,
         Image,
         Header,
         Modal,
         Button
       } from 'semantic-ui-react';

// For Custom Imports
import MyresourcesSkillsFilterByResource from './MyresourcesSkillsFilterByResource.jsx';

export default class MyresourcesSkillsFilterBySkill extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userDetailModal: false,
      selectedUser: '',
      searchResult: [
        {name: 'Richard Bhaskar', team: 'Team A', project: 'Project Alpha', skillCategory: 'Primary'},
        {name: 'David Jocker', team: 'Team B', project: 'Project Trojan', skillCategory: 'Primary'},
        {name: 'Smith Jane', team: 'Team C', project: 'Project Mango', skillCategory: 'Functional'},
        {name: 'Veronica Vallory', team: 'Team D', project: 'Project Jupitor', skillCategory: 'Project'},
        {name: 'Jomi james', team: 'Team E', project: 'Project Tiger', skillCategory: 'Primary'},
        {name: 'Richard Bhaskar', team: 'Team A', project: 'Project Alpha', skillCategory: 'Primary'},
        {name: 'Smith Jane', team: 'Team C', project: 'Project Mango', skillCategory: 'Functional'},
        {name: 'Veronica Vallory', team: 'Team D', project: 'Project Jupitor', skillCategory: 'Project'},
        {name: 'Jomi james', team: 'Team E', project: 'Project Tiger', skillCategory: 'Primary'}
      ]
    }
  }

  selectUser(name) {
    console.log(name);
    this.setState({
      userDetailModal: true, selectedUser: name
    })
  }

  closeUserModal() {
    this.setState({
      userDetailModal: false
    })
  }

  render(){
    const { searchResult, userDetailModal, selectedUser } = this.state;
    const { searchVal } = this.props;

    // Use Profile Pic. If no profile pic, use this image.
    const avatarLocation = './../../../src/images/default.jpg';

    const ListItemComponent = searchResult.map((data, k) => {
      return(
        <List.Item style={{paddingLeft: '14px', marginTop: '20px'}} onClick={this.selectUser.bind(this, data.name)} key={k}>
          <Image avatar src={avatarLocation} size='mini'/>
          <List.Content>
            <List.Header>{data.name}</List.Header>
            {data.team}, {data.project}
            <List.Description>{data.skillCategory} Skill</List.Description>
          </List.Content>
        </List.Item>
      );
    });

    return(
        <div>
          <div>
            Displaying Resources who are skilled in <b>{searchVal}</b>
            <List horizontal selection relaxed celled>
              {ListItemComponent}
            </List>
          </div>
          <Modal open={userDetailModal}>
            <Modal.Content scrolling>
              <MyresourcesSkillsFilterByResource searchVal={selectedUser} />
            </Modal.Content>
            <Modal.Actions>
              <Button primary onClick={this.closeUserModal.bind(this)}>
                Close
              </Button>
            </Modal.Actions>
          </Modal>
        </div>
    );
  }
}
