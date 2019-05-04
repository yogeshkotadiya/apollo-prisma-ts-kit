import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import resolvers from "./resolvers/index";
import { typeDefs } from "./typeDefs";
import { db } from "./prismaDB";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: resolvers as any,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
});

const server = new ApolloServer({
  schema,
  playground: process.env.NODE_ENV !== "production",
  context: req => ({ ...req, db }),
});

export { server };
