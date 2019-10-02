import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions'
import { Greeting } from './greetings'

const mapStateToProps = state => {
  // debugger
  let userId = state.sessions.id;
  return ({
     currentUser:state.entities.users[userId] 
  })
}

const mapDispatchToProps = dispatch => {
   return ({
    logoutCurrentUser: () => dispatch(logout())
   })
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)


