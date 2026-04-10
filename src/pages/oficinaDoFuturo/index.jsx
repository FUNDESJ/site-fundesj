import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import './oficinaFuturo.css';

function OficinaDoFuturo() {
    return (
        <>
            <Header />

            <main className="oficina-page">
                <section className="oficina-hero">
                    <div className="oficina-container">
                        <div className="oficina-hero-content">

                            <h1 className="oficina-title">Oficina do Futuro</h1>

                            <p className="oficina-subtitle">
                                Qualificação profissional gratuita para jovens em situação de
                                vulnerabilidade social e econômica, com foco em inclusão,
                                desenvolvimento e transformação de vidas.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="oficina-content-section">
                    <div className="oficina-container">
                        <div className="oficina-grid">
                            <div className="oficina-main-card">
                                <h2>Sobre o projeto</h2>

                                <p>
                                    A Fundação Municipal de Educação de São José/SC apresenta o
                                    <strong> Projeto Social Oficina do Futuro</strong>, uma iniciativa
                                    voltada à qualificação profissional gratuita de jovens em
                                    situação de vulnerabilidade social e econômica.
                                </p>

                                <p>
                                    O projeto foi estruturado a partir da escuta das demandas do
                                    mercado de trabalho e da necessidade de ampliar o acesso de
                                    jovens à formação profissional, à geração de renda e às
                                    oportunidades de inserção produtiva.
                                </p>

                                <p>
                                    Por meio da capacitação em <strong>funilaria</strong> e
                                    <strong> pintura automotiva</strong>, o Oficina do Futuro promove
                                    desenvolvimento técnico, fortalecimento de competências
                                    comportamentais e preparação para o mundo do trabalho.
                                </p>

                                <p>
                                    Mais do que oferecer formação inicial, a iniciativa reafirma o
                                    compromisso institucional com a inclusão social, a promoção da
                                    cidadania e a ampliação das perspectivas de futuro para a
                                    juventude de São José.
                                </p>

                                <p className="oficina-highlight-text">
                                    Investir em capacitação é investir em dignidade, autonomia e
                                    transformação social.
                                </p>
                            </div>

                            <aside className="oficina-side-card">
                                <h3>Compromisso institucional</h3>
                                <p>
                                    A Fundação Municipal de Educação de São José/SC atua com foco
                                    na educação, na inclusão e na construção de novas
                                    oportunidades para a juventude.
                                </p>

                                <div className="oficina-side-divider"></div>

                                <h3>Objetivos do projeto</h3>
                                <ul className="oficina-list">
                                    <li>Promover qualificação profissional gratuita</li>
                                    <li>Ampliar oportunidades de inserção produtiva</li>
                                    <li>Fortalecer competências técnicas e comportamentais</li>
                                    <li>Estimular autonomia, cidadania e geração de renda</li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </section>

                <section className="oficina-info-section">
                    <div className="oficina-container">
                        <div className="oficina-info-header">
                            <span className="oficina-section-tag">Fundação Municipal de Educação de São José/SC</span>
                            <h2>Compromisso com a educação, a inclusão e o futuro</h2>
                        </div>

                        <div className="oficina-info-card">
                            <p>
                                A Fundação Municipal de Educação de São José/SC apresenta o
                                Projeto Social Oficina do Futuro, uma iniciativa de qualificação
                                profissional gratuita voltada a jovens em situação de
                                vulnerabilidade social e econômica.
                            </p>

                            <p>
                                Com foco na formação em <strong>funilaria</strong> e
                                <strong> pintura automotiva</strong>, o projeto promove inclusão
                                social, desenvolvimento de competências e ampliação de
                                oportunidades para o mundo do trabalho.
                            </p>

                            <p className="oficina-final-message">
                                Educar, capacitar e transformar vidas é investir no futuro de São José.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default OficinaDoFuturo;