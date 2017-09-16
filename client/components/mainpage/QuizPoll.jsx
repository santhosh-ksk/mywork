/*
	---------------------
	Quiz / Poll Component
	---------------------
	Displays different questions with multiple choices.
	Thye questions are set by the Admin.
*/
import React from 'react';

// semantic UI Components Import
import { Grid,
		 Button,
		 Icon,
		 Header,
		 Statistic
	   } from 'semantic-ui-react';
import request from 'superagent';
// Custom Components Imports
import CardTemplate from './CardTemplate.jsx';

// var this.state.quizPollList = [
// 	{
// 		type: 'poll',
// 		privacy: 'public',
// 		heading: "Today's Poll",
// 		question: "Is the climate awsome?",
// 		options: ["Yes", "ok ok", "Horrible"],
// 		answer: [20, 35, 5],
// 		userResponded: false,
// 		userAnswer: ''
// 	},
// 	{
// 		type: 'poll',
// 		privacy: 'private',
// 		heading: "Vote Your opinion",
// 		question: "Is your teammates helpfull?",
// 		options: ["Yes", "Not at All", "Sometimes"],
// 		answer: [20, 35, 5],
// 		userResponded: false,
// 		userAnswer: ''
// 	},
// 	{
// 		type: 'quiz',
// 		privacy: 'public',
// 		heading: "Aptitude",
// 		question: "What is the color of a red car?",
// 		options: ["Blue", "Green", "Yellow", "Red"],
// 		answer: 'Red',
// 		userResponded: false,
// 		userAnswer: ''
// 	},
// 	{
// 		type: 'quiz',
// 		privacy: 'private',
// 		heading: "Quiz of the day",
// 		question: "Where is Taj Mahal Located?",
// 		options: ["Mumbai", "Bangalore", "Agra", "Chennai", "Goa"],
// 		answer: 'Agra',
// 		userResponded: false,
// 		userAnswer: ''
// 	},
// ];

var me;

export default class WiproOracleRetail extends React.Component{
	constructor() {
		super();

		me=this;

		this.state = {
			activeListItem: 0,
			userResponded:false,
			quizPollList:[]
		};

		this.leftButtonClicked=this.leftButtonClicked.bind(this);
		this.rightButtonClicked=this.rightButtonClicked.bind(this);
	}

	componentDidMount(){
			request.get("/quizPoll").end((err,res)=>{
				this.setState({quizPollList:JSON.parse(res.text),userResponded:JSON.parse(res.text)[0].userResponded})
			})
	}

	leftButtonClicked() {
		var temp=this.state.activeListItem-1;
		this.setState({
			activeListItem: temp,
			userResponded: this.state.quizPollList[temp].userResponded
		});
	}

	rightButtonClicked() {
		var temp=this.state.activeListItem+1;
		this.setState({
			activeListItem: temp,
			userResponded: this.state.quizPollList[temp].userResponded
		});
	}

	optionClicked(k) {
		//
		// this.state.quizPollList[this.state.activeListItem].userResponded = true;
		// this.state.quizPollList[this.state.activeListItem].userAnswer = k;
		// if(this.state.quizPollList[this.state.activeListItem].type == 'poll')
		// {
		// 	this.state.quizPollList[this.state.activeListItem].answer[k] += 1;
		//
		request.put("/quizPoll/addResponse").send({"answer":k,"index":this.state.activeListItem}).end((err,res)=>{
			 this.setState({quizPollList:JSON.parse(res.text),userResponded:true})
		})
		// AJAX call to POST the new result
		// this.setState({
		// 	userResponded: true
		// });
	}

