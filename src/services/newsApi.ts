import axios from "axios";
import { artigosSeed, type Artigo } from "@/models/artigoModel";

const apiKey = process.env.NEWS_API_KEY;

interface NewsApiArticle {
  title?: string | null;
  author?: string | null;
  description?: string | null;
  urlToImage?: string | null;
  publishedAt?: string | null;
}

interface NewsApiResponse {
  articles?: NewsApiArticle[];
}

export async function buscarArtigosDaApi(limit = 6): Promise<Artigo[]> {
  if (!apiKey) {
    return [];
  }

  try {
    const response = await axios.get<NewsApiResponse>(
      "https://newsapi.org/v2/everything",
      {
        params: {
          q: "esportes",
          language: "pt",
          sortBy: "publishedAt",
          pageSize: limit,
          apiKey,
        },
      }
    );

    const sportsKeywords = [
      "futebol",
      "basquete",
      "tênis",
      "tenis",
      "futebol americano",
      "nfl",
      "nba",
      "uefa",
      "f1",
      "corrida",
      "gol",
      "gols",
      "jogo",
      "jogador",
      "time",
      "seleção",
      "campeonato",
      "liga",
      "esportes",
    ];

    const filtered = (response.data.articles ?? []).filter((article: NewsApiArticle) => {
      if (!article.title && !article.description) return false;
      const text = `${article.title ?? ""} ${article.description ?? ""} ${article.author ?? ""}`.toLowerCase();
      return sportsKeywords.some((kw) => text.includes(kw));
    });

    return filtered
      .map((article: NewsApiArticle, index: number) => ({
        id: 1000 + index,
        slug:
          article.title
            ?.toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "") || `noticia-${index}`,
        title: article.title ?? "Notícia sem título",
        author: article.author ?? "Agência NewsAPI",
        description: article.description ?? "Confira mais detalhes na notícia original.",
        foto: article.urlToImage ?? artigosSeed[0]?.foto ?? "",
        date: article.publishedAt ? new Date(article.publishedAt).getTime() : Date.now(),
        category: "sport",
      }));
  } catch (error) {
    console.error("Erro ao buscar notícias da News API:", error);
    return [];
  }
}

export async function getArtigosParaExibir(limit = 6): Promise<Artigo[]> {
  const artigosApi = await buscarArtigosDaApi(limit);

  if (artigosApi.length > 0) {
    return artigosApi;
  }

  return [...artigosSeed];
}
