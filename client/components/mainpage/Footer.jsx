/*
	----------------
	Footer Component
	----------------
*/
import React from 'react';

import { Grid,
		 Segment,
		 Image,
		 Icon,
		 Container,
		 Header,
		 Divider
	   } from 'semantic-ui-react';

export default class Footer extends React.Component{

	render(){
  		return(
		    <div style={{background:'black',opacity:"1",zIndex: '10'}}>
		     	<Container textAlign='center'>
		        	<Grid style={{color:'white',fontFamily:"Ubuntu, sans-serif",padding:"1%"}}>
		          		<Grid.Row columns={3} divided style={{paddingBottom:"0px"}}>
		            		<Grid.Column style={{textAlign:"left"}}>
				                <h5>
				                	<u>Contact us</u>
				                </h5>
				                <p>
					                Wipro Corporate Office,
					                <br/>
					                Bengaluru
					                <br/>
					                Phone: 0123456789
					                <br/>
					                e-mail: queries.wipro@wipro.com
				                </p>
		            		</Grid.Column>
				            <Grid.Column style={{textAlign:"left"}}>
				                <div style={{marginLeft:"20%"}}>
					                <h5>
					                	<u>Navigate</u>
					                </h5>
					                <p>
						                Welcome page<br/>
						                Login<br/>
						                Sign Up<br/>
					                </p>
				                </div>
				            </Grid.Column>
				            <Grid.Column style={{textAlign:"left"}}>
				                <h5>
				                	<u>About us</u>
				                </h5>
				                <p>
									Wipro is a Diamond Partner with Oracle and proud recipient
									of best-in-class net promoter score (NPS)
									and customer satisfaction (CSAT) ratings from clients.
									We have also been consistently rated amongst
									the global leader by analysts such as Gartner, Forrester and IDC.
				                </p>
				            </Grid.Column>
		          		</Grid.Row>
		          		<Grid.Row centered style={{paddingBottom:"0px"}}>
				            <Grid.Column>
				                <a href="https://www.facebook.com" style={{color:'white',margin:"2%"}}>
				                	<Icon  name='facebook f' size="large" />
				                </a>
				                <a href="https://www.linkedin.in" style={{color:'white',margin:"2%"}}>
				                	<Icon  name='linkedin' size="large" />
				                </a>
				                <a href="https://www.twitter.com" style={{color:'white',margin:"2%"}}>
				                	<Icon  name='twitter square' size="large" />
				                </a>
				                <a href="https://www.instagram.com" style={{color:'white',margin:"2%"}}>
				                	<Icon  name='instagram' size="large" />
				                </a>
				                <a href="https://www.whatsapp.com" style={{color:'white',margin:"2%"}}>
				                	<Icon  name='whatsapp' size="large" />
				                </a>
				                <Divider inverted style={{backgroundColor:"white"}}/>
				            </Grid.Column>
		          		</Grid.Row>
		         		<Grid.Row centered style={{padding:"0px"}}>
				            <Grid.Column>
				                <Icon  name='copyright' size="large" />Wipro Oracle Retail Shared Services  2017
				            </Grid.Column>
		          		</Grid.Row>
									<Grid.Row centered style={{paddingTop:"10px"}}>
					            <Grid.Column>
					                Made with <Icon  name='heart' color="red"/> by Wipro Digital.
					            </Grid.Column>
			          		</Grid.Row>
		        	</Grid>
		      	</Container>
		    </div>
  		);
  	}
}
