import { reportagens } from "@/lib/reportagens";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{
        slug: string;
    }>
}

// Gerar params estáticos para SSG
export async function generateStaticParams() {
    return reportagens.map((artigo) => ({
        slug: artigo.slug,
    }));
}

// Gerar metadata dinâmica
export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const artigo = reportagens.find(artigo => artigo.slug === slug);
    
    if (!artigo) {
        return {
            title: "Artigo não encontrado - Sports News",
            description: "O artigo solicitado não foi encontrado."
        };
    }

    return {
        title: `${artigo.title} - Sports News`,
        description: artigo.description,
    };
}

export default async function ArtigoPage({ params }: Props) {
    const { slug } = await params;
    const artigo = reportagens.find(artigo => artigo.slug === slug);

    if (!artigo) {
        notFound();
    }

    const formatDate = (timestamp: number) => {
        return new Date(timestamp).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <div className="bg-white border-b">
                <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4">
                    <nav className="flex items-center space-x-2 text-sm">
                        <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
                            Início
                        </Link>
                        <span className="text-gray-400">/</span>
                        <Link href="/noticias/ligas" className="text-blue-600 hover:text-blue-800 transition-colors">
                            Artigos
                        </Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-600 truncate max-w-xs sm:max-w-md">
                            {artigo.title}
                        </span>
                    </nav>
                </div>
            </div>

            {/* Conteúdo do Artigo */}
            <article className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Cabeçalho do Artigo */}
                    <header className="mb-6 sm:mb-8">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                            {artigo.title}
                        </h1>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 text-gray-700 text-sm sm:text-base font-medium">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <span>Por {artigo.author}</span>
                                </div>
                                <time className="text-gray-600 text-sm sm:text-base font-medium">
                                    📅 {formatDate(artigo.date)}
                                </time>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                    Esportes
                                </span>
                            </div>
                        </div>
                    </header>

                    {/* Conteúdo do Artigo */}
                    <div className="prose prose-lg max-w-none">
                        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                                {artigo.description}
                            </p>
                            
                            {/* Conteúdo expandido (simulado) */}
                            <div className="space-y-4 text-gray-700">
                                <p className="text-base sm:text-lg leading-relaxed">
                                    Esta é uma notícia completa sobre o assunto mencionado. Aqui você encontraria 
                                    mais detalhes, análises e informações relevantes sobre o tema esportivo.
                                </p>
                                
                                <p className="text-base sm:text-lg leading-relaxed">
                                    O conteúdo seria expandido com mais parágrafos, citações de especialistas, 
                                    estatísticas e outros elementos que tornariam a notícia mais rica e informativa.
                                </p>
                                
                                <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
                                    &ldquo;Esta é uma citação importante sobre o assunto da notícia.&rdquo;
                                </blockquote>
                                
                                <p className="text-base sm:text-lg leading-relaxed">
                                    Mais informações e análises detalhadas sobre o tema esportivo em questão.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Botões de Ação */}
                    <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4">
                        <Link 
                            href="/"
                            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                        >
                            ← Voltar aos Artigos
                        </Link>
                        
                        <button className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                            📤 Compartilhar
                        </button>
                    </div>
                </div>
            </article>

            {/* Artigos Relacionados */}
            <section className="bg-white border-t">
                <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                        Artigos Relacionados
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {reportagens
                            .filter(item => item.slug !== artigo.slug)
                            .slice(0, 3)
                            .map(relacionado => (
                                <Link 
                                    key={relacionado.id}
                                    href={`/artigos/${relacionado.slug}`}
                                    className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden p-5"
                                >
                                        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 text-sm sm:text-base">
                                            {relacionado.title}
                                        </h3>
                                    <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">
                                        {relacionado.description}
                                    </p>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

// Configurar modo de renderização como estático (SSG)
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidar a cada 1 hora

