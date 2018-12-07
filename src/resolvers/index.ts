import { Resolvers } from "../generated/graphqlgen";

import { Query } from "./Query";
import { User } from "./User";
import { Location } from "./Location";
import { Post } from "./Post";
import { Campaign } from "./Campaign";
import { Org } from "./Org";
import { Media } from "./Media";
import { Mutation } from "./Mutation";
import { AuthPayload } from "./AuthPayload";

export const resolvers: Resolvers = {
  Query,
  User,
  Location,
  Post,
  Campaign,
  Org,
  Media,
  Mutation,
  AuthPayload
};
