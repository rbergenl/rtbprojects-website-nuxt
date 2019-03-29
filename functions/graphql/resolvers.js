var firebase = require('../firebase');
var db = firebase.firestore();

var mockUsps = require('./mocks/usps');
var mockCertificates = require('./mocks/certificates');
var mockSkills = require('./mocks/skills');
var mockProjects = require('./mocks/projects');

var getUsps = new Promise((resolve, reject) => {
  db.collection('usps').get()
    .then((querySnapshot) => {
      var data = querySnapshot.docs.map(function (documentSnapshot) {
        return documentSnapshot.data();
      });
      if (data.length === 0) throw Error('could not find usps')
      resolve(data);
    })
    .catch((err) => {
      console.log(err)
      resolve(mockUsps)
    });
});

var getCertificates = new Promise((resolve, reject) => {
  db.collection('certificates').get()
    .then((querySnapshot) => {
      var data = querySnapshot.docs.map(function (documentSnapshot) {
        return documentSnapshot.data();
      });
      if (data.length === 0) throw Error('could not find certificates')
      resolve(data);
    })
    .catch((err) => {
      console.log(err)
      resolve(mockCertificates)
    });
});

var getSkills = new Promise((resolve, reject) => {
  db.collection('skills').get()
    .then((querySnapshot) => {
      var data = querySnapshot.docs.map(function (documentSnapshot) {
        return documentSnapshot.data();
      });
      if (data.length === 0) throw Error('could not find skills')
      resolve(data);
    })
    .catch((err) => {
      console.log(err)
      resolve(mockSkills)
    });
});

var getProjects = new Promise((resolve, reject) => {
  db.collection('projects').get()
    .then((querySnapshot) => {
      var data = querySnapshot.docs.map(function (documentSnapshot) {
        return documentSnapshot.data();
      });
      if (data.length === 0) throw Error('could not find projects')
      resolve(data);
    })
    .catch((err) => {
      console.log(err)
      resolve(mockProjects)
    });
});

// The root provides a resolver function for each API endpoint
var resolvers = {
  getHomepage: () => Promise.all([
    getUsps,
    getCertificates,
    getSkills,
    getProjects])
  .then((values) => {
    return {
      usps: values[0],
      certificates: values[1],
      skills: values[2],
      projects: values[3]
    }
  })
  .catch((err) => console.log(err))
};

module.exports = resolvers;
