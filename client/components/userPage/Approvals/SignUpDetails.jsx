import React from 'react';

import {Table,Segment,Header} from 'semantic-ui-react';

export default class SignUpDetails extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div style={{marginTop:"10px",display:this.props.show}}>
                <Table celled style={{marginBottom:"0px",borderRadius:"0px"}} verticalAlign="middle" textAlign="center">
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Designation</Table.HeaderCell>
                    <Table.HeaderCell>Project</Table.HeaderCell>
                    <Table.HeaderCell>MailId</Table.HeaderCell>
                    <Table.HeaderCell>Mobile</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    {this.props.data.Details["Designation"]}
                  </Table.Cell>
                  <Table.Cell>{this.props.data.Details["Project"]}</Table.Cell>
                  <Table.Cell>{this.props.data.Details["MailId"]}</Table.Cell>
                  <Table.Cell>{this.props.data.Details["Mobile"]}</Table.Cell>
                </Table.Row>
                </Table.Body>
                </Table>
                <Segment style={{marginBottom:"0px",borderRadius:"0px"}}>
                   <Header as="h5">Skills</Header>
                </Segment>
                <Segment.Group horizontal style={{marginTop:"0px",borderRadius:"0px"}}>
                {
                  this.props.data.Details["Skills"].map((skill,j)=>{
                    return(
                      <Segment key={j}>
                      {skill}
                      </Segment>
                    )
                  })
                }
                </Segment.Group>
              </div>
    )
  }
}
