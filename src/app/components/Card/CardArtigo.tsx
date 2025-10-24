import { Artigos } from "@/types/Artigos"
import Link from "next/link";

type Props = {
    card: Artigos
}



const CardArtigo = ({ card }: Props) => {
    const formatDate = (timestamp: number) => {
        return new Date(timestamp).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
    };

    return (
        <Link href={`/artigos/${card.slug}`} className="block">
            <div className="bg-white rounded-md sm:rounded-lg shadow-md sm:shadow-lg overflow-hidden hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-0.5 sm:hover:-translate-y-1 cursor-pointer">
                <div className="p-4 sm:p-5 md:p-6 lg:p-5 xl:p-6 flex flex-col flex-grow">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 hover:text-blue-600 transition-colors leading-tight">
                        {card.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-sm lg:text-xs xl:text-sm mb-2 sm:mb-3 md:mb-4 line-clamp-2 sm:line-clamp-3 flex-grow leading-relaxed">
                        {card.description}
                    </p>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">
                        {formatDate(card.date)}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default CardArtigo