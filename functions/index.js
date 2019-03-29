const functions = require('firebase-functions')

const appGraphQL = require('./graphql');
const appSSR = require('./ssr');

exports.ssr = functions.https.onRequest(appSSR)
exports.graphql = functions.https.onRequest(appGraphQL);
