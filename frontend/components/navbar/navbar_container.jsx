import { connect } from 'react-redux';
// import React from 'react';
import { logout } from '../../actions/session_actions';
import Nav from './navbar';
import { renderVideos } from '../../actions/video_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
    let userId = state.sessions.id;
    return ({
        currentUser: state.entities.users[userId],
        videos: Object.values(state.entities.videos),
        searchurl: ownProps.searchurl
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));