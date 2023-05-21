import BigFirstCard from './BigFirstCard';
import Card from './Card';

const articles = [
    {
       
        title: "Country life 🏜️",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi tenetur laboriosam temporibus quibusdam impedit inventore enim? Alias placeat dolorum amet sint. Odit fugit sed adipisci. Molestiae distinctio vel harum enim?",
        image: "https://source.unsplash.com/sYffw0LNr7s",
        date:"2022-07-23",
    },
    {   title:"Mountains ⛰️",
        content:"orem ipsum dolor sit amet consectetur, adipisicing elit. Commodi tenetur laboriosam temporibus quibusdam impedit inventore enim? Alias placeat dolorum amet sint. Odit fugit sed adipisci. Molestiae distinctio vel harum enim?",
        image:"https://source.unsplash.com/V7WkmXntA8M",
        date:"2022-01-01",

    },
    {
        title:"Valleys 🏕️",
        content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi tenetur laboriosam temporibus quibusdam impedit inventore enim? Alias placeat dolorum amet sint. Odit fugit sed adipisci. Molestiae distinctio vel harum enim?",
        image:"https://source.unsplash.com/W5FdAcHp7l8",
        date:"2021-03-02" ,
    }
]

function Main() {
    return (
        <>
        <main className="container">
            <BigFirstCard/>

            {articles.map( article => (
                        <Card key={article.id} id={article.id} title={article.title} content={article.content} image={article.image} date={article.date} />
                    ))}
        </main>

        </>
    )
}

export default Main;