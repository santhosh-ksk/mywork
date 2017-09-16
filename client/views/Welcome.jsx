import React from 'react';

import HeaderComponent from './../components/landingpage/HeaderComponent.jsx';
import Fulllengthvideo from './../components/landingpage/Fulllengthvideo.jsx';
import Milestone from './../components/landingpage/Milestone.jsx';
import ConsumerJourney from './../components/landingpage/ConsumerJourney.jsx';
import RetailBenefits from './../components/landingpage/RetailBenefits.jsx';
import Footer from './../components/mainpage/Footer.jsx';
// import Buttoncomponent from './../components/Buttoncomponent.jsx'
import request from 'superagent';
import { Image } from 'semantic-ui-react';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';
import Scroll from 'react-scroll';
var scroller = Scroll.scroller;
var Element = Scroll.Element;

export default class Welcome extends React.Component{
  constructor(props){
    super(props);
    window.scrollTo(0, 0);
  }


  render(){

    const styles = {
      divStyle: {
        marginTop: window.innerHeight,
        position: 'absolute',
        zIndex: '10',
        backgroundColor: 'white',
        width: '100%'
      }
    }


    return(

      <div>
        <HeaderComponent/>

        <Fulllengthvideo />

        <div style={styles.divStyle}>
          <Element name='scroll' id='scroll'></Element>
          <Reveal effect="animated fadeInUp">
          <RetailBenefits />
          </Reveal>
          <Reveal effect="animated fadeInUp">
          <Milestone/>
          </Reveal>
          <Reveal effect="animated fadeInUp">
          <ConsumerJourney />
          </Reveal>

          <Footer />

        </div>

      </div>
    )
  }
}
