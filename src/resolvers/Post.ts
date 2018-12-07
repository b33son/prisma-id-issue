import { Location } from "./../types";
// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { PostResolvers } from "../generated/graphqlgen";

export const Post: PostResolvers.Type = {
  ...PostResolvers.defaultResolvers,

  owner: (parent, args, ctx) => {
    return ctx.prisma.post({ id: parent.id }).owner();
  },
  campaign: (parent, args, ctx) => {
    return ctx.prisma.post({ id: parent.id }).campaign();
  },
  org: (parent, args, ctx) => {
    return ctx.prisma.post({ id: parent.id }).org();
  },
  medias: (parent, args, ctx) => {
    return ctx.prisma.post({ id: parent.id }).medias();
  },
  location: (parent, args, ctx) => {
    return ctx.prisma.post({ id: parent.id }).location();
  }
};
