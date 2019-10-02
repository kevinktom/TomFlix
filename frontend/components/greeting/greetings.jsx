import React from 'react';
import { Link } from 'react-router-dom'

export const Greeting = ({ currentUser, logoutCurrentUser }) => {
  const logged_in = () => {
    return (
      <>
        <h1>Welcome to the best version of Netflix</h1>
        <button onClick={logoutCurrentUser}>Logout</button>
      </>
    )
  }

  const logged_out = () => {
    return (
      <>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/signin'>Sign In</Link>

      </>
    )
  }

  return currentUser ? logged_in() : logged_out()
}


