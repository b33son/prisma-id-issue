import { Exists } from "./../generated/prisma-client/index";
// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { QueryResolvers } from "../generated/graphqlgen";

import { APP_SECRET, getUserId } from "../utils";

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  me: (parent, args, ctx) => {
    const userId = getUserId(ctx);
    let user = ctx.prisma.user({ id: userId });
    return user;
  },
  getUsers: (parent, args, ctx) => {
    return ctx.prisma.users();
  },
  getUsersInCampaign: (parent, { id }, ctx) => {
    return ctx.prisma.campaign({ id }).campaignMembers();
  },
  getUser: (parent, { id }, ctx) => {
    return ctx.prisma.user({ id });
  }
  // getOrg: async (parent, { id }, ctx) => {
  //   const uid = getUserId(ctx);
  //   const org = await ctx.prisma.orgs({
  //     where: {  }
  //   });
  //   const userId = getUserId(ctx);
  //   if (!org || org.length !== 1) {
  //     throw new Error("Organization not found or you are not a member.");
  //   }
  //   console.log(org);
  //   // if (!) {
  //   //   throw new Error("You must be a member of the organization to do that.");
  //   // }
  //   return org[0];
  // }
};
