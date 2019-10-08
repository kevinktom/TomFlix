import { connect } from 'react-redux';
import React from 'react';
import Videos from './videos';
import {renderVideos} from '../../actions/video_actions';


const mapStateToProps = state => {
  debugger
  let userId = state.sessions.id;
  return ({
     currentUser:state.entities.users[userId], //possibly take this out as logout is handled by nav
     videos: Object.values(state.entities.videos)
  })
}

const mapDispatchToProps = dispatch => {
   return ({
   //  logoutCurrentUser: () => dispatch(logout()), //possibly redundant
    renderVideos: () => dispatch(renderVideos())
   })
}

export default connect(mapStateToProps, mapDispatchToProps)(Videos)


