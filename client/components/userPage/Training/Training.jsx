import React from 'react';
import Media from 'react-media'
import {Menu, Container} from 'semantic-ui-react'
import MyTraining from './myTraining.jsx';
import TrainingMenu from './../Common/ComponentSpecificMenu.jsx';
import MyTeamsTraining from './myTeamsTraining.jsx';
// import request from 'superagent';
    let view,
    displayMenu,
    trainingOptions=[
      {
        key: 'Agile - New',
        text: 'Agile - New',
        value: 'Agile - New'
      }, {
        key: 'SRT',
        text: 'SRT',
        value: 'SRT'
      }, {
        key: 'ERT - Review',
        text: 'ERT - Review',
        value: 'ERT - Review'
      }, {
        key: 'Quality 101',
        text: 'Quality 101',
        value: 'Quality 101'
      }, {
        key: 'ITIL Awareness',
        text: 'ITIL Awareness',
        value: 'ITIL Awareness'
      }, {
        key: 'Refresher Assessment',
        text: 'Refresher Assessment',
        value: 'Refresher Assessment'
      }, {
        key: 'MS - Refresher Learning',
        text: 'MS - Refresher Learning',
        value: 'MS - Refresher Learning'
      }, {
        key: 'Lean',
        text: 'Lean',
        value: 'Lean'
      }, {
        key: 'SCM',
        text: 'SCM',
        value: 'SCM'
      }, {
        key: 'MS 201',
        text: 'MS 201',
        value: 'MS 201'
      }, {
        key: 'CMMI HighMaturity',
        text: 'CMMI HighMaturity',
        value: 'CMMI HighMaturity'
      }, {
        key: 'ADM-Refresher learning',
        text: 'ADM-Refresher learning',
        value: 'ADM-Refresher learning'
      }, {
        key: 'RBPT Rescheduling',
        text: 'RBPT Rescheduling',
        value: 'RBPT Rescheduling'
      }
    ];

let role='L4';

const options = [
  { key: 'My Training', name: 'My Training' },
  { key: 'My Resource Training', name: 'My Resource Training' }
]

export default class Training extends React.Component{

  constructor(props){
    super(props);
    this.state={
      activeItem:'My Training',
      course: [],
      options:[],
      completed:[]
    }

  }

  // componentDidMount(){
  //   request.get("/training").end((err,res)=>{
  //     this.setState({options:JSON.parse(res.text)})
  //   })
  // }
  handleItemClick(e, { name }){
  //  console.log(name);
    this.setState({activeItem:name})
  }

  SelectedCourse(temp){
    let indexOfTemp = trainingOptions.findIndex(i => i.key ===  temp);
    trainingOptions.splice(indexOfTemp,1);
    let courses = this.state.course;
    courses.push(temp);
   this.setState({course:courses})
   //console.log("mapped courses", this.state.course);
  }
  courseCompletedParent(course){
    let courseCompleted=this.state.completed;
    courseCompleted.push(course);
    this.setState({completed:courseCompleted})
    //console.log("Completed Course", this.state.completed);
  }
  render(){
    const { activeItem } = this.state;
    if(activeItem=='My Training'){
      view= <MyTraining onSelectedCourseParent={this.SelectedCourse.bind(this)} completed={this.state.completed} completedCourseParent={this.courseCompletedParent.bind(this)} course={this.state.course} options={trainingOptions}/>
    }
    if(activeItem=='My Resource Training'&&(role=='L3'||role=='L4')){
      view=<Media query="(max-width: 767px)">
            {matches => matches ?
              (
                  <MyTeamsTraining mapped={this.state.course} completed={this.state.completed} columns={8}/>
               ) : (
                  <MyTeamsTraining mapped={this.state.course} completed={this.state.completed} columns={4}/>
               )
            }
      </Media>
    }
    return(
      <Container>
        <TrainingMenu options={options} active={this.state.activeItem} activeChange={this.handleItemClick.bind(this)}/>
        {view}
        </Container>
    );
  }
}
