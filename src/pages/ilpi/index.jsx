import Header from '../../components/header/index.jsx'
import Footer from '../../components/footer/footer.jsx'
import './ilpi.css'
import { FaHeart, FaUsers, FaHandsHelping, FaBookReader, FaChartLine } from 'react-icons/fa'

export default function BemEstarConectividade() {
    return (
        <>
            <Header />
            <div className="ilpi-container">
                <div className="ilpi-hero">
                    <div className="ilpi-hero-content">
                        <h1 className="ilpi-hero-title">
                            <span>Bem-Estar e Conectividade</span>
                            Transformando Vidas nas Instituições de Longa Permanência
                        </h1>
                        <p className="ilpi-hero-text">
                            Inovação, cuidado e tecnologia para a melhor idade - uma abordagem integrada que renova o cotidiano dos idosos.
                        </p>
                    </div>
                </div>

                <div className="ilpi-content-flow">
                    <section className="ilpi-flow-section">
                        <div className="ilpi-section-content">
                            <FaHeart className="ilpi-section-icon" />
                            <h2>Nossa Missão</h2>
                            <p>
                                O projeto <strong>Bem-Estar e Conectividade</strong> transcende as atividades convencionais, criando ecossistemas de cuidado integrado onde tecnologia e afeto se harmonizam. Nossa abordagem personalizada adapta metodologias exclusivas às necessidades específicas de cada instituição.
                            </p>
                        </div>
                        <div className="ilpi-section-image ilpi-mission-image"></div>
                    </section>

                    <section className="ilpi-flow-section ilpi-reverse">
                        <div className="ilpi-section-content">
                            <FaHandsHelping className="ilpi-section-icon" />
                            <h2>Abordagem Integrada</h2>
                            <ul className="ilpi-feature-list">
                                <li>
                                    <span className="ilpi-feature-highlight">Atividades interativas</span> que combinam tecnologia e afeto
                                </li>
                                <li>
                                    <span className="ilpi-feature-highlight">Sessões semanais</span> com acompanhamento multiprofissional
                                </li>
                                <li>
                                    <span className="ilpi-feature-highlight">Materiais didáticos</span> e recursos tecnológicos acessíveis
                                </li>
                            </ul>
                            <p>
                                Todos os equipamentos são obtidos através de doações e recursos próprios, garantindo a sustentabilidade do projeto.
                            </p>
                        </div>
                        <div className="ilpi-section-image ilpi-approach-image"></div>
                    </section>

                    <section className="ilpi-flow-section">
                        <div className="ilpi-section-content">
                            <FaUsers className="ilpi-section-icon" />
                            <h2>Impacto Social</h2>
                            <div className="ilpi-impact-grid">
                                <div className="ilpi-impact-item">
                                    <div className="ilpi-impact-label"><b>Melhora no bem-estar emocional</b></div>
                                </div>
                                <div className="ilpi-impact-item">
                                    <div className="ilpi-impact-label"><b>Aumento na interação social</b></div>
                                </div>
                                <div className="ilpi-impact-item">
                                    <div className="ilpi-impact-label"><b>Satisfação dos participantes</b></div>
                                </div>
                            </div>
                        </div>
                        <div className="ilpi-section-image ilpi-impact-image"></div>
                    </section>

                    <section className="ilpi-cta-section">
                        <FaBookReader className="ilpi-cta-icon" />
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