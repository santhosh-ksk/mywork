import React from 'react';
import Media from 'react-media'
import {Menu, Container, Grid, Segment, Card, Icon, Image, Header, Reveal} from 'semantic-ui-react';
import View from './Menu.jsx';
import MyTeams from './MyTeams.jsx';
import ResourcesMenu from './../Common/ComponentSpecificMenu.jsx';
let view,contentView,generalInfo;

const options = [
  { key: 'My Profile', name: 'My Profile' },
  { key: 'My Resources', name: 'My Resources' }
];
const employeeInfos=[
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

export default class ProfileView extends React.Component{
  constructor(props){
      super(props);
      this.state={
       activeItem:"My Profile",
       contentDisplay:null
       }
  }


  componentWillMount(){
    generalInfo={
      src:'./../src/images/pic1.jpg',
      name:'Mini Krishnan',
      Mobile:'1234567891',
      Mail:'mini.k63@wipro.com',
      Designation:'Project Engineer',
      Location:'Bangalore'
    };
    contentView=<div id="personal">
    <Header as='h2'>{employeeInfos[0].information}</Header>
    <Segment basic>
      <Header as='h4'>{employeeInfos[0].name}</Header>
    </Segment>
    <Segment basic>
      <Header as='h4'>{employeeInfos[0].mobile}</Header>
    </Segment>
    <Segment basic>
      <Header as='h4'>{employeeInfos[0].gender}</Header>
    </Segment>
    <Segment basic>
      <Header as='h4'>{employeeInfos[0].dob}</Header>
    </Segment>
    </div>
    this.setState({contentDisplay:contentView});
    
  }

  handleItemClick(e, { name }){
    this.setState({activeItem:name})
  }
            profileDisplay(personalflag, projectflag, officeflag)
            {
               //console.log("Profile Display", displayView,"personal",personalflag,"project",projectflag,"office",officeflag );
              // this.setState({projectFlag:projectflag, personalFlag:personalflag, officeFlag:officeflag});
            //
            //    //personal contents
              if(personalflag){
            //     //console.log("inside personal", displayView);
              contentView=<div id="personal">
              <Header as='h2'>{employeeInfos[0].information}</Header>
              <Segment basic>
                <Header as='h4'>{employeeInfos[0].name}</Header>
              </Segment>
              <Segment basic>
                <Header as='h4'>{employeeInfos[0].mobile}</Header>
              </Segment>
              <Segment basic>
                <Header as='h4'>{employeeInfos[0].gender}</Header>
              </Segment>
              <Segment basic>
                <Header as='h4'>{employeeInfos[0].dob}</Header>
              </Segment>
              </div>
            }
            //
            // //project information
            if(projectflag){
              //console.log("inside Project", displayView);
             contentView=<div id="Project">
               <Header as='h2'>{employeeInfos[1].information}</Header>
               <Segment basic>
               <Header as='h4'>{employeeInfos[1].Projectname}</Header>
               </Segment>
               <Segment basic>
               <Header as='h4'>{employeeInfos[1].Managername}</Header>
               </Segment>
               <Segment basic>
               <Header as='h4'>{employeeInfos[1].Teamname}</Header>
               </Segment>
               <Segment basic>
               <Header as='h4'>{employeeInfos[1].Rolename}</Header>
               </Segment>
               </div>
             }
            //
            //  //office information
            //
                if(officeflag){
                   //console.log("inside Office", displayView);
                 contentView=<div id="Office">
                 <Header as='h2'>{employeeInfos[2].information}</Header>
                 <Segment basic>
                 <Header as='h4'>{employeeInfos[2].location}</Header>
                  </Segment>
                  <Segment basic>
                 <Header as='h4'>{employeeInfos[2].tower}</Header>
                  </Segment>
                  <Segment basic>
                 <Header as='h4'>{employeeInfos[2].floor}</Header>
                  </Segment>
                   <Segment basic>
                 <Header as='h4'>{employeeInfos[2].wing}</Header>
                  </Segment>
                   <Segment basic>
                 <Header as='h4'>{employeeInfos[2].cubicle}</Header>
                  </Segment>
                  <Segment basic>
                  </Segment>
                 </div>
             }
            //
            this.setState({contentDisplay:contentView});
            }

  render(){
     //const { activeItem } = this.state;

     if(this.state.activeItem=="My Profile"){
        view=
     <Media query="(max-width: 767px)">
       {matches=> matches ?
         (
           <Container>
             <Grid celled>
                   <Grid.Row  columns={1} centered >
                         <Grid.Column>
                             <Image src={generalInfo.src} />
                          </Grid.Column>
                   </Grid.Row>
                   <Grid.Row  columns={1}>
                     <Grid.Column>
                       <Header as='h1'>{generalInfo.Name}</Header>
                       <Header as='h5'><Icon name='phone' /> {generalInfo.Mobile}</Header>
                       <Header as='h5'><Icon name='mail'/>{generalInfo.Mail}</Header>
                       <Header as='h5'><Icon name='user'/> {generalInfo.Designation}</Header>
                       <Header as='h5'><Icon name='marker'/>{generalInfo.Location}</Header>
                     </Grid.Column>

                   </Grid.Row>
                    <Grid.Row  >
                          <Grid.Column>
                                <View displayInfo={this.profileDisplay.bind(this)}/>
                                {this.state.contentDisplay}
                         </Grid.Column>
                    </Grid.Row>


               </Grid>
           </Container>

         )
         :(
            <Container>
              <Grid celled>
            <Grid.Row  columns={2}>
                <Grid.Column width={4}>
                        <Image src={generalInfo.src} />
                </Grid.Column>
                <Grid.Column  width={6}>
                        <Header as='h1'>{generalInfo.Name}</Header>
                        <Header as='h5'><Icon name='phone' /> {generalInfo.Mobile}</Header>
                        <Header as='h5'><Icon name='mail'/>{generalInfo.Mail}</Header>
                </Grid.Column>
                  <Grid.Column  width={6}>
                        <Header as='h1'></Header>
                        <Header as='h5'><Icon name='user'/> {generalInfo.Designation}</Header>
                        <Header as='h5'><Icon name='marker'/>{generalInfo.Location}</Header>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row  columns={2}>
                     <Grid.Column width={4}>
                             <View displayInfo={this.profileDisplay.bind(this)}/>
                      </Grid.Column>
                      <Grid.Column width={12}>
                        {this.state.contentDisplay}
                      </Grid.Column>
              </Grid.Row>

       </Grid>
            </Container>

  )
}
     </Media>
     }
     if(this.state.activeItem=="My Resources"){
        view=<Media query="(max-width: 767px)">
              {matches => matches ?
                (
                   <MyTeams columns={8}/>
                 ) : (
                    <MyTeams columns={4}/>
                 )
              }
        </Media>
     }
    return(
      <Container>
      <ResourcesMenu options={options} active={this.state.activeItem} activeChange={this.handleItemClick.bind(this)}/>
           <Grid>

           {view}

         </Grid>



      </Container>
    )
  }
}
