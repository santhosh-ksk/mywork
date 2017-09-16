/*
  ------------------------
  Display Consumer Journey
  ------------------------
*/

import React from 'react';

// Semantic UI imports
import { Menu,
         Button,
         Card,
         Icon,
         Dropdown,
         Popup,
         Modal,
         Header
       } from 'semantic-ui-react';

// For Custom Imports
import MySkillsAdd from './MySkillsAdd.jsx';

export default class MySkillsContentCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      deleteModal: false,
      cancelSkillModal: false,
      addModal: false,
      deleteSkill: '',
      deleteIndex: -1,
      cancelSkill: '',
      cancelIndex: -1
    }
  }

  //---------------------------------------------------------------------------
  // Deletion
  //---------------------------------------------------------------------------
  deleteSkill(skil, k) {
    this.setState({
      deleteModal: true, deleteSkill: skil, deleteIndex: k
    });
  }

  cancelDelete() {
    this.setState({
      deleteModal: false, deleteSkill: '', deleteIndex: -1
    });
  }

  confirmDelete() {
    this.props.delete(this.state.deleteIndex, this.props.skill);
    this.setState({
      deleteModal: false, deleteSkill: '', deleteIndex: -1
    });
  }

  
  //---------------------------------------------------------------------------
  // Request Cancellation
  //---------------------------------------------------------------------------
  cancelSkillRequest(skil, k) {
    this.setState({
      cancelSkillModal: true, cancelSkill: skil, cancelIndex: k
    });
  }

  cancellationYes() {
    this.props.cancelReq(this.state.cancelIndex, this.props.skill);
    this.setState({
      cancelSkillModal: false, cancelSkill: '', cancelIndex: -1
    });
  }

  cancellationNo() {
    this.setState({
      cancelSkillModal: false, cancelSkill: '', cancelIndex: -1
    });
  }
  //===========================================================================


  //---------------------------------------------------------------------------
  // Addition
  //---------------------------------------------------------------------------
  addNewSkill() {
    console.log('Add Skill triggered for ' + this.props.skill);
    this.setState({
      addModal: true
    });    
  }

  cancelAdd() {
    this.setState({
      addModal: false
    });
  }

  submitSkill(newSkillList) {
    console.log('Skill Submitted!');
    console.log(newSkillList);
    console.log(this.props.skill);
    this.props.add(newSkillList, this.props.skill);
  }

  //===========================================================================

  render(){
    const { skillList, pendingSkillList, skill, color } = this.props;

    const styles={
      cardDivStyle: {
        width: '85%',
        overflow: 'hidden',
        float: 'left',
        wordWrap: 'break-word'
      }
    }

    // Skill Cards - Approved
    const skillComponents = skillList.map((skil, k) => {
      return(
        <Card key={k} color='blue'>
          <Card.Content style={{padding: '14px 8px'}}>
            <div style={styles.cardDivStyle}>
              {skil}
            </div>
            <div>
              
              <Dropdown icon='ellipsis vertical'>
                <Dropdown.Menu style={{marginLeft: '-50px'}}>
                  <Dropdown.Item text='Delete' onClick={this.deleteSkill.bind(this, skil, k)} />
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Card.Content>
        </Card>
      );
    });

    // Skill Cards - Pending Approval
    const pendingSkillComponents = pendingSkillList.map((skil, k) => {
      return(
        <Card key={k} color='red'>
          <Card.Content style={{padding: '14px 8px'}}>
            <div style={styles.cardDivStyle}>
              <Popup
                trigger={<div style={{width: '100%', height: '100%', color: 'grey'}}><i>{skil}</i></div>}
                content='Pending approval'
              />
              
            </div>
            <div>
              
              <Dropdown icon='ellipsis vertical'>
                <Dropdown.Menu style={{marginLeft: '-100px'}}>
                  <Dropdown.Item text='Cancel Request' onClick={this.cancelSkillRequest.bind(this, skil, k)} />
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Card.Content>
        </Card>
      );
    });

    return(
        <div style={{paddingTop: '5px', paddingLeft: '5px', paddingRight: '25px', paddingBottom: '25px'}}>
          <Card.Group itemsPerRow={6}>
            {skillComponents}
            {pendingSkillComponents}
            <Card>
              <Card.Content style={{padding: '0', minHeight: '48px'}}>
                <Popup
                    trigger={<Button fluid style={{height: '100%'}} icon='add' onClick={this.addNewSkill.bind(this)}/>}
                    content='Add new skill'
                    inverted
                />
                
              </Card.Content>
            </Card>
          </Card.Group>
          
          <Modal open={this.state.deleteModal} basic size='small'>
            <Header>
            <Icon name='trash' />
              <Header.Content>
                Delete your <u>{skill}</u> skill - <u>{this.state.deleteSkill}</u>?
              </Header.Content>
            </Header>
            
            <Modal.Content>
              <p style={{paddingLeft: '30px'}}><u>Warning</u>: To add skill back requires Supervisor Approval</p>
            </Modal.Content>

            <Modal.Actions>
              <Button color='red' inverted onClick={this.confirmDelete.bind(this)}>
                <Icon name='checkmark' /> Delete
              </Button>
              <Button basic color='green' inverted onClick={this.cancelDelete.bind(this)}>
                <Icon name='remove' /> Don't Delete
              </Button>              
            </Modal.Actions>
          </Modal>

          <Modal open={this.state.cancelSkillModal} basic size='small'>
            <Header>
            <Icon name='trash' />
              <Header.Content>
                Cancel Skill Request?
              </Header.Content>
            </Header>
            
            <Modal.Actions>
              <Button color='red' inverted onClick={this.cancellationYes.bind(this)}>
                <Icon name='checkmark' /> Yes
              </Button>
              <Button basic color='green' inverted onClick={this.cancellationNo.bind(this)}>
                <Icon name='remove' /> No
              </Button>              
            </Modal.Actions>
          </Modal>

          <Modal open={this.state.addModal} dimmer='blurring' closeIcon={true} onClose={this.cancelAdd.bind(this)} closeOnDimmerClick={false}>
            <Header>
              <Icon name='plus' />
              <Header.Content>
                 Add new {skill} skill
              </Header.Content>
            </Header>

            <Modal.Content>
              <MySkillsAdd submitSkill={this.submitSkill.bind(this)} />
            </Modal.Content>

          </Modal>
        </div>
    );
  }
}
