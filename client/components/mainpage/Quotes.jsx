/*
  --------------------------
  Quote of the Day Component
  --------------------------
*/

import React from 'react';

import { Segment,
        Container,
         Grid,
         Icon,
         Header,
         Image
       } from 'semantic-ui-react';

import request from 'superagent';

// const quote = {
//   quote:'Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself.',
//   author:'Henry James'
// };

export default class quotes extends React.Component{

  constructor(props){
    super(props);
    this.state={
      quote:{}
    }
  }

  componentDidMount(){
      request.get("/quotes").end((err,res)=>{
        this.setState({quote:JSON.parse(res.text)})
      })
  }

  render(){

    const styles = {
        quoteColStyle : {
          paddingTop: '30px',
          paddingBottom: '30px',
          marginBottom: '0px'
        },
        segStyle: {
            // background:"url(./../../src/images/Homepage/b1.jpg) no-repeat",
            // backgroundSize: '100% 100%',
            // backgroundColor: 'red',
            backgroundColor:"rgba(255,255,255,0)"
        },
        containerStyle: {
          marginTop: '50px'
        }
      }

    return(
      <Container style={styles.containerStyle}>

          <Grid columns='equal'>
            <Grid.Row centered style={{marginTop:"40px"}}>
              <Grid.Column textAlign='right' verticalAlign='top' width={3}>
                <Icon name='quote left' size='big' color="grey"/>
              </Grid.Column>
              <Grid.Column
                  verticalAlign='middle'
                  style={styles.quoteColStyle}>
                <Header  style={{color:"azure",fontFamily:'Architects Daughter, cursive',fontSize:"20px",letterSpacing:"3px"}}>{this.state.quote.quote}</Header>

              </Grid.Column>
              <Grid.Column textAlign='left' verticalAlign='bottom' width={3}>
                <Icon name='quote right' size='big' color="grey"/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='right' floated='right'>
                <Header as='h4' style={{color: '#2185D0', paddingRight: '10%'}}>
                  <i>
                    - <u>{this.state.quote.author}</u>
                  </i>
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>

      </Container>
    );
  }
}
