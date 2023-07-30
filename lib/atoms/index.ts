import { atom, selector } from "recoil";

import { IBlog } from "@lib/interfaces";

export const SideMenuState = atom<boolean>({ key: "sidemenu", default: false });

export const LoginState = atom<boolean>({ key: "logginState", default: false });

export const BlogsState = atom<IBlog[] | null>({
  key: "blogsState",
  default: null,
});
export const TopBlogState = atom<IBlog | null>({
  key: "topBlogState",
  default: null,
});

export const isLoggedInStorageKey = "yookatale-app";

const isLoggedInFromLocalStorage = (): boolean => {
  const storageValue =
    typeof window !== "undefined" &&
    localStorage?.getItem(isLoggedInStorageKey);

  return storageValue === "true" ? true : false;
};

export const isLoggedInState = atom<boolean>({
  key: "isLoggedInState",
  default: false,
});

export const isLoggedInSelector = selector<boolean>({
  key: "isLoggedInSelector",
  get: ({ get }) => {
    const isLoggedIn = get(isLoggedInState);
    return isLoggedIn;
  },
});
