import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "@/lib/i18n/settings";
import { useTranslation } from "@/lib/i18n";

type Props = {
  lng: string;
};
const Footer = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, "footer");
  return (
    <footer className="p-4">
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{ lng }</strong> to:{" "}
      </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && " or "}
              <Link href={`/${l}`}>{l}</Link>
            </span>
          );
        })}
    </footer>
  );
};

export default Footer;
