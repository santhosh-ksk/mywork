import React from 'react';

//importing semantic-ui-react components
import { Icon, Label, Menu, Table,Button,Statistic,Grid,Modal,Popup,Segment} from 'semantic-ui-react';


//data for displaying month names
var  months=["January","February","March","April","May","June","July","August","September","October","November","December"];



export default class YourPlans extends React.Component{

  constructor(props){
    super(props);
    this.state={
      month:new Date().getMonth(),
      year:new Date().getFullYear(),
      dialogOpen:false,
      index:0
    }
    this.handleClick=this.handleClick.bind(this);
    this.handleShowReason=this.handleShowReason.bind(this);
    this.handleDialogClose=this.handleDialogClose.bind(this);
    this.restoreMonth=this.restoreMonth.bind(this);
  }

//function to change the value of displaying month
  handleClick(direction){
    var temp=this.state.month;
    if(direction=="prev"){
      if(temp==0){
        var temp2=this.state.year-1;
        this.setState({month:11,year:temp2})
      }
      else{
        this.setState({month:temp-1});
      }

    }
    else if(direction=="next")
    {
      if(temp==11){
        var temp2=this.state.year+1;
        this.setState({month:0,year:temp2})
      }
      else{
        this.setState({month:temp+1});
      }
      }
  }

//function to open the modal to show the reason for leave
  handleShowReason(i){
      this.setState({dialogOpen:true,index:i})
  }

//function to close the reason modal
  handleDialogClose(){
      this.setState({dialogOpen:false})
  }

  restoreMonth(){
      this.setState({month:new Date().getMonth(),year:new Date().getFullYear()})
  }

