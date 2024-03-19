import skills from "@/app/assets/skills";
import { Search, SkillCard } from "@/app/ui";
import { useTranslation } from "@/lib/i18n";

type Props = {
  params: {
    lng: string;
  };
  searchParams?: {
    q?: string;
    p?: string;
  };
};
const Page = async ({ params: { lng }, searchParams }: Props) => {
  const { t } = await useTranslation(lng, "skills");
  const query = searchParams?.q || "";

  const filteredSkills = Object.values(skills).filter((skill) =>
    skill.label.toLowerCase().includes(query)
  );

  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row justify-between mb-4 flex-wrap gap-8">
        <h1 className="text-4xl font-bold mb-4">{t("title", lng)}</h1>
        <Search
          className="min-w-80"
          placeholder={t("search.placeholder", lng)}
          value={query}
        />
      </div>
      <div
        className="flex-grow flex flex-wrap gap-4 overflow-y-auto p-4"
        style={{ maxHeight: "80vh" }}
      >
        {!filteredSkills.length && (
          <div className="h-full text-center font-bold w-full text-2xl">
            {t("search.noResults", lng)}
          </div>
        )}
        {filteredSkills.map((skill) => (
          <SkillCard
            key={skill.label}
            label={skill.label}
            value={skill.value}
            subskills={skill.subskills}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
