// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { MediaResolvers } from "../generated/graphqlgen";

export const Media: MediaResolvers.Type = {
  ...MediaResolvers.defaultResolvers,

  post: (parent, args, ctx) => {
    return ctx.prisma.media({ id: parent.id }).post();
  }
};
