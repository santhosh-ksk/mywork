import React from 'react';
import {Menu,TextArea , label ,Dropdown , Container, Grid, Icon ,Segment, Comment} from 'semantic-ui-react';
let view,
orssFeedback;
const Feedback = [
  {
    src:'./src/images/pic1.jpg',
    name: 'Mini K',
    date: '23.07.2017',
    description: 'Id card not issued Id card not issuedId card not issuedId card not issuedId card not issuedId card not issuedId card not issuedId card not issuedId card not issuedId card not issuedId card not issuedId card not issuedId card not issuedId card not issuedId card not issuedId card not issuedId card not issuedId card not issued',
    type:'General',
    project:'NA',
  },
  {
    src:'./src/images/pic6.jpg',
    name: 'Gowtham R',
    date: '12.05.2017',
    description: 'Name plate is pending Name plate is pending Name plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pending',
    type:'General',
    project:'NA',
  },
  {
    src:'./src/images/pic8.jpg',
    name: 'Santhosh K',
    date: '07.08.2017',
    description: 'Need 8GB RAM Name plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pending',
    type:'Project Specific',
    project:'Debenhams'
  },
  {
    src:'./src/images/pic2.jpg',
    name: 'charu bhatt',
    date: '07.08.2017',
    description: 'desktop config Name plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pending',
    type:'Project Specific',
    project:'Nisa'
  },
];

const CommonFeedback=[
  {
    src:'./src/images/pic4.jpg',
    name: 'Jeevan',
    date: '05.07.2017',
    description:'FMG Complaint Name plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pending',
    email:'jeevanpaul.puthuka@outlook.com',
  },
  {
    src:'./src/images/pic5.jpg',
    name: 'Srini',
    date: '14.07.2017',
    description:'id scanner not working Name plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pendingName plate is pending',
    email:'srinivasan@outlook.com',
  },

];

export default class FeedbackControls extends React.Component
{
  constructor(props)
  {
   super(props);
   this.state=
      {
    General:true,
    ORSS:false,
    filter:''
     }
  }

  handleItemClickGeneral()
  {
    this.setState({
      General:true,
      ORSS:false
                  })
  }

  handleItemClickOrss()
  {
      this.setState({
        General:false,
        ORSS:true
                   })
  }

  showSelected(data){
    console.log('data',data);
    this.setState({filter:data})
  }

  render()
  {

    if(this.state.General)
    {
      view=CommonFeedback.map((item,i)=>{
                    return(
                           <Comment.Group   key={i} size='large'>
                           <Comment>
                             <Comment.Avatar src={item.src}/>
                              <Comment.Content>
                               <Comment.Author as='a'>{item.name}</Comment.Author>
                               <Comment.Metadata>{item.date}</Comment.Metadata>
                               <Comment.Text>{item.description}</Comment.Text>
                               <Comment.Actions>
                                 <Comment.Metadata >{item.email}</Comment.Metadata>
                               </Comment.Actions>
                              </Comment.Content>
                           </Comment>
                         </Comment.Group>
               )
    })
    }
    if(this.state.filter==""){

        orssFeedback=Feedback.map((item,i)=>{

              //console.log('dropdown is selected as', this.state.filter);
              return(
                  <Comment.Group   key={i} size='large'>
                    <Comment>
                      <Comment.Avatar src={item.src}/>
                      <Comment.Content>
                        <Comment.Author as='a'>{item.name}</Comment.Author>
                        <Comment.Metadata>{item.date}</Comment.Metadata>
                        <Comment.Text>{item.description}</Comment.Text>
                        <Comment.Actions>
                          <Comment.Metadata >{item.type}</Comment.Metadata>
                          <Comment.Metadata >{item.project}</Comment.Metadata>
                        </Comment.Actions>
                      </Comment.Content>
                    </Comment>
                  </Comment.Group>
         );

      })
    }
    else{
      orssFeedback=Feedback.map((item,i)=>{
          if(this.state.filter==item.type){
            //console.log('dropdown is selected as', this.state.filter);
            return(
                <Comment.Group   key={i} size='large'>
                  <Comment>
                    <Comment.Avatar src={item.src}/>
                    <Comment.Content>
                      <Comment.Author as='a'>{item.name}</Comment.Author>
                      <Comment.Metadata>{item.date}</Comment.Metadata>
                      <Comment.Text>{item.description}</Comment.Text>
                      <Comment.Actions>
                        <Comment.Metadata >{item.type}</Comment.Metadata>
                        <Comment.Metadata >{item.project}</Comment.Metadata>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </Comment.Group>
       );
          }
    })
    }

    if(this.state.ORSS)

      {
        view=<div >
          <Segment basic><Dropdown  text='Filter' icon='filter' style={{float:'right'}}  floating labeled button className='icon'>
            <Dropdown.Menu>
            <Dropdown.Item onClick={this.showSelected.bind(this,'General')}> General</Dropdown.Item>
            <Dropdown.Item onClick={this.showSelected.bind(this,'Project Specific')}>Project Specific</Dropdown.Item>
           </Dropdown.Menu>
        </Dropdown></Segment>
        {orssFeedback}</div>
    }
    return(
        <Container>
        <Segment>
          <Menu   pointing secondary>
              <Menu.Item  active={this.state.General} name='General Feedback' onClick={this.handleItemClickGeneral.bind(this)}>General Feedback</Menu.Item>
              <Menu.Item  active={this.state.ORSS} name='ORSS Feedback' onClick={this.handleItemClickOrss.bind(this)}>ORSS Feedback</Menu.Item>
          </Menu>
        </Segment>
        <Segment>
        <Grid celled>
          <Grid.Row>
            <Grid.Column column={1}>
                {view}
            </Grid.Column>
          </Grid.Row>
       </Grid>
        </Segment>
      </Container>
      );
  }
}
