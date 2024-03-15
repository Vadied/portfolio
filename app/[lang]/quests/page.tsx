import quests from "@/app/assets/quests";

type Props = {
  params: {
    lang: string;
  };
};
const Page = ({ params }: Props) => {
  const { lang } = params;
  console.log("quests", lang);
  return (
    <div className="min-h-screen bg-gray-200 py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Le tue Quest passate</h1>
      {quests.map((project) => (
        <div
          key={project.id}
          className="bg-white p-6 rounded-md shadow-md mb-4"
        >
          <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
          <p className="text-gray-700 mb-2">{project.description}</p>
          <p className="text-gray-600">{project.reward}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
