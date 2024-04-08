import { Button } from "@/components/ui/button";
import LandingPageCard from "@/components/ui/landing-page-card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 bg-neutral-900">
      <section className="relative min-h-96 p-8 flex flex-col gap-8 w-full items-center justify-center text-center py-40 bg-gradient-to-b from-black to-indigo-950 overflow-hidden">
        <Image
          src="/app-icon.svg"
          width={64}
          height={64}
          alt="The icon and logo for PDF Messenger"
          className="object-cover"
        />
        <h1 className="text-3xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-300 to-neutral-600 leading-tight">
          Communiquez avec tous vos documents et fichiers de maniére fluide et
          naturelle
        </h1>
        <p className="w-full text-base font-medium text-neutral-300">
          Découvrez une nouvelle façon de discuter avec vos fichiers,
          d'apprendre de nouvelles choses grâce à l'intelligence artificielle.
        </p>
        <Button className="w-min text-base px-6 bg-indigo-600 hover:bg-indigo-500">
          Je m'inscris
        </Button>
        <Image
          src="/app-frame.png"
          width={1024}
          height={800}
          alt="A screenshot of the PDF Messenger app in use"
          className="object-fit border-8 ring-2 ring-white/20 rounded-lg border-indigo-500/20 absolute -bottom-16 w-4/5"
        />
      </section>

      <section className="min-h-96 p-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl w-4/5 font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-300 to-neutral-600 leading-tight text-center">
          Pourquoi choisir PDF Messenger?
        </h1>
        <div className="grid gap-4 py-8">
          <LandingPageCard
            title="Un outil d’étude adapté à tous vos besoins"
            content="Que ce soit pour vos études ou pour votre travail, PDF Messenger est sans égal."
          ></LandingPageCard>
          <LandingPageCard
            title="Changez de contexte instantanément"
            content="Exercez un controle précis et total des documents que vous souhaitez inclure dans la conversation."
          ></LandingPageCard>
          <LandingPageCard
            title="Des dizaines de raccourcis inclus"
            content="Utiliser toute la puissance de l’intelligence artificielle sans taper vos messages manuellement."
          ></LandingPageCard>
          <LandingPageCard
            title="Mieux apprendre et comprendre rapidement"
            content="Ne gaspillez plus votre temps à lire des dizaines voire des centaines de pages, PDF Messenger le fait pour vous."
          ></LandingPageCard>
          <LandingPageCard
            title="Un second cerveau surpuissant grâce à l'IA"
            content="Amplifiez votre productivité avec une assistance intelligente qui organise et enrichit vos idées."
          ></LandingPageCard>
        </div>
      </section>

      <section className="flex flex-col items-center gap-8 text-center py-16">
        <Image
          src="/app-icon.svg"
          width={64}
          height={64}
          alt="The icon and logo for PDF Messenger"
          className="object-cover"
        />
        <p className="text-white text-base">© 2024 - PDF Messenger</p>
      </section>
    </div>
  );
}
