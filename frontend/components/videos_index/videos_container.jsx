import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
import Videos from './videos';
import {renderVideos} from '../../actions/video_actions';


const mapStateToProps = state => {
  // debugger
  let userId = state.sessions.id;
  return ({
     currentUser:state.entities.users[userId] //possibly take this out as logout is handled by nav
  })
}

const mapDispatchToProps = dispatch => {
   return ({
   //  logoutCurrentUser: () => dispatch(logout()), //possibly redundant
    renderVideos: () => dispatch(renderVideos())
   })
}

export default connect(mapStateToProps, mapDispatchToProps)(Videos)


