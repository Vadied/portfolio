import pages from "@/app/assets/pages";
import { useTranslation } from "@/lib/i18n";
import NavLink from "./navLink";

type Props = {
  lng: string;
};
const Header = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, "header");
  return (
    <header className="flex justify-between p-4" style={{ height: "10vh" }}>
      <h1>Davide Filippi</h1>
      <ul className="flex gap-4">
        {Object.values(pages).map((page) => (
          <li key={page.href}>
            <NavLink label={t(page.label)} href={`/${lng}/${page.href}`} />
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
