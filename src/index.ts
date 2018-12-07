//import { prisma } from "./generated/prisma-client/index";
import { GraphQLServer } from "graphql-yoga";
import { resolvers } from "./resolvers";
//import { data } from './data'
import { prisma } from "./generated/prisma-client";
import { permissions } from "./permissions";

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  //context: { data },
  //context: { prisma },
  middlewares: [permissions],
  context: request => {
    return {
      ...request,
      prisma
    };
  }
} as any);

server.start(() => console.log("Server is running on http://localhost:4000"));
