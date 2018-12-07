import { Prisma } from "./generated/prisma-client";

// export interface Context {
//   prisma?: Prisma;
// }

export interface Context {
  prisma: Prisma;
  request: any;
}

// export interface Context {
//   data?: Data;
// }

// export interface Data {
//   users?: User[];
//   idProvider?: () => string;
// }
// export interface User {
//   createdAt?: string;
//   updatedAt?: string;
//   id?: any;
//   name??: string | null;
//   email??: string | null;
//   phone??: string | null;
//   facebookHandle??: string | null;
//   instagramHandle??: string | null;
//   twitterHandle??: string | null;
//   snapchatHandle??: string | null;
//   profileImgUrl??: string | null;
// }

// export interface User {
//   createdAt?: string;
//   updatedAt?: string;
//   id?: any;
//   name?: string | null;
//   fullName?: string | null;
//   phone?: string | null;
//   facebookUrl?: string | null;
//   instagramUrl?: string | null;
//   twitterUrl?: string | null;
//   snapchatUrl?: string | null;
//   profileImgUrl?: string | null;
//   email?: string | null;
// }

// export interface AuthPayload {
//   token?: string;
//   user??: User;
// }

// export interface Org {
//   createdAt?: string;
//   updatedAt?: string;
//   id?: any;
//   name?: string | null;
// }
// export interface Campaign {
//   createdAt?: string;
//   updatedAt?: string;
//   id?: any;
//   name?: string | null;
//   instructions?: string | null;
//   startDateTime?: string | null;
//   endDateTime?: string | null;
// }

// export interface Post {
//   createdAt?: string;
//   updatedAt?: string;
//   id?: any;
//   name?: string | null;
//   caption?: string | null;
//   profileImgUrl?: string | null;
// }

// export interface Media {
//   createdAt?: string;
//   updatedAt?: string;
//   id?: any;
//   name?: string | null;
//   contentType?: string;
//   url?: string;
//   secret?: string;
// }

// export interface Location {
//   createdAt?: string;
//   updatedAt?: string;
//   id?: any;
//   name?: string | null;
//   street?: string | null;
//   city?: string | null;
//   region?: string | null;
//   country?: string | null;
//   isoCountryCode?: string | null;
//   postalCode?: string | null;
//   long?: string | null;
//   lat?: string | null;
// }

export interface User {
  createdAt: string;
  updatedAt: string;
  id: any;
  name?: string | null;
  email?: string | null;
  password?: string | null;
  phone?: string | null;
  profileImgUrl?: string | null;
  facebookHandle?: string | null;
  instagramHandle?: string | null;
  twitterHandle?: string | null;
  snapchatHandle?: string | null;
}
export interface Location {
  createdAt: string;
  updatedAt: string;
  id: any;
  name?: string | null;
  street?: string | null;
  city?: string | null;
  region?: string | null;
  country?: string | null;
  isoCountryCode?: string | null;
  postalCode?: string | null;
  long?: string | null;
  lat?: string | null;
}
export interface Post {
  createdAt: string;
  updatedAt: string;
  id: any;
  name?: string | null;
  caption?: string | null;
}
export interface Campaign {
  createdAt: string;
  updatedAt: string;
  id: any;
  name?: string | null;
  instructions?: string | null;
  startDateTime?: string | null;
  endDateTime?: string | null;
}
export interface Org {
  createdAt: string;
  updatedAt: string;
  id: any;
  name?: string | null;
}
export interface Media {
  createdAt: string;
  updatedAt: string;
  id: any;
  name?: string | null;
  contentType: string;
  url: string;
  secret?: string | null;
}
export interface AuthPayload {
  token: string;
  user: User;
}
