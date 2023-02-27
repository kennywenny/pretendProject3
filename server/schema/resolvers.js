// const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      console.log('users')
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      console.log('add user')
    },
  },
};

module.exports = resolvers;
