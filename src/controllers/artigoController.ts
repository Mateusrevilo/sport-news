import { artigosSeed, type Artigo } from "@/models/artigoModel";

export function listarArtigos(): Artigo[] {
  return [...artigosSeed];
}

export function buscarArtigoPorCategoria(category: Artigo["category"]): Artigo[] {
  return listarArtigos().filter((artigo) => artigo.category === category);
}

export function buscarArtigoPorSlug(slug: string): Artigo | undefined {
  return listarArtigos().find((artigo) => artigo.slug === slug);
}

export function buscarArtigoPorId(id: number | string): Artigo | undefined {
  return listarArtigos().find((artigo) => artigo.id === Number(id));
}

export function listarArtigosRelacionados(slug: string, limit = 3): Artigo[] {
  return listarArtigos()
    .filter((artigo) => artigo.slug !== slug)
    .slice(0, limit);
}
