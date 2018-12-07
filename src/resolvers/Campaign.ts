// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { CampaignResolvers } from "../generated/graphqlgen";

export const Campaign: CampaignResolvers.Type = {
  ...CampaignResolvers.defaultResolvers,

  campaignLeads: (parent, args, ctx) => {
    return ctx.prisma.campaign({ id: parent.id }).campaignLeads();
  },
  campaignMembers: (parent, args, ctx) => {
    return ctx.prisma.campaign({ id: parent.id }).campaignMembers();
  },
  orgs: (parent, args, ctx) => {
    return ctx.prisma.campaign({ id: parent.id }).orgs();
  },
  posts: (parent, args, ctx) => {
    return ctx.prisma.campaign({ id: parent.id }).posts();
  }
};
