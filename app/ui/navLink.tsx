"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { isNavActive } from "@/lib/utils";

type Props = {
  label: string;
  href: string;
};
const NavLink = ({ label, href }: Props) => {
  const pathname = usePathname();
  const isActive = isNavActive(pathname, href);
  const activeClass = isActive ? "text-white" : "";
  return (
    <Link className={`${activeClass}`} href={href}>
      {label}
    </Link>
  );
};
export default NavLink;
