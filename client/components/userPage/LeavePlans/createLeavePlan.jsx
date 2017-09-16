import React from 'react';

//importing semantic-ui-react components
import { Form, TextArea,Button, Header, Icon, Modal,Dropdown } from 'semantic-ui-react';

//importing day picker component to display calendar
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

//sample data for managers details
var managerList=[{"text":"Santhosh","value":"Santhosh"},
                {"text":"Mini","value":"Mini"},
                {"text":"Jeevan","value":"Jeevan"}
               ]

export default class CreateLeavePlan extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        from: null,
        to: null,
        reason:"",
        modalOpen:false,
        error:false,
        disableButton:true,
        noOfDays:0,
        manager:""
      };
      this.handleReasonChange=this.handleReasonChange.bind(this);
      this.handleCreateClick=this.handleCreateClick.bind(this);
      this.handleModalClose=this.handleModalClose.bind(this);
      this.handleSelectManager=this.handleSelectManager.bind(this);
    }

//function to handle the change in the dates in daypicker component
  handleDayClick(day){
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
    if(range.from!=null&&range.to!=null)
    {
      var a=(range.from).getDate();
      var b=(range.to).getDate();
      var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
      var firstDate = range.from;
      var secondDate = range.to;
      var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
      this.setState({noOfDays:diffDays+1})
      if(this.state.reason!=""&&this.state.manager!=""){
        this.setState({disableButton:false})
      }
    }
    else{
        this.setState({noOfDays:0,disableButton:true})
    }

}


//function to change the value of reason
  handleReasonChange(event,data){
    if(data.value.length<150){
      this.setState({reason:data.value,error:false})
    }
      if((this.state.from!=null&&this.state.to!=null)&&data.value!=""&&this.state.manager!=""){
        this.setState({disableButton:false})
      }
      else{
        this.setState({disableButton:true})
      }
  }

//function for adding the selected dates and reason to the leave details data
  handleCreateClick(){
  if(this.state.reason==""){
      this.setState({error:true})
    }
    else{
     var start=this.state.from;
     var end=this.state.to;
     if(((start.getMonth()+1)+"/"+start.getDate()+"/"+start.getFullYear())===(end.getMonth()+1)+"/"+end.getDate()+"/"+end.getFullYear()){
       var arr=[];
       var b= new Date((start.getMonth()+1)+"/"+start.getDate()+"/"+start.getFullYear()).getTime();
       var obj={ "date":b,
                "status":"Pending",
                "reason":this.state.reason
              }
      arr.push(obj);
      this.props.addPlan(arr);
     }
     else{
       var currentMonth=start.getMonth();
       var currentDate=start.getDate();
       var currentYear=start.getFullYear();
       var arr=[];
       for(var i=0;i<this.state.noOfDays;i++){
         if(i!=0){
         if(currentDate===new Date(currentYear,currentMonth+1,0).getDate()){
            if(currentMonth==11){
              currentMonth=0;
              currentYear++;
            }
            currentDate=1;
            currentMonth++;
         }
         else{
           currentDate++;
         }
       }
         var b= new Date((currentMonth+1)+"/"+currentDate+"/"+currentYear).getTime();
         var obj={ "date":b,
                  "status":"Pending",
                  "reason":this.state.reason
                }
         arr.push(obj)
       }
       this.props.addPlan(arr);
     }

    this.setState({modalOpen:true})
  }
  }


//function to close the modal window
  handleModalClose(){
      this.setState({modalOpen:false})
      this.props.changeMenu("Your Plans");
  }

//function to set the value of selected manager
 handleSelectManager(e,data){
    this.setState({manager:data.value});
    if((this.state.from!=null&&this.state.to!=null)&&data.value!=""&&data.value!=""){
      this.setState({disableButton:false})
    }
    else{
      this.setState({disableButton:true})
    }
 }

  render(){
    const { from, to } = this.state;
    if(from!=null&&to!=null){
    var modal=<Modal
                open={this.state.modalOpen}
                onClose={this.handleModalClose}
                basic
                size='small'
              >
                <Header icon='calendar' content='Leave Plan' />
                <Modal.Content>
                  <h3>Your leave plan for {this.state.noOfDays} days from {from.getDate()+"/"+(from.getMonth()+1)+"/"+from.getFullYear()} to {to.getDate()+"/"+(to.getMonth()+1)+"/"+to.getFullYear()} has been successfully created and it is pending for approval with {this.state.manager}.</h3>
                </Modal.Content>
                <Modal.Actions>
                  <Button color='green' onClick={this.handleModalClose} inverted>
                    <Icon name='checkmark' /> Close
                  </Button>
                </Modal.Actions>
              </Modal>
            }
    var daysDisplay=null;
    daysDisplay=<h4>Number of days selected : {this.state.noOfDays}</h4>
    var disabled=[{before: new Date()}];
    this.props.details.map((item,i)=>{
       disabled.push(new Date(item.date))
    })

    return (
      <div>
      <center><h3 style={{fontFamily:"'Lato', sans-serif"}}>Select the Date Range You want to Create Leave plan</h3></center>
      <div className="RangeExample" style={{marginLeft:"28%",marginTop:"2%",marginBottom:"3%"}}>
        <DayPicker
          numberOfMonths={2}
          selectedDays={[from, { from, to }]}
          onDayClick={this.handleDayClick.bind(this)}
          fixedWeeks
          enableOutsideDays
          disabledDays={disabled}
        />
        {daysDisplay}
      </div>
      <div style={{width:"43%",marginLeft:"28%"}}>
      <Form>
      <Form.Field  required error={this.state.error}>
      <label>Reason</label>
        <TextArea placeholder='Reason for Leave (Max 150 Characters)' rows={2} value={this.state.reason} onChange={this.handleReasonChange}/>
      </Form.Field>
      <Form.Select upward required label='Select Manager' options={managerList} placeholder='Select Manager' onChange={this.handleSelectManager}/>

      </Form>
      </div>
      <center>
      <Button primary style={{margin:"1% 0%"}} size="small" disabled={this.state.disableButton} onClick={this.handleCreateClick}>Create</Button>
      </center>
      {modal}
      </div>
    );
  }
}
