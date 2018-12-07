import { rule, shield } from "graphql-shield";
import { getUserId } from "../utils";

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    const userId = getUserId(context);
    return Boolean(userId);
  }),
  everyone: rule()((parent, args, context) => {
    console.log(`args: `, args);
    console.log(`parent: `, parent);
    return Boolean(true);
  })
};

export const permissions = shield({
  Query: {
    me: rules.everyone,
    getUser: rules.everyone,
    getUsers: rules.everyone,
    getUsersInCampaign: rules.everyone
    //filterPosts: rules.isAuthenticatedUser,
    //post: rules.isAuthenticatedUser
  },
  Mutation: {
    //createDraft: rules.isAuthenticatedUser,
    //deletePost: rules.isPostOwner,
    //publish: rules.isPostOwner
  }
  // User: {
  //   orgsAsOwner: rules.everyone
  // },
  // Org: {
  //   id: rules.everyone,
  //   name: rules.everyone
  // }
});
