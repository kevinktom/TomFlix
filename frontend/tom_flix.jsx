import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as actions from './actions/session_actions'
import * as genreactions from './actions/genre_actions'

document.addEventListener("DOMContentLoaded", ()=>{
  let root = document.getElementById('root');
  let preloadedState = undefined;
  let store = configureStore();
  if (window.currentUser) {
    preloadedState = {
      sessions: {
        currentUser: window.currentUser
      }
    };
    store = configureStore(preloadedState)
  }

  // window.login = actions.login;
  window.signup = actions.signup;
  window.logout = actions.logout;
  window.getgenre = genreactions.getGenre;
  window.dispatch = store.dispatch;
  // window.
  window.getState = store.getState();
  ReactDOM.render(<Root store={store}/>, root)
})