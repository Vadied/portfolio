"use client";

import { usePathname } from "next/navigation";
import { getLocale, isNavActive, t } from "@/lib/utils";
import pages from "@/assets/pages";
import NavLink from "./navLink";

const Header = () => {
  const pathname = usePathname();
  const lang = getLocale(pathname);
  return (
    <header className="flex justify-between p-4">
      <h1>Davide Filippi</h1>
      <ul className="flex gap-4">
        {Object.values(pages).map((page) => (
          <li key={page.href}>
            <NavLink
              isActive={isNavActive(pathname, `/${lang}/${page.href}`)}
              label={t(page.label, lang)}
              href={`/${lang}/${page.href}`}
            />
          </li>
        ))}
        {/* <li>
          <Link href="/en">{t("langs.en", pathname)}</Link>
        </li> */}
      </ul>
    </header>
  );
};

export default Header;
