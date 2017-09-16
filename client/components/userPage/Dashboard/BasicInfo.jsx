import React from 'react';

import { Card,Icon,Grid,Image,Header,Divider } from 'semantic-ui-react';

import Media from 'react-media';

export default class BasicInfo extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(

          <Grid style={{margin:"0px"}} stackable>
            <Grid.Row>
              <Grid.Column width="2" style={{padding:"0px"}}>
              <Card>
              <center>
                <Image src='./../../../src/images/default.jpg' size='small'/>
              </center>
              </Card>
              </Grid.Column>
              <Grid.Column width="14" style={{paddingRight:"0px"}}>
                <Card style={{width:"100%"}}>
                    <Grid style={{margin:"0px"}} stackable>
                    <Grid.Row style={{padding:"0px"}}>
                      <Grid.Column>
                          <Header as='h3' style={{margin:"10px"}}>
                          <Header.Content>
                            Good Morning, Gowtham R
                          </Header.Content></Header>
                          <Divider style={{padding:"0px"}}/>
                      </Grid.Column>
                    </Grid.Row>
                     <Grid.Row style={{paddingTop:"0px"}}>
                      <Grid.Column width="5">
                        <Header as='h4'>
                        <Icon name='briefcase' />
                        <Header.Content>
                        <a>Project</a>:&nbsp;Ahold US
                        </Header.Content>
                        </Header>
                        <Header as='h4'>
                        <Icon name='users'/>
                        <Header.Content>
                        <a>Team</a>:&nbsp;Development</Header.Content>
                        </Header>
                      </Grid.Column>
                      <Grid.Column width="5">
                        <Header as='h4'>
                        <Icon name='marker' />
                        <Header.Content>
                        <a>Location</a>:&nbsp;SJP2&nbsp;6th Floor
                        </Header.Content>
                        </Header>
                        <Header as='h4'>
                        <Icon name='mobile' />
                        <Header.Content>
                        <a>Mobile</a>:&nbsp;9952185663
                        </Header.Content></Header>
                      </Grid.Column>
                      <Grid.Column width="6">
                      <Header as='h4'>
                      <Icon name='mail' />
                      <Header.Content>
                        <a>Mail Id</a>:&nbsp;gowtham.r64@wipro.com
                      </Header.Content></Header>
                        <Header as='h4'>
                        <Icon name='text telephone' />
                        <Header.Content>
                        <a>VOIP</a>:&nbsp;NA
                        </Header.Content></Header>
                      </Grid.Column>
                    </Grid.Row>
                    </Grid>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>

    )
  }
}
