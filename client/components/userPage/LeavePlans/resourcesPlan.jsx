import React from 'react';

//importing semantic-ui-react components
import { Dropdown,Grid,Table,Button,Radio,Icon} from 'semantic-ui-react';

//sample data for list of resources for filteration
const resources=[{"text":"Gowtham R","value":"Gowtham R","key":"Gowtham R"},
                {"text":"Santhosh K","value":"Santhosh K","key":"Santhosh K"},
                {"text":"Mini K","value":"Mini K","key":"Mini K"},
                {"text":"Jeevan Paul","value":"Jeevan Paul","key":"Jeevan Paul"}];

  //sample data for list of projects
const project=[{"text":"Digital","value":"Digital","key":"Digital"},
              {"text":"ORSS","value":"ORSS","key":"ORSS"}];

//sample data for list of months
const month=[{"text":"July","value":"July","key":"July"},
            {"text":"August","value":"August","key":"August"},
            {"text":"September","value":"September","key":"September"}];

//sample data for list of years
const year=[{"text":"2017","value":"2017"}];

//data for options to filter the results
const filterOptions=["Projects","Resources","Date","Status"];

//sample data for status of requests
const status=[{"text":"Approved","value":"Approved","key":"Approved"},
              {"text":"Rejected","value":"Rejected","key":"Rejected"},
              {"text":"Pending for Approval","value":"Pending for Approval","key":"Pending for Approval"}]

//sample data to show the details of resources
  const  data=[
                        {
                          "Name":"Gowtham R",
                          "Project":"Digital",
                          "From":"21/07/2017",
                          "To":"23/07/2017",
                          "Status":"Approved",
                          "Reason":"Please note the above timings and plan your activities for business continuity appropriately"
                        },
                        {
                          "Name":"Santhosh K",
                          "Project":"ORSS",
                          "From":"15/07/2017",
                          "To":"20/07/2017",
                          "Status":"Approved",
                          "Reason":"Sick Leave"
                        },
                        {
                          "Name":"Mini K",
                          "Project":"Digital",
                          "From":"18/07/2017",
                          "To":"21/07/2017",
                          "Status":"Rejected",
                          "Reason":"Sick Leave"
                        },
                        {
                          "Name":"Jeevan Paul",
                          "Project":"ORSS",
                          "From":"12/07/2017",
                          "To":"14/07/2017",
                          "Status":"Pending for Approval",
                          "Reason":"Sick Leave"
                        },
                        {
                          "Name":"Gowtham R",
                          "Project":"Digital",
                          "From":"21/07/2017",
                          "To":"23/07/2017",
                          "Status":"Approved",
                          "Reason":"Sick Leave"
                        },
                        {
                          "Name":"Santhosh K",
                          "Project":"ORSS",
                          "From":"15/07/2017",
                          "To":"20/07/2017",
                          "Status":"Approved",
                          "Reason":"Sick Leave"
                        },
                        {
                          "Name":"Mini K",
                          "Project":"Digital",
                          "From":"18/07/2017",
                          "To":"21/07/2017",
                          "Status":"Rejected",
                          "Reason":"Sick Leave"
                        },
                        {
                          "Name":"Jeevan Paul",
                          "Project":"ORSS",
                          "From":"12/07/2017",
                          "To":"14/07/2017",
                          "Status":"Pending for Approval",
                          "Reason":"Sick Leave"
                        },
                        {
                          "Name":"Gowtham R",
                          "Project":"Digital",
                          "From":"21/07/2017",
                          "To":"23/07/2017",
                          "Status":"Approved",
                          "Reason":"Sick Leave"
                        },
                        {
                          "Name":"Santhosh K",
                          "Project":"ORSS",
                          "From":"15/07/2017",
                          "To":"20/07/2017",
                          "Status":"Approved",
                          "Reason":"Sick Leave"
                        },
                        {
                          "Name":"Mini K",
                          "Project":"Digital",
                          "From":"18/07/2017",
                          "To":"21/07/2017",
                          "Status":"Rejected",
                          "Reason":"Sick Leave"
                        },
                        {
                          "Name":"Jeevan Paul",
                          "Project":"ORSS",
                          "From":"12/07/2017",
                          "To":"14/07/2017",
                          "Status":"Pending for Approval",
                          "Reason":"Sick Leave"
                        }
              ]

export default class ResourcesPlan extends React.Component{

