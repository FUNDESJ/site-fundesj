import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../header';
import Footer from '../footer/footer';
import './ia.css'
const IntelienciaArtificial = () => {
    return (
        <>
            <Header />
            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Helmet>

            <div className="ia-course-container">
                {/* Hero Section */}
                <section className="ia-hero-section">
                    <div className="ia-hero-content">
                        <h1 className="ia-hero-title">Potencialidades das <span className="ia-hero-highlight">IAs no Serviço Público</span></h1>
                        <p className="ia-hero-subtitle">Capacitando servidores para transformar São José em uma cidade educadora e inovadora</p>
                   
                    </div>
                    <div className="ia-hero-overlay"></div>
                </section>

                {/* Introduction Section */}
                <section className="ia-section">
                    <div className="ia-section-header">
                        <h2 className="ia-section-title">Apresentação</h2>
                        <div className="ia-divider"></div>
                    </div>

                    <div className="ia-intro-content">
                        <p className="ia-intro-text">
                            Com o avanço tecnológico, a <strong>inteligência artificial (IA)</strong> tornou-se uma ferramenta essencial para a otimização dos processos de trabalho, especialmente no setor público. Reconhecendo as dificuldades de integração e a crescente demanda por soluções eficientes, a <strong>FUNDESJ</strong> promove o curso <strong>"Potencialidades das IAs no Aperfeiçoamento do serviço público de uma cidade educadora"</strong>.
                        </p>
                        <p className="ia-intro-text">
                            Este curso visa equipar os servidores da prefeitura de São José com conhecimentos práticos sobre IA, capacitando-os a melhorar a prestação de serviços à comunidade.
                        </p>
                        <div className="ia-highlight-box">
                            Com uma abordagem <strong>hands-on</strong>, os participantes aprenderão como a IA pode ser aplicada para aprimorar os serviços públicos, tornando São José um exemplo de cidade educadora e inovadora no uso de tecnologias avançadas para o bem comum.
                        </div>
                    </div>
                </section>

                {/* Program Section */}
                <section className="ia-section">
                    <div className="ia-section-header">
                        <h2 className="ia-section-title">Programação</h2>
                        <div className="ia-divider"></div>
                    </div>

                    <div className="ia-modules-container">
                        <div className="ia-module-card">
                            <div className="ia-module-header">
                                <h3 className="ia-module-title">Módulo 1</h3>
                                <span className="ia-module-duration">3 horas</span>
                            </div>
                            <div className="ia-module-body">
                                <h4 className="ia-module-subtitle">Futuros possíveis e desejáveis com as Inteligências Artificiais</h4>
                                <p>Exploração de cenários e aplicações potenciais da IA no serviço público</p>
                            </div>
                        </div>

                        <div className="ia-module-card">
                            <div className="ia-module-header">
                                <h3 className="ia-module-title">Módulo 2</h3>
                                <span className="ia-module-duration">3 horas (2 turmas de 30 participantes)</span>
                            </div>
                            <div className="ia-module-body">
                                <h4 className="ia-module-subtitle">IA na Prática – Aprendendo a otimizar o serviço público</h4>
                                <p>Uso de ferramentas de inteligência artificial para eficiência administrativa</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Schedule Section */}
                <section className="ia-section">
                    <div className="ia-section-header">
                        <h2 className="ia-section-title">Data e Local</h2>
                        <div className="ia-divider"></div>
                    </div>

                    <div className="ia-schedule-container">
                        <div className="ia-schedule-card">
                            <div className="ia-date-badge">13/06/2024</div>
                            <div className="ia-schedule-details">
                                <p className="ia-schedule-text"><strong>Horário:</strong> 09h às 12h</p>
                                <p className="ia-schedule-text"><strong>Local:</strong> AEMFLO</p>
                                <p className="ia-schedule-text">R. Vidal Procópio Lohn, n° 91</p>
                            </div>
                        </div>

                        <div className="ia-schedule-card">
                            <div className="ia-date-badge">14/06/2024</div>
                            <div className="ia-schedule-details">
                                <p className="ia-schedule-text"><strong>Horários:</strong></p>
                                <p className="ia-schedule-text">• 08h às 10h (Turma 1)</p>
                                <p className="ia-schedule-text">• 10h às 12h (Turma 2)</p>
                                <p className="ia-schedule-text"><strong>Local:</strong> CITESJ</p>
                                <p className="ia-schedule-text">R. Bento Águido Viêira, n° 1463</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Facilitators Section */}
                <section className="ia-section">
                    <div className="ia-section-header">
                        <h2 className="ia-section-title">Facilitadoras</h2>
                        <div className="ia-divider"></div>
                    </div>

                    <div className="ia-facilitators-grid">
                        <div className="ia-facilitator-card">
                            <div className="ia-facilitator-photo"></div>
                            <div className="ia-facilitator-info">
                                <h3 className="ia-facilitator-name">Jeciane Golinhaki</h3>
                                <ul className="ia-facilitator-bio">
                                    <li className="ia-facilitator-bio-item">Mediadora de Conflitos</li>
                                    <li className="ia-facilitator-bio-item">Mestra em Sociedade e desenvolvimento</li>
                                    <li className="ia-facilitator-bio-item">Formadora de gestores e professores em Letramento de futuros</li>
                                    <li className="ia-facilitator-bio-item">Pesquisadora e autora de livros na área da aprendizagem e transformação digital</li>
                                </ul>
                            </div>
                        </div>

                        <div className="ia-facilitator-card">
                            <div className="ia-facilitator-photo"></div>
                            <div className="ia-facilitator-info">
                                <h3 className="ia-facilitator-name">Renata Caldas</h3>
                                <ul className="ia-facilitator-bio">
                                    <li className="ia-facilitator-bio-item">Advogada especialista em Direito Digital e Segurança da informação</li>
                                    <li className="ia-facilitator-bio-item">Mestranda em Big Data na Universidade Sapienza (Roma)</li>
                                    <li className="ia-facilitator-bio-item">Professora de Pós-graduação da UTFPR em Segurança Cibernética</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <div className='centraliza-secao'>
                <section className="ia-cta-section">
                    <h2 className="ia-cta-title">Transformando o serviço público através da inovação</h2>
                    <p className="ia-cta-text">Junte-se a nós nesta jornada de capacitação em inteligência artificial</p>        
                </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default IntelienciaArtificial;