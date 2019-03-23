export const state = () => {
  return {
    user: null,
    usps: {
      one: {
        text: '10 years experience with web development, 5 years with mobile web and the NodeJs ecosystem.'
      },
      two: {
        text: 'Experience with complex corporate environments, Agile/Scrum practices, CI/CD, DevOps and offshore teams.'
      },
      three: {
        text: 'Up to date with Angular 7, Bootstrap 4, Progressive Web Apps and serverless architecture.'
      }
    },
    certificates: {
      aws: {
        title: 'AWS Developer Associate',
        img_url: ''
      },
      mbs: {
        title: 'Mobile Web Specialist',
        img_url: ''
      },
      scrum: {
        title: 'Professional Scrum Developer',
        img_url: ''
      },
      java: {
        title: 'Java SE8 Associate',
        img_url: ''
      }
    },
    skillmatrix: {
      html: {
        category: 'frontend',
        title: 'HTML, CSS and Javascript',
        knowledge: 3,
        experience: 10
      },
      angular: {
        category: 'frontend',
        title: 'AngularJs and Angular 7 (incl. Ngrx)',
        knowledge: 3,
        experience: 5
      },
      php: {
        category: 'backend',
        title: 'PHP and Java',
        knowledge: 2,
        experience: 5
      }
    },
    projects: {
      abnamro: {
        type: 'big',
        year: 2014,
        company: '',
        img_url: '',
        description: 'For the Retail department create the first responsive widgets for internet banking. For the Commercial Banking department created new responsive mobile friendly webpages.'
      },
      goldengirlworld: {
        type: 'small',
        year: 2019,
        company: '',
        img_url: '',
        description: 'Built a webshop with Wordpress and Woocommerce. Added payments integration to Paypal, Stripe. And order fullfilment integration to Printful.'
      },
      dunwallets: {
        type: 'small',
        year: 2014,
        company: '',
        img_url: '',
        description: ''
      },
      vivanty: {
        type: 'small',
        year: 2014,
        company: '',
        img_url: '',
        description: ''
      },
      kijkmedia: {
        type: 'small',
        year: 2014,
        company: '',
        img_url: '',
        description: ''
      },
      vandamvoedingsadvies: {
        type: 'small',
        year: 2013,
        company: '',
        img_url: '',
        description: 'Setup Google Suite and analytics.'
      },
      brasseriejongenoud: {
        type: 'small',
        year: 2013,
        company: '',
        img_url: '',
        description: 'Setup Google Suite and analytics'
      },
      wageningen_university_and_research: {
        type: 'big',
        year: 2012,
        company: '',
        img_url: '',
        description: ''
      },
      easthorizon: {
        type: 'small',
        year: 2012,
        company: '',
        img_url: '',
        description: ''
      },
      finestpashmina: {
        type: 'small',
        year: 2011,
        company: '',
        img_url: '',
        description: 'Built a complete e-commerce solution to sell pashina shawls via internet. Woocommerce did not exist yet, so built the backend with PHP to manage content, inventory and orders. Also had custom integrations with payment gateways. And worked together with an Offshore supplier to perform Search Engine Optimization.'
      },
      realhookah: {
        type: 'small',
        year: 2010,
        img_url: '',
        company: 'A webshop to sell authentic hookahs from Istanbul. The endgoal is to have all order fullfilment and customer service outsourced.',
        description: 'Developed business plans. Outsourced the design and development of the web application to a company in India.'
      },
      glimpsemaps: {
        type: 'small',
        year: 2009,
        img_url: '',
        company: 'A website that lays an interactive tourist map on top of Google Maps. My first venture inspired by The Four Hour Workweek.',
        description: 'Developed business plans. Outsourced the design of the web application to a freelancer in The Netherlands. And outsourced the development of the web application to a company in India.'
      },
      hitchhiketoasia: {
        type: 'small',
        year: 2008,
        img_url: '',
        company: 'Three friends, Robin, Sjoerd and Ivo, went on an adventurious trip. Hitchhiking and couchsurfing to Asia. The endgoal is to reach Nepal and do volunteering work.',
        description: 'Built a complete blog solution to share the story online. Wordpress did not exist yet, so built the backend with PHP to manage the blog posts and pages.'
      }
    }
  }
}

export const mutations = {
  SET_USER (state, user) {
    state.user = user || null
  }
}

export const getters = {
  isAuthenticated (state) {
    return !!state.user
  },
  loggedUser (state) {
    return state.user
  },
  certificates (state) {
    return state.certificates
  }
}

// import firebase from '~/plugins/firebase';
// import { firebaseAction } from 'vuexfire'
//
// // Get a reference to the database service
// var db = firebase.database();
//
// var certificateCollection = db.ref("certificate");
//
// export const state = () => ({
//   certificates: null
// })
//
// export const getters = {
//   certificates: state => state.certificates
// }
//
// export const actions = {
//   INIT_CERTIFICATES: firebaseAction(({ bindFirebaseRef }) => {
//     bindFirebaseRef('certificates', certificateCollection)
//   })
// }
//
// // Attach an asynchronous callback to read the data at our posts reference
// certificateCollection.on("value", function(snapshot) {
//   console.log(snapshot.val());
// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });
