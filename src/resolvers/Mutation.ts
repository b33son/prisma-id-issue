// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { MutationResolvers } from "../generated/graphqlgen";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { APP_SECRET, getUserId } from "../utils";

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  signup: async (parent, { name, email, password }, ctx) => {
    const hashedPassword = await hash(password, 10);
    const user = await ctx.prisma.createUser({
      name,
      email,
      password: hashedPassword
    });
    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user
    };
    //throw new Error("Resolver not implemented");
  },
  login: async (parent, { email, password }, ctx) => {
    const user = await ctx.prisma.user({ email });
    if (!user) {
      throw new Error(`No user found for email: ${email}`);
    }
    const passwordValid = await compare(password, user.password);
    if (!passwordValid) {
      throw new Error("Invalid password");
    }
    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user
    };
  },
  createOrg: async (parent, { name }, ctx) => {
    const userId = getUserId(ctx);
    console.log(userId);

    if (!userId) {
      throw new Error("No authentication information. User not authorized.");
    }
    const org = await ctx.prisma.createOrg({
      name,
      owner: { connect: { id: userId } },
      orgAdmins: { connect: { id: userId } },
      orgMembers: { connect: { id: userId } }
    });

    console.log(`Created new org ${org.id}, ${org.name}`);
    return org;
  }
};

// signup: async (parent, { name, email, password }, context) => {
//     const hashedPassword = await hash(password, 10)
//     const user = await context.prisma.createUser({
//       name,
//       email,
//       password: hashedPassword,
//     })
//     return {
//       token: sign({ userId: user.id }, APP_SECRET),
//       user,
//     }
//   }
