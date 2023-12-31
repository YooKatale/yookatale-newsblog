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

export const isLoggedInFromLocalStorage = (): boolean => {
  const storageValue =
    typeof window !== "undefined" &&
    localStorage?.getItem(isLoggedInStorageKey);

  return storageValue ? true : false;
};

export const userInfo = (): Object => {
  const storageValue =
    typeof window !== "undefined" &&
    localStorage?.getItem(isLoggedInStorageKey);

  return storageValue ? JSON.parse(storageValue) : {};
};

export const isLoggedInState = atom<boolean>({
  key: "isLoggedInState",
  default: isLoggedInFromLocalStorage(),
});

export const isLoggedInSelector = selector<boolean>({
  key: "isLoggedInSelector",
  get: ({ get }) => {
    const isLoggedIn = get(isLoggedInState);
    return isLoggedIn;
  },
});
