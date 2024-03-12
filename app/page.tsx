import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center gap-10 bg-gradient-to-b from-white to-purple-400">
      <div className="w-10/12 fixed top-2 m-8 justify-between items-center flex flex-row bg-black rounded-full p-1">
        <p className="text-white text-base pl-4 font-medium">PDFMessenger</p>
        <Button className="w-min rounded-full text-sm text-neutral-950 px-6 bg-slate-50 hover:bg-purple-600 hover:text-white">
          Inscription
        </Button>
      </div>
      <div className="flex flex-col gap-4 w-full p-10 items-center text-center">
        <h2 className="uppercase text-purple-700 font-bold">
          Liste d'attente ouverte
        </h2>
        <h1 className="text-3xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-950 to-neutral-500 leading-tight">
          Communiquez avec tous vos documents et fichiers de maniére fluide et
          naturelle
        </h1>
        <p className="w-full font-medium text-neutral-700">
          Découvrez une nouvelle façon de discuter avec vos fichiers,
          d'apprendre de nouvelles choses grâce à l'intelligence artificielle.
        </p>
        <Button className="w-min rounded-full text-sm px-6">
          Je m'inscris!
        </Button>
      </div>

      <Image
        src="/app-frame.png"
        width={1024}
        height={30}
        alt="placeholder"
        className="fixed bottom-0 max-h-48 w-10/12 object-cover object-top outline outline-8 outline-white/30 rounded-t-2xl"
      />
    </div>
  );
}
