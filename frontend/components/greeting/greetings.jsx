import React from 'react';
// import { Link } from 'react-router-dom';
import {logout} from '../../actions/session_actions'

export const Greeting = ({ currentUser, logoutCurrentUser }) => {
  return (
    <div>
      <h1>Welcome to the best version of Netflix</h1>
      <button onClick={logoutCurrentUser}>Logout</button>
    </div>
  )
}



