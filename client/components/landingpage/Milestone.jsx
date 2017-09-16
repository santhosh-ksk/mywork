/*
  --------------------------------------------------------------
  Milestone Componet
  Displays Oracle Retail's Milestones
  change this.props.milestoneData array to update or add new milestone data
  --------------------------------------------------------------
*/


import React from 'react';

// Semantic-ui components
import {  Grid,
          Image,
          Container,
          Menu,
          Segment,
          Header
      } from 'semantic-ui-react';

// For Wipro style Heading
import Heading from './Heading.jsx';
import request from 'superagent';
// Variable to store 'this' - to access the component anywhere in this component
var me;

// ----------------------------------------------------------------------------------------------------------------------------
// Milestone Data List -
// The logo is available in the location './../../src/images/Homepage/MilestoneSection/'
// Update this list when milestone is to be added or updated...
// add logo to the above location and give the same name in the array
// ----------------------------------------------------------------------------------------------------------------------------
// const this.props.milestoneData = [
//   { year: '1997', caption: 'Enabler is born as a Spin-off from Sonae', logo: ['Sonae.png']},
//   { year: '1999', caption: 'Enabler into International Engagements', logo: ['Despar.png', 'Nisa.png']},
//   { year: '2006', caption: 'Wipro acquires Enabler - a Divison of Wipro', logo: ['Tesco.png']},
//   { year: '2007', caption: 'Enabler/Wipro enters multiple Transformation Programmes',
//                      logo: ['AholdUSA.png', 'Supervalu.png', 'Morrisons.png']},
//   { year: '2013', caption: 'Wipro enters a cycle of Multiple Logo wins as ORGP',
//                      logo: ['Primark.png', 'Debenhams.png', 'Ahorro.png']},
//   { year: '2016', caption: 'ORGP Established as a clear Leader in the Market', logo: ['Makro.png']}
// ];
// ----------------------------------------------------------------------------------------------------------------------------


export default class Milestone extends React.Component{

  constructor() {
    super();

    me=this;

    this.state = {
      value: "",
      menuId: 0,
      milestoneData:[]
    };
  }

  componentDidMount(){
      request.get("/landingpage").end((err,res)=>{
        this.setState({milestoneData:JSON.parse(res.text)});
      })
  }

  // Handle Function for Menu Items (Years)
  handleChange(e, {name, index}) {
    me.setState({ value: name, menuId: index });
  }

  render(){

    //Styles for each components
    const styles = {
      containerStyles : {
        marginTop: '60px'
      },
      gridStyle : {
        marginTop: '50px'
      },
      imageStyle: {
        position: 'absolute',
        zIndex: '-1'
      },
      menuStyle: {
        background:"rgba(255,255,255,0.3)",
        width: '100%',
        marginTop: '40px'
      },
      segmentStyle: {
        height: '280px',
        background:"rgba(255,255,255,0.5)"
      },
      headerStyle: {
        paddingTop: '50px',
        fontFamily: "'Titillium Web', sans-serif"
      },
      logoBackStyle: {
        background:"rgba(255,255,255,0.3)",
        marginTop: '20px'
      },
      logoStyle: {
        padding: '0px 25px'
      }
    };

    // Background image source
    const backImgSrc = './../../../src/images/Homepage/BackgroundImages/milestone.png';

    // Dynamic Menu Items
    const yearMenuComponent = this.state.milestoneData.map(function (yr, k) {
      return (
        <Menu.Item name={yr.year} active={me.state.value === yr.year} onClick={me.handleChange} key={k} index={k} />
      );
    });
    var caption=null;
    var logoComponent =null;
    if(this.state.milestoneData.length>0){
    // Display Dynamic Logos
     logoComponent = this.state.milestoneData[me.state.menuId].logo.map(function (logoname, k) {

      var imgUrl = './../../../src/images/Homepage/MilestoneSection/' + logoname;

      return (
          <Image src={imgUrl}
            height='50px'
            style={styles.logoStyle}
            key={k} />
      );
    });
    caption=this.state.milestoneData[me.state.menuId].caption;
}

    // Return in Render Function
    return(
      <div style={styles.containerStyles}>
        <Image src={backImgSrc} style={styles.imageStyle}/>
        <Container textAlign='center'>

          <Heading circleColor='red'>
            Our Key Milestones
          </Heading>
          <div style={styles.menuStyle}>
            <Menu attached='top' tabular widths={6}>
              {yearMenuComponent}
            </Menu>
          </div>
          <Segment attached='bottom' style={styles.segmentStyle}>
            <Header as='h2' style={styles.headerStyle}>
              <Grid>
                <Grid.Row centered>
                  {caption}
                </Grid.Row>
                <Grid.Row centered  style={styles.logoBackStyle}>
                  {logoComponent}
                </Grid.Row>
              </Grid>
            </Header>
          </Segment>

        </Container>
      </div>
    );
  }
}
