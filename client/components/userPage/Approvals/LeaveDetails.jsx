import React from 'react';

import {Table,Segment} from 'semantic-ui-react';

export default class LeaveDetails extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div style={{marginTop:"10px",display:this.props.show}}>
                <Table celled style={{marginBottom:"0px",borderRadius:"0px"}} verticalAlign="middle" textAlign="center">
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>From</Table.HeaderCell>
                    <Table.HeaderCell>To</Table.HeaderCell>
                    <Table.HeaderCell>Number of Days</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    {this.props.data.FromDate}
                  </Table.Cell>
                  <Table.Cell>{this.props.data.ToDate}</Table.Cell>
                  <Table.Cell>{1}</Table.Cell>
                </Table.Row>
                </Table.Body>
                </Table>
                <Segment style={{marginTop:"0px",borderRadius:"0px"}}><b>Reason:</b>&ensp;{this.props.data.Reason}</Segment>
              </div>
    )
  }
}
