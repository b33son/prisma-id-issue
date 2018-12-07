// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { LocationResolvers } from "../generated/graphqlgen";

export const Location: LocationResolvers.Type = {
  ...LocationResolvers.defaultResolvers,
  user: (parent, args, ctx) => {
    return ctx.prisma.location({ id: parent.id }).user();
  },
  post: (parent, args, ctx) => {
    return ctx.prisma.location({ id: parent.id }).post();
  }
};
