"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, FC } from "react";

type ActiveLocalizedLinkProps = ComponentProps<typeof Link> & {
  activeClassName?: string;
  allowSubPath?: boolean;
};

const ActiveLink: FC<ActiveLocalizedLinkProps> = ({
  children,
  allowSubPath = false,
  className,
  href = "",
  ...props
}) => {
  const pathname = usePathname();

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};

export default ActiveLink;
