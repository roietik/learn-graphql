console.log("start here ok ok?");
const { ApolloServer } = require("apollo-server");
// czemu nie moge uzyc skladni es6 do importowania w node.js

const typeDefs = `
    type Query {
        greeting: String
    }
`;

const srv = new ApolloServer({ typeDefs });

srv
  .listen({ port: 4000 })
  .then(res =>
    console.log(`RANDOM-STUFF::: port: ${res.port} | url: ${res.url}`)
  );
