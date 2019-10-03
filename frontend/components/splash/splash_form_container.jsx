import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import {Splash} from './splash';


// const mapStateToProps = state => {
//     return ({
//         errors: state.errors.session,
//         formType: 'Sign In',
//         navLink: <Link to="/signup">Sign up now.</Link>,
//     })
// }

const mapDispatchToProps = dispatch => {
    debugger
    return ({
        action: (user) => dispatch(login(user))
    })
}


export default connect(null, mapDispatchToProps)(Splash)