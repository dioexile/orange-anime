import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase/app'
import {AuthProvider} from './AuthProviders/AuthProvider'

firebase.initializeApp({
  apiKey: "AIzaSyDSgfOeeIiEsDB2u9VthDQY_MenXA04wqQ",
  authDomain: "anime-fc36d.firebaseapp.com",
  projectId: "anime-fc36d",
  storageBucket: "anime-fc36d.appspot.com",
  messagingSenderId: "442890346472",
  appId: "1:442890346472:web:12ab0bfb163558f343ce5d"
});

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App/>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
