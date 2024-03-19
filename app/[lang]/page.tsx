import { ProfileImage } from "@/app/ui";
import { useTranslation } from "@/lib/i18n";

type Props = {
  params: {
    lang: string;
  };
};
const Page = async ({ params }: Props) => {
  const { t } = await useTranslation(params.lang, "home");
  return (
    <div className="flex flex-col md:flex-row justify-between gap-8">
      <div className="flex-grow border p-4">
        <h2 className="flex gap-4">
          <div>{t("species")}</div>
          <div>{t("location")}</div>
        </h2>
        <h3 className="flex gap-4">
          <div>{t("class")}</div>
          <div>{t("level")}</div>
        </h3>
      </div>
      <div>
        <ProfileImage />
      </div>
    </div>
  );
};

export default Page;
