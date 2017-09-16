/*
  --------------------------------------------------------------------
  Basic information - Component that displays two texts and Wipro Logo
  --------------------------------------------------------------------
*/

import React from 'react';

// Semantic UI Component Imports
import { Container,
          Header,
          Grid,
          Image,
          Divider
       } from 'semantic-ui-react'

export default class BasicInfo extends React.Component{

  // Render Function
  render() {

    // Styles
    const styles = {
      compTopStyleComp: {
        height: '150px'
      },
      compTopStyleMob: {
        height: '100px'
      },
      headerBackgroundStyle : {
        background:"rgba(0,0,0,0.5)",
        width: '100%',
        padding: '10px 0px'
      },
      headerStyle: {
        fontSize: '3em',
        fontFamily: "'Play', sans-serif"
      },
      mobheaderStyle: {
        fontSize: '2em',
        fontFamily: "'Titillium Web', sans-serif"
      },
      subHeaderStyle: {
        fontSize: '0.6em',
        fontFamily: "'Catamaran', sans-serif"
      },
      imageStyle: {
        background:"rgba(255,255,255,0.2)",
        padding: '10px',
        borderRadius: '15px'
      }
    }

    return(
      <div>
        <Grid>
          <Grid.Row only='computer' style={styles.compTopStyleComp} />
          <Grid.Row only='mobile tablet' style={styles.compTopStyleMob} />
        </Grid>

        <div style={styles.headerBackgroundStyle}>

            <Container>

              <Grid divided>
                <Grid.Row only='computer'>
                  <Grid.Column width={11}>
                    <Header inverted color='grey' style={styles.headerStyle}>
                        Oracle Retail Shared Services
                      <Header.Subheader style={styles.subHeaderStyle}>
                        Wipro is a pioneer in Oracle Retail Technologies, using there immense potential to cater the needs of the CLIENTS!
                      </Header.Subheader>
                      <br />
                      <Header.Subheader style={styles.subHeaderStyle}>
                        We believe in delivering in our promise so that the client's goals are met
                      </Header.Subheader>
                    </Header>
                  </Grid.Column>
                  <Grid.Column textAlign='center' width={5}>
                    <Image
                        src='./../../src/images/Homepage/wipro-logo.png'
                        width='250'
                        wrapped
                        style={styles.imageStyle} />
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row centered only='mobile tablet'>
                  <Grid.Column>
                    <Header inverted color='grey' style={styles.mobheaderStyle}>
                        Wipro Oracle Retail Shared Services Home Page
                    </Header>
                    <Image
                        src='./../../src/images/Homepage/wipro-logo.png'
                        width='250'
                        wrapped
                        size='small'
                        style={styles.imageStyle} />
                  </Grid.Column>

                </Grid.Row>
              </Grid>


            </Container>

        </div>
      </div>
      )
  }
}
