import './idintermediario.css';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/footer.jsx';
import oficinaImg from '../../images/projetos/foto-pag-oficina-tematica.jpeg';

function Idintermediario() {
    return (
        <>
            <Header />

            <main className="idintermediario-container">
                <section className="idintermediario-hero">
                    <div className="idintermediario-content">

                        <h1>Oficina Temática de Inclusão Digital</h1>

                        <p>
                            A Fundação Educacional apresenta uma iniciativa voltada à promoção da inclusão digital
                            para pessoas com 60 anos ou mais. O projeto tem como propósito ampliar a autonomia,
                            a qualidade de vida e a participação social dos idosos na era tecnológica, por meio
                            de oficinas presenciais temáticas e estruturadas.
                        </p>
                    </div>

                    <div className="idintermediario-image-wrapper">
                        <div className="idintermediario-image">
                            <img
                                src={oficinaImg}
                                alt="Participantes da Oficina Temática de Inclusão Digital"
                            />
                        </div>
                    </div>
                </section>

                <section className="cards-container" aria-label="Ações da Oficina Temática de Inclusão Digital">
                    <article className="modern-card">
                        <a href="/idintermediario/conheca">
                            <span className="card-label">Projeto</span>

                            <h2>Conheça o Projeto</h2>

                            <p>
                                Descubra todos os detalhes sobre nossa metodologia, instrutores e o impacto
                                que estamos causando na comunidade.
                            </p>

                            <button className="card-button" type="button">
                                Saiba Mais
                            </button>
                        </a>

                        <div className="card-decoration"></div>
                    </article>

                    <article className="modern-card modern-card-highlight">
                        <a href="/idintermediario/inscricao">
                            <span className="card-label">Vagas limitadas</span>

                            <h2>Inscrições</h2>

                            <p>
                                Garanta sua vaga na próxima Oficina Temática. Vagas limitadas para melhor
                                aproveitamento e acompanhamento individual.
                            </p>

                            <button className="card-button" type="button">
                                Inscreva-se
                            </button>
                        </a>

                        <div className="card-decoration"></div>
                    </article>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default Idintermediario;