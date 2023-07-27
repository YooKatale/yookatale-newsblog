/* eslint-disable @next/next/no-img-element */
import { MdMenu } from "react-icons/md";
import Link from "next/link";
import { useSetRecoilState } from "recoil";

import { SideMenuState } from "@lib/atoms";
import Button from "@components/widgets/Button";

const navs = [
  { title: "Products", route: "/" },
  { title: "YooCards", route: "/" },
  { title: "Contact", route: "/" },
  { title: "About", route: "/" },
  { title: "News Blog", route: "/" },
];

const Topbar = () => {
  const setSideMenuState = useSetRecoilState(SideMenuState);

  return (
    <div className="w-full bg-black py-5">
      <div className="w-10/12 py-4 mx-auto flex items-center justify-between text-white">
        <div className="flex items-center gap-8">
          <Link href="/">
            <img
              src="https://ik.imagekit.io/2ujnunod7moo/logo_qZklD2mDa.png?updatedAt=1690463142255"
              alt="logo"
              className="h-10 cursor-pointer object-cover"
            />
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
            <Button className="py-2 px-6 rounded border border-white hover:bg-gray-900">
              <span>Login</span>
            </Button>
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
