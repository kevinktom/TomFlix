import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
import Videos from './videos';
import {renderVideos} from '../../actions/video_actions';

const mapStateToProps = state => {
  // debugger
  let userId = state.sessions.id;
  return ({
     currentUser:state.entities.users[userId] 
  })
}

const mapDispatchToProps = dispatch => {
   return ({
    logoutCurrentUser: () => dispatch(logout()),
    renderVideos: () => dispatch(renderVideos())
   })
}

export default connect(mapStateToProps, mapDispatchToProps)(Videos)


