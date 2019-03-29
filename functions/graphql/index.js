var express = require('express');
var cors = require('cors');
var graphqlHTTP = require('express-graphql');

var schema = require('./schema');
var resolvers = require('./resolvers');

var app = express();

app.use('/graphql', cors(), graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));

console.log('NODE_ENV is ', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.listen(4000);
  console.log('Running a GraphQL API server at localhost:4000/graphql');
}
exports = module.exports = app;
