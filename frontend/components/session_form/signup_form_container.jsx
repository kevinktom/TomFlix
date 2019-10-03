import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form.jsx';


const mapStateToProps = state => {
  // debugger
  return ({
    errors: state.errors.session,
    formType: 'Sign Up',
    navLink: <Link to="/signin">Sign in.</Link>,
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    action: (user) => dispatch(signup(user))
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);