/*
  ---------------------------------------------------
  To display a list of Wipro's Important Client Logos
  ---------------------------------------------------
*/

import React from 'react';

import { Header,
          Grid,
          Image,
          Container,
          Divider
      } from 'semantic-ui-react';

import Heading from './../../components/mainpage/Heading.jsx';

// Url Array - Will be receiving from Server (from File system)
// Image will be in the dir - './../../src/images/Homepage/ClientLogos/'
var fileNameList = [
  'custLogo9.png',
  'custLogo1.png',
  'custLogo2.png',
  'custLogo3a.jpg',
  'custLogo4.png',
  'custLogo5.png',
  'custLogo6.png',
  'custLogo7.png',
  'custLogo8.png',
];

export default class ClientDetails extends React.Component{


  render(){
    const me = this;
    const styles = {
      containerStyles : {
        marginTop: '0px',
        backgroundColor:"rgba(255,255,255,0.9)"
      },
      gridStyle : {
        marginTop: '30px'
      },
      dividerStyle: {
        backgroundColor: 'black'
      },
    };

    // Dynamic images
    const imgComp = fileNameList.map(function (filename, key) {
      var logoUrl = './../../src/images/Homepage/ClientLogos/' + filename;
      return (
        <div style={{padding: '35px 50px'}} key={key}>
          <Image src={logoUrl} height="50px" />
        </div>

      );
    });

//  <ClientLogo src={url} key={key}/>

    return(
      <Container textAlign='center' style={styles.containerStyles}>
      <Heading circleColor='blue'>
         Our Important Clients
       </Heading>
        <Divider style={styles.dividerStyle} />
        <Grid style={styles.gridStyle} columns={4}>
          <Grid.Row centered>
            {imgComp}
          </Grid.Row>
        </Grid>
        <Divider style={styles.dividerStyle} />
      </Container>
    );
  }
}
// <Divider />
