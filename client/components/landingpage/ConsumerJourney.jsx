/*
  ------------------------
  Display Consumer Journey
  ------------------------
*/

import React from 'react';

// Semantic UI imports
import { Image,
         Header,
         Container,
         Icon,
         Grid
       } from 'semantic-ui-react';

// For Wipro style Heading
import Heading from './Heading.jsx';

export default class ConsumerJourney extends React.Component{
  render(){

    // Styles
    const styles = {
      topStyle: {
        marginTop: '70px',
        marginBottom: '100px'
      },
      imageStyle: {
        position: 'absolute',
        zIndex: '0'
      },
      divStyle: {
        position: 'relative',
        top: '0',
        left: '0'
      },
      gridStyle : {
        marginTop: '30px'
      }
    }

    //------------------------------------------------------------------------------------------
    // Change this to change the background Image of this Component
    //------------------------------------------------------------------------------------------
    const backImgSrc = './../../src/images/Homepage/BackgroundImages/consjourney.jpg';
    //------------------------------------------------------------------------------------------


    //------------------------------------------------------------------------------------------
    // Change this to update or Add new Consumer Journey points
    //------------------------------------------------------------------------------------------
    const iconDetails = [
      { icon1: 'line graph', icon2: '', head: 'Planning & Optimization', margin: '0'},
      { icon1: 'truck', icon2: '', head: 'Supply Chain', margin: '0'},
      { icon1: 'male', icon2: 'setting', head: 'Miscelaneous Operations', margin: '1.25rem'},
      { icon1: 'pie graph', icon2: '', head: 'Commerce', margin: '0'},
      { icon1: 'shopping cart', icon2: '', head: 'Stores', margin: '0'},
      { icon1: 'mobile', icon2: 'user', head: 'Consumer Engagement', margin: '1.25rem'},
      { icon1: 'search', icon2: '', head: 'Analytics', margin: '0'},
    ];
    //------------------------------------------------------------------------------------------


    // Icon Component - to handle dynamic number of Items
    const iconComponent = iconDetails.map(function (icon, key) {
      if(icon.icon2 == '')
      {
        return (
          <Header as='h3' style={{padding: '15px 40px', margin: '0'}} key={key}>
            <Icon.Group size='huge'>
              <Icon link name={icon.icon1} style={{marginRight: icon.margin}} />
            </Icon.Group>
            <br />
            {icon.head}
          </Header>
        );
      }
      else
      {
        return (
          <Header as='h3' style={{padding: '15px 40px', margin: '0'}} key={key}>
            <Icon.Group size='huge'>
              <Icon link name={icon.icon1} style={{marginRight: icon.margin}} />
              <Icon corner name={icon.icon2} />
            </Icon.Group>
            <br />
            {icon.head}
          </Header>
        );
      }
    });


    return(
      <div style={styles.topStyle}>
        <Image src={backImgSrc} style={styles.imageStyle}/>
        <Container>


          <div style={styles.divStyle}>

            <Heading circleColor='green'>
              Enabling Consumer Journeys
            </Heading>


            <Grid style={styles.gridStyle}>
              <Grid.Row centered>
                  {iconComponent}
              </Grid.Row>
            </Grid>

          </div>

        </Container>
      </div>
    );
  }
}
