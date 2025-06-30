import './index.css';
import background from '../../images/background.mp4'; // Caminho correto para o vídeo
import { Link } from 'react-router-dom';
import Header from '../header/index.jsx'; // Corrigido o caminho do Header
import Footer from '../footer/footer';
import facebook from '../../images/icones redes sociais/facebook.png';
import instagram from '../../images/icones redes sociais/instagram.png';
import linkedin from '../../images/icones redes sociais/linkedin.png';
import ciclo from '../../images/pagina inicial/ciclo.jpg';
import inclusaoidosos from '../../images/pagina inicial/inclusao.png';
import idtodos from '../../images/pagina inicial/idtodosfi.jpeg';
import Imagem1 from '../../images/pagina inicial/settings.png';
import Imagem2 from '../../images/pagina inicial/docs.png';
import Imagem3 from '../../images/pagina inicial/book.png';
import Imagem4 from '../../images/pagina inicial/team.png';
import WhatsAppButton from '../../pages/whatsapp/whatsAppbutton.jsx'; // Importando o botão do WhatsApp
function Home() {
    const projetos = [
        {
            id: 1,
            titulo: "Ciclo de Palestras",
            descricao: "Ciclo de Palestra traz temas relevantes para a saúde e bem estar dos 60+, de 15 em 15 dias É realizada uma palestra com a participação de um especialista no tema abordado.", 
            foto: ciclo,
            link: "./ciclo" 
        },
        {
            id: 2,
            titulo: "Curso Básico Inclusão Digital",
            descricao: "Inclusão Digital Para Idosos são aulas semanais que levam conhecimentos para os 60+, abordando os conhecimentos básicos para a utilização de um Smartphone.",
            foto: inclusaoidosos,
            link: "./idbasico"
        },
        {
            id: 3,
            titulo: "Inclusão Digital Intermediário",
            descricao: "O Curso Inclusão Digital Intermediário oferece conhecimentos sobre as tecnologias atuais, com oficinas realizadas semanalmente no Centro de Atenção à Terceira Idade (CATI).",
            foto: idtodos, // Alterar para a foto correta
            link: "./idintermediario" // Corrigido o link para a página de ID Intermediário
        }
    ];
    const redesSociais = [
        {
            id: 1,
            titulo: "facebook",
            foto: facebook,
            link: "https://web.facebook.com/fundesj.sc?_rdc=1&_rdr#" // link facebook
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
            link: "https://www.linkedin.com/company/funda-o-educacional-de-s-o-jos-fundesj/posts/?feedView=all" // link linkedin
        }
    ];

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

                </div>
            </div>

            <div className="section-cards">
               <a href="./programas"><div className="card">
                    <i className="fas fa-sitemap"></i>
                    <img src={Imagem1} alt="imagem Programas" className='programas'/>
                    <p>PROGRAMAS</p>
                </div></a>
                <a href="./projetos"><div className="card">
                    <i className="fas fa-file-alt"></i>
                    <img src={Imagem2} alt="imagem Projetos" className='projetos'/>
                    <p>PROJETOS</p>
                </div></a>
                <a href="./cursos"><div className="card">
                    <i className="fas fa-book"></i>
                    <img src={Imagem3} alt="imagem Cursos" className='cursos'/>
                    <p>CURSOS</p>
                </div></a>
                <a href="./eventos"><div className="card">
                    <i className="fas fa-users"></i>
                    <img src={Imagem4} alt="imagem Eventos" className='eventos'/>
                    <p>EVENTOS</p>
                </div></a>
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
            <WhatsAppButton />
            <Footer />
        </div>
    );
}

export default Home;