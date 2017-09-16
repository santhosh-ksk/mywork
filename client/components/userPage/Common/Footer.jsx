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
		    <div style={{background:'black',backgroundColor:"rgb(45, 45, 45)",marginTop:"14px",height:"30px"}}>
		     	<Container textAlign='center' style={{margin:"0px",padding:"0px"}}>
		        	<Grid style={{color:'white',fontFamily:"Ubuntu, sans-serif",padding:"1%"}}>
		         		<Grid.Row centered style={{padding:"0px"}}>
				            <Grid.Column>
				                <Icon  name='copyright' size="large" />Wipro Oracle Retail Shared Services  2017
				            </Grid.Column>
		          		</Grid.Row>

		        	</Grid>
		      	</Container>
		    </div>
  		);
  	}
}
