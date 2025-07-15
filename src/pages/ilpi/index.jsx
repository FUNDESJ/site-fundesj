import Header from '../header/index.jsx'
import Footer from '../footer/footer.jsx'
import './ilpi.css'
import { FaHeart, FaUsers, FaHandsHelping, FaBookReader, FaChartLine } from 'react-icons/fa'

export default function BemEstarConectividade() {
    return (
        <>
            <Header />
            <div className="bem-estar-container">
                <div className="bem-estar-hero">
                    <div className="hero-content">
                        <h1 className="heroi-title">
                            <span>Bem-Estar e Conectividade</span>
                            Transformando Vidas nas Instituições de Longa Permanência
                        </h1>
                        <p className="hero-text">
                            Inovação, cuidado e tecnologia para a melhor idade - uma abordagem integrada que renova o cotidiano dos idosos.
                        </p>
                    </div>
                </div>

                <div className="content-flow">
                    <section className="flow-section">
                        <div className="section-content">
                            <FaHeart className="section-icon" />
                            <h2>Nossa Missão</h2>
                            <p>
                                O projeto <strong>Bem-Estar e Conectividade</strong> transcende as atividades convencionais, criando ecossistemas de cuidado integrado onde tecnologia e afeto se harmonizam. Nossa abordagem personalizada adapta metodologias exclusivas às necessidades específicas de cada instituição.
                            </p>
                        </div>
                        <div className="section-image mission-image"></div>
                    </section>

                    <section className="flow-section reverse">
                        <div className="section-content">
                            <FaHandsHelping className="section-icon" />
                            <h2>Abordagem Integrada</h2>
                            <ul className="feature-list">
                                <li>
                                    <span className="feature-highlight">Atividades interativas</span> que combinam tecnologia e afeto
                                </li>
                                <li>
                                    <span className="feature-highlight">Sessões semanais</span> com acompanhamento multiprofissional
                                </li>
                                <li>
                                    <span className="feature-highlight">Materiais didáticos</span> e recursos tecnológicos acessíveis
                                </li>
                            </ul>
                            <p>
                                Todos os equipamentos são obtidos através de doações e recursos próprios, garantindo a sustentabilidade do projeto.
                            </p>
                        </div>
                        <div className="section-image approach-image"></div>
                    </section>

                    <section className="flow-section">
                        <div className="section-content">
                            <FaUsers className="section-icon" />
                            <h2>Impacto Social</h2>
                            <div className="impact-grid">
                                <div className="impact-item">
                                    <div className="impact-label"><b>Melhora no bem-estar emocional</b></div>
                                </div>
                                <div className="impact-item">
                                    <div className="impact-label"><b>Aumento na interação social</b></div>
                                </div>
                                <div className="impact-item">
                                    <div className="impact-label"><b>Satisfação dos participantes</b></div>
                                </div>
                            </div>
                        </div>
                        <div className="section-image impact-image"></div>
                    </section>

                    <section className="cta-section">
                        <FaBookReader className="cta-icon" />
                        <h2>Transformando Realidades</h2>
                        <p>
                            Nossa metodologia exclusiva está presente em instituições como o Lar dos Velhinhos de Zulma e o Lar de Idosos Irmão Erasto, criando ambientes que inspiram e acolhem.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    )
}