import React from 'react';

import { Card,Icon,Divider } from 'semantic-ui-react';

import Graph from './graph.jsx';

export default class TrainingNotifications extends React.Component{

  constructor(props){
    super(props);
  }

  render(){

    return(
      <Card raised>
        <Card.Content>
          <Card.Header>
            Training Completeness
            <Divider/>
          </Card.Header>
          <Card.Description>
            <Graph value={30} startColor="red" endColor="green"/>
          </Card.Description>
       </Card.Content>
       <Card.Content extra>
         <a>
           View Details
         </a>
       </Card.Content>
      </Card>
    )
  }
}
