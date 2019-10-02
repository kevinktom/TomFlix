import React from 'react';
import { Link } from 'react-router-dom';
import {logout} from '../../actions/session_actions'

export const Greeting = ({ currentUser, logoutCurrentUser }) => {
  // const logged_in = () => {
  return (
    <div>
      <h1>Welcome to the best version of Netflix</h1>
      <button onClick={logoutCurrentUser}>Logout</button>
    </div>
  )
  // }

  // const logged_out = () => {
  //   return (
  //     <div>
  //       <Link to='/signup'>Sign Up</Link>
  //       <br/>
  //       <label htmlFor="signup">Have an account?</label>
  //       <Link id="signup" to='/signin'>Sign In</Link>
  //       <button onClick={handleDemo}>Try a Demo!</button> 
  //     </div>
  //   )
  // }

  // const handleDemo = (e) => {
  //   const testUser = {email: "demo@demo.com", password: "password"}
  //   e.preventDefault();
  //   dispatch(login(testUser))
  // }

  // return currentUser ? logged_in() : logged_out()
}

// export const handleDemo = (e) => {
//   const testUser = { email: "demo@demo.com", password: "password" }
//   e.preventDefault();
//   dispatch(login(testUser))
// }