	render(){
		var {activeListItem, userResponded,quizPollList} = this.state;

		var styles = {
			gridStyle: {
				width: '100%',
				minHeight: '150px',
				marginLeft: '0px',
				paddingTop: '10px'
			},
			buttonStyle: {
				boxShadow: '0 0 0 0px',
				borderRadius: 0,
				padding: 0,
				minHeight: '100px'
			},
			optionButtonStyle: {
				marginBottom: '10px'
			},
			rowStyle: {
				padding: '10px'
			},
			butRowStyle: {
				padding: '6px'
			}
		};

		var columnComponent;

		if(quizPollList.length>0)
		{
		if(userResponded)
		{
			var answerRow;
			if(quizPollList[activeListItem].type == 'quiz')
			{
				answerRow = <Grid.Row centered style={styles.rowStyle}>
								<Grid.Column>
									You Answered&nbsp;
									<b>
										{quizPollList[activeListItem].options[quizPollList[activeListItem].userAnswer]}
									</b>
								</Grid.Column>
							</Grid.Row>
			}
			else if (quizPollList[activeListItem].type == 'poll')
			{
				if(quizPollList[activeListItem].privacy == 'public')
				{
					var optionAnswerComponent = quizPollList[activeListItem].options.map(function(op, k) {
						var colr = 'grey';

						if(quizPollList[activeListItem].userAnswer == k)
						{
							colr = 'blue';
						}
						return (
							<Statistic key={k} color={colr} style={{marginBottom: 0}}>
								<Statistic.Label>{op}</Statistic.Label>
								<Statistic.Value>{quizPollList[activeListItem].answer[k]}</Statistic.Value>
							</Statistic>
						);
					});
					answerRow = <Grid.Row centered style={styles.rowStyle}>
									<Statistic.Group size='tiny'>
										{optionAnswerComponent}
									</Statistic.Group>
								</Grid.Row>
				}
				else if(quizPollList[activeListItem].privacy == 'private')
				{
					answerRow =<Grid.Row centered style={styles.rowStyle}>
									<Grid.Column>
										You voted&nbsp;
										<b>
											{quizPollList[activeListItem].options[quizPollList[activeListItem].userAnswer]}
										</b>
									</Grid.Column>
								</Grid.Row>
				}
			}

			columnComponent=<Grid.Column style={{marginBottom: '10px'}}>
			       				<Grid columns='equal' verticalAlign='middle'>
			       					<Grid.Row centered style={styles.rowStyle}>
				       					<Header as='h5'>
					       					{quizPollList[activeListItem].heading}
					       					<Header.Subheader>
					       						{quizPollList[activeListItem].question}
						       						{quizPollList[activeListItem].type == 'quiz' &&
						       						<span>
						       						{quizPollList[activeListItem].privacy == 'public' &&
						       							<span>&nbsp;- Answer:&nbsp;
							       							<b>
																{quizPollList[activeListItem].answer}
															</b>
														</span>
													}
													</span>
												}
					       					</Header.Subheader>

					       				</Header>

				       				</Grid.Row>
				       				{answerRow}
			       				</Grid>
			       			</Grid.Column>

		}
		else
		{
			var optionButtonComponents = quizPollList[activeListItem].options.map((op, k)=> {
				return (
					<Button
						size='tiny'
						key={k}
						style={styles.optionButtonStyle}
						onClick={()=>this.optionClicked(k)}>
							{op}
					</Button>
				);
			});

			columnComponent=<Grid.Column style={{marginBottom: '10px'}}>
			       				<Grid columns='equal' verticalAlign='top'>
				       				<Grid.Row centered style={styles.rowStyle}>
				       					<Header as='h5'>
				       						{quizPollList[activeListItem].heading}
				       					</Header>
				       				</Grid.Row>
				       				<Grid.Row centered style={styles.rowStyle}>
				       					{quizPollList[activeListItem].question}
				       				</Grid.Row>
				       				<Grid.Row centered style={styles.butRowStyle}>
										{optionButtonComponents}
				       				</Grid.Row>
			       				</Grid>
			       			</Grid.Column>
		}
	}
		return(
			<CardTemplate
				head='Quiz / Poll'
			>

				<Grid columns='equal' verticalAlign='middle' style={styles.gridStyle}>
	       			<Grid.Row centered>
		       			<Grid.Column width={1} style={{paddingLeft: 0}}>
		       				{(activeListItem > 0) &&
		       					<Button fluid basic style={styles.buttonStyle} onClick={this.leftButtonClicked}>
			       					<Icon name='chevron left' />
			       				</Button>
		       				}
		       			</Grid.Column>
		       			{columnComponent}
		       			<Grid.Column width={1}>
		       				{activeListItem < quizPollList.length-1 &&
			       				<Button basic style={styles.buttonStyle} onClick={this.rightButtonClicked}>
			       					<Icon name='chevron right' />
			       				</Button>
			       			}
		       			</Grid.Column>
	       			</Grid.Row>
	       		</Grid>
			</CardTemplate>
	    )
	}
}
// <ClientDetails />
