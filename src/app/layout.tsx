import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";



export const metadata: Metadata = {
  title: "Sports News - As Melhores Notícias do Mundo dos Esportes",
  description: "Fique por dentro das últimas notícias de futebol, basquete, tênis, F1 e muito mais. Notícias atualizadas diariamente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="bg-gray-50 min-h-screen flex flex-col text-sm sm:text-base">
       <Header/>
        <main className="flex-grow">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
