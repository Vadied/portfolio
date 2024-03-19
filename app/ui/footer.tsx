import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "@/lib/i18n/settings";
import { useTranslation } from "@/lib/i18n";
import LanguageSwitch from "./languageSwitcher";

type Props = {
  lng: string;
};
const Footer = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, "footer");
  return (
    <footer className="p-4" style={{ height: "10vh" }}>
      {/* <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{ lng }</strong> to:{" "}
      </Trans> */}
      <LanguageSwitch />
    </footer>
  );
};

export default Footer;
