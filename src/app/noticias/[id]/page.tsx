import { reportagens } from "@/lib/reportagens";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{
        id: string;
    }>
}

export async function generateMetadata({ params }: Props) {
    const { id } = await params;
    const noticia = reportagens.find(noticia => noticia.id === Number(id));
    
    if (!noticia) {
        return {
            title: "Notícia não encontrada - Sports News",
            description: "A notícia solicitada não foi encontrada."
        };
    }

    return {
        title: `${noticia.title} - Sports News`,
        description: noticia.description,
    };
}

export default async function NoticiaPage({ params }: Props) {
    const { id } = await params;
    const noticia = reportagens.find(noticia => noticia.id === Number(id));

    if (!noticia) {
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
                            Notícias
                        </Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-600 truncate max-w-xs sm:max-w-md">
                            {noticia.title}
                        </span>
                    </nav>
                </div>
            </div>

            {/* Conteúdo da Notícia */}
            <article className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Cabeçalho da Notícia */}
                    <header className="mb-6 sm:mb-8">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                            {noticia.title}
                        </h1>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
                            <time className="text-gray-600 text-sm sm:text-base font-medium">
                                📅 {formatDate(noticia.date)}
                            </time>
                            <div className="flex items-center space-x-4">
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                    Esportes
                                </span>
                            </div>
                        </div>
                    </header>

                    {/* Imagem Principal */}
                 

                    {/* Conteúdo da Notícia */}
                    <div className="prose prose-lg max-w-none">
                        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                                {noticia.description}
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
                            href="/noticias/ligas"
                            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                        >
                            ← Voltar às Notícias
                        </Link>
                        
                        <button className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                            📤 Compartilhar
                        </button>
                    </div>
                </div>
            </article>

            {/* Notícias Relacionadas */}
            <section className="bg-white border-t">
                <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                        Notícias Relacionadas
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {reportagens
                            .filter(item => item.id !== noticia.id)
                            .slice(0, 3)
                            .map(relacionada => (
                                <Link 
                                    key={relacionada.id}
                                    href={`/noticias/${relacionada.id}`}
                                    className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                                >
                                    <div className="relative h-40 sm:h-48">
                                        <Image 
                                            src={relacionada.foto} 
                                            alt={relacionada.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 text-sm sm:text-base">
                                            {relacionada.title}
                                        </h3>
                                        <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">
                                            {relacionada.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
