import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin']})

export const metadata: Metadata = {
  title: "PDF Messenger - L'appli pour discuter avec tous vos documents",
  description: "PDF Messenger est un service qui utilise l'intelligence artificielle pour avoir une conversation fluide et naturelle avec une quantité illimitée de documents contenant du texte.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen">
      <body className={jakarta.className}>{children}</body>
    </html>
  );
}
