import './ciclo.css';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import { Link } from 'react-router-dom';

function Ciclo() {
    return (
        <>
            <Header />

            <main className="ciclo-page">
                <section className="ciclo-hero">
                    <div className="ciclo-container">
                        <div className="ciclo-hero-content">
                            <h1 className="ciclo-title">
                                Ciclo de Palestras sobre Longevidade Ativa
                            </h1>

                            <p className="ciclo-subtitle">
                                O Programa Longevidade Ativa da Prefeitura Municipal de São José
                                promove em 2026 um ciclo de palestras quinzenais sobre
                                envelhecimento saudável, reunindo especialistas e conteúdos
                                práticos para uma vida mais plena e ativa na terceira idade.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="ciclo-content-section">
                    <div className="ciclo-container">
                        <div className="ciclo-grid">
                            <div className="ciclo-main-card">
                                <h2>Sobre o ciclo de palestras</h2>

                                <p>
                                    O Programa Longevidade Ativa da Prefeitura Municipal de São
                                    José promove em 2026 um ciclo de palestras quinzenais sobre
                                    envelhecimento saudável. Realizadas às sextas-feiras, estas
                                    sessões trazem especialistas para compartilhar conhecimentos
                                    e práticas para uma vida plena na terceira idade.
                                </p>

                                <p>
                                    Cada encontro aborda temas essenciais como
                                    <strong> saúde física</strong>,
                                    <strong> bem-estar emocional</strong>,
                                    <strong> planejamento financeiro</strong> e
                                    <strong> manutenção de relações sociais</strong>, sempre com
                                    base em evidências científicas e abordagens práticas.
                                </p>

                                <div className="ciclo-location-box">
                                    <p className="ciclo-local">
                                        <span className="ciclo-local-icon">📍</span>
                                        Centro de Atenção à Terceira Idade (CATI) - Av. Acioni
                                        Souza Filho, s/n - Praia Comprida, São José - SC
                                    </p>
                                </div>

                                <div className="ciclo-buttons">
                                    <Link to="/ciclo/inscricoes" className="ciclo-btn-primary">
                                        Inscreva-se
                                    </Link>

                                    <Link to="/calendario" className="ciclo-btn-secondary">
                                        Ver Calendário
                                    </Link>
                                </div>
                            </div>

                            <aside className="ciclo-side-card">
                                <h3>Destaques do programa</h3>

                                <ul className="ciclo-list">
                                    <li>Palestras quinzenais com especialistas</li>
                                    <li>Conteúdo acessível e baseado em evidências</li>
                                    <li>Temas voltados à saúde, autonomia e qualidade de vida</li>
                                    <li>Estímulo à convivência e participação social</li>
                                </ul>

                                <div className="ciclo-side-divider"></div>

                                <h3>Objetivo</h3>
                                <p>
                                    Promover informação, acolhimento e incentivo ao
                                    envelhecimento saudável por meio de encontros educativos e
                                    experiências enriquecedoras para a terceira idade.
                                </p>
                            </aside>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default Ciclo;