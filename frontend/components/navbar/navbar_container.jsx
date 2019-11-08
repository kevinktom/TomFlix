import { connect } from 'react-redux';
// import React from 'react';
import { logout } from '../../actions/session_actions';
import Nav from './navbar';
import { renderVideos } from '../../actions/video_actions';


const mapStateToProps = state => {
    let userId = state.sessions.id;
    return ({
        currentUser: state.entities.users[userId],
        videos: Object.values(state.entities.videos)
        // genres: state.entities.genres 
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        logoutCurrentUser: () => dispatch(logout()),
        renderVideos: () => dispatch(renderVideos()),
        // getGenre
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(Nav);