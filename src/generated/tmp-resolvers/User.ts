// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { UserResolvers } from "../graphqlgen";

export const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,

  locations: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  orgs: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  orgsAsOwner: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  orgsAsAdmin: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  campaigns: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  campaignsAsLead: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  posts: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
