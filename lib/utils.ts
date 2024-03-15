import translations from "@/assets/i18n";
import { ITranslation } from "@/types";

export const getLocale = (pathname: string) => {
  return pathname.split("/")[1];
};

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