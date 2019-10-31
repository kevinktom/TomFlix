import { connect } from 'react-redux';
// import React from 'react';
import { logout } from '../../actions/session_actions';
import Nav from './navbar';


const mapStateToProps = state => {
    let userId = state.sessions.id;
    return ({
        currentUser: state.entities.users[userId],
        // genres: state.entities.genres 
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        logoutCurrentUser: () => dispatch(logout()),
        // getGenre
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(Nav);