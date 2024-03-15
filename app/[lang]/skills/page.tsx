
type Props = {
  params: {
    lang: string;
  };
};
const Page = ({ params }: Props) => {
  const { lang } = params;
  console.log("skills", lang);
  return (
    <div className="flex justify-between gap-8">
      Skills
    </div>
  );
};

export default Page;
