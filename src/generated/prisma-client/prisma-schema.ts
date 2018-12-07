export const typeDefs = /* GraphQL */ `type AggregateCampaign {
  count: Int!
}

type AggregateLocation {
  count: Int!
}

type AggregateMedia {
  count: Int!
}

type AggregateOrg {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Campaign {
  createdAt: DateTime!
  updatedAt: DateTime!
  id: UUID!
  name: String
  instructions: String
  startDateTime: DateTime
  endDateTime: DateTime
  campaignLeads(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  campaignMembers(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  orgs(where: OrgWhereInput, orderBy: OrgOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Org!]
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
}

type CampaignConnection {
  pageInfo: PageInfo!
  edges: [CampaignEdge]!
  aggregate: AggregateCampaign!
}

input CampaignCreateInput {
  name: String
  instructions: String
  startDateTime: DateTime
  endDateTime: DateTime
  campaignLeads: UserCreateManyWithoutCampaignsAsLeadInput
  campaignMembers: UserCreateManyWithoutCampaignsInput
  orgs: OrgCreateManyWithoutCampaignsInput
  posts: PostCreateManyWithoutCampaignInput
}

input CampaignCreateManyWithoutCampaignLeadsInput {
  create: [CampaignCreateWithoutCampaignLeadsInput!]
  connect: [CampaignWhereUniqueInput!]
}

input CampaignCreateManyWithoutCampaignMembersInput {
  create: [CampaignCreateWithoutCampaignMembersInput!]
  connect: [CampaignWhereUniqueInput!]
}

input CampaignCreateManyWithoutOrgsInput {
  create: [CampaignCreateWithoutOrgsInput!]
  connect: [CampaignWhereUniqueInput!]
}

input CampaignCreateOneWithoutPostsInput {
  create: CampaignCreateWithoutPostsInput
  connect: CampaignWhereUniqueInput
}

input CampaignCreateWithoutCampaignLeadsInput {
  name: String
  instructions: String
  startDateTime: DateTime
  endDateTime: DateTime
  campaignMembers: UserCreateManyWithoutCampaignsInput
  orgs: OrgCreateManyWithoutCampaignsInput
  posts: PostCreateManyWithoutCampaignInput
}

input CampaignCreateWithoutCampaignMembersInput {
  name: String
  instructions: String
  startDateTime: DateTime
  endDateTime: DateTime
  campaignLeads: UserCreateManyWithoutCampaignsAsLeadInput
  orgs: OrgCreateManyWithoutCampaignsInput
  posts: PostCreateManyWithoutCampaignInput
}

input CampaignCreateWithoutOrgsInput {
  name: String
  instructions: String
  startDateTime: DateTime
  endDateTime: DateTime
  campaignLeads: UserCreateManyWithoutCampaignsAsLeadInput
  campaignMembers: UserCreateManyWithoutCampaignsInput
  posts: PostCreateManyWithoutCampaignInput
}

input CampaignCreateWithoutPostsInput {
  name: String
  instructions: String
  startDateTime: DateTime
  endDateTime: DateTime
  campaignLeads: UserCreateManyWithoutCampaignsAsLeadInput
  campaignMembers: UserCreateManyWithoutCampaignsInput
  orgs: OrgCreateManyWithoutCampaignsInput
}

type CampaignEdge {
  node: Campaign!
  cursor: String!
}

enum CampaignOrderByInput {
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  instructions_ASC
  instructions_DESC
  startDateTime_ASC
  startDateTime_DESC
  endDateTime_ASC
  endDateTime_DESC
}

type CampaignPreviousValues {
  createdAt: DateTime!
  updatedAt: DateTime!
  id: UUID!
  name: String
  instructions: String
  startDateTime: DateTime
  endDateTime: DateTime
}

input CampaignScalarWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  instructions: String
  instructions_not: String
  instructions_in: [String!]
  instructions_not_in: [String!]
  instructions_lt: String
  instructions_lte: String
  instructions_gt: String
  instructions_gte: String
  instructions_contains: String
  instructions_not_contains: String
  instructions_starts_with: String
  instructions_not_starts_with: String
  instructions_ends_with: String
  instructions_not_ends_with: String
  startDateTime: DateTime
  startDateTime_not: DateTime
  startDateTime_in: [DateTime!]
  startDateTime_not_in: [DateTime!]
  startDateTime_lt: DateTime
  startDateTime_lte: DateTime
  startDateTime_gt: DateTime
  startDateTime_gte: DateTime
  endDateTime: DateTime
  endDateTime_not: DateTime
  endDateTime_in: [DateTime!]
  endDateTime_not_in: [DateTime!]
  endDateTime_lt: DateTime
  endDateTime_lte: DateTime
  endDateTime_gt: DateTime
  endDateTime_gte: DateTime
  AND: [CampaignScalarWhereInput!]
  OR: [CampaignScalarWhereInput!]
  NOT: [CampaignScalarWhereInput!]
}

type CampaignSubscriptionPayload {
  mutation: MutationType!
  node: Campaign
  updatedFields: [String!]
  previousValues: CampaignPreviousValues
}

input CampaignSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CampaignWhereInput
  AND: [CampaignSubscriptionWhereInput!]
  OR: [CampaignSubscriptionWhereInput!]
  NOT: [CampaignSubscriptionWhereInput!]
}

input CampaignUpdateInput {
  name: String
  instructions: String
  startDateTime: DateTime
  endDateTime: DateTime
  campaignLeads: UserUpdateManyWithoutCampaignsAsLeadInput
  campaignMembers: UserUpdateManyWithoutCampaignsInput
  orgs: OrgUpdateManyWithoutCampaignsInput
  posts: PostUpdateManyWithoutCampaignInput
}

input CampaignUpdateManyDataInput {
  name: String
  instructions: String
  startDateTime: DateTime
  endDateTime: DateTime
}

input CampaignUpdateManyMutationInput {
  name: String
  instructions: String
  startDateTime: DateTime
  endDateTime: DateTime
}

input CampaignUpdateManyWithoutCampaignLeadsInput {
  create: [CampaignCreateWithoutCampaignLeadsInput!]
  delete: [CampaignWhereUniqueInput!]
  connect: [CampaignWhereUniqueInput!]
  disconnect: [CampaignWhereUniqueInput!]
  update: [CampaignUpdateWithWhereUniqueWithoutCampaignLeadsInput!]
  upsert: [CampaignUpsertWithWhereUniqueWithoutCampaignLeadsInput!]
  deleteMany: [CampaignScalarWhereInput!]
  updateMany: [CampaignUpdateManyWithWhereNestedInput!]
}

input CampaignUpdateManyWithoutCampaignMembersInput {
  create: [CampaignCreateWithoutCampaignMembersInput!]
  delete: [CampaignWhereUniqueInput!]
  connect: [CampaignWhereUniqueInput!]
  disconnect: [CampaignWhereUniqueInput!]
  update: [CampaignUpdateWithWhereUniqueWithoutCampaignMembersInput!]
  upsert: [CampaignUpsertWithWhereUniqueWithoutCampaignMembersInput!]
  deleteMany: [CampaignScalarWhereInput!]
  updateMany: [CampaignUpdateManyWithWhereNestedInput!]
}

input CampaignUpdateManyWithoutOrgsInput {
  create: [CampaignCreateWithoutOrgsInput!]
  delete: [CampaignWhereUniqueInput!]
  connect: [CampaignWhereUniqueInput!]
  disconnect: [CampaignWhereUniqueInput!]
  update: [CampaignUpdateWithWhereUniqueWithoutOrgsInput!]
  upsert: [CampaignUpsertWithWhereUniqueWithoutOrgsInput!]
  deleteMany: [CampaignScalarWhereInput!]
  updateMany: [CampaignUpdateManyWithWhereNestedInput!]
}

input CampaignUpdateManyWithWhereNestedInput {
  where: CampaignScalarWhereInput!
  data: CampaignUpdateManyDataInput!
}

input CampaignUpdateOneWithoutPostsInput {
  create: CampaignCreateWithoutPostsInput
  update: CampaignUpdateWithoutPostsDataInput
  upsert: CampaignUpsertWithoutPostsInput
  delete: Boolean
  disconnect: Boolean
  connect: CampaignWhereUniqueInput
}

input CampaignUpdateWithoutCampaignLeadsDataInput {
  name: String
  instructions: String
  startDateTime: DateTime
  endDateTime: DateTime
  campaignMembers: UserUpdateManyWithoutCampaignsInput
  orgs: OrgUpdateManyWithoutCampaignsInput
  posts: PostUpdateManyWithoutCampaignInput
}

input CampaignUpdateWithoutCampaignMembersDataInput {
  name: String
  instructions: String
  startDateTime: DateTime
  endDateTime: DateTime
  campaignLeads: UserUpdateManyWithoutCampaignsAsLeadInput
  orgs: OrgUpdateManyWithoutCampaignsInput
  posts: PostUpdateManyWithoutCampaignInput
}

input CampaignUpdateWithoutOrgsDataInput {
  name: String
  instructions: String
  startDateTime: DateTime
  endDateTime: DateTime
  campaignLeads: UserUpdateManyWithoutCampaignsAsLeadInput
  campaignMembers: UserUpdateManyWithoutCampaignsInput
  posts: PostUpdateManyWithoutCampaignInput
}

input CampaignUpdateWithoutPostsDataInput {
  name: String
  instructions: String
  startDateTime: DateTime
  endDateTime: DateTime
  campaignLeads: UserUpdateManyWithoutCampaignsAsLeadInput
  campaignMembers: UserUpdateManyWithoutCampaignsInput
  orgs: OrgUpdateManyWithoutCampaignsInput
}

input CampaignUpdateWithWhereUniqueWithoutCampaignLeadsInput {
  where: CampaignWhereUniqueInput!
  data: CampaignUpdateWithoutCampaignLeadsDataInput!
}

input CampaignUpdateWithWhereUniqueWithoutCampaignMembersInput {
  where: CampaignWhereUniqueInput!
  data: CampaignUpdateWithoutCampaignMembersDataInput!
}

input CampaignUpdateWithWhereUniqueWithoutOrgsInput {
  where: CampaignWhereUniqueInput!
  data: CampaignUpdateWithoutOrgsDataInput!
}

input CampaignUpsertWithoutPostsInput {
  update: CampaignUpdateWithoutPostsDataInput!
  create: CampaignCreateWithoutPostsInput!
}

input CampaignUpsertWithWhereUniqueWithoutCampaignLeadsInput {
  where: CampaignWhereUniqueInput!
  update: CampaignUpdateWithoutCampaignLeadsDataInput!
  create: CampaignCreateWithoutCampaignLeadsInput!
}

input CampaignUpsertWithWhereUniqueWithoutCampaignMembersInput {
  where: CampaignWhereUniqueInput!
  update: CampaignUpdateWithoutCampaignMembersDataInput!
  create: CampaignCreateWithoutCampaignMembersInput!
}

input CampaignUpsertWithWhereUniqueWithoutOrgsInput {
  where: CampaignWhereUniqueInput!
  update: CampaignUpdateWithoutOrgsDataInput!
  create: CampaignCreateWithoutOrgsInput!
}

input CampaignWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  instructions: String
  instructions_not: String
  instructions_in: [String!]
  instructions_not_in: [String!]
  instructions_lt: String
  instructions_lte: String
  instructions_gt: String
  instructions_gte: String
  instructions_contains: String
  instructions_not_contains: String
  instructions_starts_with: String
  instructions_not_starts_with: String
  instructions_ends_with: String
  instructions_not_ends_with: String
  startDateTime: DateTime
  startDateTime_not: DateTime
  startDateTime_in: [DateTime!]
  startDateTime_not_in: [DateTime!]
  startDateTime_lt: DateTime
  startDateTime_lte: DateTime
  startDateTime_gt: DateTime
  startDateTime_gte: DateTime
  endDateTime: DateTime
  endDateTime_not: DateTime
  endDateTime_in: [DateTime!]
  endDateTime_not_in: [DateTime!]
  endDateTime_lt: DateTime
  endDateTime_lte: DateTime
  endDateTime_gt: DateTime
  endDateTime_gte: DateTime
  campaignLeads_every: UserWhereInput
  campaignLeads_some: UserWhereInput
  campaignLeads_none: UserWhereInput
  campaignMembers_every: UserWhereInput
  campaignMembers_some: UserWhereInput
  campaignMembers_none: UserWhereInput
  orgs_every: OrgWhereInput
  orgs_some: OrgWhereInput
  orgs_none: OrgWhereInput
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  AND: [CampaignWhereInput!]
  OR: [CampaignWhereInput!]
  NOT: [CampaignWhereInput!]
}

input CampaignWhereUniqueInput {
  id: UUID
}

scalar DateTime

type Location {
  createdAt: DateTime!
  updatedAt: DateTime!
  id: UUID!
  name: String
  street: String
  city: String
  region: String
  country: String
  isoCountryCode: String
  postalCode: String
  long: String
  lat: String
  user: User
  post: Post
}

type LocationConnection {
  pageInfo: PageInfo!
  edges: [LocationEdge]!
  aggregate: AggregateLocation!
}

input LocationCreateInput {
  name: String
  street: String
  city: String
  region: String
  country: String
  isoCountryCode: String
  postalCode: String
  long: String
  lat: String
  user: UserCreateOneWithoutLocationsInput
  post: PostCreateOneWithoutLocationInput
}

input LocationCreateManyWithoutUserInput {
  create: [LocationCreateWithoutUserInput!]
  connect: [LocationWhereUniqueInput!]
}

input LocationCreateOneWithoutPostInput {
  create: LocationCreateWithoutPostInput
  connect: LocationWhereUniqueInput
}

input LocationCreateWithoutPostInput {
  name: String
  street: String
  city: String
  region: String
  country: String
  isoCountryCode: String
  postalCode: String
  long: String
  lat: String
  user: UserCreateOneWithoutLocationsInput
}

input LocationCreateWithoutUserInput {
  name: String
  street: String
  city: String
  region: String
  country: String
  isoCountryCode: String
  postalCode: String
  long: String
  lat: String
  post: PostCreateOneWithoutLocationInput
}

type LocationEdge {
  node: Location!
  cursor: String!
}

enum LocationOrderByInput {
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  street_ASC
  street_DESC
  city_ASC
  city_DESC
  region_ASC
  region_DESC
  country_ASC
  country_DESC
  isoCountryCode_ASC
  isoCountryCode_DESC
  postalCode_ASC
  postalCode_DESC
  long_ASC
  long_DESC
  lat_ASC
  lat_DESC
}

type LocationPreviousValues {
  createdAt: DateTime!
  updatedAt: DateTime!
  id: UUID!
  name: String
  street: String
  city: String
  region: String
  country: String
  isoCountryCode: String
  postalCode: String
  long: String
  lat: String
}

input LocationScalarWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  street: String
  street_not: String
  street_in: [String!]
  street_not_in: [String!]
  street_lt: String
  street_lte: String
  street_gt: String
  street_gte: String
  street_contains: String
  street_not_contains: String
  street_starts_with: String
  street_not_starts_with: String
  street_ends_with: String
  street_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  region: String
  region_not: String
  region_in: [String!]
  region_not_in: [String!]
  region_lt: String
  region_lte: String
  region_gt: String
  region_gte: String
  region_contains: String
  region_not_contains: String
  region_starts_with: String
  region_not_starts_with: String
  region_ends_with: String
  region_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  isoCountryCode: String
  isoCountryCode_not: String
  isoCountryCode_in: [String!]
  isoCountryCode_not_in: [String!]
  isoCountryCode_lt: String
  isoCountryCode_lte: String
  isoCountryCode_gt: String
  isoCountryCode_gte: String
  isoCountryCode_contains: String
  isoCountryCode_not_contains: String
  isoCountryCode_starts_with: String
  isoCountryCode_not_starts_with: String
  isoCountryCode_ends_with: String
  isoCountryCode_not_ends_with: String
  postalCode: String
  postalCode_not: String
  postalCode_in: [String!]
  postalCode_not_in: [String!]
  postalCode_lt: String
  postalCode_lte: String
  postalCode_gt: String
  postalCode_gte: String
  postalCode_contains: String
  postalCode_not_contains: String
  postalCode_starts_with: String
  postalCode_not_starts_with: String
  postalCode_ends_with: String
  postalCode_not_ends_with: String
  long: String
  long_not: String
  long_in: [String!]
  long_not_in: [String!]
  long_lt: String
  long_lte: String
  long_gt: String
  long_gte: String
  long_contains: String
  long_not_contains: String
  long_starts_with: String
  long_not_starts_with: String
  long_ends_with: String
  long_not_ends_with: String
  lat: String
  lat_not: String
  lat_in: [String!]
  lat_not_in: [String!]
  lat_lt: String
  lat_lte: String
  lat_gt: String
  lat_gte: String
  lat_contains: String
  lat_not_contains: String
  lat_starts_with: String
  lat_not_starts_with: String
  lat_ends_with: String
  lat_not_ends_with: String
  AND: [LocationScalarWhereInput!]
  OR: [LocationScalarWhereInput!]
  NOT: [LocationScalarWhereInput!]
}

type LocationSubscriptionPayload {
  mutation: MutationType!
  node: Location
  updatedFields: [String!]
  previousValues: LocationPreviousValues
}

input LocationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LocationWhereInput
  AND: [LocationSubscriptionWhereInput!]
  OR: [LocationSubscriptionWhereInput!]
  NOT: [LocationSubscriptionWhereInput!]
}

input LocationUpdateInput {
  name: String
  street: String
  city: String
  region: String
  country: String
  isoCountryCode: String
  postalCode: String
  long: String
  lat: String
  user: UserUpdateOneWithoutLocationsInput
  post: PostUpdateOneWithoutLocationInput
}

input LocationUpdateManyDataInput {
  name: String
  street: String
  city: String
  region: String
  country: String
  isoCountryCode: String
  postalCode: String
  long: String
  lat: String
}

input LocationUpdateManyMutationInput {
  name: String
  street: String
  city: String
  region: String
  country: String
  isoCountryCode: String
  postalCode: String
  long: String
  lat: String
}

input LocationUpdateManyWithoutUserInput {
  create: [LocationCreateWithoutUserInput!]
  delete: [LocationWhereUniqueInput!]
  connect: [LocationWhereUniqueInput!]
  disconnect: [LocationWhereUniqueInput!]
  update: [LocationUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [LocationUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [LocationScalarWhereInput!]
  updateMany: [LocationUpdateManyWithWhereNestedInput!]
}

input LocationUpdateManyWithWhereNestedInput {
  where: LocationScalarWhereInput!
  data: LocationUpdateManyDataInput!
}

input LocationUpdateOneWithoutPostInput {
  create: LocationCreateWithoutPostInput
  update: LocationUpdateWithoutPostDataInput
  upsert: LocationUpsertWithoutPostInput
  delete: Boolean
  disconnect: Boolean
  connect: LocationWhereUniqueInput
}

input LocationUpdateWithoutPostDataInput {
  name: String
  street: String
  city: String
  region: String
  country: String
  isoCountryCode: String
  postalCode: String
  long: String
  lat: String
  user: UserUpdateOneWithoutLocationsInput
}

input LocationUpdateWithoutUserDataInput {
  name: String
  street: String
  city: String
  region: String
  country: String
  isoCountryCode: String
  postalCode: String
  long: String
  lat: String
  post: PostUpdateOneWithoutLocationInput
}

input LocationUpdateWithWhereUniqueWithoutUserInput {
  where: LocationWhereUniqueInput!
  data: LocationUpdateWithoutUserDataInput!
}

input LocationUpsertWithoutPostInput {
  update: LocationUpdateWithoutPostDataInput!
  create: LocationCreateWithoutPostInput!
}

input LocationUpsertWithWhereUniqueWithoutUserInput {
  where: LocationWhereUniqueInput!
  update: LocationUpdateWithoutUserDataInput!
  create: LocationCreateWithoutUserInput!
}

input LocationWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  street: String
  street_not: String
  street_in: [String!]
  street_not_in: [String!]
  street_lt: String
  street_lte: String
  street_gt: String
  street_gte: String
  street_contains: String
  street_not_contains: String
  street_starts_with: String
  street_not_starts_with: String
  street_ends_with: String
  street_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  region: String
  region_not: String
  region_in: [String!]
  region_not_in: [String!]
  region_lt: String
  region_lte: String
  region_gt: String
  region_gte: String
  region_contains: String
  region_not_contains: String
  region_starts_with: String
  region_not_starts_with: String
  region_ends_with: String
  region_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  isoCountryCode: String
  isoCountryCode_not: String
  isoCountryCode_in: [String!]
  isoCountryCode_not_in: [String!]
  isoCountryCode_lt: String
  isoCountryCode_lte: String
  isoCountryCode_gt: String
  isoCountryCode_gte: String
  isoCountryCode_contains: String
  isoCountryCode_not_contains: String
  isoCountryCode_starts_with: String
  isoCountryCode_not_starts_with: String
  isoCountryCode_ends_with: String
  isoCountryCode_not_ends_with: String
  postalCode: String
  postalCode_not: String
  postalCode_in: [String!]
  postalCode_not_in: [String!]
  postalCode_lt: String
  postalCode_lte: String
  postalCode_gt: String
  postalCode_gte: String
  postalCode_contains: String
  postalCode_not_contains: String
  postalCode_starts_with: String
  postalCode_not_starts_with: String
  postalCode_ends_with: String
  postalCode_not_ends_with: String
  long: String
  long_not: String
  long_in: [String!]
  long_not_in: [String!]
  long_lt: String
  long_lte: String
  long_gt: String
  long_gte: String
  long_contains: String
  long_not_contains: String
  long_starts_with: String
  long_not_starts_with: String
  long_ends_with: String
  long_not_ends_with: String
  lat: String
  lat_not: String
  lat_in: [String!]
  lat_not_in: [String!]
  lat_lt: String
  lat_lte: String
  lat_gt: String
  lat_gte: String
  lat_contains: String
  lat_not_contains: String
  lat_starts_with: String
  lat_not_starts_with: String
  lat_ends_with: String
  lat_not_ends_with: String
  user: UserWhereInput
  post: PostWhereInput
  AND: [LocationWhereInput!]
  OR: [LocationWhereInput!]
  NOT: [LocationWhereInput!]
}

input LocationWhereUniqueInput {
  id: UUID
}

scalar Long

type Media {
  createdAt: DateTime!
  updatedAt: DateTime!
  id: UUID!
  name: String
  post: Post
  contentType: String!
  url: String!
  secret: String
}

type MediaConnection {
  pageInfo: PageInfo!
  edges: [MediaEdge]!
  aggregate: AggregateMedia!
}

input MediaCreateInput {
  name: String
  post: PostCreateOneWithoutMediasInput
  contentType: String!
  url: String!
  secret: String
}

input MediaCreateManyWithoutPostInput {
  create: [MediaCreateWithoutPostInput!]
  connect: [MediaWhereUniqueInput!]
}

input MediaCreateWithoutPostInput {
  name: String
  contentType: String!
  url: String!
  secret: String
}

type MediaEdge {
  node: Media!
  cursor: String!
}

enum MediaOrderByInput {
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  contentType_ASC
  contentType_DESC
  url_ASC
  url_DESC
  secret_ASC
  secret_DESC
}

type MediaPreviousValues {
  createdAt: DateTime!
  updatedAt: DateTime!
  id: UUID!
  name: String
  contentType: String!
  url: String!
  secret: String
}

input MediaScalarWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  contentType: String
  contentType_not: String
  contentType_in: [String!]
  contentType_not_in: [String!]
  contentType_lt: String
  contentType_lte: String
  contentType_gt: String
  contentType_gte: String
  contentType_contains: String
  contentType_not_contains: String
  contentType_starts_with: String
  contentType_not_starts_with: String
  contentType_ends_with: String
  contentType_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  secret: String
  secret_not: String
  secret_in: [String!]
  secret_not_in: [String!]
  secret_lt: String
  secret_lte: String
  secret_gt: String
  secret_gte: String
  secret_contains: String
  secret_not_contains: String
  secret_starts_with: String
  secret_not_starts_with: String
  secret_ends_with: String
  secret_not_ends_with: String
  AND: [MediaScalarWhereInput!]
  OR: [MediaScalarWhereInput!]
  NOT: [MediaScalarWhereInput!]
}

type MediaSubscriptionPayload {
  mutation: MutationType!
  node: Media
  updatedFields: [String!]
  previousValues: MediaPreviousValues
}

input MediaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MediaWhereInput
  AND: [MediaSubscriptionWhereInput!]
  OR: [MediaSubscriptionWhereInput!]
  NOT: [MediaSubscriptionWhereInput!]
}

input MediaUpdateInput {
  name: String
  post: PostUpdateOneWithoutMediasInput
  contentType: String
  url: String
  secret: String
}

input MediaUpdateManyDataInput {
  name: String
  contentType: String
  url: String
  secret: String
}

input MediaUpdateManyMutationInput {
  name: String
  contentType: String
  url: String
  secret: String
}

input MediaUpdateManyWithoutPostInput {
  create: [MediaCreateWithoutPostInput!]
  delete: [MediaWhereUniqueInput!]
  connect: [MediaWhereUniqueInput!]
  disconnect: [MediaWhereUniqueInput!]
  update: [MediaUpdateWithWhereUniqueWithoutPostInput!]
  upsert: [MediaUpsertWithWhereUniqueWithoutPostInput!]
  deleteMany: [MediaScalarWhereInput!]
  updateMany: [MediaUpdateManyWithWhereNestedInput!]
}

input MediaUpdateManyWithWhereNestedInput {
  where: MediaScalarWhereInput!
  data: MediaUpdateManyDataInput!
}

input MediaUpdateWithoutPostDataInput {
  name: String
  contentType: String
  url: String
  secret: String
}

input MediaUpdateWithWhereUniqueWithoutPostInput {
  where: MediaWhereUniqueInput!
  data: MediaUpdateWithoutPostDataInput!
}

input MediaUpsertWithWhereUniqueWithoutPostInput {
  where: MediaWhereUniqueInput!
  update: MediaUpdateWithoutPostDataInput!
  create: MediaCreateWithoutPostInput!
}

input MediaWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  post: PostWhereInput
  contentType: String
  contentType_not: String
  contentType_in: [String!]
  contentType_not_in: [String!]
  contentType_lt: String
  contentType_lte: String
  contentType_gt: String
  contentType_gte: String
  contentType_contains: String
  contentType_not_contains: String
  contentType_starts_with: String
  contentType_not_starts_with: String
  contentType_ends_with: String
  contentType_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  secret: String
  secret_not: String
  secret_in: [String!]
  secret_not_in: [String!]
  secret_lt: String
  secret_lte: String
  secret_gt: String
  secret_gte: String
  secret_contains: String
  secret_not_contains: String
  secret_starts_with: String
  secret_not_starts_with: String
  secret_ends_with: String
  secret_not_ends_with: String
  AND: [MediaWhereInput!]
  OR: [MediaWhereInput!]
  NOT: [MediaWhereInput!]
}

input MediaWhereUniqueInput {
  id: UUID
}

type Mutation {
  createCampaign(data: CampaignCreateInput!): Campaign!
  updateCampaign(data: CampaignUpdateInput!, where: CampaignWhereUniqueInput!): Campaign
  updateManyCampaigns(data: CampaignUpdateManyMutationInput!, where: CampaignWhereInput): BatchPayload!
  upsertCampaign(where: CampaignWhereUniqueInput!, create: CampaignCreateInput!, update: CampaignUpdateInput!): Campaign!
  deleteCampaign(where: CampaignWhereUniqueInput!): Campaign
  deleteManyCampaigns(where: CampaignWhereInput): BatchPayload!
  createLocation(data: LocationCreateInput!): Location!
  updateLocation(data: LocationUpdateInput!, where: LocationWhereUniqueInput!): Location
  updateManyLocations(data: LocationUpdateManyMutationInput!, where: LocationWhereInput): BatchPayload!
  upsertLocation(where: LocationWhereUniqueInput!, create: LocationCreateInput!, update: LocationUpdateInput!): Location!
  deleteLocation(where: LocationWhereUniqueInput!): Location
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  createMedia(data: MediaCreateInput!): Media!
  updateMedia(data: MediaUpdateInput!, where: MediaWhereUniqueInput!): Media
  updateManyMedias(data: MediaUpdateManyMutationInput!, where: MediaWhereInput): BatchPayload!
  upsertMedia(where: MediaWhereUniqueInput!, create: MediaCreateInput!, update: MediaUpdateInput!): Media!
  deleteMedia(where: MediaWhereUniqueInput!): Media
  deleteManyMedias(where: MediaWhereInput): BatchPayload!
  createOrg(data: OrgCreateInput!): Org!
  updateOrg(data: OrgUpdateInput!, where: OrgWhereUniqueInput!): Org
  updateManyOrgs(data: OrgUpdateManyMutationInput!, where: OrgWhereInput): BatchPayload!
  upsertOrg(where: OrgWhereUniqueInput!, create: OrgCreateInput!, update: OrgUpdateInput!): Org!
  deleteOrg(where: OrgWhereUniqueInput!): Org
  deleteManyOrgs(where: OrgWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Org {
  createdAt: DateTime!
  updatedAt: DateTime!
  id: UUID!
  name: String
  owner: User
  orgAdmins(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  orgMembers(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  campaigns(where: CampaignWhereInput, orderBy: CampaignOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Campaign!]
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
}

type OrgConnection {
  pageInfo: PageInfo!
  edges: [OrgEdge]!
  aggregate: AggregateOrg!
}

input OrgCreateInput {
  name: String
  owner: UserCreateOneWithoutOrgsAsOwnerInput
  orgAdmins: UserCreateManyWithoutOrgsAsAdminInput
  orgMembers: UserCreateManyWithoutOrgsInput
  campaigns: CampaignCreateManyWithoutOrgsInput
  posts: PostCreateManyWithoutOrgInput
}

input OrgCreateManyWithoutCampaignsInput {
  create: [OrgCreateWithoutCampaignsInput!]
  connect: [OrgWhereUniqueInput!]
}

input OrgCreateManyWithoutOrgAdminsInput {
  create: [OrgCreateWithoutOrgAdminsInput!]
  connect: [OrgWhereUniqueInput!]
}

input OrgCreateManyWithoutOrgMembersInput {
  create: [OrgCreateWithoutOrgMembersInput!]
  connect: [OrgWhereUniqueInput!]
}

input OrgCreateManyWithoutOwnerInput {
  create: [OrgCreateWithoutOwnerInput!]
  connect: [OrgWhereUniqueInput!]
}

input OrgCreateOneWithoutPostsInput {
  create: OrgCreateWithoutPostsInput
  connect: OrgWhereUniqueInput
}

input OrgCreateWithoutCampaignsInput {
  name: String
  owner: UserCreateOneWithoutOrgsAsOwnerInput
  orgAdmins: UserCreateManyWithoutOrgsAsAdminInput
  orgMembers: UserCreateManyWithoutOrgsInput
  posts: PostCreateManyWithoutOrgInput
}

input OrgCreateWithoutOrgAdminsInput {
  name: String
  owner: UserCreateOneWithoutOrgsAsOwnerInput
  orgMembers: UserCreateManyWithoutOrgsInput
  campaigns: CampaignCreateManyWithoutOrgsInput
  posts: PostCreateManyWithoutOrgInput
}

input OrgCreateWithoutOrgMembersInput {
  name: String
  owner: UserCreateOneWithoutOrgsAsOwnerInput
  orgAdmins: UserCreateManyWithoutOrgsAsAdminInput
  campaigns: CampaignCreateManyWithoutOrgsInput
  posts: PostCreateManyWithoutOrgInput
}

input OrgCreateWithoutOwnerInput {
  name: String
  orgAdmins: UserCreateManyWithoutOrgsAsAdminInput
  orgMembers: UserCreateManyWithoutOrgsInput
  campaigns: CampaignCreateManyWithoutOrgsInput
  posts: PostCreateManyWithoutOrgInput
}

input OrgCreateWithoutPostsInput {
  name: String
  owner: UserCreateOneWithoutOrgsAsOwnerInput
  orgAdmins: UserCreateManyWithoutOrgsAsAdminInput
  orgMembers: UserCreateManyWithoutOrgsInput
  campaigns: CampaignCreateManyWithoutOrgsInput
}

type OrgEdge {
  node: Org!
  cursor: String!
}

enum OrgOrderByInput {
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type OrgPreviousValues {
  createdAt: DateTime!
  updatedAt: DateTime!
  id: UUID!
  name: String
}

input OrgScalarWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [OrgScalarWhereInput!]
  OR: [OrgScalarWhereInput!]
  NOT: [OrgScalarWhereInput!]
}

type OrgSubscriptionPayload {
  mutation: MutationType!
  node: Org
  updatedFields: [String!]
  previousValues: OrgPreviousValues
}

input OrgSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrgWhereInput
  AND: [OrgSubscriptionWhereInput!]
  OR: [OrgSubscriptionWhereInput!]
  NOT: [OrgSubscriptionWhereInput!]
}

input OrgUpdateInput {
  name: String
  owner: UserUpdateOneWithoutOrgsAsOwnerInput
  orgAdmins: UserUpdateManyWithoutOrgsAsAdminInput
  orgMembers: UserUpdateManyWithoutOrgsInput
  campaigns: CampaignUpdateManyWithoutOrgsInput
  posts: PostUpdateManyWithoutOrgInput
}

input OrgUpdateManyDataInput {
  name: String
}

input OrgUpdateManyMutationInput {
  name: String
}

input OrgUpdateManyWithoutCampaignsInput {
  create: [OrgCreateWithoutCampaignsInput!]
  delete: [OrgWhereUniqueInput!]
  connect: [OrgWhereUniqueInput!]
  disconnect: [OrgWhereUniqueInput!]
  update: [OrgUpdateWithWhereUniqueWithoutCampaignsInput!]
  upsert: [OrgUpsertWithWhereUniqueWithoutCampaignsInput!]
  deleteMany: [OrgScalarWhereInput!]
  updateMany: [OrgUpdateManyWithWhereNestedInput!]
}

input OrgUpdateManyWithoutOrgAdminsInput {
  create: [OrgCreateWithoutOrgAdminsInput!]
  delete: [OrgWhereUniqueInput!]
  connect: [OrgWhereUniqueInput!]
  disconnect: [OrgWhereUniqueInput!]
  update: [OrgUpdateWithWhereUniqueWithoutOrgAdminsInput!]
  upsert: [OrgUpsertWithWhereUniqueWithoutOrgAdminsInput!]
  deleteMany: [OrgScalarWhereInput!]
  updateMany: [OrgUpdateManyWithWhereNestedInput!]
}

input OrgUpdateManyWithoutOrgMembersInput {
  create: [OrgCreateWithoutOrgMembersInput!]
  delete: [OrgWhereUniqueInput!]
  connect: [OrgWhereUniqueInput!]
  disconnect: [OrgWhereUniqueInput!]
  update: [OrgUpdateWithWhereUniqueWithoutOrgMembersInput!]
  upsert: [OrgUpsertWithWhereUniqueWithoutOrgMembersInput!]
  deleteMany: [OrgScalarWhereInput!]
  updateMany: [OrgUpdateManyWithWhereNestedInput!]
}

input OrgUpdateManyWithoutOwnerInput {
  create: [OrgCreateWithoutOwnerInput!]
  delete: [OrgWhereUniqueInput!]
  connect: [OrgWhereUniqueInput!]
  disconnect: [OrgWhereUniqueInput!]
  update: [OrgUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [OrgUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [OrgScalarWhereInput!]
  updateMany: [OrgUpdateManyWithWhereNestedInput!]
}

input OrgUpdateManyWithWhereNestedInput {
  where: OrgScalarWhereInput!
  data: OrgUpdateManyDataInput!
}

input OrgUpdateOneWithoutPostsInput {
  create: OrgCreateWithoutPostsInput
  update: OrgUpdateWithoutPostsDataInput
  upsert: OrgUpsertWithoutPostsInput
  delete: Boolean
  disconnect: Boolean
  connect: OrgWhereUniqueInput
}

input OrgUpdateWithoutCampaignsDataInput {
  name: String
  owner: UserUpdateOneWithoutOrgsAsOwnerInput
  orgAdmins: UserUpdateManyWithoutOrgsAsAdminInput
  orgMembers: UserUpdateManyWithoutOrgsInput
  posts: PostUpdateManyWithoutOrgInput
}

input OrgUpdateWithoutOrgAdminsDataInput {
  name: String
  owner: UserUpdateOneWithoutOrgsAsOwnerInput
  orgMembers: UserUpdateManyWithoutOrgsInput
  campaigns: CampaignUpdateManyWithoutOrgsInput
  posts: PostUpdateManyWithoutOrgInput
}

input OrgUpdateWithoutOrgMembersDataInput {
  name: String
  owner: UserUpdateOneWithoutOrgsAsOwnerInput
  orgAdmins: UserUpdateManyWithoutOrgsAsAdminInput
  campaigns: CampaignUpdateManyWithoutOrgsInput
  posts: PostUpdateManyWithoutOrgInput
}

input OrgUpdateWithoutOwnerDataInput {
  name: String
  orgAdmins: UserUpdateManyWithoutOrgsAsAdminInput
  orgMembers: UserUpdateManyWithoutOrgsInput
  campaigns: CampaignUpdateManyWithoutOrgsInput
  posts: PostUpdateManyWithoutOrgInput
}

input OrgUpdateWithoutPostsDataInput {
  name: String
  owner: UserUpdateOneWithoutOrgsAsOwnerInput
  orgAdmins: UserUpdateManyWithoutOrgsAsAdminInput
  orgMembers: UserUpdateManyWithoutOrgsInput
  campaigns: CampaignUpdateManyWithoutOrgsInput
}

input OrgUpdateWithWhereUniqueWithoutCampaignsInput {
  where: OrgWhereUniqueInput!
  data: OrgUpdateWithoutCampaignsDataInput!
}

input OrgUpdateWithWhereUniqueWithoutOrgAdminsInput {
  where: OrgWhereUniqueInput!
  data: OrgUpdateWithoutOrgAdminsDataInput!
}

input OrgUpdateWithWhereUniqueWithoutOrgMembersInput {
  where: OrgWhereUniqueInput!
  data: OrgUpdateWithoutOrgMembersDataInput!
}

input OrgUpdateWithWhereUniqueWithoutOwnerInput {
  where: OrgWhereUniqueInput!
  data: OrgUpdateWithoutOwnerDataInput!
}

input OrgUpsertWithoutPostsInput {
  update: OrgUpdateWithoutPostsDataInput!
  create: OrgCreateWithoutPostsInput!
}

input OrgUpsertWithWhereUniqueWithoutCampaignsInput {
  where: OrgWhereUniqueInput!
  update: OrgUpdateWithoutCampaignsDataInput!
  create: OrgCreateWithoutCampaignsInput!
}

input OrgUpsertWithWhereUniqueWithoutOrgAdminsInput {
  where: OrgWhereUniqueInput!
  update: OrgUpdateWithoutOrgAdminsDataInput!
  create: OrgCreateWithoutOrgAdminsInput!
}

input OrgUpsertWithWhereUniqueWithoutOrgMembersInput {
  where: OrgWhereUniqueInput!
  update: OrgUpdateWithoutOrgMembersDataInput!
  create: OrgCreateWithoutOrgMembersInput!
}

input OrgUpsertWithWhereUniqueWithoutOwnerInput {
  where: OrgWhereUniqueInput!
  update: OrgUpdateWithoutOwnerDataInput!
  create: OrgCreateWithoutOwnerInput!
}

input OrgWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  owner: UserWhereInput
  orgAdmins_every: UserWhereInput
  orgAdmins_some: UserWhereInput
  orgAdmins_none: UserWhereInput
  orgMembers_every: UserWhereInput
  orgMembers_some: UserWhereInput
  orgMembers_none: UserWhereInput
  campaigns_every: CampaignWhereInput
  campaigns_some: CampaignWhereInput
  campaigns_none: CampaignWhereInput
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  AND: [OrgWhereInput!]
  OR: [OrgWhereInput!]
  NOT: [OrgWhereInput!]
}

input OrgWhereUniqueInput {
  id: UUID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  createdAt: DateTime!
  updatedAt: DateTime!
  id: UUID!
  name: String
  caption: String
  owner: User
  campaign: Campaign
  org: Org
  medias(where: MediaWhereInput, orderBy: MediaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Media!]
  location: Location
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  name: String
  caption: String
  owner: UserCreateOneWithoutPostsInput
  campaign: CampaignCreateOneWithoutPostsInput
  org: OrgCreateOneWithoutPostsInput
  medias: MediaCreateManyWithoutPostInput
  location: LocationCreateOneWithoutPostInput
}

input PostCreateManyWithoutCampaignInput {
  create: [PostCreateWithoutCampaignInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateManyWithoutOrgInput {
  create: [PostCreateWithoutOrgInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateManyWithoutOwnerInput {
  create: [PostCreateWithoutOwnerInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateOneWithoutLocationInput {
  create: PostCreateWithoutLocationInput
  connect: PostWhereUniqueInput
}

input PostCreateOneWithoutMediasInput {
  create: PostCreateWithoutMediasInput
  connect: PostWhereUniqueInput
}

input PostCreateWithoutCampaignInput {
  name: String
  caption: String
  owner: UserCreateOneWithoutPostsInput
  org: OrgCreateOneWithoutPostsInput
  medias: MediaCreateManyWithoutPostInput
  location: LocationCreateOneWithoutPostInput
}

input PostCreateWithoutLocationInput {
  name: String
  caption: String
  owner: UserCreateOneWithoutPostsInput
  campaign: CampaignCreateOneWithoutPostsInput
  org: OrgCreateOneWithoutPostsInput
  medias: MediaCreateManyWithoutPostInput
}

input PostCreateWithoutMediasInput {
  name: String
  caption: String
  owner: UserCreateOneWithoutPostsInput
  campaign: CampaignCreateOneWithoutPostsInput
  org: OrgCreateOneWithoutPostsInput
  location: LocationCreateOneWithoutPostInput
}

input PostCreateWithoutOrgInput {
  name: String
  caption: String
  owner: UserCreateOneWithoutPostsInput
  campaign: CampaignCreateOneWithoutPostsInput
  medias: MediaCreateManyWithoutPostInput
  location: LocationCreateOneWithoutPostInput
}

input PostCreateWithoutOwnerInput {
  name: String
  caption: String
  campaign: CampaignCreateOneWithoutPostsInput
  org: OrgCreateOneWithoutPostsInput
  medias: MediaCreateManyWithoutPostInput
  location: LocationCreateOneWithoutPostInput
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  caption_ASC
  caption_DESC
}

type PostPreviousValues {
  createdAt: DateTime!
  updatedAt: DateTime!
  id: UUID!
  name: String
  caption: String
}

input PostScalarWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  caption: String
  caption_not: String
  caption_in: [String!]
  caption_not_in: [String!]
  caption_lt: String
  caption_lte: String
  caption_gt: String
  caption_gte: String
  caption_contains: String
  caption_not_contains: String
  caption_starts_with: String
  caption_not_starts_with: String
  caption_ends_with: String
  caption_not_ends_with: String
  AND: [PostScalarWhereInput!]
  OR: [PostScalarWhereInput!]
  NOT: [PostScalarWhereInput!]
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  name: String
  caption: String
  owner: UserUpdateOneWithoutPostsInput
  campaign: CampaignUpdateOneWithoutPostsInput
  org: OrgUpdateOneWithoutPostsInput
  medias: MediaUpdateManyWithoutPostInput
  location: LocationUpdateOneWithoutPostInput
}

input PostUpdateManyDataInput {
  name: String
  caption: String
}

input PostUpdateManyMutationInput {
  name: String
  caption: String
}

input PostUpdateManyWithoutCampaignInput {
  create: [PostCreateWithoutCampaignInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutCampaignInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutCampaignInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithoutOrgInput {
  create: [PostCreateWithoutOrgInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutOrgInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutOrgInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithoutOwnerInput {
  create: [PostCreateWithoutOwnerInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
}

input PostUpdateOneWithoutLocationInput {
  create: PostCreateWithoutLocationInput
  update: PostUpdateWithoutLocationDataInput
  upsert: PostUpsertWithoutLocationInput
  delete: Boolean
  disconnect: Boolean
  connect: PostWhereUniqueInput
}

input PostUpdateOneWithoutMediasInput {
  create: PostCreateWithoutMediasInput
  update: PostUpdateWithoutMediasDataInput
  upsert: PostUpsertWithoutMediasInput
  delete: Boolean
  disconnect: Boolean
  connect: PostWhereUniqueInput
}

input PostUpdateWithoutCampaignDataInput {
  name: String
  caption: String
  owner: UserUpdateOneWithoutPostsInput
  org: OrgUpdateOneWithoutPostsInput
  medias: MediaUpdateManyWithoutPostInput
  location: LocationUpdateOneWithoutPostInput
}

input PostUpdateWithoutLocationDataInput {
  name: String
  caption: String
  owner: UserUpdateOneWithoutPostsInput
  campaign: CampaignUpdateOneWithoutPostsInput
  org: OrgUpdateOneWithoutPostsInput
  medias: MediaUpdateManyWithoutPostInput
}

input PostUpdateWithoutMediasDataInput {
  name: String
  caption: String
  owner: UserUpdateOneWithoutPostsInput
  campaign: CampaignUpdateOneWithoutPostsInput
  org: OrgUpdateOneWithoutPostsInput
  location: LocationUpdateOneWithoutPostInput
}

input PostUpdateWithoutOrgDataInput {
  name: String
  caption: String
  owner: UserUpdateOneWithoutPostsInput
  campaign: CampaignUpdateOneWithoutPostsInput
  medias: MediaUpdateManyWithoutPostInput
  location: LocationUpdateOneWithoutPostInput
}

input PostUpdateWithoutOwnerDataInput {
  name: String
  caption: String
  campaign: CampaignUpdateOneWithoutPostsInput
  org: OrgUpdateOneWithoutPostsInput
  medias: MediaUpdateManyWithoutPostInput
  location: LocationUpdateOneWithoutPostInput
}

input PostUpdateWithWhereUniqueWithoutCampaignInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutCampaignDataInput!
}

input PostUpdateWithWhereUniqueWithoutOrgInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutOrgDataInput!
}

input PostUpdateWithWhereUniqueWithoutOwnerInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutOwnerDataInput!
}

input PostUpsertWithoutLocationInput {
  update: PostUpdateWithoutLocationDataInput!
  create: PostCreateWithoutLocationInput!
}

input PostUpsertWithoutMediasInput {
  update: PostUpdateWithoutMediasDataInput!
  create: PostCreateWithoutMediasInput!
}

input PostUpsertWithWhereUniqueWithoutCampaignInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutCampaignDataInput!
  create: PostCreateWithoutCampaignInput!
}

input PostUpsertWithWhereUniqueWithoutOrgInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutOrgDataInput!
  create: PostCreateWithoutOrgInput!
}

input PostUpsertWithWhereUniqueWithoutOwnerInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutOwnerDataInput!
  create: PostCreateWithoutOwnerInput!
}

input PostWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  caption: String
  caption_not: String
  caption_in: [String!]
  caption_not_in: [String!]
  caption_lt: String
  caption_lte: String
  caption_gt: String
  caption_gte: String
  caption_contains: String
  caption_not_contains: String
  caption_starts_with: String
  caption_not_starts_with: String
  caption_ends_with: String
  caption_not_ends_with: String
  owner: UserWhereInput
  campaign: CampaignWhereInput
  org: OrgWhereInput
  medias_every: MediaWhereInput
  medias_some: MediaWhereInput
  medias_none: MediaWhereInput
  location: LocationWhereInput
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: UUID
}

type Query {
  campaign(where: CampaignWhereUniqueInput!): Campaign
  campaigns(where: CampaignWhereInput, orderBy: CampaignOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Campaign]!
  campaignsConnection(where: CampaignWhereInput, orderBy: CampaignOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CampaignConnection!
  location(where: LocationWhereUniqueInput!): Location
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  media(where: MediaWhereUniqueInput!): Media
  medias(where: MediaWhereInput, orderBy: MediaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Media]!
  mediasConnection(where: MediaWhereInput, orderBy: MediaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MediaConnection!
  org(where: OrgWhereUniqueInput!): Org
  orgs(where: OrgWhereInput, orderBy: OrgOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Org]!
  orgsConnection(where: OrgWhereInput, orderBy: OrgOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrgConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  campaign(where: CampaignSubscriptionWhereInput): CampaignSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  media(where: MediaSubscriptionWhereInput): MediaSubscriptionPayload
  org(where: OrgSubscriptionWhereInput): OrgSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  createdAt: DateTime!
  updatedAt: DateTime!
  id: UUID!
  name: String
  email: String
  password: String
  phone: String
  profileImgUrl: String
  facebookHandle: String
  instagramHandle: String
  twitterHandle: String
  snapchatHandle: String
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location!]
  orgs(where: OrgWhereInput, orderBy: OrgOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Org!]
  orgsAsOwner(where: OrgWhereInput, orderBy: OrgOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Org!]
  orgsAsAdmin(where: OrgWhereInput, orderBy: OrgOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Org!]
  campaigns(where: CampaignWhereInput, orderBy: CampaignOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Campaign!]
  campaignsAsLead(where: CampaignWhereInput, orderBy: CampaignOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Campaign!]
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String
  email: String
  password: String
  phone: String
  profileImgUrl: String
  facebookHandle: String
  instagramHandle: String
  twitterHandle: String
  snapchatHandle: String
  locations: LocationCreateManyWithoutUserInput
  orgs: OrgCreateManyWithoutOrgMembersInput
  orgsAsOwner: OrgCreateManyWithoutOwnerInput
  orgsAsAdmin: OrgCreateManyWithoutOrgAdminsInput
  campaigns: CampaignCreateManyWithoutCampaignMembersInput
  campaignsAsLead: CampaignCreateManyWithoutCampaignLeadsInput
  posts: PostCreateManyWithoutOwnerInput
}

input UserCreateManyWithoutCampaignsAsLeadInput {
  create: [UserCreateWithoutCampaignsAsLeadInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutCampaignsInput {
  create: [UserCreateWithoutCampaignsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutOrgsAsAdminInput {
  create: [UserCreateWithoutOrgsAsAdminInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutOrgsInput {
  create: [UserCreateWithoutOrgsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutLocationsInput {
  create: UserCreateWithoutLocationsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOrgsAsOwnerInput {
  create: UserCreateWithoutOrgsAsOwnerInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCampaignsAsLeadInput {
  name: String
  email: String
  password: String
  phone: String
  profileImgUrl: String
  facebookHandle: String
  instagramHandle: String
  twitterHandle: String
  snapchatHandle: String
  locations: LocationCreateManyWithoutUserInput
  orgs: OrgCreateManyWithoutOrgMembersInput
  orgsAsOwner: OrgCreateManyWithoutOwnerInput
  orgsAsAdmin: OrgCreateManyWithoutOrgAdminsInput
  campaigns: CampaignCreateManyWithoutCampaignMembersInput
  posts: PostCreateManyWithoutOwnerInput
}

input UserCreateWithoutCampaignsInput {
  name: String
  email: String
  password: String
  phone: String
  profileImgUrl: String
  facebookHandle: String
  instagramHandle: String
  twitterHandle: String
  snapchatHandle: String
  locations: LocationCreateManyWithoutUserInput
  orgs: OrgCreateManyWithoutOrgMembersInput
  orgsAsOwner: OrgCreateManyWithoutOwnerInput
  orgsAsAdmin: OrgCreateManyWithoutOrgAdminsInput
  campaignsAsLead: CampaignCreateManyWithoutCampaignLeadsInput
  posts: PostCreateManyWithoutOwnerInput
}

input UserCreateWithoutLocationsInput {
  name: String
  email: String
  password: String
  phone: String
  profileImgUrl: String
  facebookHandle: String
  instagramHandle: String
  twitterHandle: String
  snapchatHandle: String
  orgs: OrgCreateManyWithoutOrgMembersInput
  orgsAsOwner: OrgCreateManyWithoutOwnerInput
  orgsAsAdmin: OrgCreateManyWithoutOrgAdminsInput
  campaigns: CampaignCreateManyWithoutCampaignMembersInput
  campaignsAsLead: CampaignCreateManyWithoutCampaignLeadsInput
  posts: PostCreateManyWithoutOwnerInput
}

input UserCreateWithoutOrgsAsAdminInput {
  name: String
  email: String
  password: String
  phone: String
  profileImgUrl: String
  facebookHandle: String
  instagramHandle: String
  twitterHandle: String
  snapchatHandle: String
  locations: LocationCreateManyWithoutUserInput
  orgs: OrgCreateManyWithoutOrgMembersInput
  orgsAsOwner: OrgCreateManyWithoutOwnerInput
  campaigns: CampaignCreateManyWithoutCampaignMembersInput
  campaignsAsLead: CampaignCreateManyWithoutCampaignLeadsInput
  posts: PostCreateManyWithoutOwnerInput
}

input UserCreateWithoutOrgsAsOwnerInput {
  name: String
  email: String
  password: String
  phone: String
  profileImgUrl: String
  facebookHandle: String
  instagramHandle: String
  twitterHandle: String
  snapchatHandle: String
  locations: LocationCreateManyWithoutUserInput
  orgs: OrgCreateManyWithoutOrgMembersInput
  orgsAsAdmin: OrgCreateManyWithoutOrgAdminsInput
  campaigns: CampaignCreateManyWithoutCampaignMembersInput
  campaignsAsLead: CampaignCreateManyWithoutCampaignLeadsInput
  posts: PostCreateManyWithoutOwnerInput
}

input UserCreateWithoutOrgsInput {
  name: String
  email: String
  password: String
  phone: String
  profileImgUrl: String
  facebookHandle: String
  instagramHandle: String
  twitterHandle: String
  snapchatHandle: String
  locations: LocationCreateManyWithoutUserInput
  orgsAsOwner: OrgCreateManyWithoutOwnerInput
  orgsAsAdmin: OrgCreateManyWithoutOrgAdminsInput
  campaigns: CampaignCreateManyWithoutCampaignMembersInput
  campaignsAsLead: CampaignCreateManyWithoutCampaignLeadsInput
  posts: PostCreateManyWithoutOwnerInput
}

input UserCreateWithoutPostsInput {
  name: String
  email: String
  password: String
  phone: String
  profileImgUrl: String
  facebookHandle: String
  instagramHandle: String
  twitterHandle: String
  snapchatHandle: String
  locations: LocationCreateManyWithoutUserInput
  orgs: OrgCreateManyWithoutOrgMembersInput
  orgsAsOwner: OrgCreateManyWithoutOwnerInput
  orgsAsAdmin: OrgCreateManyWithoutOrgAdminsInput
  campaigns: CampaignCreateManyWithoutCampaignMembersInput
  campaignsAsLead: CampaignCreateManyWithoutCampaignLeadsInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  phone_ASC
  phone_DESC
  profileImgUrl_ASC
  profileImgUrl_DESC
  facebookHandle_ASC
  facebookHandle_DESC
  instagramHandle_ASC
  instagramHandle_DESC
  twitterHandle_ASC
  twitterHandle_DESC
  snapchatHandle_ASC
  snapchatHandle_DESC
}

type UserPreviousValues {
  createdAt: DateTime!
  updatedAt: DateTime!
  id: UUID!
  name: String
  email: String
  password: String
  phone: String
  profileImgUrl: String
  facebookHandle: String
  instagramHandle: String
  twitterHandle: String
  snapchatHandle: String
}

input UserScalarWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  profileImgUrl: String
  profileImgUrl_not: String
  profileImgUrl_in: [String!]
  profileImgUrl_not_in: [String!]
  profileImgUrl_lt: String
  profileImgUrl_lte: String
  profileImgUrl_gt: String
  profileImgUrl_gte: String
  profileImgUrl_contains: String
  profileImgUrl_not_contains: String
  profileImgUrl_starts_with: String
  profileImgUrl_not_starts_with: String
  profileImgUrl_ends_with: String
  profileImgUrl_not_ends_with: String
  facebookHandle: String
  facebookHandle_not: String
  facebookHandle_in: [String!]
  facebookHandle_not_in: [String!]
  facebookHandle_lt: String
  facebookHandle_lte: String
  facebookHandle_gt: String
  facebookHandle_gte: String
  facebookHandle_contains: String
  facebookHandle_not_contains: String
  facebookHandle_starts_with: String
  facebookHandle_not_starts_with: String
  facebookHandle_ends_with: String
  facebookHandle_not_ends_with: String
  instagramHandle: String
  instagramHandle_not: String
  instagramHandle_in: [String!]
  instagramHandle_not_in: [String!]
  instagramHandle_lt: String
  instagramHandle_lte: String
  instagramHandle_gt: String
  instagramHandle_gte: String
  instagramHandle_contains: String
  instagramHandle_not_contains: String
  instagramHandle_starts_with: String
  instagramHandle_not_starts_with: String
  instagramHandle_ends_with: String
  instagramHandle_not_ends_with: String
  twitterHandle: String
  twitterHandle_not: String
  twitterHandle_in: [String!]
  twitterHandle_not_in: [String!]
  twitterHandle_lt: String
  twitterHandle_lte: String
  twitterHandle_gt: String
  twitterHandle_gte: String
  twitterHandle_contains: String
  twitterHandle_not_contains: String
  twitterHandle_starts_with: String
  twitterHandle_not_starts_with: String
  twitterHandle_ends_with: String
  twitterHandle_not_ends_with: String
  snapchatHandle: String
  snapchatHandle_not: String
  snapchatHandle_in: [String!]
  snapchatHandle_not_in: [String!]
  snapchatHandle_lt: String
  snapchatHandle_lte: String
  snapchatHandle_gt: String
  snapchatHandle_gte: String
  snapchatHandle_contains: String
  snapchatHandle_not_contains: String
  snapchatHandle_starts_with: String
  snapchatHandle_not_starts_with: String
  snapchatHandle_ends_with: String
  snapchatHandle_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  phone: String
  profileImgUrl: String
  facebookHandle: String
  instagramHandle: String
  twitterHandle: String
  snapchatHandle: String
  locations: LocationUpdateManyWithoutUserInput
  orgs: OrgUpdateManyWithoutOrgMembersInput
  orgsAsOwner: OrgUpdateManyWithoutOwnerInput
  orgsAsAdmin: OrgUpdateManyWithoutOrgAdminsInput
  campaigns: CampaignUpdateManyWithoutCampaignMembersInput
  campaignsAsLead: CampaignUpdateManyWithoutCampaignLeadsInput
  posts: PostUpdateManyWithoutOwnerInput
}

input UserUpdateManyDataInput {
  name: String
  email: String
  password: String
  phone: String
  profileImgUrl: String
  facebookHandle: String
  instagramHandle: String
  twitterHandle: String
  snapchatHandle: String
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
  phone: String
  profileImgUrl: String
  facebookHandle: String
  instagramHandle: String
  twitterHandle: String
  snapchatHandle: String
}

input UserUpdateManyWithoutCampaignsAsLeadInput {
  create: [UserCreateWithoutCampaignsAsLeadInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutCampaignsAsLeadInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutCampaignsAsLeadInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutCampaignsInput {
  create: [UserCreateWithoutCampaignsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutCampaignsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutCampaignsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutOrgsAsAdminInput {
  create: [UserCreateWithoutOrgsAsAdminInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutOrgsAsAdminInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutOrgsAsAdminInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutOrgsInput {
  create: [UserCreateWithoutOrgsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutOrgsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutOrgsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneWithoutLocationsInput {
  create: UserCreateWithoutLocationsInput
  update: UserUpdateWithoutLocationsDataInput
  upsert: UserUpsertWithoutLocationsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutOrgsAsOwnerInput {
  create: UserCreateWithoutOrgsAsOwnerInput
  update: UserUpdateWithoutOrgsAsOwnerDataInput
  upsert: UserUpsertWithoutOrgsAsOwnerInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutCampaignsAsLeadDataInput {
  name: String
  email: String
  password: String
  phone: String
  profileImgUrl: String
  facebookHandle: String
  instagramHandle: String
  twitterHandle: String
  snapchatHandle: String
  locations: LocationUpdateManyWithoutUserInput
  orgs: OrgUpdateManyWithoutOrgMembersInput
  orgsAsOwner: OrgUpdateManyWithoutOwnerInput
  orgsAsAdmin: OrgUpdateManyWithoutOrgAdminsInput
  campaigns: CampaignUpdateManyWithoutCampaignMembersInput
  posts: PostUpdateManyWithoutOwnerInput
}

input UserUpdateWithoutCampaignsDataInput {
  name: String
  email: String
  password: String
  phone: String
  profileImgUrl: String
  facebookHandle: String
  instagramHandle: String
  twitterHandle: String
  snapchatHandle: String
  locations: LocationUpdateManyWithoutUserInput
  orgs: OrgUpdateManyWithoutOrgMembersInput
  orgsAsOwner: OrgUpdateManyWithoutOwnerInput
  orgsAsAdmin: OrgUpdateManyWithoutOrgAdminsInput
  campaignsAsLead: CampaignUpdateManyWithoutCampaignLeadsInput
  posts: PostUpdateManyWithoutOwnerInput
}

input UserUpdateWithoutLocationsDataInput {
  name: String
  email: String
  password: String
  phone: String
  profileImgUrl: String
  facebookHandle: String
  instagramHandle: String
  twitterHandle: String
  snapchatHandle: String
  orgs: OrgUpdateManyWithoutOrgMembersInput
  orgsAsOwner: OrgUpdateManyWithoutOwnerInput
  orgsAsAdmin: OrgUpdateManyWithoutOrgAdminsInput
  campaigns: CampaignUpdateManyWithoutCampaignMembersInput
  campaignsAsLead: CampaignUpdateManyWithoutCampaignLeadsInput
  posts: PostUpdateManyWithoutOwnerInput
}

input UserUpdateWithoutOrgsAsAdminDataInput {
  name: String
  email: String
  password: String
  phone: String
  profileImgUrl: String
  facebookHandle: String
  instagramHandle: String
  twitterHandle: String
  snapchatHandle: String
  locations: LocationUpdateManyWithoutUserInput
  orgs: OrgUpdateManyWithoutOrgMembersInput
  orgsAsOwner: OrgUpdateManyWithoutOwnerInput
  campaigns: CampaignUpdateManyWithoutCampaignMembersInput
  campaignsAsLead: CampaignUpdateManyWithoutCampaignLeadsInput
  posts: PostUpdateManyWithoutOwnerInput
}

input UserUpdateWithoutOrgsAsOwnerDataInput {
  name: String
  email: String
  password: String
  phone: String
  profileImgUrl: String
  facebookHandle: String
  instagramHandle: String
  twitterHandle: String
  snapchatHandle: String
  locations: LocationUpdateManyWithoutUserInput
  orgs: OrgUpdateManyWithoutOrgMembersInput
  orgsAsAdmin: OrgUpdateManyWithoutOrgAdminsInput
  campaigns: CampaignUpdateManyWithoutCampaignMembersInput
  campaignsAsLead: CampaignUpdateManyWithoutCampaignLeadsInput
  posts: PostUpdateManyWithoutOwnerInput
}

input UserUpdateWithoutOrgsDataInput {
  name: String
  email: String
  password: String
  phone: String
  profileImgUrl: String
  facebookHandle: String
  instagramHandle: String
  twitterHandle: String
  snapchatHandle: String
  locations: LocationUpdateManyWithoutUserInput
  orgsAsOwner: OrgUpdateManyWithoutOwnerInput
  orgsAsAdmin: OrgUpdateManyWithoutOrgAdminsInput
  campaigns: CampaignUpdateManyWithoutCampaignMembersInput
  campaignsAsLead: CampaignUpdateManyWithoutCampaignLeadsInput
  posts: PostUpdateManyWithoutOwnerInput
}

input UserUpdateWithoutPostsDataInput {
  name: String
  email: String
  password: String
  phone: String
  profileImgUrl: String
  facebookHandle: String
  instagramHandle: String
  twitterHandle: String
  snapchatHandle: String
  locations: LocationUpdateManyWithoutUserInput
  orgs: OrgUpdateManyWithoutOrgMembersInput
  orgsAsOwner: OrgUpdateManyWithoutOwnerInput
  orgsAsAdmin: OrgUpdateManyWithoutOrgAdminsInput
  campaigns: CampaignUpdateManyWithoutCampaignMembersInput
  campaignsAsLead: CampaignUpdateManyWithoutCampaignLeadsInput
}

input UserUpdateWithWhereUniqueWithoutCampaignsAsLeadInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutCampaignsAsLeadDataInput!
}

input UserUpdateWithWhereUniqueWithoutCampaignsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutCampaignsDataInput!
}

input UserUpdateWithWhereUniqueWithoutOrgsAsAdminInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutOrgsAsAdminDataInput!
}

input UserUpdateWithWhereUniqueWithoutOrgsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutOrgsDataInput!
}

input UserUpsertWithoutLocationsInput {
  update: UserUpdateWithoutLocationsDataInput!
  create: UserCreateWithoutLocationsInput!
}

input UserUpsertWithoutOrgsAsOwnerInput {
  update: UserUpdateWithoutOrgsAsOwnerDataInput!
  create: UserCreateWithoutOrgsAsOwnerInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserUpsertWithWhereUniqueWithoutCampaignsAsLeadInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutCampaignsAsLeadDataInput!
  create: UserCreateWithoutCampaignsAsLeadInput!
}

input UserUpsertWithWhereUniqueWithoutCampaignsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutCampaignsDataInput!
  create: UserCreateWithoutCampaignsInput!
}

input UserUpsertWithWhereUniqueWithoutOrgsAsAdminInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutOrgsAsAdminDataInput!
  create: UserCreateWithoutOrgsAsAdminInput!
}

input UserUpsertWithWhereUniqueWithoutOrgsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutOrgsDataInput!
  create: UserCreateWithoutOrgsInput!
}

input UserWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  profileImgUrl: String
  profileImgUrl_not: String
  profileImgUrl_in: [String!]
  profileImgUrl_not_in: [String!]
  profileImgUrl_lt: String
  profileImgUrl_lte: String
  profileImgUrl_gt: String
  profileImgUrl_gte: String
  profileImgUrl_contains: String
  profileImgUrl_not_contains: String
  profileImgUrl_starts_with: String
  profileImgUrl_not_starts_with: String
  profileImgUrl_ends_with: String
  profileImgUrl_not_ends_with: String
  facebookHandle: String
  facebookHandle_not: String
  facebookHandle_in: [String!]
  facebookHandle_not_in: [String!]
  facebookHandle_lt: String
  facebookHandle_lte: String
  facebookHandle_gt: String
  facebookHandle_gte: String
  facebookHandle_contains: String
  facebookHandle_not_contains: String
  facebookHandle_starts_with: String
  facebookHandle_not_starts_with: String
  facebookHandle_ends_with: String
  facebookHandle_not_ends_with: String
  instagramHandle: String
  instagramHandle_not: String
  instagramHandle_in: [String!]
  instagramHandle_not_in: [String!]
  instagramHandle_lt: String
  instagramHandle_lte: String
  instagramHandle_gt: String
  instagramHandle_gte: String
  instagramHandle_contains: String
  instagramHandle_not_contains: String
  instagramHandle_starts_with: String
  instagramHandle_not_starts_with: String
  instagramHandle_ends_with: String
  instagramHandle_not_ends_with: String
  twitterHandle: String
  twitterHandle_not: String
  twitterHandle_in: [String!]
  twitterHandle_not_in: [String!]
  twitterHandle_lt: String
  twitterHandle_lte: String
  twitterHandle_gt: String
  twitterHandle_gte: String
  twitterHandle_contains: String
  twitterHandle_not_contains: String
  twitterHandle_starts_with: String
  twitterHandle_not_starts_with: String
  twitterHandle_ends_with: String
  twitterHandle_not_ends_with: String
  snapchatHandle: String
  snapchatHandle_not: String
  snapchatHandle_in: [String!]
  snapchatHandle_not_in: [String!]
  snapchatHandle_lt: String
  snapchatHandle_lte: String
  snapchatHandle_gt: String
  snapchatHandle_gte: String
  snapchatHandle_contains: String
  snapchatHandle_not_contains: String
  snapchatHandle_starts_with: String
  snapchatHandle_not_starts_with: String
  snapchatHandle_ends_with: String
  snapchatHandle_not_ends_with: String
  locations_every: LocationWhereInput
  locations_some: LocationWhereInput
  locations_none: LocationWhereInput
  orgs_every: OrgWhereInput
  orgs_some: OrgWhereInput
  orgs_none: OrgWhereInput
  orgsAsOwner_every: OrgWhereInput
  orgsAsOwner_some: OrgWhereInput
  orgsAsOwner_none: OrgWhereInput
  orgsAsAdmin_every: OrgWhereInput
  orgsAsAdmin_some: OrgWhereInput
  orgsAsAdmin_none: OrgWhereInput
  campaigns_every: CampaignWhereInput
  campaigns_some: CampaignWhereInput
  campaigns_none: CampaignWhereInput
  campaignsAsLead_every: CampaignWhereInput
  campaignsAsLead_some: CampaignWhereInput
  campaignsAsLead_none: CampaignWhereInput
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: UUID
  email: String
}

scalar UUID
`