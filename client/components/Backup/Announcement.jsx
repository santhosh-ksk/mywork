import React from 'react';

import { Icon,
         Grid,
         Card,
         List,
         Segment
       } from 'semantic-ui-react';

import SwipeableViews from 'react-swipeable-views';
import autoPlay from 'react-swipeable-views-utils/lib/autoPlay';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

import CardTemplate from './CardTemplate.jsx';

const ongoingitems = [
  {
    header: 'Project Report - ORSS ',
    description: 'Project Presenation for the web application .',
    name:'Santhosh',
  },

  {
    header: 'Project Report - William Sonoma',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    name:'Gowtham',
  },
  {
    header: 'Project Report - Debenhams',
    description: 'Survival strategies to ensure proactive domination.',
    name:'Mini',
  },
  {
    header: 'Project Report - Debenhams survival strategies to ensure proactive domination',
    description: 'Survival strategies to ensure proactive domination. Bring to the table win-win survival strategies to ensure proactive domination.',
    name:'Mini',
  },
];

export default class Announcement extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      play:true
    }
    this.handlePause=this.handlePause.bind(this);
    this.handlePlay=this.handlePlay.bind(this);
  }

  handlePause(){
    this.setState({play:false})
  }

  handlePlay(){
    this.setState({play:true})
  }

  render()
  {
    const ongoingComp = ongoingitems.map((item,k)=>
    {
      return (
        <div>
          <List>
            <List.Item>
              <List.Icon name='announcement' size='large' verticalAlign='top' />
              <List.Content style={{width: '100%', paddingRight: '20px'}}>
                <List.Header as='a' style={{fontSize: '17px'}}>{item.header}</List.Header>
                <i><List.Description as='a' style={{color: 'grey', fontSize: '13px', marginTop: '2px'}}>
                  Posted on Monday
                  <span style={{float: 'right'}}>
                    <Icon name='user' />
                    {item.name}
                  </span>
                </List.Description></i>
              </List.Content>
            </List.Item>
          </List>
          <div style={{paddingRight: '20px'}}>
            <Segment style={{marginBottom: '5px'}}>
            {item.description}
            </Segment>
          </div>
        </div>
        
      );
    });

// <div key={k} style={{textAlign: 'center', width: '100%'}}>          
//               <Card fluid>
//                 <Card.Content header>
//                   <Icon name='announcement' />
//                   {item.header} 
//                 </Card.Content>
//                 <Card.Content description={item.description} />
//                 <Card.Content extra>
//                   <Icon name='user' />
//                   {item.name}
//                 </Card.Content>
//               </Card>
//         </div>



       return(
             <CardTemplate head="Announcement" color="teal" showMore buttonText='View all Announcements'>

                    <AutoPlaySwipeableViews interval={4000} autoplay={this.state.play}
                                            onMouseEnter={this.handlePause} onMouseLeave={this.handlePlay}>
                       {ongoingComp}
                    </AutoPlaySwipeableViews>

              </CardTemplate>

            )
  }

}
