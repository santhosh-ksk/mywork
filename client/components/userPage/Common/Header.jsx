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

       import Cookies from 'universal-cookie';
       import { Link, hashHistory } from 'react-router';

       const cookies = new Cookies();

// Component
export default class HeaderComponent extends React.Component{

  // Constructor - For Initializing state Variable (here to set the initial opacity)
  constructor() {
    super();


  }

//log out functionalities and clearing the client side stored cookies
signOut(){
  cookies.remove("wweStar");
  // console.log("cookies value",cookies.get("wweStar"));
  hashHistory.push("/homePage")
}

  // Render Function
  render() {

    // Styles
    const styles = {
      headerBackgroundStyle : {
        background:"rgba(0,0,0,0.7)",
        backgroundImage:"url(./../../../src/images/headerBg.jpg)",

        paddingTop: "10px",
        height: '40px',
        width: '100%',
        left: '0',
        top: '0'
      }
    }

    var toggleButton=null;
    var logo=null;
    var width=null;
    var columns=null;
    if(this.props.device=="mobile"){
      toggleButton=<Grid.Column  width={2}>

                    <Icon name='bars' size='large' color='grey' onClick={this.props.toggleDrawer}/>

                    </Grid.Column>
      columns=2;
      width=10;

    styles.headerBackgroundStyle.backgroundSize="100% 100%";
    }
    else{
      width=16;
      columns=1;
    }
    return(
      <div>
        <div style={styles.headerBackgroundStyle}>
          <Container fluid={true}>
            <Grid>
            <Grid.Row columns={this.columns}>
              {toggleButton}
              <Grid.Column  width={this.width}>
              <Header as='h2' inverted color='grey'>
              <Button size='Tiny' animated='fade' style={{float:"right",marginRight:'30px', paddingTop:'5px', paddingLeft:'25px'}} onClick={this.signOut.bind(this)}>
              <Button.Content visible>
              <Icon name='sign out' />
              </Button.Content>
              <Button.Content hidden>
              Sign-out
              </Button.Content>
              </Button>
              {logo}
                <Header.Content style={{cursor:"default",color:'white',paddingLeft:'60px'}}>
                 ORSS
               </Header.Content>
             </Header>
              </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
      </div>
      )
  }
}
