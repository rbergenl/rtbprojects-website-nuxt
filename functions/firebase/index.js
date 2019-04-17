const firebase = require('firebase/app');
//import 'firebase/database';
require('firebase/firestore');

var config = require('./.firebase-config.json').result;

// Set the configuration for your app
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

module.exports = firebase;
