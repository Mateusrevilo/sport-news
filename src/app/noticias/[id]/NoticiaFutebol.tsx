import { reportagens } from "@/lib/reportagens";

type Props = {

    params: Promise<{
        id: number;
    }>



}



const NoticiaFutebol = async ({ params }: Props) => {
    const { id } = await params;

    const detalhes = reportagens.find(noticia => noticia.id === Number(id));

    if (!detalhes) {
        return (
            <>
                <div>
                    <h1>Notícia não encontrada.</h1>
                </div>
            </>
        );
    }

    const { description, title } = detalhes;

    return (
        <>
            <div>
                <h1>Noticias : {detalhes?.id}</h1>

                <section>
                    <article>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </article>
                </section>
            </div>

        </>
    )
}

export default NoticiaFutebol