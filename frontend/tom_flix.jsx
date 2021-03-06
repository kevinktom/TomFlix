import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// import * as actions from './actions/session_actions';
// import * as genreactions from './actions/genre_actions';
// import * as mylists from './actions/mylist_actions';

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
  ReactDOM.render(<Root store={store}/>, root)
})