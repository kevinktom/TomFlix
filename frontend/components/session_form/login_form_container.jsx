import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, deleteErrors } from '../../actions/session_actions';
import SessionForm from './session_form.jsx';


const mapStateToProps = state => {
  return ({
    errors: state.errors.session,
    formType: 'Sign In',
    navLink: <Link to="/signup">Sign up now.</Link>,
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    action: (user) => dispatch(login(user)),
    demo: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(deleteErrors())
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)