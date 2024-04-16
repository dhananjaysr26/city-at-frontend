import {
  footerBottomLinks,
  footerLinks,
  socials,
} from "@/utils/constants/footer";
import React from "react";
import ActiveLink from "../ui/ActiveLink";
import Link from "next/link";
import Image from "next/image";

interface FooterProps {}

const SectionLink = ({
  sectionName,
  links,
}: {
  sectionName: string;
  links: any[];
}) => {
  return (
    <div className=" flex flex-col gap-y-1">
      <h2 className=" text-lg font-semibold">{sectionName}</h2>
      <ul className=" flex flex-col gap-2">
        {links.map(({ href, text }) => {
          return (
            <li key={href}>
              <ActiveLink href={href}>
                <span className=" text-xs md:text-sm hover:underline">
                  {text}
                </span>
              </ActiveLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className=" bg-footer-texture bg-bottom bg-no-repeat w-full object-cover border-t-[1px] px-3">
      <div className="flex justify-between px-5 py-6 pt-10 max-w-[1200px] mx-auto ">
        <div className=" flex flex-col pr-5 w-1/2">
          <div className=" flex flex-col gap-2">
            <Link href={"/"}>
              <Image
                src={"/icons/logo.svg"}
                alt="logo"
                width={150}
                height={60}
              />
            </Link>
            <h6 className=" text-sm font-normal">
              Recognize faces your way, our API!
            </h6>
          </div>
          <ActiveLink
            href={
              "https://play.google.com/store/apps/details?id=com.lystface&hl=en_US&pli=1"
            }
          >
            <div className=" py-2 flex justify-center gap-2 flex-col">
              <h2 className=" text-lg font-semibold uppercase">Mobile Apps</h2>
              <Image
                src={"/icons/play-store.png"}
                alt="logo"
                width={120}
                height={60}
              />
            </div>
          </ActiveLink>
          <div className=" py-2">
            <h2>Connect with Us</h2>
            <ul className=" flex gap-2 pt-2">
              {socials.map(({ href, iconSrc }) => {
                return (
                  <li key={href}>
                    <ActiveLink href={href}>
                      <Image
                        width={30}
                        height={30}
                        alt="social-icon"
                        src={iconSrc}
                        className=" h-6 w-6"
                      />
                    </ActiveLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap gap-5 flex-1 justify-between">
          {footerLinks.map((footerSection) => {
            return (
              <SectionLink
                key={footerSection?.sectionName}
                {...footerSection}
              />
            );
          })}
        </div>
      </div>
      <div className=" flex justify-between flex-col md:flex-row items-center border-t-[1px] py-5 md:py-8 px-3 text-[#818992] ">
        <span>Copyright@2024 Lystloc Inc. All Rights Reserved</span>
        <div className=" flex items-center gap-x-1 md:gap-x-2">
          {footerBottomLinks.map(({ href, text }) => (
            <ActiveLink key={href} href={href}>
              <span className=" text-xs md:text-sm underline">{text}</span>
            </ActiveLink>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
