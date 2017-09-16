import React from 'react';
import scrollToComponent from 'react-scroll-to-component';
import { Link } from 'react-router';
// Semantic UI Components
import { Button,
         Dropdown,
         Icon,
         Menu,
         Segment,
         Grid,
         Popup,
         Image } from 'semantic-ui-react'

// React Player for Playing Video
import ReactPlayer from 'react-player'

// React Fade for fading Headers in layout while the video plays
import { default as Fade } from 'react-fade';

// For automatic scroll
import Scroll from 'react-scroll';
var scroller = Scroll.scroller;
var Element = Scroll.Element;
// Variable to store 'this'
var me;
const vidUrl = 'https://youtu.be/LFokZ1qXbf0';

export default class Fulllengthvideo extends React.Component{

  constructor()
  {
      super();

      me = this;

      this.state = {
        fadeDuration: 0,
        fadeOut: false,
        headerVisibility: 'visible',
        buttonVisibility: 'hidden',
        stopButtonVisibility: 'hidden',
        proceedButtonVisibility: 'visible',
        play: true,
        url: vidUrl
        // url: null
      };
  }

  // Function to trigger when video starts playing
  videoPlaying()
  {
    // Setting state to fadeout headers
    me.setState({
      fadeOut: true,
      fadeDuration: 1,
      buttonVisibility: 'hidden',
      proceedButtonVisibility: 'visible'
    });

    // setTimeout() needs the duration to be in thousands
    // if the duration is three, the equallent duration will be 3000!!!
    var dur = me.state.fadeDuration * 1000;

    // setTimeOut() for setting the style property visibility as hidden -
    // so that the faded out components will be hidden
    setTimeout(() => {
      me.setState({
        headerVisibility: 'hidden',
        stopButtonVisibility: 'visible'
      });
    }, dur);
  }

  // Function to trigger when video ends
  videoEnded()
  {
    // Bring back the headers
    // Also set the url as null
    me.setState({
      fadeOut: false,
      headerVisibility: 'visible',
      buttonVisibility: 'visible',
      stopButtonVisibility: 'hidden',
      proceedButtonVisibility: 'hidden',
      fadeDuration: 0,
      url: null,
      play: false
    });
  }

  // Function to handle replay Button
  replayVideo()
  {
    me.setState({
      url: vidUrl,
      play: true,
      buttonVisibility: 'hidden'
    });
  }

  // Function called when mouse-scroll event is triggered
  _handleScroll({pageY})
  {
    // cursor position where the video should pause/play
    var cutOff = window.innerHeight / 2;

    // Logic for play/pause
    if(me.state.play)
    {
      if(pageY > cutOff)
      {
        me.setState({
          play: false,
          stopButtonVisibility: 'hidden'
        });
      }
    }
    else
    {
      if(pageY < cutOff)
      {
        me.setState({
          play: true
        });
      }
    }
  }

  componentDidMount()
  {
    // Adding Listener for scroll - for navbar opacity
    window.addEventListener('scroll', this._handleScroll);
  }

  componentWillUnmount()
  {
    // Remove Listener for scroll - for navbar opacity
    window.removeEventListener('scroll', this._handleScroll);
  }


  scrollTo()
   {
   scroller.scrollTo('scroll', {
   duration: 3000,
   delay: 0,
   smooth: true,
   containerId: 'ContainerElementID'
                         });

   }

