import './idintermediario.css';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/footer.jsx';

function Idintermediario() {
    return (
        <>
            <Header />
            <div className="idintermediario-container">
                <div className="idintermediario-hero">
                    <div className="idintermediario-content">
                        <h1>Oficina Temática de Inclusão Digital</h1>
                        <p>
                            A Fundação Educacional apresenta uma iniciativa voltada à promoção da inclusão digital para pessoas com 60 anos ou mais. O projeto tem como propósito ampliar
                            a autonomia, a qualidade de vida e a participação social dos idosos na era tecnológica, por meio de oficinas presenciais temáticas e estruturadas.
                        </p>
                    </div>
                    <div className="idintermediario-image">
                        <img src="https://apadep.org.br/wp-content/uploads/2020/06/WhatsApp-Image-2020-06-09-at-15.51.27.jpeg"
                            alt="Curso de Inclusão Digital Intermediário"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://via.placeholder.com/800x600?text=Curso+Inclusão+Digital";
                            }} />
                    </div>
                </div>

                <div className="cards-container">
                    <div className="modern-card">
                        <a href='/idintermediario/conheca'>
                            <h2>Conheça o Projeto</h2>
                            <p>Descubra todos os detalhes sobre nossa metodologia, instrutores e o impacto que estamos causando na comunidade.</p>
                            <button className="card-button">Saiba Mais</button>
                        </a>
                        <div className="card-decoration"></div>
                    </div>

                    <div className="modern-card">
                        <a href='/idintermediario/inscricao'>
                            <h2>Inscrições</h2>
                            <p>Garanta sua vaga na próxima Oficina Temática. Vagas limitadas para melhor aproveitamento.</p>
                            <button className="card-button">Inscreva-se</button>
                        </a>
                        <div className="card-decoration"></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Idintermediario;