import React from 'react';
import {Header, Segment, Icon} from 'semantic-ui-react';
// import request from 'superagent';

const employeeInfo=[
{
  information:'Personal Information',
  name:"Name : Mini Krishnan ",
  mobile:"Mobile Number : 1234567891 ",
  gender:"Gender :  Female",
  dob: "Date Of Birth : 31/05/1994",
},
{
  information:'Project Information',
  Projectname:" Name : Ahold ",
  Managername:" Name : Nishanth Batnakar",
  Teamname:" Name : Team 1 ",
  Rolename:" Name : Developer",
},
{
  information:"Office Information",
  location:"Location : Wipro Sarjapur Campus",
  tower:"Tower : S3",
  floor:"Floor : 6th",
  wing:"Wing : A",
  cubicle:"Cubicle Number : S3-6A-143",
  voip:"Voip Number : 123456"
}
];

export default class view extends React.Component{
  constructor(props){
    super(props);
    this.state={
     employeeInfo:[],
     personalTertiary:false,
     projectTertiary:false,
     officeTertiary:false
     }
  }

  

  // componentDidMount(){
  //   request.get("/infopage").end((err,res)=>{
  //     console.log("response received",JSON.parse(res.text));
  //   this.setState({employeeInfo:JSON.parse(res.text)})
  //   })
  // }

      personalInfos(){
      //     //  const{emp}=;
          this.setState({personalTertiary:true,projectTertiary:false, officeTertiary:false});
      //     let displayView={
      //                     information:employeeInfo[0].information,
      //                     name:employeeInfo[0].name,
      //                     mobile:employeeInfo[0].mobile,
      //                     gender:employeeInfo[0].gender,
      //                     dob:employeeInfo[0].dob,
      //                   }
           let personalflag=true,
               projectflag=false,
               officeflag=false;
           this.props.displayInfo(personalflag, projectflag, officeflag);
      }
      //
      projectInfos(){
        const{emp}=employeeInfo[1];
      this.setState({personalTertiary:false,projectTertiary:true, officeTertiary:false});
      //     let displayView={
      //                   information:employeeInfo[1].information,
      //                   Projectname:employeeInfo[1].Projectname,
      //                   Managername:employeeInfo[1].Managername,
      //                   Teamname:employeeInfo[1].Teamname,
      //                   Rolename:employeeInfo[1].Rolename,
      //                   }
            let projectflag=true,
                personalflag=false,
                officeflag=false;
            this.props.displayInfo(personalflag, projectflag, officeflag);
      //
      }
      //
      officeInfos(){
      const{emp}=employeeInfo[2];
      this.setState({personalTertiary:false,projectTertiary:false, officeTertiary:true});
      //   let displayView={
      //     information:employeeInfo[2].information,
      //     location:employeeInfo[2].location,
      //     tower:employeeInfo[2].tower,
      //     floor:employeeInfo[2].floor,
      //     wing:employeeInfo[2].wing,
      //     cubicle:employeeInfo[2].cubicle,
      //     voip:employeeInfo[2].voip,
      //   }
        let projectflag=false,
            personalflag=false,
            officeflag=true;
        this.props.displayInfo(personalflag, projectflag, officeflag);
      //
      }
  render(){
    const{projectTertiary, personalTertiary, officeTertiary}=this.state;
    return(<div>
      <Segment tertiary={personalTertiary} style={{cursor:"default"}} basic onClick={this.personalInfos.bind(this)}><Header as='h5'><Icon name='address book'/> Personal Information</Header></Segment>
      <Segment tertiary={projectTertiary} style={{cursor:"default"}} basic onClick={this.projectInfos.bind(this)}><Header as='h5'><Icon name='travel'/> Project Information</Header></Segment>
      <Segment tertiary={officeTertiary} style={{cursor:"default"}} basic onClick={this.officeInfos.bind(this)}><Header as='h5'><Icon name='building'/> Office Information</Header></Segment>
    </div>);
  }
}
