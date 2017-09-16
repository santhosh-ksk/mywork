import React from 'react';

import BasicInfo from './BasicInfo.jsx';

import LeaveNotifications from './LeaveNotifications.jsx';

import TrainingNotifications from './TrainingNotifications.jsx';

import PendingRequests from './PendingRequests.jsx';

import PendingApprovals from './PendingApprovals.jsx';

import {Grid,Card} from 'semantic-ui-react';

export default class Dashboard extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <Grid >
        <Grid.Row>
          <Grid.Column>
            <BasicInfo/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Card.Group itemsPerRow={4} stackable >
             <LeaveNotifications/>
             <TrainingNotifications/>
             <PendingApprovals/>
             <PendingRequests/>
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
