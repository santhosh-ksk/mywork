/*
	---------------------
	Feedback Component
	---------------------
*/
import React from 'react';

// semantic UI Components Import
import { Grid,
		 Header,
		 Divider,
		 Form,
		 Message,
		 Container
	   } from 'semantic-ui-react';

export default class Feedback extends React.Component{
	constructor() {
		super();

		this.state = {
			name: '',
			email: '',
			feed: '',
			errorName: false,
			errorEmail: false,
			errorFeed: false,
			formSuccess: false
		};
	}

	closeMessage() {
		this.setState({ formSuccess: false });
	}

	validateName() {
		const { name } = this.state;
		if (name != '')
		{	this.setState({ errorName: false });}
	}

	validateEmail()	{
		const { email } = this.state;
		if (email != '')
		{	this.setState({ errorEmail: false });}
	}

	validateFeed()	{
		const { feed } = this.state;
		if (feed != '')
		{	this.setState({ errorFeed: false });}
	}

	handleChange(e, { name, value }) {
		this.setState({ [name]: value, formSuccess: false });
	}

	handleSubmit(e) {
		e.preventDefault();

		const { name, email, feed, errorName, errorEmail, errorFeed } = this.state;

		var successCount = 0;


		// Name Field Validation
		if (name == '')
		{	this.setState({ errorName: true, formSuccess: false });	}
		else
		{	this.setState({ errorName: false });
			successCount++;
		}

		// Email Field Validation
		if (email == '')
		{	this.setState({ errorEmail: true, formSuccess: false });}
		else
		{	this.setState({ errorEmail: false });
			successCount++;
		}

		// Feed Field Validation
		if (feed == '')
		{	this.setState({ errorFeed: true, formSuccess: false });	}
		else
		{	this.setState({ errorFeed: false });
			successCount++;
		}


		// Form validation
		if(successCount >= 3)
		{
			var feedback = {
				name: name,
				email: email,
				feed: feed
			};

			
			// Post request here!
			this.setState({ formSuccess: true, name: '', email: '', feed: '' });
		}
	}

	render(){
		const { name, email, feed, errorName, errorEmail, errorFeed, formSuccess } = this.state;

		var styles = {
			componentStyle: {
				marginTop: '30px',
				paddingBottom: '50px'
			},
			dividerStyle: {
				backgroundColor: 'black'
			},
			gridStyle: {
				marginTop: '50px'
			},
			textareaStyle: {
				minHeight: 180
			},
			submitButtonStyle: {
				float: 'right',
				width: '200px'
			}
		};

		return(
			<div style={{background: "url(./../../src/images/Homepage/bar2.jpg)",marginTop:"-30px"}}>
				<Container style={styles.componentStyle}>
					<Divider style={styles.dividerStyle} />
					<Grid columns='equal' style={styles.gridStyle}>
						<Grid.Row centered>
							<Grid.Column>
								<Header as='h2' inverted>
									Tell us about your experience!
									<Header.Subheader>
										We are waiting for your Suggestions and Feedbacks!
									</Header.Subheader>
								</Header>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column style={{margin: '5px'}}>
								<Form inverted onSubmit={this.handleSubmit.bind(this)} success={formSuccess}>
									<Form.Group widths='equal'>
										<Form.Input
											name='name'
											label='Name'
											value={name}
											placeholder='Full Name'
											onChange={this.handleChange.bind(this)}
											onBlur={this.validateName.bind(this)}
											error={errorName} />
										<Form.Input
											name='email'
											label='Email'
											value={email}
											placeholder='eg: abc@xyz.com'
											onChange={this.handleChange.bind(this)}
											onBlur={this.validateEmail.bind(this)}
											error={errorEmail} />
									</Form.Group>
									<Form.TextArea
										name='feed'
										label='Your Suggestion/Feedback'
										value={feed}
										placeholder='Tell us about what you think...'
										style={styles.textareaStyle}
										onChange={this.handleChange.bind(this)}
										onBlur={this.validateFeed.bind(this)}
										error={errorFeed} />
									<Message
										success
										header='Thank you for your valuable time!'
										content="We have Received your Feedback"
										style={{textAlign: 'center'}}
										onDismiss={this.closeMessage.bind(this)} />
									<Form.Button
										style={styles.submitButtonStyle} primary>
											Submit
									</Form.Button>
								</Form>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Container>
			</div>
	    );
	}
}
