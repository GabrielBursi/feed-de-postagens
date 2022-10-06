import Main from "../components/Main";

export default function MostViewed(){
    const posts = [
        {
            id: 1,        
            content: 'content',
            userName: 'Gabriel',
            publishedAt: new Date(),
        },
    ]
    return (
        <main className="most-viewed">
            <Main posts={posts} title="Mais Vistos" subtitle = "Acompanhe os assuntos mais comentados no momento e fique por dentro de qualquer novidade."/>
        </main>
    )
}