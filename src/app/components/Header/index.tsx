import Link from "next/link";


const Header = () => {
    return (
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-2 sm:px-4 lg:px-6 xl:px-8">
                <div className="flex items-center justify-center h-12 sm:h-14 md:h-16 relative">
                    <Link href="/" className="text-white text-lg sm:text-xl md:text-2xl font-bold hover:text-blue-200 transition-colors absolute left-0">
                        ⚽ Sports News
                    </Link>
                    <nav className="hidden sm:flex space-x-3 md:space-x-4 lg:space-x-6 xl:space-x-8">
                        <Link href="/" className="text-white hover:text-blue-200 transition-colors font-medium text-sm md:text-base px-2 py-1 rounded hover:bg-blue-700/20">
                            Início
                        </Link>
                        <Link href="/noticias/ligas" className="text-white hover:text-blue-200 transition-colors font-medium text-sm md:text-base px-2 py-1 rounded hover:bg-blue-700/20">
                            Ligas
                        </Link>
                        <Link href="/noticias/campeonatos" className="text-white hover:text-blue-200 transition-colors font-medium text-sm md:text-base px-2 py-1 rounded hover:bg-blue-700/20">
                            Campeonatos
                        </Link>
                        <Link href="/noticias/sport" className="text-white hover:text-blue-200 transition-colors font-medium text-sm md:text-base px-2 py-1 rounded hover:bg-blue-700/20">
                            Sport+
                        </Link>
                    </nav>
                    <button className="sm:hidden text-white absolute right-0 p-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
};


export default Header