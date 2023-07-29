/* eslint-disable @next/next/no-img-element */
import { SideMenuState } from "@lib/atoms";
import { useRecoilState } from "recoil";
import Button from "./widgets/Button";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";

const navs = [
  { title: "Products", route: "/" },
  { title: "YooCards", route: "/" },
  { title: "Contact", route: "/" },
  { title: "About", route: "/" },
  { title: "News Blog", route: "/" },
];

const Sidebar = () => {
  const [sideMenuState, setSideMenuState] = useRecoilState(SideMenuState);

  if (!sideMenuState) return null;

  return (
    <div className="fixed z-[999999] transition-all ease-in-out duration-700 bg-gray-900 w-full h-screen px-9 py-9">
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
            <Link href={nav.route} key={i}>
              {nav.title}
            </Link>
          ))}
        </div>

        <Button className="text-xl text-white rounded px-6 py-2 border border-white">
          <span>Login</span>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
