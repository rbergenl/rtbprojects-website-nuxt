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
        title: 'Built mobile friendly website Commercial Banking and responsive widgets for Internet Banking.',
        type: 'big',
        year: 2014,
        company: 'ABN AMRO',
        img_url: '/media/projects/abnamro_project_logo.png',
        paragraphs: {
          one: {
            text: 'For the Commercial Banking department: <ul><li>Created new mobile friendly webpages and integrated multiple platforms into the abnamro.nl/zakelijk website. Managed with SDL Tridion.</li><li>Lead in setting up the frontend architecture utilising the NodeJS eco- system. Used Bootstrap 4 with custom CSS/Sass for styling. Built functionality with Web Components, Angular 7 and vanilla ES6/ Typescript. Collaborated with other teams to share the architecture.</li><li>Setup a CI/CD pipeline in Jenkins which runs Webpack builds, Jasmine unit tests, Protractor e2e tests and integrates with SonarQube and Nexus.</li><li>Initiated an organisational change to upgrade the Java web application by pitching a Proof of Concept to management. This upgrade is needed to be able to work with DevOps teams.</li><li>Had a business trip to Hyderabad in India to provide knowledge transfer to the Offshore team.</li></ul>',
            footer: 'Commercial Banking'
          },
          two: {
            text: 'For the Retail department:<ul><li>Delivered the first mobile friendly widget for Retail Internet Banking. Managed with Backbase Portal.</li><li>Collaborated with architects on setting up the frontend for the widgets. Used AngularJS 1.6 and Bootstrap 3 as a foundation.</li><li>Followed release processes to deliver widgets and pages to the production environment.</li><li>Setup the framework for unit testing with Jasmine, e2e testing with Protractor and a RESTful stub-server with ExpressJs. Shared it with other teams so they can perform better testing and comply with quality guidelines.</li><li>Setup the foundation of a technical style guide with reusable UI components. Supported other teams in using the frontend architecture and reusable components so they can build and deliver faster.</li></ul>',
            footer: 'Retail Banking'
          }
        },
        checkmarks: '<li>NodeJs, Angular 7 and Bootstrap 4</li><li>Jasmine and Protractor</li><li>Jenkins, SonarQube and Nexus</li><li>Offshore, Agile/Scrum and DevOps</li><li>SDL Tridion and Backbase</li>'
      },
      other_projects: {
        title: 'IT consultancy and web development for small business owners. And projects that took less than one year.',
        type: 'big',
        year: 2009,
        company: 'Shortterm projects for others',
        img_url: '/media/projects/small_other_projects_logos.png',
        paragraphs: {
          one: {
            text: 'GoldenGirlWorld created and sells tshirts with illustrations of a girl. RTB Projects setup a webshop with Wordpress and Woocommerce and provided web hosting support. Also integrated payments processors like Paypal and Stripe (iDeal) and an integration to Printful for order fullfilment. Also implemented Digital Marketing tools like Google Analytics and Search Engine Optimisation.',
            footer: 'GoldenGirlWorld'
          },
          two: {
            text: 'DunWallets created and sells a wallet with minimalist design. RTB Projects setup a multilingual webshop with Wordpress and Woocommerce and provided web hosting support. Also integrated payments processors like Paypal and Sisow (iDeal) and created numerous of customizations towards styling and layout.',
            footer: 'DunWallets'
          },
          three: {
            text: 'KijkMedia is a specialist in visual storytelling. RTB Projects setup a Wordpress website with customizations and an integration to Social Media. Also provided web hosting support.',
            footer: 'KijkMedia'
          },
          four: {
            text: 'Vandam Voedings- en Dieetadvies is a specialist in health consultancy. RTB Projects provided consultancy regarding Google Suite and provided web hosting support.',
            footer: 'Vandam Voedings- en Dieetadvies'
          },
          five: {
            text: 'Brasserie Jong & Oud is a vibrant eating and drinking place in Zwolle. RTB Projects setup a Wordpress website and provided consultantcy regarding Google Suite. Also provided web hosting support.',
            footer: 'Brasserie Jong & Oud'
          },
          six: {
            text: 'Oranjewoud N.V. provides a wide range of services with regards to infrastructural developments. For the Group IT department RTB Projects delivered multiple ITIL artifacts: Service Level Requirements, Process Manuals and a Maturity Assessment.',
            footer: 'Oranjewoud N.V.'
          }
        },
        checkmarks: '<li>Wordpress and Woocommerce</li><li>ITIL</li><li>Digital Marketing and SEO</li><li>IT Consultancy</li>'
      },
      own_projects: {
        title: 'Projects with a group as startup or ventures by myself',
        type: 'big',
        year: 2008,
        company: 'Startups and own ventures',
        img_url: '/media/projects/small_own_projects_logos.png',
        paragraphs: {
          one: {
            text: 'Planty is a Proof of Concept for growing indoor plants. RTB Projects built a mobile app with React Native which makes a bluetooth connection to a Raspberry Pi. The device then uses custom NodeJs scripts to connect to the AWS Internet of Things service.',
            footer: 'Planty'
          },
          two: {
            text: 'CryptoBot is a bot running on AWS for trading cryptocurrency using a blockchain platform API. To keep the architecture serverless it uses a CI/CD pipeline and then stores its trade history in DynamoDB.',
            footer: 'CryptoBot'
          },
          three: {
            text: '',
            footer: 'Vivanty'
          },
          four: {
            text: '',
            footer: 'BelastingRetour'
          },
          five: {
            text: '',
            footer: 'DutchAdventure'
          },
          six: {
            text: 'FinestPashmina is a webshop to sell pashmina shawls from Nepal. RTB Projects built a complete e-commerce solution to sell pashina shawls via internet. Woocommerce did not exist yet, so built the backend with PHP to manage content, inventory and orders. Also had custom integrations with payment gateways. And worked together with an Offshore supplier to perform Search Engine Optimization.',
            footer: 'FinestPashmina'
          },
          seven: {
            text: 'RealHookah is a webshop to sell authentic hookahs from Istanbul. The endgoal is to have all order fullfilment and customer service outsourced. RTB Projects developed business plans and outsourced the design and development of the web application to a company in India.',
            footer: 'RealHookah'
          },
          eight: {
            text: 'GlimpseMaps is a website that lays an interactive tourist map on top of Google Maps. My first venture inspired by The Four Hour Workweek. RTB Projects developed business plans and Outsourced the design of the web application to a freelancer in The Netherlands. Then outsourced the development of the web application to a company in India.',
            footer: 'GlimpseMaps'
          },
          nine: {
            text: 'Three friends, Robin, Sjoerd and Ivo, went on an adventurious trip. Hitchhiking and couchsurfing to Asia. The endgoal is to reach Nepal and do volunteering work. RTB Projects built a complete blog solution to share the story online. Wordpress did not exist yet, so built the backend with PHP to manage the blog posts and pages.',
            footer: 'HitchhikeToAsia'
          }
        },
        checkmarks: '<li>Amazon Web Services</li><li>NodeJs</li><li>RESTful API\'s</li><li>Serverless and CI/CD</li><li>DynamoDB</li><li>PHP and MySQL</li><li>Offshore</li><li>Digital Marketing and SEO</li>'
      },
      wageningen_university_and_research: {
        title: 'As Project Manager delivered a Prince2 and a Scrum project. As Information Analyst delivered many system descriptions and advisory reports.',
        type: 'big',
        year: 2012,
        company: 'Wageningen University & Research centre',
        img_url: '/media/projects/wageningen_university_and_research_project_logo.png',
        paragraphs: {
          one: {
            text: 'As Project Manager responsible for two projects. One Prince2 project to deliver an IT Selfservice Portal. And a Scrum project to deliver a workflow application for an internal customer. The activities included making project plans, supporting the teams and communicating with stakeholders.',
            footer: 'Projet Manager'
          },
          two: {
            text: 'As Information Analyst delivered thirteen reports with process- and system descriptions and advisory reports.',
            footer: 'Information Analyst'
          }
        },
        checkmarks: '<li>Scrum</li><li>Prince2</li><li>Communication trainings</li>'
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
      oranjewoud: {
        type: 'small',
        year: 2010,
        company: '',
        img_url: '',
        description: ''
      },
      realhookah: {
        title: 'RealHookah',
        type: 'own',
        year: 2010,
        img_url: '',
        company: 'A webshop to sell authentic hookahs from Istanbul. The endgoal is to have all order fullfilment and customer service outsourced.',
        description: 'Developed business plans. Outsourced the design and development of the web application to a company in India.'
      },
      glimpsemaps: {
        title: 'GlimpseMaps',
        type: 'own',
        year: 2009,
        img_url: '',
        company: 'A website that lays an interactive tourist map on top of Google Maps. My first venture inspired by The Four Hour Workweek.',
        description: 'Developed business plans. Outsourced the design of the web application to a freelancer in The Netherlands. And outsourced the development of the web application to a company in India.'
      },
      hitchhiketoasia: {
        title: 'Hitchhike to Asia',
        type: 'own',
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
  },
  projects (state) {
    return state.projects
  },
  getProject(state) {
    return (key) => state.projects[key]
  },
  ownProjects (state) {
    const projects = state.projects;
    let arr = new Array();
    for (let key in projects) {
      projects[key].key = key;
      if (projects[key].type === 'own') arr.push(projects[key]);
    }
    return arr;
  },
  bigProjects (state) {
    const projects = state.projects;
    let arr = new Array();
    for (let key in projects) {
      projects[key].key = key;
      if (projects[key].type === 'big') arr.push(projects[key]);
    }
    return arr;
  },
  smallProjects (state) {
    const projects = state.projects;
    let arr = new Array();
    for (let key in projects) {
      projects[key].key = key;
      if (projects[key].type === 'small') arr.push(projects[key]);
    }
    return arr;
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
