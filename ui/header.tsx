"use client";

import Link from "next/link";
import { getLocale, t } from "@/lib/utils";
import { usePathname } from "next/navigation";
import pages from "@/assets/pages";

export default function Header() {
  const pathname = usePathname();
  const lang = getLocale(usePathname());
  return (
    <header className="flex justify-between p-4">
      <h1>Davide Filippi</h1>
      <ul className="flex gap-4">
        <li>
          <Link href={`/${lang}/${pages.home}`}>
            {t("header.profile", lang)}
          </Link>
        </li>
        <li>
          <Link href={`/${lang}/${pages.skills}`}>
            {t("header.skills", lang)}
          </Link>
        </li>
        <li>
          <Link href={`/${lang}/${pages.background}`}>
            {t("header.background", lang)}
          </Link>
        </li>
        <li>
          <Link href={`/${lang}/${pages.quests}`}>
            {t("header.quests", lang)}
          </Link>
        </li>
        {/* <li>
          <Link href="/en">{t("langs.en", pathname)}</Link>
        </li> */}
      </ul>
    </header>
  );
}
