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
// for Accessing 'this' everywhere!!!
var me;

// Component
export default class HeaderComponent extends React.Component{

  // Constructor - For Initializing state Variable (here to set the initial opacity)
  constructor() {
    super();

    me = this;

    this.state = {
      opacity: 0.2,
      buttonVisibility: 'hidden'
    };
  }


  //-----------------------------------------------------------------------
  // Event listen Handler for Scroll
  // For Navbar Opacity & Button Visibility
  //-----------------------------------------------------------------------
  _handleScroll({pageY}) {
    // For Navbar Opacity
    if(pageY < 130)
    {
      var op = pageY/100 + 0.2;

      if(op > 1)
      {
        op = 1.0;
      }

      me.setState({
        opacity: op
      });
    }
    else if((pageY > 130) && (me.state.opacity < 1.0))
    {
      var op = 1.0;

      me.setState({
        opacity: op
      });
    }

    // For Button Visibility
    var screenMidPoint = window.innerHeight / 2;
    screenMidPoint += window.innerHeight / 3;

    if(me.state.buttonVisibility == 'hidden')
    {
      if(pageY > screenMidPoint)
      {
        me.setState({
          buttonVisibility: 'visible'
        });
      }
    }
    else
    {
      if(pageY <= screenMidPoint)
      {
        me.setState({
          buttonVisibility: 'hidden'
        });
      }
    }
  }
  //-----------------------------------------------------------------------

  // Executes once page is mounted
  componentDidMount() {
    // Add Listener for scroll - for navbar opacity
    window.addEventListener('scroll', this._handleScroll);
  }

  // Executes once page is going to unmount
  componentWillUnmount() {
    // Remove Listener for scroll - for navbar opacity
    window.removeEventListener('scroll', this._handleScroll);
  }

  // Render Function
  render() {

    // Styles
    const styles = {
      headerBackgroundStyle : {
        background:"rgba(0,0,0,"+this.state.opacity+")",
        paddingTop: "10px",
        height: '65px',
        width: '100%',
        position: 'fixed',
        left: '0',
        top: '0',
        zIndex: 20
      },
      buttonStyle: {
        visibility: this.state.buttonVisibility
      }
    }

    return(
      <div>
        <div style={styles.headerBackgroundStyle}>
          <Container>
            <Grid columns='equal'>

              <Grid.Column  width={3}>
              <Header as='h2' inverted color='grey'>
                 <Image src="./../../src/images/Homepage/wipro-logo.png" alt="logo" style={{background:"rgba(255,255,255,1)",width:"60px",padding:"10px",marginTop:"0px"}}/>

               <Header.Content>
                 ORSS
               </Header.Content>
             </Header>
              </Grid.Column>
              <Grid.Column textAlign='right'>
                <Link to={"/homePage"}><Button size='large' style={styles.buttonStyle} inverted>Proceed to home page <Icon name='arrow circle right' /></Button>
                </Link>
              </Grid.Column>
            </Grid>

          </Container>

        </div>
      </div>
      )
  }
}
