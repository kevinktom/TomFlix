import React from "react";
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignUpContainer from './session_form/signup_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util'


const App = () => {
  return(
    <div>
      <header>
        <h1>TomFlix</h1>
        <GreetingContainer/>
      </header>
      <Switch>
        <AuthRoute path='/signin' component={LoginFormContainer}/> 
        <AuthRoute path='/signup' component={SignUpContainer}/> 
        {/* <AuthRoute path='/' component={GreetingContainer}/> */}
      </Switch>
    </div>
  )
  };

export default App;