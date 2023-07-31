/* eslint-disable @next/next/no-img-element */
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import Button from "@components/widgets/Button";
import {
  SideMenuState,
  isLoggedInState,
  isLoggedInStorageKey,
} from "@lib/atoms";

const navs = [
  { title: "YooKatale", route: "https://www.yookatale.com" },
  { title: "News blog", route: "/" },
  { title: "Careers", route: "/careers" },
];

const Sidebar = () => {
  const [sideMenuState, setSideMenuState] = useRecoilState(SideMenuState);
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const router = useRouter();

  if (!sideMenuState) return null;

  const handleLogout = () => {
    setIsLoggedIn(false);
    typeof window !== "undefined" &&
      localStorage.removeItem(isLoggedInStorageKey);
    setSideMenuState(false);
    // router.push("/");
  };

  return (
    <div className="fixed z-[2] transition-all ease-in-out duration-700 bg-gray-900 w-full h-screen px-9 py-9">
      <div className="flex justify-end">
        <Button
          className="p-2 rounded border-0 bg-gray-700"
          onClick={() => setSideMenuState(false)}
        >
          <FaTimes className="text-gray-900 text-2xl" />
        </Button>
      </div>

      <div className="flex flex-col justify-center items-center space-y-16">
        <div className="mt-20 text-white flex flex-col justify-center items-center space-y-6 hover:text-gray-300">
          {navs.map((nav, i) => (
            <Link
              href={nav.route}
              key={i}
              onClick={() => setSideMenuState(false)}
            >
              {nav.title}
            </Link>
          ))}
        </div>

        {isLoggedIn === false ? (
          <Link
            href="/signin"
            onClick={() => setSideMenuState(false)}
            className="text-xl text-white rounded px-6 py-2 border border-white"
          >
            <span>Login</span>
          </Link>
        ) : (
          <Button
            onClick={handleLogout}
            className="text-xl text-white rounded px-6 py-2 border border-white"
          >
            <span>Logout</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
