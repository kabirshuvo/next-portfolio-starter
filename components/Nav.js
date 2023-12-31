"use client"
import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiViewColumns,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

import { useRouter } from "next/router";
import Link from "next/link";

export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter();
  console.log(router);
  const pathname = router.pathname;
  console.log(pathname);
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full ">
        {navData.map((link, index) => (
          <Link
            className={`${
              link.path === pathname && "text-sky-700"
            } relative flex items-center group hover:text-sky-700 transition-all duration-300`}
            key={index}
            href={link.path}
          >
            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
              <div className="bg-white relative flex text-primary items-center p-[7px] rounded-[4px]">
                <div className="text-[12px] lea-none font-semibold capitalize">
                  {link.name}
                </div>
                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[7px] border-r-0 absolute -right-2"></div>
              </div>
            </div>

            {link.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
