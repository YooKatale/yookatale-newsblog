import { atom } from "recoil";

import { IBlog } from "@lib/interfaces";

export const SideMenuState = atom<boolean>({ key: "sidemenu", default: false });

export const BlogsState = atom<IBlog[] | null>({
  key: "blogsState",
  default: null,
});
export const TopBlogState = atom<IBlog | null>({
  key: "topBlogState",
  default: null,
});
