"use client";

import Hamburger from "@heroicons/react/24/solid/Bars3Icon";
import XMark from "@heroicons/react/24/solid/XMarkIcon";
import { useEffect, useState } from "react";
import type { FC } from "react";
import NavItem from "./NavItem";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";

const navInteractionIcons = {
  show: <Hamburger className=" h-7 w-7" />,
  close: <XMark className=" h-7 w-7" />,
};

type NavbarProps = {
  navItems: Array<{
    text: string;
    link: string;
  }>;
};

const NavBar: FC<NavbarProps> = ({ navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`max-w-[1920px] mx-auto sticky top-0 z-50 flex flex-row justify-between items-center w-full py-3.5 md:py-0.5 px-3 md:px-10 bg-[#FFFEDA] ${
        isFixed ? "shadow-header" : ""
      }`}
    >
      <Link href={"/"}>
        <Image src={"/icons/logo.svg"} alt="logo" width={150} height={60} />
      </Link>
      <div className="block cursor-pointer lg:hidden">
        <Label
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={""}
          htmlFor="sidebarItemToggler"
        >
          {navInteractionIcons[isMenuOpen ? "close" : "show"]}
        </Label>
      </div>
      <div className="hidden lg:flex gap-5 items-center">
        {navItems.map(({ text, link }) => (
          <NavItem key={link} href={link} className="flex items-center  py-5">
            {text}
          </NavItem>
        ))}
        <button className="bg-[#3E497A] cursor-pointer text-sm  py-1.5 px-6 text-white rounded-md">
          Free Trial
        </button>
      </div>

      {isMenuOpen && (
        <div className=" absolute justify-center flex flex-col items-start px-5 top-[60px] w-full h-[220px] py-10 border-y-[1px] border-gray-300 bg-secondary/90 left-0">
          {navItems.map(({ text, link }) => (
            <NavItem
              key={link}
              href={link}
              className="flex items-center justify-between py-2"
            >
              {text}
            </NavItem>
          ))}
          <button className="bg-[#3E497A] cursor-pointer text-sm  py-1.5 px-6 text-white rounded-md">
            Free Trial
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
