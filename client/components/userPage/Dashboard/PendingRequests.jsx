import React from 'react';

import { Card,Icon,Divider,Statistic } from 'semantic-ui-react';

var data=[
            {
              "From":"11/08/2017",
              "To":"15/08/2017",
              "Reason":"Vacation"
            }
         ];

export default class PendingRequests extends React.Component{

  constructor(props){
    super(props);
  }

  render(){

    return(
      <Card raised>
        <Card.Content>
          <Card.Header>
            My Requests
            <Divider/>
          </Card.Header>
          <Card.Description >
            <center>
            <Statistic style={{padding:"10px"}} color='orange'>
              <Statistic.Value>5</Statistic.Value>
              <Statistic.Label>Pending</Statistic.Label>
            </Statistic>
            </center>
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
