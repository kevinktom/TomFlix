import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as actions from './actions/session_actions'

document.addEventListener("DOMContentLoaded", ()=>{
  let store = configureStore();
  let root = document.getElementById('root');
  window.login = actions.login;
  window.signup = actions.signup;
  window.logout = actions.logout;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store}/>, root)
})