import { createClient } from "newt-client-js";

export interface Article {
  title: string;
  slug: string;
  date: string;
  coverImage: { src: string };
  body: string;
  category: { name: string; categorySlug: string };
}

export interface Category {
  name: string;
  categorySlug: string;
}

export interface Member {
  name: string;
  image: { src: string };
  description: string;
  xid: string;
}

export interface Gallery {
  alt: string;
  picture: { src: string };
}

export const newtClient = createClient({
  spaceUid: import.meta.env.NEWT_SPACE_UID,
  token: import.meta.env.NEWT_CDN_API_TOKEN,
  apiType: "cdn",
});
