import React from 'react'
import { Button, Grid ,Header, Image, Modal, Icon , Segment } from 'semantic-ui-react'
import request from 'superagent';
export default class ProfileModal extends React.Component
{
  constructor(props){
    super(props);

    console.log(this.props.data);
  }

  closeModal(){
    this.props.close();
  }

  render()
  {
    var item=this.props.data;
    return(
      <Modal open={this.props.open} onClose={this.closeModal.bind(this)}>
         <Modal.Header> <Header as='h3'>{item.name}</Header></Modal.Header>
            <Modal.Content >
              <Modal.Description>
              <Grid>
                <Grid.Row >
                     <Grid.Column width={4}>
                            <Segment basic>
                                 <Image src={item.url} size='small' shape='circular' />
                            </Segment>

                      </Grid.Column>
                      <Grid.Column width={6}>
                            <Segment basic>
                                 <Header as='h5'><Icon circular inverted name='phone' />{item.mobile}</Header>
                           </Segment>
                            <Segment basic>
                                 <Header as='h5'><Icon circular inverted name='mail' />{item.mail}</Header>
                           </Segment>
                    </Grid.Column>
                    <Grid.Column width={6}>
                           <Segment basic>
                                 <Header as='h5'><Icon circular inverted name='briefcase' />{item.designation}</Header>
                          </Segment>
                          <Segment basic>
                                 <Header as='h5'><Icon circular inverted name='marker' />{item.location}</Header>
                          </Segment>
                  </Grid.Column>

                </Grid.Row>
              </Grid>
            </Modal.Description>
          </Modal.Content>
        </Modal>
 );
  }
}
