import { Button } from "@/components/ui/button";
import LandingPageCard from "@/components/ui/landing-page-card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center gap-10 bg-neutral-900">
      <section className="flex flex-col gap-4 w-full items-center text-center py-40">
        <h1 className="text-3xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-400 to-neutral-600 leading-tight">
          Communiquez avec tous vos documents et fichiers de maniére fluide et
          naturelle
        </h1>
        <p className="w-full font-medium text-neutral-400">
          Découvrez une nouvelle façon de discuter avec vos fichiers,
          d'apprendre de nouvelles choses grâce à l'intelligence artificielle.
        </p>
        <Button className="w-min text-sm px-6 bg-indigo-600">
          Je m'inscris!
        </Button>
      </section>

      <section>
        <h1 className="text-3xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-400 to-neutral-600 leading-tight text-center">
          Pourquoi choisir PDF Messenger?
        </h1>
        <div className="grid gap-4 py-8">
          <LandingPageCard
            title="Un outil d’étude adapté à tous vos besoins"
            content="Que ce soit pour vos études ou pour votre travail, PDF Messenger est sans égal."
          ></LandingPageCard>
          <LandingPageCard
            title="Changez de contexte instantanément"
            content="Changez les documents que vous souhaitez inclure dans la discussion en quelques clics."
          ></LandingPageCard>
          <LandingPageCard
            title="Des dizaines de raccourcis inclus"
            content="Utiliser toute la puissance de l’intelligence artificielle sans taper vos messages manuellement"
          ></LandingPageCard>
          <LandingPageCard
            title="Mieux apprendre et comprendre rapidement"
            content="Ne gaspillez plus votre temps à lire des dizaines voire des centaines de pages, PDF Messenger le fait pour vous."
          ></LandingPageCard>
          <LandingPageCard
            title="Un second cerveau surpuissant grâce à l'IA."
            content="Amplifiez votre productivité avec une assistance intelligente qui organise et enrichit vos idées."
          ></LandingPageCard>
        </div>
      </section>

      <section className="flex flex-col text-center">
        <p className="text-white">2024 - PDF Messenger</p>
      </section>
    </div>
  );
}
