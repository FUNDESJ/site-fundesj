import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../header';
import Footer from '../footer/footer';
import './orientacao.css';

const Neurodiversidade = () => {
    return (
        <>
            <Header />
            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Helmet>

            <div className="neuro-course-container">
                {/* Hero Section */}
                <section className="neuro-hero-section">
                    <div className="neuro-hero-content">
                        <h1 className="neuro-hero-title">Oficina de <span className="neuro-hero-highlight">Neurodiversidade</span></h1>
                        <p className="neuro-hero-subtitle">Estratégias para inclusão educacional de crianças com necessidades especiais</p>
                    </div>
                    <div className="neuro-hero-overlay"></div>
                </section>

                {/* Introduction Section */}
                <section className="neuro-section">
                    <div className="neuro-section-header">
                        <h2 className="neuro-section-title">Apresentação</h2>
                        <div className="neuro-divider"></div>
                    </div>

                    <div className="neuro-intro-content">
                        <p className="neuro-intro-text">
                            A oficina, ministrada pelo renomado Dr. Rodrigo Sartório, Mestre em Neurociência e Comportamento e Especialista em Neuropsicopedagogia Clínica, com um Doutorado em Psicobiologia, se propõe a ser um marco na promoção da colaboração entre educadores e famílias.
                        </p>
                        <p className="neuro-intro-text">
                            Seu principal objetivo é fornecer não apenas conhecimento, mas também ferramentas práticas e estratégias eficazes para promover a inclusão de crianças com necessidades especiais dentro do ambiente educacional. Com uma abordagem dinâmica e interativa, a oficina visa criar um espaço de aprendizado inclusivo, onde as diferenças individuais são não apenas reconhecidas, mas também celebradas.
                        </p>
                        <div className="neuro-highlight-box">
                            Ao longo das sessões, os participantes serão capacitados a compreender melhor as necessidades específicas das crianças com diversidade funcional, bem como a desenvolver habilidades e recursos para atender a essas necessidades de maneira eficaz.
                        </div>
                        <p className="neuro-intro-text">
                            Além disso, serão exploradas estratégias pedagógicas e metodologias inclusivas, adaptadas às diferentes realidades e contextos educacionais. O objetivo é capacitar os participantes a criar ambientes de aprendizado que não apenas acolham, mas também estimulem o potencial de cada criança, promovendo assim a equidade e a justiça social.
                        </p>
                    </div>
                </section>

                {/* Program Section */}
                <section className="neuro-section">
                    <div className="neuro-section-header">
                        <h2 className="neuro-section-title">Programação</h2>
                        <div className="neuro-divider"></div>
                    </div>

                    <div className="neuro-modules-container">
                        <div className="neuro-module-card">
                            <div className="neuro-module-header">
                                <h3 className="neuro-module-title">15 de Abril</h3>
                                <span className="neuro-module-duration">18:30 - 20:30</span>
                            </div>
                            <div className="neuro-module-body">
                                <h4 className="neuro-module-subtitle">O que é Parentalidade Neurodivergente: como agir</h4>
                            </div>
                        </div>

                        <div className="neuro-module-card">
                            <div className="neuro-module-header">
                                <h3 className="neuro-module-title">22 de Abril</h3>
                                <span className="neuro-module-duration">18:30 - 20:30</span>
                            </div>
                            <div className="neuro-module-body">
                                <h4 className="neuro-module-subtitle">Genética e Neurociência dos Transtornos do Neurodesenvolvimento: uma abordagem evolucionista</h4>
                            </div>
                        </div>

                        <div className="neuro-module-card">
                            <div className="neuro-module-header">
                                <h3 className="neuro-module-title">29 de Abril</h3>
                                <span className="neuro-module-duration">18:30 - 20:30</span>
                            </div>
                            <div className="neuro-module-body">
                                <h4 className="neuro-module-subtitle">Aprendendo a lidar com as sensações, percepções e emoções</h4>
                            </div>
                        </div>

                        <div className="neuro-module-card">
                            <div className="neuro-module-header">
                                <h3 className="neuro-module-title">05 de Junho</h3>
                                <span className="neuro-module-duration">18:30 - 20:30</span>
                            </div>
                            <div className="neuro-module-body">
                                <h4 className="neuro-module-subtitle">Adaptações e abordagens especiais para estudantes na condição autista</h4>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Schedule Section */}
                <section className="neuro-section">
                    <div className="neuro-section-header">
                        <h2 className="neuro-section-title">Data e Local do Evento</h2>
                        <div className="neuro-divider"></div>
                    </div>

                    <div className="neuro-schedule-container">
                        <div className="neuro-schedule-card">
                            <div className="neuro-date-badge">15, 22, 29 de maio e 05 de junho</div>
                            <div className="neuro-schedule-details">
                                <p className="neuro-schedule-text"><strong>Horário:</strong> 18:30 - 20:30</p>
                                <p className="neuro-schedule-text"><strong>Local:</strong> Auditório da Secretaria Municipal de Educação de São José</p>
                                <p className="neuro-schedule-text">Avenida Acioni Souza Filho</p>
                                <p className="neuro-schedule-text">São José - Praia Comprida</p>
                                <p className="neuro-schedule-text">CEP: 88.103-790</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Facilitators Section */}
                <section className="neuro-section">
                    <div className="neuro-section-header">
                        <h2 className="neuro-section-title">Ministrante</h2>
                        <div className="neuro-divider"></div>
                    </div>

                    <div className="neuro-facilitators-grid">
                        <div className="neuro-facilitator-card">
                            <div className="neuro-facilitator-photo"></div>
                            <div className="neuro-facilitator-info">
                                <h3 className="neuro-facilitator-name">DR. RODRIGO SARTÓRIO</h3>
                                <ul className="neuro-facilitator-bio">
                                    <li className="neuro-facilitator-bio-item">Biólogo, Mestre em Neurociência e Comportamento</li>
                                    <li className="neuro-facilitator-bio-item">Doutor em Psicobiologia</li>
                                    <li className="neuro-facilitator-bio-item">Especialista em Neuropsicopedagogia Clínica</li>
                                    <li className="neuro-facilitator-bio-item">Atua na área de desenvolvimento neural e cognitivo de crianças e adolescentes</li>
                                    <li className="neuro-facilitator-bio-item">Professor de Neurociência na graduação e pós-graduação em educação e psicologia</li>
                                    <li className="neuro-facilitator-bio-item">Pesquisador e Escritor na interface entre Neurociência, Educação e Saúde</li>
                                    <li className="neuro-facilitator-bio-item">Idealizador e Diretor Pedagógico da Escola Intuitiva</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <div className='centraliza-secao'>
                    <section className="neuro-cta-section">
                        <h2 className="neuro-cta-title">Construindo uma educação mais inclusiva e acolhedora</h2>
                        <p className="neuro-cta-text">Junte-se a nós nesta jornada de capacitação em neurodiversidade</p>        
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Neurodiversidade;