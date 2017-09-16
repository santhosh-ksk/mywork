/*
  -----------------------------------------------------------------------
  Navbar of the Home Page
  Contains Quick Access, Goto Welcome Page and dropdown for Login/Sign-up
  -----------------------------------------------------------------------
*/

import React from 'react';

// Semantic-ui Components
import { Container,
         Header,
         Grid,
         Menu,
         Dropdown,
         Button,
         Icon,
         Image
       } from 'semantic-ui-react';
import { Link } from 'react-router';
// for Accessing 'this' everywhere!!!
var me;
// For automatic scroll
import Scroll from 'react-scroll';
var scroller = Scroll.scroller;
// Component
export default class HeaderComponent extends React.Component{

  // Constructor - For Initializing state Variable (here to select the first Menu Item)
  constructor() {
    super();

    me = this;

    this.state = {
      activeItem: null,
      opacity: 0.2
    };
  }

  // Handle Function for Menu Items
  handleItemClick(e, {name}) {
    me.setState({
        activeItem: name
      });
  }

  //-----------------------------------------------------------------------
  // Event listen Handler for Scroll
  // For Navbar Opacity & Automatic Scroll
  //-----------------------------------------------------------------------
  _handleScroll({pageY}) {
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
  }
  //-----------------------------------------------------------------------

  // Executes once page is mounted
  componentDidMount() {
    // Add Listener for scroll - for navbar opacity
    window.addEventListener('scroll', this._handleScroll.bind(this));
  }

  // Executes once page is going to unmount
  componentWillUnmount() {
    // Remove Listener for scroll - for navbar opacity
    window.removeEventListener('scroll', this._handleScroll.bind(this));
  }

  handleClick(item){
      scroller.scrollTo(item, {
        offset:-65,
        duration: 500,
        delay: 0,
        smooth: true,
        containerId: 'ContainerElementID'
      });
    }
  // Render Function
  render() {
    const { activeItem } = this.state;

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
      menuStyle: {
        marginTop: '4px'
      }
    }

    return(
      <div>
        <div style={styles.headerBackgroundStyle}>
          <Container>
            <Grid columns='equal'>

              <Grid.Column  width={6}>
                <Header as='h2' inverted color='grey'>



                   <Image src="./../../src/images/Homepage/wipro-logo.png" alt="logo" style={{background:"rgba(255,255,255,1)",width:"60px",padding:"10px",marginTop:"0px"}}/>

                 <Header.Content>
                   ORSS
                 </Header.Content>
               </Header>
              </Grid.Column>
              <Grid.Column>

                <Menu inverted secondary style={styles.menuStyle}>
                <Menu.Menu position='right'>
                  <Menu.Item>
                    <Dropdown trigger='Quick Access' pointing>
                      <Dropdown.Menu>
                      <Dropdown.Item text='Announcements' onClick={this.handleClick.bind(this,'Announcements')}/>
                      <Dropdown.Item text='Flash News' onClick={this.handleClick.bind(this,'Flash News')}/>
                      <Dropdown.Item text='Tech Forum' onClick={this.handleClick.bind(this,'Tech Forum')}/>
                      <Dropdown.Item text='Star of the Month' onClick={this.handleClick.bind(this,'Star of the Month')}/>
                      <Dropdown.Item text='Poll / Quiz' onClick={this.handleClick.bind(this,'Poll / Quiz')}/>
                      <Dropdown.Divider />
                      <Dropdown.Item text='Provide Feedback' onClick={this.handleClick.bind(this,'Provide Feedback')}/>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Menu.Item>


                  <Link to={"/"}>
                  <Menu.Item
                        name='ORSSWelcome'
                        active={activeItem === 'ORSSWelcome'}
                        content='Go to Welcome Page'
                        onClick={me.handleItemClick}  />
                  </Link>
                    <Menu.Item>
                      <Dropdown trigger='Login/Register' pointing>
                        <Dropdown.Menu>
                          <Link to={"/login"}><Dropdown.Item style={{color:'black'}} text='Login' /></Link>
                          <Dropdown.Divider />
                            <Link to={"/signup"}><Dropdown.Item style={{color:'black'}} text='Sign Up' /></Link>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Menu.Item>
                  </Menu.Menu>

                </Menu>

              </Grid.Column>
            </Grid>

          </Container>

        </div>
      </div>
      )
  }
}
