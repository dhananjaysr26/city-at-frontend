import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import type { FC, HTMLAttributeAnchorTarget, PropsWithChildren } from "react";
import ActiveLink from "../../ui/ActiveLink";

type NavItemType = "nav" | "footer";

type NavItemProps = {
  href: string;
  type?: NavItemType;
  className?: string;
  target?: HTMLAttributeAnchorTarget | undefined;
};

const NavItem: FC<PropsWithChildren<NavItemProps>> = ({
  href = "",
  type = "nav",
  children,
  className = "",
}) => (
  <ActiveLink href={href} allowSubPath={href.startsWith("/")}>
    <span className={className}>{children}</span>

    {type === "nav" && href.startsWith("http") && (
      <ArrowUpRightIcon className="h-5 w-5" />
    )}
  </ActiveLink>
);

export default NavItem;
