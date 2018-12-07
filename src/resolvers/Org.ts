// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { OrgResolvers } from "../generated/graphqlgen";

export const Org: OrgResolvers.Type = {
  ...OrgResolvers.defaultResolvers,

  owner: (parent, args, ctx) => {
    return ctx.prisma.org({ id: parent.id }).owner();
  },
  orgAdmins: (parent, args, ctx) => {
    return ctx.prisma.org({ id: parent.id }).orgAdmins();
  },
  orgMembers: (parent, args, ctx) => {
    return ctx.prisma.org({ id: parent.id }).orgMembers();
  },
  campaigns: (parent, args, ctx) => {
    return ctx.prisma.org({ id: parent.id }).campaigns();
  },
  posts: (parent, args, ctx) => {
    return ctx.prisma.org({ id: parent.id }).posts();
  }
};
