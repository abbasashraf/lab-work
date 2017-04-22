import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { Provider } from 'react-redux'
import { store } from './store'
import './index.css';



import firebase from 'firebase'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAv7puUjFGUrS0so96svRtv-yAlyMQ0zlk",
    authDomain: "education-bd748.firebaseapp.com",
    databaseURL: "https://education-bd748.firebaseio.com",
    projectId: "education-bd748",
    storageBucket: "education-bd748.appspot.com",
    messagingSenderId: "257455995442"
  };
  firebase.initializeApp(config);



ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
