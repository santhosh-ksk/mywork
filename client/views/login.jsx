import React from 'react';
import HeaderComponent from './../components/LoginSignup/HeaderComponent.jsx';
import Footer from './../components/LoginSignup/Footer.jsx';
import LoginForm from './../components/LoginSignup/LoginForm.jsx';
import SignUp from './../components/LoginSignup/Signup.jsx';

export default class Login extends React.Component{

  constructor(props){
      super(props);
      this.state={
        display:"login"
      }
      this.handleSwitch=this.handleSwitch.bind(this);
  }

componentWillMount(){
  var a = window.location.href.split("/");
  var disp = a[a.length-1];
  this.setState({display:disp});
}

 handleSwitch(){
   if(this.state.display=="login")
    this.setState({display:"signup"})
  else if(this.state.display=="signup")
   this.setState({display:"login"})
 }

  render(){
    var displayComponent=null;
    if(this.state.display=="login"){

        displayComponent=  <LoginForm handleSwitch={this.handleSwitch}/>
    }
    else if(this.state.display=="signup"){
      displayComponent=<SignUp handleSwitch={this.handleSwitch}/>
    }

    return(
      <div style={{background:"url(./../../src/images/loginBg.jpg)",
                  backgroundAttachment:"fixed",
                  minHeight:window.innerHeight,
                  position:"relative",
                  width:"100%"}}>
        <HeaderComponent/>
        {displayComponent}
        <div style={{position:"absolute",
                    left:"0",
                    bottom:"14",
                    width: '100%'}}>
              <Footer/>
        </div>
      </div>
    )
  }
}
