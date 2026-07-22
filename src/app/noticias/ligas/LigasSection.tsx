"use client";

import { useEffect, useMemo, useState } from "react";
import Grid from "@/app/components/Grid/ArtigoIndex";
import type { Artigos } from "@/types/Artigos";

const leagueLogos = [
  { label: "All", subtitle: "Todas", accent: "from-slate-700 to-slate-900" },
  { label: "NBA", subtitle: "Basquete", accent: "from-amber-500 to-orange-600" },
  { label: "UEFA", subtitle: "Futebol", accent: "from-sky-600 to-cyan-700" },
  { label: "NFL", subtitle: "Futebol Americano", accent: "from-slate-800 to-slate-950" },
  { label: "ATP", subtitle: "Tênis", accent: "from-emerald-600 to-green-700" },
  { label: "F1", subtitle: "Automobilismo", accent: "from-rose-600 to-red-700" },
];

const leagueKeywords: Record<string, string[]> = {
  All: [],
  NBA: ["nba", "basquete"],
  UEFA: ["uefa", "futebol", "champions", "liga"],
  NFL: ["nfl", "futebol americano", "football"],
  ATP: ["atp", "tênis", "tenis"],
  F1: ["f1", "formula", "formula 1"],
};

function filterByLeague(articles: Artigos[], league: string) {
  if (league === "All") {
    return articles;
  }

  const keywords = leagueKeywords[league] ?? [league.toLowerCase()];
  return articles.filter((article) => {
    const text = `${article.title} ${article.description} ${article.author}`.toLowerCase();
    return keywords.some((keyword) => text.includes(keyword));
  });
}

export default function LigasSection() {
  const [articles, setArticles] = useState<Artigos[]>([]);
  const [selectedLeague, setSelectedLeague] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/news?ts=${Date.now()}`, { cache: "no-store" });
        if (!response.ok) {
          throw new Error("Falha ao buscar notícias");
        }

        const data = (await response.json()) as Artigos[];
        setArticles(data);
      } catch (err) {
        setError("Não foi possível carregar as notícias da API.");
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles = useMemo(
    () => filterByLeague(articles, selectedLeague),
    [articles, selectedLeague]
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-200 mb-4">Seção de Ligas</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            As maiores ligas esportivas em pauta
          </h1>
          <p className="mx-auto max-w-3xl text-base sm:text-lg text-cyan-100 leading-relaxed">
            Clique em uma liga para ver somente as notícias relacionadas a ela.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-10 sm:py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 mb-12">
          {leagueLogos.map((liga) => {
            const isSelected = selectedLeague === liga.label;
            return (
              <button
                key={liga.label}
                type="button"
                onClick={() => setSelectedLeague(liga.label)}
                className={`group flex min-h-[140px] flex-col justify-between rounded-2xl border p-4 shadow-lg transition-all duration-300 ${liga.accent} ${
                  isSelected ? "border-white/90 shadow-white/20 scale-105" : "border-white/20"
                }`}
              >
                <span className="block text-2xl font-black uppercase tracking-[0.28em] text-white drop-shadow-sm sm:text-3xl">
                  {liga.label}
                </span>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/95 sm:text-xs">
                  {liga.subtitle}
                </p>
                {isSelected ? (
                  <span className="mt-3 inline-flex w-fit rounded-full bg-white/25 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.3em] text-white">
                    Selecionado
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Notícias relacionadas a {selectedLeague}</h2>
            <p className="text-slate-600 max-w-2xl">
              {selectedLeague === "All"
                ? "Exibindo todas as notícias esportivas disponíveis na API."
                : `Veja as manchetes filtradas por ${selectedLeague}.`}
            </p>
          </div>
          <div className="rounded-3xl bg-white p-5 shadow-lg border border-slate-200">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-2">Total de notícias</p>
            <p className="text-3xl font-semibold text-slate-900">{filteredArticles.length}</p>
          </div>
        </div>

        {loading ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white/90 p-10 text-center">
            <p className="text-lg font-medium text-slate-900">Carregando notícias...</p>
          </div>
        ) : error ? (
          <div className="rounded-3xl border border-red-300 bg-red-50 p-10 text-center">
            <p className="text-lg font-medium text-red-700">{error}</p>
          </div>
        ) : filteredArticles.length > 0 ? (
          <Grid artigos={filteredArticles} />
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white/90 p-10 text-center">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Nenhuma notícia encontrada</h3>
            <p className="text-slate-600">Tente outra liga ou aguarde a atualização da API.</p>
          </div>
        )}
      </section>
    </div>
  );
}
