import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/footer.jsx';
import './institutoEla.css';
import image1 from "../../images/fotos parceiros/ela.png"

function InstitutoEla() {
    return (
        <>
            <Header />

            <main className="iela-page">
                <section className="iela-hero">
                    <div className="iela-container iela-hero-content">
                        <div className="iela-hero-text">
                            <h1>Instituto ELA – Educadoras do Brasil</h1>

                            <p className="iela-hero-subtitle">
                                Valorização da força feminina por meio da educação, acolhimento e transformação social.
                            </p>

                            <p className="iela-hero-description">
                                A FUNDESJ é parceira do Instituto ELA – Educadoras do Brasil,
                                organização sem fins lucrativos que atua na valorização da força
                                feminina, promovendo ações de educação, acolhimento, fortalecimento
                                e transformação social. O Instituto tem como propósito inspirar
                                mulheres a colaborar, apoiar e liderar projetos que impactem
                                positivamente suas comunidades, com foco no empoderamento feminino
                                e na redução das desigualdades.
                            </p>

                            <div className="iela-hero-actions">
                                <a
                                    href="https://www.institutoela.org.br/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="iela-btn iela-btn-primary"
                                >
                                    Conheça o Instituto ELA
                                </a>
                            </div>
                        </div>

                        <div className="iela-hero-image-wrapper">
                            <img
                                src={image1}
                                alt="Logo do Instituto ELA – Educadoras do Brasil"
                                className="iela-hero-image"
                            />
                        </div>
                    </div>
                </section>

                <section className="iela-section">
                    <div className="iela-container">
                        <div className="iela-section-heading">
                            <span className="iela-section-tag">Atuação Regional</span>
                            <h2>Liderança da FUNDESJ em Santa Catarina</h2>
                            <p>
                                Em Santa Catarina, a atuação do Instituto ELA conta com a liderança
                                regional da superintendência da FUNDESJ, fortalecendo a presença da
                                instituição no município de São José, na comunidade SOLEMAR. Por
                                meio dessa parceria, estão sendo desenvolvidas iniciativas voltadas
                                à saúde da mulher, ao combate à violência, à formação para o
                                trabalho e à promoção da autonomia feminina.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="iela-section iela-section-light">
                    <div className="iela-container">
                        <div className="iela-section-heading">
                            <span className="iela-section-tag">Compromisso</span>
                            <h2>Educação, inclusão e oportunidades para mulheres</h2>
                            <p>
                                A parceria reafirma o compromisso da FUNDESJ com a educação, a
                                inclusão social e a construção de oportunidades para mulheres,
                                contribuindo para uma sociedade mais justa, segura e igualitária.
                            </p>
                        </div>

                        <div className="iela-highlight-card">
                            <p className="iela-highlight-text">
                                Inspirar mulheres a colaborar, apoiar e liderar projetos que
                                impactem positivamente suas comunidades.
                            </p>
                            <span className="iela-highlight-source">— Instituto ELA</span>

                            <div className="iela-highlight-link">
                                <a
                                    href="https://www.institutoela.org.br/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="iela-link"
                                >
                                    www.institutoela.org.br →
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default InstitutoEla;