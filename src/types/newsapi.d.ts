declare module "newsapi" {
  export interface Article {
    title?: string | null;
    author?: string | null;
    description?: string | null;
    urlToImage?: string | null;
    publishedAt?: string | null;
  }

  export interface TopHeadlinesResponse {
    articles?: Article[];
  }

  class NewsAPI {
    constructor(apiKey: string);
    v2: {
      topHeadlines(options: {
        country?: string;
        category?: string;
        pageSize?: number;
      }): Promise<TopHeadlinesResponse>;
    };
  }

  export default NewsAPI;
}
