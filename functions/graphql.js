var express = require('express');
var cors = require('cors');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var usps = require('./mocks/usps');
var certificates = require('./mocks/certificates');
var skills = require('./mocks/skills');
var projects = require('./mocks/projects');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Usp {
    text: String
    title: String
    icon: String
  }
  type Certificate {
    title: String
    img_url: String
  }
  type Skill {
    category: String
    title: String
    knowledge: Int
    experience: Int
  }
  type Project {
    id: String
    title:String
    type:String
    year: Int
    company:String
    img_url:String
    paragraphs: [Paragraph]
    checkmarks: String
  }
  type Paragraph {
    text: String
    footer: String
  }
  type Page {
    usps: [Usp]
    certificates: [Certificate]
    skills: [Skill]
    projects: [Project]
  }
  type Query {
    getHomepage: Page
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  getHomepage: () => {
    // db.collection("certificates").get().then((querySnapshot) => {
    //   var data = querySnapshot.docs.map(function (documentSnapshot) {
    //     return documentSnapshot.data();
    //   });
    //   context.commit('SET_CERTIFICATES', data);
    // });
    return {
      usps: usps,
      certificates: certificates,
      skills: skills,
      projects: projects
    }
  },
};

var app = express();

app.use('/graphql', cors(), graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

console.log('NODE_ENV is ', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.listen(4000);
  console.log('Running a GraphQL API server at localhost:4000/graphql');
}
exports = module.exports = app;
