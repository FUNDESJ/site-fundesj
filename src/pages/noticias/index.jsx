import Footer from '../footer/footer';
import Header from '../header/index.jsx';
import './noticias.css';

function Noticias() {
    const newsData = [
        {
            id: 1,
            titulo: "Nova Lei de Proteção de Dados é aprovada",
            descricao: "O Congresso aprovou uma nova lei de proteção de dados que impactará empresas de tecnologia em todo o país.",
            foto: "https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2025/05/20250506_MARIANASMANIA-68.webp?resize=960%2C640&ssl=1",
            url: "https://saojose.sc.gov.br/sao-jose-prossegue-com-os-trabalhos-de-recuperacao-e-limpeza-de-ruas/78160/"
        }
    ];

    return (
        <>
            <Header />
            <div className="noticias-container">
                {newsData.map((noticia) => (
                    <div key={noticia.id} className="noticia">
                        <img src={noticia.foto} alt={noticia.titulo} />
                        <h2>{noticia.titulo}</h2>
                        <p>{noticia.descricao}</p>
                        <a href={noticia.url}>Leia mais</a>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}

export default Noticias;