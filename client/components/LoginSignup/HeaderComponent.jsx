/*
  --------------------------------------------
  Navbar of the page
  Contains ORSS logo and proceed button
  --------------------------------------------
*/

import React from 'react';

// Semantic-ui Components
import { Container,
         Header,
         Grid,
         Button,
         Icon,
         Image
       } from 'semantic-ui-react';

import { Link } from 'react-router';


// Component
export default class HeaderComponent extends React.Component{

  // Constructor - For Initializing state Variable (here to set the initial opacity)
  constructor() {
    super();


  }



  // Render Function
  render() {

    // Styles
    const styles = {
      headerBackgroundStyle : {
        background:"rgba(0,0,0,0.8)",
        paddingTop: "10px",
        height: '65px',
        width: '100%',
        position: 'fixed',
        left: '0',
        top: '0',
        zIndex: 20
      }
    }

    return(
      <div>
        <div style={styles.headerBackgroundStyle}>
          <Container>
            <Grid columns='equal'>

              <Grid.Column  width={16}>
              <Header as='h2' inverted color='grey'>
              <Image href='/#/homePage' src="./../../src/images/Homepage/wipro-logo.png" alt="logo" style={{background:"rgba(255,255,255,1)",width:"60px",padding:"10px",marginTop:"0px"}}/>
                <Link to={'homePage'}>  <Header.Content style={{cursor:"default",color:'white',paddingTop:'11px',paddingLeft:'7px'}}>
                 ORSS
               </Header.Content></Link>
             </Header>
              </Grid.Column>
            </Grid>

          </Container>

        </div>
      </div>
      )
  }
}
