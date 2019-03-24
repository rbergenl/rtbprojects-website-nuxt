export const state = () => {
  return {
    user: null,
    usps: {
      one: {
        text: '<li>10 years web development</li><li>5 years mobile web</li><li>NodeJs ecosystem.</li><li>CI/CD</li>',
        title: 'Web Developer',
        icon: 'world'
      },
      two: {
        text: '<li>Complex corporate environments</li><li>Agile/Scrum practices</li><li>DevOps</<li><li>Offshore teams</li>',
        title: 'Team Player',
        icon: 'comment'
      },
      three: {
        text: '<li>Angular 7</li><li>Bootstrap 4</li><li>Progressive Web Apps</li><li>Serverless Architecture</li>',
        title: 'Passionate Learner',
        icon: 'mail'
      }
    },
    certificates: {
      aws: {
        title: 'AWS Developer Associate',
        img_url: '/media/certificates/aws-developer-associate.png'
      },
      mbs: {
        title: 'Mobile Web Specialist',
        img_url: '/media/certificates/mobile_web_specialist.png'
      },
      scrum: {
        title: 'Professional Scrum Developer',
        img_url: '/media/certificates/professional-scrum-developer.png'
      },
      java: {
        title: 'Java SE8 Associate',
        img_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png'
      },
      prince2: {
        title: 'Prince 2',
        img_url: 'https://ituonline.com/wp-content/uploads/2018/02/prince2-small.png'
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
  },
  usps (state) {
    return state.usps
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
