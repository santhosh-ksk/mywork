import React from 'react';

//importing semantic-ui-react components
import { Menu,Icon } from 'semantic-ui-react';

//importing custom components
import ResourcesPlan from './resourcesPlan.jsx';
import CreateLeavePlan from './createLeavePlan.jsx';
import YourPlans from './yourPlans.jsx';

//data for menu
const menu=["Your Plans","Your Resources Plan"];

//sample data for leave details
var details=[
                  {
                    "date":new Date("07/12/2017").getTime(),
                    "status":"Approved",
                    "reason":"Family Function"
                  },
                  {
                    "date":new Date("07/17/2017").getTime(),
                    "status":"Rejected",
                    "reason":"Friends get together"
                  },
                  {
                  "date":new Date("07/27/2017").getTime(),
                  "status":"Approved",
                  "reason":"Sick Leave"
                 },
                 {
                 "date":new Date("08/03/2017").getTime(),
                 "status":"Approved",
                 "reason":"Santhosh's Birthday"
                },
                 {
                 "date":new Date("08/14/2017").getTime(),
                 "status":"Rejected",
                 "reason":"Long leave for Independence day"
                },
                {
                "date":new Date("08/24/2017").getTime(),
                "status":"Pending",
                "reason":"My Birthday"
               },
               {
               "date":new Date("06/24/2017").getTime(),
               "status":"Pending",
               "reason":"My Birthday"
              }
                ];

export default class LeavePlans extends React.Component{

  constructor(props){
    super(props);
    this.state={
      level:"L2",
      active:"Your Plans",
      leaveDetails:details
    }
    this.handleMenuChange=this.handleMenuChange.bind(this);
    this.handleAddToArray=this.handleAddToArray.bind(this);
  }

//function for changing the menu item
  handleMenuChange(item){
    this.setState({active:item})
  }

//function to add the newly created leave dates into leave details
  handleAddToArray(item){
      var arr=this.state.leaveDetails;
      item.map((data,i)=>{
        arr.push(data);
      })
      this.setState({leaveDetails:arr})
  }

  render(){

    var menuDisplay=null;
    var contentDisplay=null;
    if(this.state.level=="L1"){
        menuDisplay=<Menu.Item name="Your Plans" active={"Your Plans"==this.state.active} onClick={this.handleMenuChange.bind(this,"Your Plans")}/>
    }
    else{
      menuDisplay=menu.map((item,i)=>{
        return(
          <Menu.Item key={i} name={item} active={item==this.state.active} onClick={this.handleMenuChange.bind(this,item)}/>
        )
      })
    }

    if(this.state.active=="Your Resources Plan"){
      contentDisplay=<ResourcesPlan/>
    }
    else if(this.state.active=="Create New Plan"){
      contentDisplay=<CreateLeavePlan changeMenu={this.handleMenuChange} addPlan={this.handleAddToArray} details={this.state.leaveDetails}/>
    }
    else if(this.state.active=="Your Plans"){
      contentDisplay=<YourPlans leaveDetails={this.state.leaveDetails}/>
    }

    return(
      <div>
      <Menu pointing secondary size="large">
          {menuDisplay}
          <Menu.Menu position='right'>
            <Menu.Item style={{marginRight:"20px"}} name='Create New Plan' icon="add" active={'Create New Plan'==this.state.active} onClick={this.handleMenuChange.bind(this,'Create New Plan')}/>
          </Menu.Menu>
      </Menu>
      <div style={{overflowY:"scroll",height:window.innerHeight-((window.innerHeight*20)/100),overflowX:"hidden"}}>
      {contentDisplay}
      </div>
      </div>
    )
  }
}
