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
    const src = './../../src/images/Homepage/HeadingColors/' + this.props.circleColor + '.jpg';

    // Styles
    const styles = {
      componentStyle: {
        paddingTop: '0px'
      },
      imageStyle: {
        marginTop: '0px',
        zIndex: '-5'
      },
      headerStyle: {
        textDecoration: 'underline',
        marginLeft: '-65px'
      }
    };
    
    return(
      <div style={styles.componentStyle}>
        <Grid>
          <Grid.Row centered>
            <Image 
                src={src}
                size='tiny'
                shape='circular'
                style={styles.imageStyle} />
            <Header as="h1" style={styles.headerStyle}>
              &emsp;{this.props.children}
            </Header>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
