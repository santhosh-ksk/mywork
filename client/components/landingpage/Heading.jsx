/*
  ------------------------------------------------------------------
  Custom Heading Componet
  Displays heading in Wipro Style
  Receives color as props and loads corresponding color image
        from the folder './../../src/images/Homepage/HeadingColors/'
  ------------------------------------------------------------------
*/

import React from 'react';


// Semantic-ui components
import { Header,
          Grid,
          Image
      } from 'semantic-ui-react';

export default class Heading extends React.Component{
  render(){

    // Setting the color
    const src = './../../../src/images/HomePage/HeadingColors/' + this.props.circleColor + '.jpg';

    // Styles
    const styles = {
      componentStyle: {
        paddingTop: '40px'
      },
      imageStyle: {
        marginTop: '0px',
        zIndex: '0'
      },
      headerStyle: {
        textDecoration: 'underline',
        marginLeft: '-65px',
        zIndex: '1'
      }
    };

    return(
      <div style={styles.componentStyle}>
        <Grid>
          <Grid.Row centered>
            <div>
              <Image
                  src={src}
                  size='tiny'
                  shape='circular'
                  style={styles.imageStyle} />
            </div>
            <Header as="h1" style={styles.headerStyle}>
              &emsp;{this.props.children}
            </Header>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
