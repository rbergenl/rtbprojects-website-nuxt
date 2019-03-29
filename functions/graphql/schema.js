var { buildSchema } = require('graphql');

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
    usps: [Usp]
    certificates: [Certificate]
    skills: [Skill]
    projects: [Project]
    getHomepage: Page
  }
`);

module.exports = schema;
