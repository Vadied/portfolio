import { t } from "@/lib/utils";
import { ProfileImage } from "@/app/ui";

type Props = {
  params: {
    lang: string;
  };
};
const Page = ({ params }: Props) => {
  const { lang } = params;
  return (
    <div className="flex flex-col md:flex-row justify-between gap-8">
      <div className="flex-grow border p-4">
        <h2 className="flex gap-4">
          <div>{t("home.species", lang)}</div>
          <div>{t("home.location", lang)}</div>
        </h2>
        <h3 className="flex gap-4">
          <div>{t("home.class", lang)}</div>
          <div>{t("home.level", lang)}</div>
        </h3>
      </div>
      <div>
        <ProfileImage />
      </div>
    </div>
  );
};

export default Page;
