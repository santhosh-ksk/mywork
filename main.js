import React from 'react';
import ReactDom from 'react-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import HomePage from './client/views/wiprooracleretail.jsx';
import Welcome from './client/views/Welcome.jsx';
import Login from './client/views/login.jsx';
import User from './client/views/user.jsx';
// import Upload from './client/components/userPage/imageupload.jsx'
import Upload from './client/components/userPage/ImportantClients.jsx'
import Cookies from 'universal-cookie';
import { Router, Route, hashHistory,browserHistory} from 'react-router';

const cookies = new Cookies();

injectTapEventPlugin();

function checkLoggedIn(nextState,replace){
  //console.log(cookies.get("wweStar"));
  if(cookies.get("wweStar")!=undefined) {
    replace({
      pathname: 'user'
    })
	}
	}

	function checkAuth(nextState,replace){
	  console.log("authentication",cookies.get("wweStar"));
	  if(cookies.get("wweStar")==undefined) {
	    replace({
	      pathname: 'login'
	    })
		}
		}

ReactDom.render(
<Router history={hashHistory} >
		             <Route path='/' component={Welcome}/>
                 <Route path='homePage' component={HomePage}/>
                 <Route path='login' component={Login} onEnter={checkLoggedIn}/>
                 <Route path='signup' component={Login}/>
								 <Route path='user' component={User} onEnter={checkAuth}/>
                 </Router>
,document.getElementById("content"));
