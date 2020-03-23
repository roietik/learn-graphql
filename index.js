const { ApolloServer, gql } = require("apollo-server");

const PORT = process.env.PORT || 4000;

const typeDefs = gql`
  type Todo {
    title: String
    done: Boolean
    id: Int!
  }

  type Query {
    todo: [Todo]
  }
`;

const todo = [
  {
    title: "Water the flowers",
    done: true,
    id: 0
  },
  {
    title: "Empty the dishwasher",
    done: true,
    id: 1
  },
  {
    title: "Wash the car",
    done: true,
    id: 2
  },
  {
    title: "Learn the GraphQL",
    done: false,
    id: 3
  },
  {
    title: "Practice the GSAP",
    done: false,
    id: 4
  }
];

const resolvers = {
  Query: {
    todo: () => todo
  }
};

const srv = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
});

srv
  .listen({ port: PORT })
  .then(res => console.log(`[🚀 RANDOM-STUFF 🚀] Server ready at ${res.url}`));
