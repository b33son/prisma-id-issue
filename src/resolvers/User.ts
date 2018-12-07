import { UserResolvers } from "../generated/graphqlgen";

import { APP_SECRET, getUserId } from "../utils";
import { UUID } from "../generated/prisma-client";
// export const User: UserResolvers.Type = {
//   ...UserResolvers.defaultResolvers,

//   posts: ({ postIDs }, args, ctx) => {
//     return ctx.data.posts.filter(post => postIDs.includes(post.id))
//   },
// }
export const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,

  locations: (parent, args, ctx) => {
    return ctx.prisma.user({ id: parent.id }).locations();
  },
  orgs: (parent, args, ctx) => {
    // filter to orgs in common with const userId = getUserId(ctx);
    const userId = getUserId(ctx);

    console.log(`userId   `, userId);
    console.log(`parent.id`, parent.id);
    return ctx.prisma
      .user({ id: parent.id })
      .orgs({ where: { orgMembers_some: { id: userId } } });
  },
  orgsAsOwner: (parent, args, ctx) => {
    return ctx.prisma.user({ id: parent.id }).orgsAsOwner();
  },
  orgsAsAdmin: (parent, args, ctx) => {
    return ctx.prisma.user({ id: parent.id }).orgsAsAdmin();
  },
  campaigns: (parent, args, ctx) => {
    return ctx.prisma.user({ id: parent.id }).campaigns();
  },
  campaignsAsLead: (parent, args, ctx) => {
    return ctx.prisma.user({ id: parent.id }).campaignsAsLead();
  },
  posts: (parent, args, ctx) => {
    return ctx.prisma.user({ id: parent.id }).posts();
  }
};
