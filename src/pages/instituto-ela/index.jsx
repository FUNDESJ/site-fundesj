import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/footer.jsx';
import './institutoEla.css';
import heroImage from "../../images/fotos parceiros/ela.png"

function InstitutoEla() {
    return (
        <>
            <Header />

            <main className="ie-page">
                <section className="ie-hero">
                    <div className="ie-hero-grid">
                        <div className="ie-hero-text">
                            <h1>Instituto ELA – Educadoras do Brasil</h1>
                            <p className="ie-hero-subtitle">
                                Valorização da força feminina por meio da educação, acolhimento e transformação social.
                            </p>
                            <p className="ie-hero-desc">
                                A FUNDESJ é parceira do Instituto ELA – Educadoras do Brasil, organização sem fins
                                lucrativos que atua na valorização da força feminina, promovendo ações de educação,
                                acolhimento, fortalecimento e transformação social. O Instituto tem como propósito
                                inspirar mulheres a colaborar, apoiar e liderar projetos que impactem positivamente
                                suas comunidades, com foco no empoderamento feminino e na redução das desigualdades.
                            </p>

                            <a
                                href="https://www.institutoela.org.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ie-btn ie-btn-primary"
                            >
                                Conheça o Instituto ELA
                            </a>
                        </div>

                        <div className="ie-hero-visual">
                            <img src={heroImage} alt="Instituto ELA" className="ie-hero-img" />
                        </div>
                    </div>
                </section>

                <section className="ie-section">
                    <div className="ie-container">
                        <span className="ie-section-tag">Atuação Regional</span>
                        <h2 className="ie-section-title">Liderança da FUNDESJ em Santa Catarina</h2>
                        <p className="ie-section-text">
                            Em Santa Catarina, a atuação do Instituto ELA conta com a liderança regional
                            da superintendência da FUNDESJ, fortalecendo a presença da instituição no
                            município de São José, na comunidade SOLEMAR.
                        </p>

                        <div className="ie-cards">
                            <div className="ie-card">
                                <h3>Iniciativas em andamento</h3>
                                <p>
                                    Saúde da mulher, combate à violência, formação para o trabalho e
                                    promoção da autonomia feminina.
                                </p>
                            </div>
                            <div className="ie-card">
                                <h3>Compromisso</h3>
                                <p>
                                    Educação, inclusão social e construção de oportunidades para mulheres,
                                    contribuindo para uma sociedade mais justa, segura e igualitária.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ie-quote-section">
                    <div className="ie-container">
                        <div className="ie-quote-card">
                            <p className="ie-quote-text">
                                Inspirar mulheres a colaborar, apoiar e liderar projetos que impactem
                                positivamente suas comunidades.
                            </p>
                            <span className="ie-quote-source">— Instituto ELA</span>

                            <div className="ie-quote-link">
                                <a
                                    href="https://www.institutoela.org.br/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ie-link"
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