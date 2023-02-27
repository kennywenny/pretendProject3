require('dotenv').config()
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const Profile = require('./models/Profile'); // TODO: Move this to the schemas
//const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schema');
const db = require('./config/connection');
const port = process.env.PORT;

(async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port },
  });

  console.log(`🚀  Server ready at: ${url}`);
})()