import './index.css'; // Corrigido o caminho do CSS
import background from '../../images/background.mp4'; // Caminho correto para o vídeo
import { Link } from 'react-router-dom';
import Header from '../header/index.jsx'; // Corrigido o caminho do Header
import Footer from '../footer/footer';
import facebook from '../../images/icones redes sociais/facebook.png';
import instagram from '../../images/icones redes sociais/instagram.png';
import linkedin from '../../images/icones redes sociais/linkedin.png';

function Home() {
    const projetos = [
        {
            id: 1,
            titulo: "Ciclo de Palestras",
            descricao: "Ciclo de Palestra traz temas relevantes para a saúde e bem estar dos 60+, de 15 em 15 dias acontece uma palestra junto de um especialista no assunto abordado.",
            foto: "", // inserir foto
            link: "" // inserir o link da pagina que sera redirecionado 
        },
        {
            id: 2,
            titulo: "Inclusão Digital Para Idosos",
            descricao: "Inclusão Digital Para Idosos são aulas semanais que levam conhecimentos para os 60+, desde conhecimentos básicos até os problemas mais complexos com o Smartphone.",
            foto: "",
            link: ""
        },
        {
            id: 3,
            titulo: "Inclusão Digital Para Todos",
            descricao: "Inclusão Digital Para Todos leva conhecimentos sobre Tecnologias atuais, o inclusão digital para todos acontece uma vez por mês no Centro de Atenção a Terceira Idade (CATI).",
            foto: "",
            link: ""
        }
    ];
    const redesSociais = [
        {
            id: 1,
            titulo: "facebook",
            foto: facebook,
            link: "" // link facebook
        },
        {
            id: 2,
            titulo: "instagram",
            foto: instagram,
            link: "https://www.instagram.com/fundesj.sc/"
        },
        {
            id: 3,
            titulo: "Linkedin",
            foto: linkedin,
            link: "" // link linkedin
        }
    ];

    console.log(projetos);
    return (
        <div className="home">
            <Header />
            <div className="hero">
                {/* Agora o vídeo está dentro da .hero */}
                <video
                    className="video-bg"
                    src={background} // Usando o vídeo importado
                    type="video/mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>

                <div className="overlay" />
                <div className="hero-content">
                    <h1>FUNDESJ</h1>
                    <p>Fundação Educacional de São José</p>
                    <div className="buttons">
                        <button className="btn">SOBRE</button>
                        <button className="btn">INSCRIÇÕES</button>
                    </div>
                </div>
            </div>

            <div className="section-cards">
                <div className="card">
                    <i className="fas fa-sitemap"></i>
                    <p>PROGRAMAS</p>
                </div>
                <div className="card">
                    <i className="fas fa-file-alt"></i>
                    <p>PROJETOS</p>
                </div>
                <div className="card">
                    <i className="fas fa-book"></i>
                    <p>CURSOS</p>
                </div>
                <div className="card">
                    <i className="fas fa-users"></i>
                    <p>EVENTOS</p>
                </div>
            </div>
            <div className="section-info">
                <h2 className="subTitle">Nossos Projetos</h2>
                <p>
                    Conheça os projetos criados pela Fundação Educacional de São José que leva conhecimento para toda a <br />
                    população do Município.
                </p>
            </div>
            <div className="cards-projetos">
                {projetos.map((projeto) => (
                    <div className="card-projeto" key={projeto.id}>
                        <img src={projeto.foto} alt={projeto.titulo} />
                        <div className="card-body">
                            <h3>{projeto.titulo}</h3>
                            <p>{projeto.descricao}</p>
                            <Link to={projeto.link} className="conheca-link">
                                Conheça <span>&raquo;</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="section-info">
                <h2 className="subTitle">Redes Sociais</h2>
                <p>Fique por dentro de todos nossos trabalhos </p>
            </div>
            <div className="cards-redes-sociais">
                {redesSociais.map((app) => (
                    <div className="rede-social" key={app.id}>
                        <a href={app.link} target="blank">
                            <img src={app.foto} alt={app.titulo} />
                        </a>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Home;