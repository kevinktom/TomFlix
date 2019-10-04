import React from "react";
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignUpContainer from './session_form/signup_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SplashContainer from './splash/splash_form_container';


const App = () => {
  return(
    <div>
      <header>
        {/* <link rel="shortcut icon" type="image/x-icon" href="favicon.png"/> */}
      </header>
      <Switch>
        <AuthRoute path='/signin' component={LoginFormContainer}/> 
        <AuthRoute path='/signup' component={SignUpContainer}/> 
        <ProtectedRoute path='/videos' component={GreetingContainer}/>
        <AuthRoute exact path='/' component={SplashContainer}/>
      </Switch>
    </div>
  )
  };

export default App;