import React from 'react';
import Menu from './../components/userPage/Common/menu.jsx';
import Dashboard from './../components/userPage/Dashboard/Dashboard.jsx';
import MenuMobile from './../components/userPage/Common/MenuMobile.jsx';
import Header from './../components/userPage/Common/Header.jsx';
import Footer from './../components/userPage/Common/Footer.jsx';
import LeavePlans from './../components/userPage/LeavePlans/leavePlans.jsx';
import AdminControls from './../components/userPage/AdminControls/AdminControls.jsx';
import Approvals from './../components/userPage/Approvals/Approvals.jsx';
import SkillsHome from './../components/userPage/Skills/SkillsHome.jsx';
import Training from './../components/userPage/Training/Training.jsx';
import Project from './../components/userPage/Project/Project.jsx'
import Resources from './../components/userPage/Resources/Resources.jsx';
import Feedback from './../components/userPage/Feedback/Feedback.jsx';

import {Grid,
        Sidebar,
        Segment,
        Button,
        Icon
        } from 'semantic-ui-react';

import Media from 'react-media';

export default class User extends React.Component{

  constructor(props){
      super(props);
      this.state={
        activeItem:"Home",
        visible:false,
        userName:"Gowtham R"
      }
    this.activeItemChange=this.activeItemChange.bind(this);
    this.toggleDrawer=this.toggleDrawer.bind(this);
  }

  activeItemChange(item){
      var a=this.state.visible;
      this.setState({activeItem:item,visible:!a})
  }

  toggleDrawer(){
    var a=this.state.visible;
    this.setState({visible:!a})
  }

  render(){
    var display=null;
    if(this.state.activeItem=="Home"){
      display=<Dashboard/>
    }
    else if(this.state.activeItem=="Leave Plans"){
      display=<LeavePlans/>
    }
    else if(this.state.activeItem=="Admin Controls"){
      display=<AdminControls/>
    }
    else if(this.state.activeItem=="Approvals"){
      display=<Approvals/>
    }
    else if(this.state.activeItem=="Skills"){
        display=<SkillsHome/>
    }
    else if(this.state.activeItem=="Training"){
      display=<Training/>
    }
    else if(this.state.activeItem=="Project"){
      display=<Project/>
    }
    else if(this.state.activeItem=="Resources"){
      display=<Resources/>
    }
    else if(this.state.activeItem=="Feedback"){
      display=<Feedback/>
    }

    return(
        <Grid style={{width:"100%",height:"100%",margin:"0px",position:"fixed"}}>

        <Grid.Row style={{padding:"0px",margin:"0px",height:"40px"}}>
          <Media query="(max-width: 767px)">
              <Grid.Column style={{padding:"0px",margin:"0px"}}>
              <Header device="mobile" toggleDrawer={this.toggleDrawer}/>
              </Grid.Column>
          </Media>
           <Media query="(min-width: 768px)">
            <Grid.Column style={{padding:"0px",margin:"0px"}}>
              <Header device="desktop"/>
           </Grid.Column>
           </Media>
        </Grid.Row>

          <Media query="(max-width: 767px)">
           <Grid.Row style={{padding:"0px", height: window.innerHeight-60+'px'}}>
            <Grid.Column style={{padding:"0px",margin:"0px",overflowY:"scroll"}}>
            <Sidebar.Pushable style={{overflowY: 'scroll',overflowX:"hidden"}}>
              <MenuMobile activeItem={this.state.activeItem} activeItemChange={this.activeItemChange} visible={this.state.visible}/>
             <Sidebar.Pusher>
               {display}
             </Sidebar.Pusher>
             </Sidebar.Pushable>
             </Grid.Column>
            </Grid.Row>
          </Media>
          <Media query="(min-width: 768px)">
            <Grid.Row style={{padding:"0px",height: window.innerHeight-70+'px'}}>
            <Grid.Column width={2} style={{padding:"0px",margin:"0px",overflowX:"hidden"}}>
            <Menu activeItem={this.state.activeItem} activeItemChange={this.activeItemChange}/>
            </Grid.Column>
            <Grid.Column width={14} style={{margin:"0px",overflowY:"scroll"}}>
               {display}
             </Grid.Column>
               </Grid.Row>
          </Media>

        <Grid.Row style={{padding:"0px"}}>
          <Grid.Column style={{padding:"0px",margin:"0px"}}>
            <Footer/>
          </Grid.Column>
        </Grid.Row>
        </Grid>

    )
  }
}
