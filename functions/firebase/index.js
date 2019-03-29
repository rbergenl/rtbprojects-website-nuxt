const firebase = require('firebase/app');
//import 'firebase/database';
require('firebase/firestore');

// Set the configuration for your app
// Initialize Firebase
if (!firebase.apps.length) {
  var config = {
    apiKey: "AIzaSyC8n32C1XCpeuy2fs9xBM94mwYAarXrt5A",
    authDomain: "rtbprojects-website.firebaseapp.com",
    databaseURL: "https://rtbprojects-website.firebaseio.com",
    projectId: "rtbprojects-website",
    storageBucket: "rtbprojects-website.appspot.com",
    messagingSenderId: "662855413958"
  };
  firebase.initializeApp(config);
}

module.exports = firebase;
