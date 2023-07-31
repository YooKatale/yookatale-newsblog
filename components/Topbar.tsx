/* eslint-disable @next/next/no-img-element */
import { MdMenu } from "react-icons/md";
import Link from "next/link";
import { useRecoilValue, useSetRecoilState } from "recoil";

import {
  LoginState,
  SideMenuState,
  isLoggedInState,
  isLoggedInStorageKey,
} from "@lib/atoms";
import Button from "@components/widgets/Button";
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

const navs = [
  { title: "YooKatale", route: "https://www.yookatale.com" },
  { title: "News blog", route: "/" },
  { title: "Careers", route: "/careers" },
];

const Topbar = () => {
  const setSideMenuState = useSetRecoilState(SideMenuState);
  const setLoginState = useSetRecoilState(LoginState);
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);

  const router = useRouter();

  const handleLogout = () => {
    setIsLoggedIn(false);
    typeof window !== "undefined" &&
      localStorage.removeItem(isLoggedInStorageKey);
    // router.push("/");
  };

  return (
    <div className="w-full bg-black py-5">
      <div className="w-10/12 mx-auto flex items-center justify-between text-white">
        <div className="flex items-center gap-8">
          <Link href="/">
            <img
              src="https://ik.imagekit.io/2ujnunod7moo/logo_qZklD2mDa.png?updatedAt=1690463142255"
              alt="logo"
              className="h-16 cursor-pointer object-cover"
            />
            <p className="font-bold text-sm text-gray-200 ">Here For you</p>
          </Link>
          <div className="lg:flex gap-2 hidden">
            {navs.map((nav, i) => (
              <Link href={nav.route} key={i} className="hover:text-gray-400">
                {nav.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="lg:flex items-center hidden gap-2">
            {isLoggedIn === false ? (
              <Link
                href="https://yookatale.com/signin"
                onClick={() => setLoginState(true)}
                className="py-2 px-6 rounded border border-white hover:bg-gray-900"
              >
                <span>Login</span>
              </Link>
            ) : (
              <Button
                onClick={handleLogout}
                className="py-2 px-6 rounded border border-white hover:bg-gray-900"
              >
                <span>Logout</span>
                {/* <FaUserCircle className="text-xl text-gray-200" /> */}
              </Button>
            )}
          </div>
          <div className="block lg:hidden">
            <Button className="" onClick={() => setSideMenuState(true)}>
              <MdMenu className="text-3xl text-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
