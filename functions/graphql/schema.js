var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  enum ProjectOrderByInput {
    year_ASC
    year_DESC
  }
  enum TestimonialOrderByInput {
    order_ASC
    order_DESC
  }
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
  type Testimonial {
    text: String
    name: String
    order: Int
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
    projects (orderBy: ProjectOrderByInput): [Project]
    testimonials (orderBy: TestimonialOrderByInput): [Testimonial]
    getHomepage: Page
  }
`);

module.exports = schema;