  render()
  {
    // Styles used in the component
    const styles = {
      containerStyle: {
        // backgroundImage: './../../src/images/backImage.png'
      },
      playerDivStyle: {
        width:'100%',
        position:"fixed",
        left:"0",
        top:"0",
        padding:"0",
        display:"block",
        // backgroundColor: 'black'
        background: 'url("./../../src/images/backImage.jpg")',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
      },
      overlayDivStyle: {
        height: window.innerHeight,
        width: window.innerWidth,
        top: "0",
        position: "fixed",
        paddingTop: '100px'
      },
      overlayGridStyle: {
        height:window.innerHeight-100
      },
      header1Style: {
        fontFamily: 'Cinzel Decorative,cursive',
        color: 'white',
        fontSize: '60px'
      },
      header2Style: {
        fontFamily: 'Cinzel Decorative, cursive',
        color: 'white',
        fontSize: '40px',
        // margin: "50px",
        // marginTop: '150px'
      },
      replayProceedButtonFadeStyle: {
        visibility: this.state.buttonVisibility
      },
      headerFadeStyle: {
        visibility: this.state.headerVisibility
      },
      stopButtonFadeStyle: {
        visibility: this.state.stopButtonVisibility,
        height: '50px'
      },
      proceedButtonStyle: {
        float: 'right',
        visibility: this.state.proceedButtonVisibility
      },
      scrollDivStyle: {
        background: 'rgba(0,0,0,0.5)',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        textAlign: 'center',
        padding: '10px'
      }
    }

    return(
      <div id="container" style={styles.containerStyle}>
        <Grid centered columns={1}>
          <Grid.Row >
            <Grid.Column>
              <div style={styles.playerDivStyle}>
                <ReactPlayer
                    url={this.state.url}
                    width={window.innerWidth}
                    height={window.innerHeight}
                    onPlay={this.videoPlaying}
                    onEnded={this.videoEnded}
                    playing={this.state.play}
                />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <center>

          <div id="overlay" style={styles.overlayDivStyle}>
             <Grid centered stretched  columns='equal' style={styles.overlayGridStyle}>
               <Grid.Row>
                  <Grid.Column verticalAlign='middle'>
                    <Fade
                      out={this.state.fadeOut}
                      duration={this.state.fadeDuration}
                      style={styles.headerFadeStyle}
                    >
                    <p style={{fontFamily:'Exo 2, sans-serif',color:"white",fontSize:'50px'}}>
                            <span style={{fontFamily:'Orbitron, sans-serif',color:"red"}}>Oracle</span> Retail Shared Services
                    </p>
                    </Fade>
                  </Grid.Column>
               </Grid.Row>
               <Grid.Row verticalAlign='middle' centered>
                <Grid.Column></Grid.Column>
                <Grid.Column width={8}>
                  <Fade
                        out={this.state.fadeOut}
                        duration={this.state.fadeDuration}
                        style={styles.replayProceedButtonFadeStyle}
                      >
                    <Button size='large' onClick={this.replayVideo} inverted><Icon name='repeat' />Replay Video</Button>
                    <Link to={"/homePage"}><Button size='large' inverted>Proceed to Wipro Oracle Home Page</Button></Link>
                  </Fade>
                </Grid.Column>
                <Grid.Column>
                  <div style={styles.proceedButtonStyle}>
                    <Popup
                      trigger={<Link to={"/homePage"}><Button basic inverted circular size='big' icon='angle double right' /></Link>}
                      content='Proceed to Oracle Home Page'
                      on='hover'
                      inverted
                    />
                  </div>
                </Grid.Column>
               </Grid.Row>
               <Grid.Row >
                  <Grid.Column verticalAlign='middle'>
                    <Fade
                      out={this.state.fadeOut}
                      duration={this.state.fadeDuration}
                      style={styles.headerFadeStyle}
                    >
                    <h3 style={{color:"white",fontSize:'40px',margin:"50px"}}>
                          <span style={{fontFamily:'Orbitron, sans-serif',color:"red"}}>Oracle</span> | <span style={{fontFamily:'Exo 2, sans-serif'}}>Wipro</span>
                    </h3>
                    </Fade>
                  </Grid.Column>
               </Grid.Row>
               <Grid.Row centered>

                  <Button
                      size='large'
                      onClick={this.videoEnded}
                      style={styles.stopButtonFadeStyle}
                      inverted>
                        <Icon name='remove circle outline' />Stop Playing Video
                  </Button>

               </Grid.Row>
             </Grid>
          </div>

        </center>
        <div style={styles.scrollDivStyle}>
          <Popup
            trigger={<Button basic inverted circular icon='angle double down' onClick={this.scrollTo} />}
            content='Scroll Down to know more'
            position='right center'
            on='hover'
            basic
            inverted
          />


        </div>

      </div>

    );
  }
}
