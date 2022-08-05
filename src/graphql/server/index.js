const { createServer } = require("@graphql-yoga/node");
const data = require("./mockData");

const typeDefs = `
type Query {
  dogs: [Dog]
}

type Dog {
  id: String
  name: String
  breed: String
  photo: String
}
`;

const resolvers = {
  Query: {
    dogs: () => data,
  },
};

const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
  cors: { origin: ["*"] },
});

server.start({ port: 4000 });
