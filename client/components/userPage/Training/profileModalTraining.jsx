import React from 'react'
import { Button, Grid ,Header, Image, Modal, Icon , Segment } from 'semantic-ui-react'
export default class ProfileModalTraining extends React.Component
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
    var items=this.props.data;

    console.log('mapped', this.props);
  //  console.log('completed', this.props.data.completed, items.completed);
    return(
      <Modal open={this.props.open} onClose={this.closeModal.bind(this)}>
         <Modal.Header> <Header as='h3'>{items.name}</Header></Modal.Header>
            <Modal.Content >
              <Modal.Description>
              <Grid>
                <Grid.Row >
                     <Grid.Column width={8}>
                            <Segment basic>
                              <center><Header  as='h4'>Mapped Courses</Header></center>
                              {
                                items.mapped.map((i,item)=>{
                                  return(
                                    <Segment key={item}>
                                    {i}
                                    </Segment>
                                  );
                                })
                              }
                            </Segment>
                      </Grid.Column>
                      <Grid.Column width={8}>
                            <Segment basic>
                              <center><Header  as='h4'>Completed Courses</Header></center>
                              {
                                items.completed.map((i,item)=>{
                                  return(
                                    <Segment key={item}>
                                    {i}
                                    </Segment>
                                  );
                                })
                              }
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
