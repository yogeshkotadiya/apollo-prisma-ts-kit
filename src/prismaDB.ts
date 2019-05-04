import { Prisma } from "prisma-binding";
import { typeDefs } from "./generated/prisma-client/prisma-schema";
require(`dotenv`).config({ path: ".env" });

const db = new Prisma({
  typeDefs,
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false,
});

export { db };
