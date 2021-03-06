var firebase = require('../firebase');
var db = firebase.firestore();

var mockUsps = require('./mocks/usps');
var mockCertificates = require('./mocks/certificates');
var mockSkills = require('./mocks/skills');
var mockProjects = require('./mocks/projects');
var mockTestimonials = require('./mocks/testimonials');

var orderBy = (arr, args) => {
  const { orderBy } = args;
  const field = orderBy.split('_')[0];
  const direction = orderBy.split('_')[1];
  let sortOrder = (direction == 'ASC') ? 1 : -1;
  return function (a,b) {
      var result = (a[field] < b[field]) ? -1 : (a[field] > b[field]) ? 1 : 0;
      return result * sortOrder;
  }
}

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
  // db.collection('skills').get()
  //   .then((querySnapshot) => {
  //     var data = querySnapshot.docs.map(function (documentSnapshot) {
  //       return documentSnapshot.data();
  //     });
  //     if (data.length === 0) throw Error('could not find skills')
  //     resolve(data);
  //   })
  //   .catch((err) => {
  //     console.log(err)
      resolve(mockSkills)
    // });
});

var getProjects = (args) => {
  return new Promise((resolve, reject) => {
    db.collection('projects').get()
      .then((querySnapshot) => {
        var data = querySnapshot.docs.map(function (documentSnapshot) {
          return documentSnapshot.data();
        });
        if (data.length === 0) throw Error('could not find projects')
        if (args.orderBy) {
          data.sort(orderBy(data, args));
        }
        resolve(data);
      })
      .catch((err) => {
        console.log(err)
        resolve(mockProjects)
    });
  });
}

var getTestimonials = (args) => {
  return new Promise((resolve, reject) => {
    db.collection('testimonials').get()
      .then((querySnapshot) => {
        var data = querySnapshot.docs.map(function (documentSnapshot) {
          return documentSnapshot.data();
        });
        if (data.length === 0) throw Error('could not find testimonials')
        if (args.orderBy) {
          data.sort(orderBy(data, args));
        }
        resolve(data);
      })
      .catch((err) => {
        console.log(err)
        resolve(mockTestimonials)
      });
  });
}

// The root provides a resolver function for each API endpoint
var resolvers = {
  usps: getUsps,
  certificates: getCertificates,
  skills: getSkills,
  projects: getProjects,
  testimonials: getTestimonials,
  getHomepage: () => Promise.all([
    getUsps,
    getCertificates,
    getSkills,
    getProjects,
    getTestimonials])
  .then((values) => {
    return {
      usps: values[0],
      certificates: values[1],
      skills: values[2],
      projects: values[3],
      testimonials: values[4]
    }
  })
  .catch((err) => console.log(err))
};

module.exports = resolvers;
