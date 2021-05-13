const { GraphQLSchema } = require("graphql");
const { RootQuery } = require("./typedef");

const schema = new GraphQLSchema({
  query: RootQuery
});

module.exports = schema;
