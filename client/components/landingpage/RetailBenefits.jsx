import React from 'react';

import {  Grid,
          Image,
          Container,
          Reveal,
          Card,
          segment
      } from 'semantic-ui-react';

// For Wipro style Heading
import Heading from './Heading.jsx';

export default class RetailBenefits extends React.Component{
  render(){
    const styles = {
      containerStyles : {
        marginTop: '10px'
      },
      gridStyle : {
        marginTop: '30px'
      },
      revealContentStyle: {
        padding: '5px'
      },
      backgroundcolor:'grey'

    };

    const imageNames = [
      { imgName: 'insights', head: 'Gain Actionable Insights'},
      { imgName: 'retailOperations', head: 'Optimize Retail Operations'},
      { imgName: 'custInteraction', head: 'Connected Customer Interactions'}
    ];

    const cardComponent = imageNames.map(function(imge, k) {
      var firstSrc = "./../../src/images/Homepage/BenefitsSection/" + imge.imgName + "_bw.jpg";
      var secondSrc = './../../src/images/Homepage/BenefitsSection/' + imge.imgName + '.jpg';

      return (

        <Card color='red' key={k}>
          <Reveal animated='fade' instant>
            <Reveal.Content visible  style={styles.revealContentStyle}>
              <Image src={firstSrc} size='medium' />
            </Reveal.Content>
            <Reveal.Content hidden  style={styles.revealContentStyle}>
              <Image src={secondSrc} size='medium' />
            </Reveal.Content>
          </Reveal>
          <Card.Content>
            <Card.Header>{imge.head}</Card.Header>
          </Card.Content>
        </Card>
 );
    }
  );


    return(

      <Container textAlign='center' style={styles.containerStyles}>

        <Heading circleColor='yellow'>
          Oracle Retail Benefits
        </Heading>
        <Grid style={styles.gridStyle}>
          <Grid.Row centered>
            <Card.Group itemsPerRow={3}>

              {cardComponent}


            </Card.Group>
          </Grid.Row>
        </Grid>
        <br /><br />
      </Container>



    );
  }
}
