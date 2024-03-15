import skills from "@/assets/skills";
import { t } from "@/lib/utils";
import { Search, SkillCard } from "@/ui";

type Props = {
  params: {
    lang: string;
  };
  searchParams?: {
    q?: string;
    p?: string;
  };
};
const Page = ({ params, searchParams }: Props) => {
  const query = searchParams?.q || "";
  const { lang } = params;

  const filteredSkills = Object.values(skills).filter((skill) =>
    skill.label.toLowerCase().includes(query)
  );

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between mb-4 flex-wrap gap-8">
        <h1 className="text-4xl font-bold mb-4">{t("skills.title", lang)}</h1>
        <Search
          className="min-w-80"
          placeholder={t("skills.search.placeholder", lang)}
          value={query}
        />
      </div>
      <div
        className="flex flex-wrap gap-4 overflow-y-auto p-4"
        style={{ maxHeight: "80vh" }}
      >
        {!filteredSkills.length && (
          <div className="h-full text-center font-bold w-full text-2xl">
            {t("skills.search.noResults", lang)}
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
    </>
  );
};

export default Page;
