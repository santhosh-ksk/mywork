import React from 'react';
import {
  Container,
  Grid,
  Icon,
  Input,
  Header,
  Image,
  Card,
  Button,
  Divider
} from 'semantic-ui-react';
import Media from 'react-media';
import request from 'superagent';
import { Link, hashHistory } from 'react-router';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      userName:'',
      password:''
    }
    this.switchToSignUp = this.switchToSignUp.bind(this);
  }

  switchToSignUp() {
    this.props.handleSwitch();
  }

  switchToDashboard(){
    console.log("username is : " ,this.state.userName," password is : ",this.state.password);
    request.post('http://localhost:3000/loginCredentials').send({"username":this.state.userName, "password":this.state.password}).end(function(err, res){
      console.log("response from server",res.text);
      if(res.text=="Success"){
        cookies.set('wweStar', 'Dwayne', { path: '/' });
        hashHistory.push("/user")
      }
    })
  }

  //handleChangeof the form fields
  handleChange(e, {name, value}) {
    this.setState({[name]: value});
  }

  render() {

    const{userName, password} = this.state;
    return (
      <Container style={{paddingTop:"130px"}}>
        <Media query="(min-width: 768px) and (max-width: 1279px)">
        <center>
          <Card style={{
            width: "100%",
            backgroundColor: "rgba(255,255,255,0.5)",
            marginBottom: '50px'
          }}>
            <Card.Content>
              <Card.Header>
                SIGN IN
              </Card.Header>
            </Card.Content>
            <Card.Content>
              <Input type="text" iconPosition='left' placeholder='UserName' style={{width: "50%"}} name='userName' value={userName} onChange={this.handleChange.bind(this)}>
                <Icon name='user'/>
                <input style={{backgroundColor: "rgba(255,255,255,0.8)"}}/>
              </Input>
              <br/>
              <br/>
              <Input type="text" iconPosition='left' placeholder='Password' style={{width: "50%"}} name='password' value={password} onChange={this.handleChange.bind(this)}>
                <Icon name='lock'/>
                <input style={{backgroundColor: "rgba(255,255,255,0.8)"}}/>
              </Input>


              <Button color="green"  onClick={this.switchToDashboard.bind(this)} style={{  width: "50%",marginTop:"15px",}}>
                Log In
              </Button>
            </Card.Content>
            <Card.Content extra>
              <a style={{
                padding: "0px 10px"
              }}>Forgot Password?</a>

              <Link to={'/signup'}>
              <a style={{
                padding: "0px 10px",
                borderLeft: "1px solid rgba(0,0,0,.4)"
              }} onClick={this.switchToSignUp}>New User</a></Link>
            </Card.Content>
          </Card>
          </center>
        </Media>

        <Media query="(min-width: 1280px)">
          <center>
            <Card style={{
              width: "50%",
              backgroundColor: "rgba(255,255,255,0.5)",
              marginBottom: '50px'
            }}>
              <Card.Content>
                <Card.Header>
                  SIGN IN
                </Card.Header>
              </Card.Content>
              <Card.Content>
                <Input iconPosition='left' placeholder='UserName' name='userName' value={userName} onChange={this.handleChange.bind(this)} style={{
                  width: "70%"
                }}>
                  <Icon name='user'/>
                  <input style={{
                    backgroundColor: "rgba(255,255,255,0.8)"
                  }}/>
                </Input>
                <br/>
                <br/>
                <Input iconPosition='left' placeholder='Password' name='password' value={password} onChange={this.handleChange.bind(this)} style={{
                  width: "70%"
                }}>
                  <Icon name='lock'/>
                  <input style={{
                    backgroundColor: "rgba(255,255,255,0.8)"
                  }}/>
                </Input>

                <Button color="green" onClick={this.switchToDashboard.bind(this)} style={{
                  width: "50%",
                  marginTop:"15px"
                }}>
                  Log In
                </Button>
              </Card.Content>
              <Card.Content extra>
                <a style={{
                  padding: "0px 10px"
                }}>Forgot Password?</a>

                <Link to={'/signup'}><a style={{
                  padding: "0px 10px",
                  borderLeft: "1px solid rgba(0,0,0,.4)"
                }} onClick={this.switchToSignUp}>New User</a></Link>
              </Card.Content>
            </Card>
          </center>
        </Media>

        <Media query="(max-width: 767px)">
        <center>
          <Card style={{
            width: "100%",
            backgroundColor: "rgba(255,255,255,0.5)",
            marginBottom: '50px'
          }}>
            <Card.Content>
              <Card.Header>
                SIGN IN
              </Card.Header>
            </Card.Content>
            <Card.Content>
              <Input iconPosition='left' placeholder='UserName' value={userName} onChange={this.handleChange.bind(this)} style={{
                width: "100%"
              }}>
                <Icon name='user'/>
                <input style={{
                  backgroundColor: "rgba(255,255,255,0.8)"
                }}/>
              </Input>
              <br/>
              <br/>
              <Input iconPosition='left' placeholder='Password' value={password} onChange={this.handleChange.bind(this)} style={{
                width: "100%"
              }}>
                <Icon name='lock'/>
                <input style={{
                  backgroundColor: "rgba(255,255,255,0.8)"
                }}/>
              </Input>

              <Button color="green" onClick={this.switchToDashboard.bind(this)} style={{
                width: "50%",
                marginTop:"15px"
              }}>
                Log In
              </Button>
            </Card.Content>
            <Card.Content extra>
              <a style={{
                padding: "0px 10px"
              }}>Forgot Password?</a>

              <Link to={'/signup'}><a style={{
                padding: "0px 10px",
                borderLeft: "1px solid rgba(0,0,0,.4)"
              }} onClick={this.switchToSignUp}>New User</a></Link>
            </Card.Content>
          </Card>
          </center>
        </Media>
      </Container>

    )
  }
}
