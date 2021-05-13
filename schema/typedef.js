const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList
} = require("graphql");
const { fetchLaunches, fetchLaunchById } = require("../resolvers/launches");

//Launch type
const LaunchType = new GraphQLObjectType({
  name: "Launch",
  fields: () => ({
    id: { type: GraphQLString },
    flight_number: { type: GraphQLInt },
    name: { type: GraphQLString },
    date_utc: { type: GraphQLString },
    date_local: { type: GraphQLString },
    success: { type: GraphQLBoolean }
  })
});

//Root Query type
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      resolve: fetchLaunches
    },
    launch: {
      type: LaunchType,
      args: {
        id: { type: GraphQLString }
      },
      resolve: fetchLaunchById
    }
  }
});

module.exports = {
  RootQuery
};
