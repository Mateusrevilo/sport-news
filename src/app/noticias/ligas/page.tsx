import Grid from "@/app/components/Grid/ArtigoIndex";
import { reportagens } from "@/lib/reportagens";

export const metadata = {
  title: "Ligas - Sports News",
  description: "Acompanhe as melhores ligas de futebol e outros esportes do mundo",
};

export default function LigasPage() {
  // Filtrar notícias relacionadas a ligas (você pode adicionar um campo 'categoria' depois)
  const noticiasFiltradas = reportagens;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            ⚽ Ligas Esportivas
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Acompanhe as melhores ligas de futebol, basquete e outros esportes do mundo
          </p>
        </div>
      </section>

      {/* Seção de Notícias */}
      <section className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Últimas Notícias das Ligas
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
        </div>
        <Grid artigos={noticiasFiltradas} />
      </section>
    </div>
  );
}
