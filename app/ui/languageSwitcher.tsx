"use client";

import { fallbackLng, languages } from "@/lib/i18n/settings";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./button";

const LanguageSwitch = () => {
  const pathname = usePathname();
  const current = pathname.split("/")[1] || fallbackLng;

  const pageName = pathname.split("/").shift() || "";

  return (
    <div className="flex gap-4">
      {languages.map((l) => {
        if (l === current)
          return (
            <Button key={l} type="secondary" disabled={true}>
              {l.toUpperCase()}
            </Button>
          );

        return (
          <Button key={l} type="primary">
            <Link href={`/${l}${pageName}`}>{l.toUpperCase()}</Link>
          </Button>
        );
      })}
    </div>
  );
};

export default LanguageSwitch;
