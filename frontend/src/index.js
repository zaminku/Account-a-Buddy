import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import axios from "axios";


// TEST CODE vvvvvvvvvvvvvvvvvvvvvvvvvvv

// auto css styling
import 'bootstrap/dist/css/bootstrap.min.css';

// =====================================

// We set this up in the last section
import configureStore from './store/store';

// We will use this to parse the user's session token
import jwt_decode from 'jwt-decode';

// The session utility we just created
import { setAuthToken } from './util/session_api_util';

// We have not created this action yet, but will do so in the next step
import { logout } from './actions/session_actions';

import {fetchGoals, fetchUserGoals, fetchGoal, createGoal, updateGoal } from './actions/goal_actions';
// window.fetchGoals = fetchGoals;
// window.fetchGoal = fetchGoal;
// window.createGoal = createGoal;
// window.updateGoal = updateGoal;
// window.deleteGoal = deleteGoal;

import { createRoom, deleteRoom } from "./actions/room_actions"

window.axios = axios;

document.addEventListener('DOMContentLoaded', () => {
  let store;

  // If a returning user has a session token stored in localStorage
  if (localStorage.jwtToken) {

    // Set the token as a common header for all axios requests
    setAuthToken(localStorage.jwtToken);

    // Decode the token to obtain the user's information
    const decodedUser = jwt_decode(localStorage.jwtToken);

    // Create a preconfigured state we can immediately add to our store
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    // If the user's token has expired
    if (decodedUser.exp < currentTime) {
      // Logout the user and redirect to the login page
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    // If this is a first time user, start with an empty store
    store = configureStore({});
  }
  // Render our root component and pass in the store as a prop
  const root = document.getElementById('root');

  // testing
  window.store = store
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  
  window.fetchGoals = fetchGoals;
  window.fetchUserGoals = fetchUserGoals;
  window.fetchGoal = fetchGoal;
  window.createGoal = createGoal;
  window.updateGoal = updateGoal;
  // window.deleteGoal = deleteGoal;
  window.createRoom = createRoom;
  window.deleteRoom = deleteRoom;
  
  ReactDOM.render(<Root store={store} />, root);
  
});


// testing in console log: fetchGoals().then(res => console.log(res))