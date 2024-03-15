import translations from "@/app/assets/i18n";
import { ITranslation } from "@/app/types";

export const getLocale = (pathname: string) => {
  return pathname.split("/")[1];
};

export const isNavActive = (pathname: string, href: string) =>
  `${pathname}${href.endsWith("/") ? "/" : ""}` === href;

const getNestedTranslations = (language: string, keys: string[]) => {
  return keys.reduce(
    (obj: string | ITranslation, key) => (obj as ITranslation)?.[key],
    translations[language]
  ) as string;
};

export const t = (key: string, locale: string) => {
  const keys = key.split(".");
  return (
    getNestedTranslations(locale || "en", keys) ??
    getNestedTranslations("en", keys) ??
    key
  );
};