  render(){

    var leaveDays=[];

    this.props.leaveDetails.map((item,i)=>{
        leaveDays.push(item.date);
    })
   var currentMonth=this.state.month;
   var currentYear=this.state.year;
   var startDayofCurrentMonth=new Date(currentYear,currentMonth,1).getDay();
   var days=[];
   if(startDayofCurrentMonth===6){
     days=[{"week":Array(7).fill(0)},
              {"week":Array(7).fill(0)},
              {"week":Array(7).fill(0)},
              {"week":Array(7).fill(0)},
              {"week":Array(7).fill(0)},
              {"week":Array(7).fill(0)}
            ]
    }
    else{
       days=[{"week":Array(7).fill(0)},
                {"week":Array(7).fill(0)},
                {"week":Array(7).fill(0)},
                {"week":Array(7).fill(0)},
                {"week":Array(7).fill(0)}
              ]
    }

    var noOfDaysInMonth=new Date(currentYear,currentMonth+1,0).getDate();
    var j=0;
    var k=startDayofCurrentMonth;
    for(var i=0;i<(days.length*7);i++){
      if(k>=7){
        k=0;
      }
      if(i>=startDayofCurrentMonth&&i<=startDayofCurrentMonth+noOfDaysInMonth-1){
        days[j].week[k]=i-startDayofCurrentMonth+1;
        k++;
      }
      j=Math.floor((i+1)/7);
    }


    var table=days.map((item,i)=>{
      return(
        <Table.Row key={i}>
        {
          item.week.map((day,j)=>{
            var color="black";
            if(day==new Date().getDate()&&currentMonth==new Date().getMonth()&&currentYear==new Date().getFullYear()){
              color="red";
            }
            if(day==0){
              return(<Table.Cell key={j} textAlign="center" disabled></Table.Cell>)
            }
            else {
              if(leaveDays.includes(new Date(currentMonth+1+"/"+day+"/"+currentYear).getTime())){
                var currentIndex=leaveDays.indexOf(new Date(currentMonth+1+"/"+day+"/"+currentYear).getTime());
                if(this.props.leaveDetails[currentIndex].status=="Approved"){
                    return(<Popup
                             trigger={ <Table.Cell key={j} textAlign="center" style={{backgroundColor:"rgba(33, 186, 69, 0.59)"}} onClick={this.handleShowReason.bind(this,currentIndex)}>
                                         <Statistic value={day} size="mini" color={color}/>
                                       </Table.Cell>}
                             content={this.props.leaveDetails[currentIndex].reason}
                           />
                           )
               }
               else if(this.props.leaveDetails[currentIndex].status=="Pending"){

                 return(<Popup
                        trigger={ <Table.Cell key={j} textAlign="center" style={{backgroundColor:"khaki"}} onClick={this.handleShowReason.bind(this,currentIndex)}>
                                          <Statistic value={day} size="mini"  color={color}/>
                                      </Table.Cell>}
                        content={this.props.leaveDetails[currentIndex].reason}
                        />
                      )
               }
               else{
                     return(<Popup
                            trigger={ <Table.Cell key={j} textAlign="center" style={{backgroundColor:"rgba(237, 90, 20, 0.62)"}} onClick={this.handleShowReason.bind(this,currentIndex)}>
                                  <Statistic value={day} size="mini" color={color}/>
                            </Table.Cell>}
                          content={this.props.leaveDetails[currentIndex].reason}
                          />
                        )
               }
            }
            else{
                    return(<Table.Cell key={j} textAlign="center" disabled><Statistic value={day} size="mini" color={color}/></Table.Cell>)

            }
          }

          })
        }
        </Table.Row>
      )
    })


    var date=new Date(this.props.leaveDetails[this.state.index].date);

    var reasonDialog=<Modal
                      open={this.state.dialogOpen}
                      onClose={this.handleDialogClose}
                      dimmer="blurring"
                      style={{width:"30%"}}>
                      <Modal.Header>
                        {'Reason for Leave on '+date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}
                      </Modal.Header>
                      <Modal.Content>
                        <h2>{this.props.leaveDetails[this.state.index].reason}</h2>
                        <h4>Status :{this.props.leaveDetails[this.state.index].status}</h4>
                      </Modal.Content>
                    </Modal>




    return(
      <div>
      <Grid columns='three' centered>
      <Grid.Row>
           <Grid.Column width={6} textAlign="right">
                <Button icon="chevron left" size="big" onClick={this.handleClick.bind(this,"prev")} />
           </Grid.Column>
           <Grid.Column width={4}>
             <h1 style={{marginTop:"7px"}}>{months[this.state.month]}, {this.state.year}</h1>
           </Grid.Column>
           <Grid.Column width={6} textAlign="left">
               <Button icon="chevron right"  size="big" onClick={this.handleClick.bind(this,"next")} />
               <Popup
                trigger={<Button icon="map pin" onClick={this.restoreMonth} style={{marginLeft:"60%"}}/>}
                content='Go to Today'
              />
           </Grid.Column>
         </Grid.Row>
    </Grid>

      <Table celled style={{marginTop:"2%"}} fixed>
       <Table.Header>
         <Table.Row>
           <Table.HeaderCell><center>Sunday</center></Table.HeaderCell>
           <Table.HeaderCell><center>Monday</center></Table.HeaderCell>
           <Table.HeaderCell><center>Tuesday</center></Table.HeaderCell>
           <Table.HeaderCell><center>Wednesday</center></Table.HeaderCell>
           <Table.HeaderCell><center>Thursday</center></Table.HeaderCell>
           <Table.HeaderCell><center>Friday</center></Table.HeaderCell>
           <Table.HeaderCell><center>Saturday</center></Table.HeaderCell>
           </Table.Row>
      </Table.Header>
         <Table.Body>
         {table}
         </Table.Body>
    </Table>
    <Segment>
      <div style={{backgroundColor:"rgba(33, 186, 69, 0.59)",margin:"5px",display:"inline"}}>&emsp;</div><span>Approved</span>&emsp;
      <div style={{backgroundColor:"rgba(237, 90, 20, 0.62)",margin:"5px",display:"inline"}}>&emsp;</div><span>Rejected</span>&emsp;
      <div style={{backgroundColor:"khaki",margin:"5px",display:"inline"}}>&emsp;</div><span>Pending for Approval</span>
    </Segment>
    {reasonDialog}
    </div>
    )
  }
}
