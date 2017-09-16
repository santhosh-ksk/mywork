/*
	-------------------------------------
	Main view for Oracle Retail Home Page
	-------------------------------------
*/
import React from 'react';
import ReactDOM from 'react-dom';

// semantic UI Components Import
import { Grid, Container, Card, Divider } from 'semantic-ui-react';

// Custom Components Imports
import Header from './../components/mainpage/header.jsx';
import BasicInfo from './../components/mainpage/BasicInfo.jsx';

import QuizPoll from './../components/mainpage/QuizPoll.jsx';
import Feedback from './../components/mainpage/Feedback.jsx';

import StarOfMonth from './../components/mainpage/StarOfMonth.jsx';
import Quotes from './../components/mainpage/Quotes.jsx';
import Announcement from './../components/mainpage/Announcement.jsx';
import FlashNews from './../components/mainpage/FlashNews.jsx';
import TechForum from './../components/mainpage/techForum.jsx';

import ClientDetails from './../components/mainpage/ClientDetails.jsx';
import Footer from './../components/mainpage/Footer.jsx';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

// Imports for Automatic Scroll
import Scroll from 'react-scroll';
var Element = Scroll.Element;

export default class WiproOracleRetail extends React.Component{
  constructor(props){
    super(props);
    window.scrollTo(0, 0);
  }
  	render(){
      console.log("cookies from homepage", cookies.get("wweStar"));
  		const styles = {
  			backgroundImageStyle: {
  				background:"url(./../../src/images/Homepage/BackgroundImages/retailHead.jpg) no-repeat",
  				backgroundAttachment:"fixed",
  				backgroundSize: '100% 100%',
  				minHeight: window.innerHeight + 20,
  				width:"100%",
  				marginBottom: '5px'
  			},
  			contentStyles: {
  				background:"url(./../../src/images/Homepage/b3.jpg)",
  				backgroundAttachment:"fixed",
  				// backgroundColor: 'red',
  				paddingTop: '50px',
  				marginBottom: '20px'
  			},
  			dividerStyle: {
				backgroundColor: 'black'
			},
  		};

	    return(
	      <div>
	        <div style={styles.backgroundImageStyle}>
	        	<Header />
	        	<BasicInfo />
	        	<Quotes/>
	        </div>
	       	<div style={styles.contentStyles}>
	       		<Container>
		       		<Grid doubling columns='equal'>

			       		<Grid.Row only='computer tablet'>
			       			<Grid.Column>
			       				<Card.Group itemsPerRow={2}>
                      <Element name='Announcements' id='Announcements'></Element>
				       				<Announcement />
                        <Element name='Flash News' id='Flash News'></Element>
				       				<FlashNews />

			       				</Card.Group>
			       			</Grid.Column>
		       			</Grid.Row>

		       			<Grid.Row only='mobile'>
			       			<Grid.Column>
			       				<Card.Group>

				       				<Announcement />
			       				</Card.Group>
			       			</Grid.Column>
		       			</Grid.Row>

		       			<Grid.Row only='mobile'>
			       			<Grid.Column>
			       				<Card.Group>

				       				<FlashNews />
			       				</Card.Group>
			       			</Grid.Column>
		       			</Grid.Row>

		       			<Grid.Row>
		       				<Grid.Column>
                  <Element name='Tech Forum' id='Tech Forum'></Element>
		       					<TechForum />
		       				</Grid.Column>
			       		</Grid.Row>

		       			<Grid.Row only='computer tablet'>
			       			<Grid.Column>
			       				<Card.Group itemsPerRow={2}>
                    <Element name='Star of the Month' id='Star of the Month'></Element>
			       					<StarOfMonth />
                      <Element name='Poll / Quiz' id='Poll / Quiz'></Element>
			       					<QuizPoll />
			       				</Card.Group>
			       			</Grid.Column>
		       			</Grid.Row>

		       			<Grid.Row only='mobile'>
			       			<Grid.Column>
			       				<Card.Group>

			       					<StarOfMonth />
			       				</Card.Group>
			       			</Grid.Column>
		       			</Grid.Row>

		       			<Grid.Row only='mobile'>
			       			<Grid.Column>
			       				<Card.Group>

			       					<QuizPoll />
			       				</Card.Group>
			       			</Grid.Column>
		       			</Grid.Row>


		       		</Grid>
	       		</Container>
	       	</div>
	       	<ClientDetails />
          <Element name='Provide Feedback' id='Provide Feedback'></Element>
	       	<Feedback />
	       	<Footer />
	      </div>
	    )
	}
}
// <ClientDetails />
