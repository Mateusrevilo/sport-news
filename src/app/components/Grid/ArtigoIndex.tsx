import { Artigos } from "@/types/Artigos"
import CardArtigo from "../Card/CardArtigo"

type Props ={
    artigos : Artigos[]
}



const ArtigoIndex = ({artigos}: Props) => {
    return(
        <section className="container mx-auto px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 md:py-8 lg:py-10">
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
                {artigos.map(artigo => <CardArtigo key={artigo.id} card={artigo}/> )}
            </div>
        </section>

    )

}
export default ArtigoIndex