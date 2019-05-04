import { gql } from "apollo-server-express";

const typeDefs = gql`
  scalar DateTime

  type Query {
    _: String
    hello(input: String): String
  }

  type Mutation {
    _: String
  }
`;

export { typeDefs };
