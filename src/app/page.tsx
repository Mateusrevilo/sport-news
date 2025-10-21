import Grid from "./components/Grid/ArtigoIndex";
import { reportagens} from "@/lib/reportagens"



export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section com Vídeo de Fundo */}
      <section className="relative h-screen w-full overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          {/* Fallback para navegadores que não suportam vídeo */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>
        </video>
        
        {/* Overlay escuro para melhor legibilidade */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        {/* Conteúdo sobreposto */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight">
            As Melhores Notícias do Mundo dos Sports
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl leading-relaxed">
            Fique por dentro das últimas novidades do futebol, basquete, tênis, F1 e muito mais
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
            Ver Notícias
          </button>
        </div>
        
        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </section>
      
      {/* Seção de Notícias */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          
          <Grid artigos={reportagens} />
        </div>
      </section>
    </div>
  );
}
