import React from 'react';
import {Container, Grid, Card, Dropdown, Button , Header , Segment , Message, Icon } from 'semantic-ui-react';
// import request from 'superagent';

let date=new Date().getMonth()+1,
    monthArray=[1,2,3,4,5,6,7,8,9,10,11,12],
    lastDate;
export default class myTraining extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText:'',
      completed:[],
    }

  }

  onSelectCourse(event, data){
    let temp=data.value;
    this.props.onSelectedCourseParent(temp,date);
  }
  completedCourse(course){
    this.props.completedCourseParent(course);
  }

  handlePostCourse(){
    console.log('MAPPED and COMPLETED COURSE', this.props.completed, this.props.course);
    request.post('/postcourse').send({'completed':this.props.completed, 'course':this.props.course}).end(function(err, res){
    })
  }

  render() {
    if(date>=1&&date<=3)lastDate="Complete the selected course on or before March-31";
    if(date>=4&&date<=6)lastDate="Complete the selected course on or before June-30";
    if(date>=7&&date<=9)lastDate="Complete the selected course on or before September-30";
    if(date>=10&&date<=12)lastDate="Complete the selected course on or before December-31";
    let display=null;
    let button=null;
    display=this.props.course.map((i,item)=>{
              if( this.props.completed.includes(i)){button=<Button
                color='blue'
                icon='checkmark'
                size='tiny'
                style={{float:'right'}}
              />}
              else{button=<Button
                color='blue'
                content='Mark as completed'
                size='tiny'
                style={{float:'right'}}
                onClick={this.completedCourse.bind(this,i)}
              />}
              return(
                <Card.Content key={item}>
                  {i}
                  <br/>
                  {lastDate}
                  {button}
                </Card.Content>
              );
            })
      let save=null;
      if(this.props.course.length>0){
        save=<Button floated='right' onClick={this.handlePostCourse.bind(this)} color='green' style={{marginTop:"10px"}}>
        <Button.Content visible>Save</Button.Content>
        </Button>
      }
    return (
      <Container>
        <Grid celled>
          <Grid.Row>
            <Grid.Column  width={8}>

               <Segment><Header as='h3'>Courses</Header></Segment>
                     <Message
                       icon='book'
                       header='Choose a minimum of three subjects per quater'
                     />
                <Dropdown button={true}  placeholder='Select Course' onChange={this.onSelectCourse.bind(this)} fluid search selection options={this.props.options} />

            </Grid.Column>
            <Grid.Column  width={8}>

             <Segment><Header as='h3'>Mapped  Courses</Header></Segment>
            <Card fluid>
            {
              display
            }
            </Card>
            {save}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
