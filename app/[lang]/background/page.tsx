import { ProfileImage } from "@/app/ui";

type Props = {
  params: {
    lang: string;
  };
};
const Page = ({ params: { lang } }: Props) => {
  return (
    <div className="bg-parchment min-h-screen flex justify-center items-center">
      <div className="bg-gray-200 p-8 rounded-lg border-2 border-gray-300">
        <div className="flex justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Scheda Personaggio
            </h1>
            <p className="text-lg text-gray-700">Presentazione</p>
          </div>
          <div>
            <ProfileImage />
          </div>
        </div>
        <hr className="border-gray-300 mb-6" />
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold mb-2">Chi Sono</h2>
            <p className="mb-4">
              Sono un avventuriero esperto, pronto ad affrontare qualsiasi sfida
              che il destino mi riserva.
            </p>
            <h2 className="text-xl font-semibold mb-2">Abilità</h2>
            <ul>
              <li>React: Livello Esperto</li>
              <li>JavaScript: Livello Esperto</li>
              <li>Node.js: Livello Esperto</li>
              <li>HTML/CSS: Livello Esperto</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Cosa Offro</h2>
            <p className="mb-4">
              Offro competenze avanzate nello sviluppo web e la capacità di
              creare soluzioni innovative per qualsiasi problema tecnico.
            </p>
            <h2 className="text-xl font-semibold mb-2">Contatti</h2>
            <p>Email: dev.filippi@gmail.com</p>
            <p>
              Linkedin: https://www.linkedin.com/in/davide-filippi-b474b7133/
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
