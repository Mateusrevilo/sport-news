import Grid from "@/app/components/Grid/ArtigoIndex";
import { buscarArtigoPorCategoria } from "@/controllers/artigoController";

export const metadata = {
  title: "Campeonatos - Sports News",
  description: "Acompanhe as melhores campeonatos de futebol e outros esportes do mundo",
};

export default function CampeonatosPage() {
  const noticiasFiltradas = buscarArtigoPorCategoria("campeonatos");

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400 mb-4">Seção de Campeonatos</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Campeonatos em análise e as principais decisões
          </h1>
          <p className="mx-auto max-w-3xl text-base sm:text-lg text-slate-200 leading-relaxed">
            Cobertura completa dos torneios mais importantes, com notícias sobre transferências, títulos e momentos decisivos.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-10 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr] items-start mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Notícias de Campeonatos</h2>
            <p className="text-slate-600 max-w-2xl">
              As últimas notícias sobre grandes campeonatos nacionais e internacionais para você acompanhar cada rodada e resultado.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-xl border border-slate-200">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-2">Destaque</p>
            <p className="text-3xl font-semibold text-slate-900">{noticiasFiltradas.length}</p>
            <p className="mt-3 text-slate-600">artigos ativos na categoria de campeonatos</p>
          </div>
        </div>

        {noticiasFiltradas.length > 0 ? (
          <Grid artigos={noticiasFiltradas} />
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white/90 p-10 text-center">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Nenhum campeonato encontrado</h3>
            <p className="text-slate-600">Em breve adicionaremos mais matérias na categoria de campeonatos.</p>
          </div>
        )}
      </section>
    </div>
  );
}