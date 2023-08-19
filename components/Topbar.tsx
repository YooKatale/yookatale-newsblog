/* eslint-disable @next/next/no-img-element */
import { MdMenu } from "react-icons/md";
import Link from "next/link";
import { useRecoilValue, useSetRecoilState } from "recoil";

import {
  LoginState,
  SideMenuState,
  isLoggedInFromLocalStorage,
  isLoggedInState,
  isLoggedInStorageKey,
} from "@lib/atoms";
import Button from "@components/widgets/Button";
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Service from "@lib/atoms/service";
import { ROUTES } from "@lib/atoms/routes";

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

  const handleLogout = async () => {
    setIsLoggedIn(false);
    typeof window !== "undefined" &&
      localStorage.removeItem(isLoggedInStorageKey);

    const res = await Service.post(`${ROUTES.LOGOUT}`, null);

    if (res?.status == "Success") router.push("/");
  };

  return (
    <div className="w-full bg-emerald-900 py-5">
      <div className="w-10/12 mx-auto flex items-center justify-between text-white">
        <div className="flex items-center gap-8">
          <Link href="/">
            <img
              src="https://ik.imagekit.io/2ujnunod7moo/logo_qZklD2mDa.png?updatedAt=1690463142255"
              alt="logo"
              className="h-16 cursor-pointer object-cover"
            />
            <p className="font-bold text-sm text-slate-200 ">Here For you</p>
          </Link>
          <div className="lg:flex gap-2 hidden">
            {navs.map((nav, i) => (
              <Link href={nav.route} key={i} className="hover:text-amber-400 transition">
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
                className="py-2 px-6 rounded-md border hover:border-inherit shadow-sm hover:shadow border-yellow-600 transition hover:bg-yellow-600 text-yellow-600 hover:text-slate-100"
              >
                <span>Login</span>
              </Link>
            ) : (
              <Button
                onClick={handleLogout}
                className="py-2 px-6 rounded-md border hover:border-inherit shadow-sm hover:shadow border-yellow-600 transition hover:bg-yellow-600 text-yellow-600 hover:text-slate-100"
              >
                <span>Logout</span>
                {/* <FaUserCircle className="text-xl text-gray-200" /> */}
              </Button>
            )}
          </div>
          <div className="block lg:hidden">
            <Button className="" onClick={() => setSideMenuState(true)}>
              <MdMenu className="text-3xl text-slate-100" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
