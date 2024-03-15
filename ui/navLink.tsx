import Link from "next/link";

type Props = {
  label: string;
  href: string;
    isActive: boolean;
};
const NavLink = ({ label, href, isActive }: Props) => {
    const activeClass = isActive ? "text-white" : "";
  return <Link className={`${activeClass}`} href={href}>{label}</Link>;
};
export default NavLink;
