import firebase from 'firebase/app';
//import 'firebase/database';
import 'firebase/firestore';

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
  // enable persistent data

  firebase.initializeApp(config);
  firebase.firestore().enablePersistence()
    .catch(function(err) {
        if (err.code == 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled
            // in one tab at a a time.
            // ...
        } else if (err.code == 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
            // ...
        }
    });
}

export const db = firebase.firestore();

export default firebase;