  constructor(props){
    super(props);
    this.state={
      filterBy:"",
      tableData:data,
      buttonDisable:true,
      value:[],
      filterArray:[]
    }
    this.handleFilterChange=this.handleFilterChange.bind(this);
    this.handleOptionChange=this.handleOptionChange.bind(this);
    this.applyFilter=this.applyFilter.bind(this);
    this.handleControls=this.handleControls.bind(this);
  }

//function to change the type of filtering the results
  handleFilterChange(e,filter){
     this.setState({filterBy:filter.value,buttonDisable:true});
     if(this.state.filterArray.includes(filter.value)){
       this.applyFilter(filter.value);
     }
  }

//function to set the value for the selected filter
  handleOptionChange(e,item){
    var arr=this.state.filterArray;
    arr.push(this.state.filterBy);
    this.setState({value:item.value,buttonDisable:false,filterArray:arr})
  }

//function to apply the selected filter to the data
  applyFilter(filter){
  var arr=[];
      if(filter==="Projects"){
        data.map((object,i)=>{
            if(this.state.value.includes(object.Project)){
              arr.push(object);
            }
        })
      }
      else if(filter==="Resources"){
        data.map((object,i)=>{
            if(this.state.value.includes(object.Name)){
              arr.push(object);
            }
        })
      }
     if(filter==="Status"){
       data.map((object,i)=>{
         if(this.state.value.includes(object.Status)){
           arr.push(object);
         }
       })
     }
     if(arr.length==0){
       arr=data;
     }
      this.setState({tableData:arr})
  }

//function for processing the leave requests either approve or reject
  handleControls(response,index){
     var arr=this.state.tableData;
      arr[index].Status=response;
      this.setState({tableData:arr})
  }

  render(){
    var columnTwo=null;
    var columnThree=null;
    var filterButton=<Button primary disabled={this.state.buttonDisable} onClick={this.applyFilter.bind(this,this.state.filterBy)} style={{marginTop:"1px"}}>Apply Filters</Button>
      if(this.state.filterBy==="Projects"){
        columnTwo=<Dropdown fluid placeholder='Select Project' multiple selection options={project} onChange={this.handleOptionChange}/>
        columnThree=filterButton;
      }
      else if(this.state.filterBy==="Resources"){
        columnTwo=<Dropdown fluid placeholder='Select Resource' multiple selection options={resources} onChange={this.handleOptionChange}/>
        columnThree=filterButton;
      }
      else if(this.state.filterBy==="Date"){
        columnTwo=<div>
                  <Dropdown  placeholder='From Date' style={{minWidth:"10%",width:"45%",marginRight:"30px"}} selection options={month}/>
                  <Dropdown  placeholder='To Date' style={{minWidth:"10%",width:"45%"}} selection options={year}/>
                  </div>
        columnThree=filterButton;
      }
      else if(this.state.filterBy==="Status"){
        columnTwo= <Dropdown fluid placeholder='Select Status' multiple selection options={status} onChange={this.handleOptionChange}/>
        columnThree=filterButton;
      }

    var table=null;
    var color="";
    var controls=null;
    if(this.state.tableData.length>0){
      table=this.state.tableData.map((item,i)=>{
        if(item.Status=="Approved"){
          color="green";
          controls=<Table.Cell style={{color:color}}><b>{item.Status}</b></Table.Cell>;
        }
        else if(item.Status=="Rejected"){
          color="red";
          controls=<Table.Cell style={{color:color}}><b>{item.Status}</b></Table.Cell>;
        }
        else if(item.Status=="Pending for Approval"){
          controls=<Table.Cell>
                  <Button positive size="mini" onClick={this.handleControls.bind(this,"Approved",i)}>Approve</Button>
                  <Button negative size="mini" onClick={this.handleControls.bind(this,"Rejected",i)}>Reject</Button>
                  </Table.Cell>
        }
        else{
          color="black";
        }
        return(
          <Table.Row key={i}>
           <Table.Cell>{item.Name}</Table.Cell>
           <Table.Cell>{item.From}</Table.Cell>
           <Table.Cell>{item.To}</Table.Cell>
           <Table.Cell><div style={{width:"200px",wordWrap:"break-word"}}>{item.Reason}</div></Table.Cell>
           <Table.Cell>{item.Project}</Table.Cell>
           {controls}
         </Table.Row>
        )
      })
    }
    return(
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column width={7} style={{paddingTop:"12px"}}>
          <span style={{fontSize:"15px"}}><Icon name="filter"/><b>Filter By :</b></span>
          {
            filterOptions.map((item,i)=>{
              return(
                <Radio key={i} label={item} style={{padding:"0px 10px",fontSize:"15px"}} value={item} checked={this.state.filterBy===filterOptions[i]} onChange={this.handleFilterChange}/>
              )
            })
          }

          </Grid.Column>
          <Grid.Column width={6}>
            {columnTwo}
          </Grid.Column>
          <Grid.Column width={3}>
              {columnThree}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
          <Table columns={6} color="blue">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>From Date</Table.HeaderCell>
                <Table.HeaderCell>To Date</Table.HeaderCell>
                <Table.HeaderCell>Reason</Table.HeaderCell>
                <Table.HeaderCell>Project</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {table}
            </Table.Body>
          </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
