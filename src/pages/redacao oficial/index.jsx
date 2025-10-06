import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../header';
import Footer from '../footer/footer';
import './redacao-oficial.css';
import HeroCursos from '../../components/heros/hero_cursos.jsx';
const RedacaoOficial = () => {
    return (
        <>
            <Header />
            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Helmet>

            <div className="ro-course-container">
       
                <HeroCursos
                titulo1="Curso de"
                titulo2= 'Redação Oficial'
                subtitulo="Capacitação para servidores da Administração Pública Municipal de São José"
                />
                {/* Introduction Section */}
                <section className="ro-section">
                    <div className="ro-section-header">
                        <h2 className="ro-section-title">Apresentação</h2>
                        <div className="ro-divider"></div>
                    </div>

                    <div className="ro-intro-content">
                        <p className="ro-intro-text">
                            O Curso de Redação Oficial objetiva capacitar servidores da Administração Pública Municipal de São José.
                        </p>
                        <p className="ro-intro-text">
                            A participação dos servidores nos programas de capacitação promove a valorização profissional, a progressão funcional, e principalmente a melhoria do desempenho dos servidores públicos, transformando positivamente os processos de trabalho.
                        </p>
                        <div className="ro-highlight-box">
                            A redação oficial é importantíssima porque ela reflete a organização, a forma adequada de comunicação com os entes públicos e com os cidadãos josefenses.
                        </div>
                    </div>
                </section>

     
                <section className="ro-section">
                    <div className="ro-section-header">
                        <h2 className="ro-section-title">Programação</h2>
                        <div className="ro-divider"></div>
                    </div>

                    <div className="ro-modules-container">
                        <div className="ro-module-card">
                            <div className="ro-module-header">
                                <h3 className="ro-module-title">Módulo 01</h3>
                            </div>
                            <div className="ro-module-body">
                                <ul className="ro-schedule-list">
                                    <li className="ro-schedule-item">Turma 1: 26 de março de 2024 – 14h às 17h</li>
                                    <li className="ro-schedule-item">Turma 2: 27 de março de 2024 – 14h às 17h</li>
                                    <li className="ro-schedule-item">Turma 3: 25 de março de 2024 – 14h às 17h</li>
                                    <li className="ro-schedule-item">Turma 4: 02 de abril de 2024 – 14h às 17h</li>
                                    <li className="ro-schedule-item">Turma 5: 03 de abril de 2024 – 14h às 17h</li>
                                    <li className="ro-schedule-item">Turma 6: 04 de abril de 2024 – 14h às 17h</li>
                                </ul>
                            </div>
                        </div>

                        <div className="ro-module-card">
                            <div className="ro-module-header">
                                <h3 className="ro-module-title">Módulo 02</h3>
                            </div>
                            <div className="ro-module-body">
                                <ul className="ro-schedule-list">
                                    <li className="ro-schedule-item">Turma 1: 09 de abril de 2024 – 14h às 17h</li>
                                    <li className="ro-schedule-item">Turma 2: 10 de abril de 2024 – 14h às 17h</li>
                                    <li className="ro-schedule-item">Turma 3: 11 de abril de 2024 – 14h às 17h</li>
                                    <li className="ro-schedule-item">Turma 4: 16 de abril de 2024 – 14h às 17h</li>
                                    <li className="ro-schedule-item">Turma 5: 17 de abril de 2024 – 14h às 17h</li>
                                    <li className="ro-schedule-item">Turma 6: 18 de abril de 2024 – 14h às 17h</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="ro-section">
                    <div className="ro-section-header">
                        <h2 className="ro-section-title">Conteúdo Programático</h2>
                        <div className="ro-divider"></div>
                    </div>

                    <div className="ro-content-container">
                        <div className="ro-content-card">
                            <h3 className="ro-content-title">1. Linguagem e Estilo na Redação Oficial</h3>
                            <ul className="ro-content-list">
                                <li>Uso da norma culta: ortografia, concordância, regência e crase;</li>
                                <li>Construção de frases e parágrafos: coerência e coesão;</li>
                                <li>Vícios de linguagem e clichês: como evitá-los;</li>
                                <li>Emprego de vocabulário técnico e jurídico;</li>
                                <li>Uso de pronomes de tratamento e formas de endereçamento;</li>
                                <li>Processo de revisão: verificação de erros gramaticais, clareza, objetividade e adequação ao contexto;</li>
                            </ul>
                        </div>

                        <div className="ro-content-card">
                            <h3 className="ro-content-title">2. Introdução à Redação Oficial</h3>
                            <ul className="ro-content-list">
                                <li>Conceito e objetivos da redação oficial;</li>
                                <li>Princípios da redação oficial: clareza, concisão, formalidade, impessoalidade, padronização e uso do padrão culto;</li>
                                <li>Legislação e manuais de redação oficial;</li>
                                <li>Estrutura e Formatação de Documentos Oficiais;</li>
                                <li>Formatação geral: tipo e tamanho de fonte, espaçamento, margens e parágrafos;</li>
                                <li>Numeração e paginação;</li>
                                <li>Uso de siglas, abreviações e símbolos;</li>
                                <li>Data, local e identificação do signatário;</li>
                            </ul>
                        </div>

                        <div className="ro-content-card">
                            <h3 className="ro-content-title">3. As Comunicações Oficiais</h3>
                            <p className="ro-content-subtitle">(de acordo com o Manual da Presidência da República, 3ª edição, atualizada e ampliada)</p>
                            <ul className="ro-content-list">
                                <li>O padrão Ofício e Memorando;</li>
                                <li>Exposição de Motivos;</li>
                                <li>Mensagem;</li>
                                <li>Parecer;</li>
                                <li>Nota Técnica;</li>
                                <li>Portaria;</li>
                                <li>Correio Eletrônico;</li>
                                <li>Produção de documentos oficiais: prática e análise de exemplos</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Facilitators Section */}
                <section className="ro-section">
                    <div className="ro-section-header">
                        <h2 className="ro-section-title">Ministrante</h2>
                        <div className="ro-divider"></div>
                    </div>

                    <div className="ro-facilitators-grid">
                        <div className="ro-facilitator-card">
                            <div className="ro-facilitator-photo">
                                <img src="https://e4n4itr6emt.exactdn.com/wp-content/uploads/2025/06/thumbnail_Escritora-Ana-Kelly-Brustolin-lanca-livro-na-Fundacao-Cultural-BADESC-em-Florianopolis.-credito-divulgacao.jpg?strip=all&lossy=1&ssl=1" alt="ANA KELLY BORBA" className='ro-facilitator-img'/>
                            </div>
                            <div className="ro-facilitator-info">
                                <h3 className="ro-facilitator-name">ANA KELLY BORBA DA SILVA BRUSTOLIN</h3>
                                <ul className="ro-facilitator-bio">
                                    <li className="ro-facilitator-bio-item">Graduada em Letras – Língua e Literatura Portuguesas pela Universidade Federal de Santa Catarina/UFSC (2005)</li>
                                    <li className="ro-facilitator-bio-item">Mestre em Linguística (Variação Linguística e Ensino), área da Sociolinguística, pela Universidade Federal de Santa Catarina (UFSC/CAPES/2009)</li>
                                    <li className="ro-facilitator-bio-item">Doutoranda em linguística pela Universidade Federal de Santa Catarina (UFSC)</li>
                                    <li className="ro-facilitator-bio-item">Prêmio "Professor Nota Dez" do município de Florianópolis, em 2012</li>
                                    <li className="ro-facilitator-bio-item">Tem experiência no ensino/aprendizagem de língua materna, (socio)linguística, correção/revisão de textos e redação oficial</li>
                                    <li className="ro-facilitator-bio-item">Atua principalmente nos temas: educação, o português e o mercado de trabalho, sociolinguística e língua portuguesa</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Location Section */}
                <section className="ro-section">
                    <div className="ro-section-header">
                        <h2 className="ro-section-title">Data e Local do Evento</h2>
                        <div className="ro-divider"></div>
                    </div>

                    <div className="ro-schedule-container">
                        <div className="ro-schedule-card">
                            <div className="ro-date-badge">26/03/2024 a 18/04/2024</div>
                            <div className="ro-schedule-details">
                                <p className="ro-schedule-text"><strong>Local:</strong> Auditório da Secretaria Municipal de Educação de São José</p>
                                <p className="ro-schedule-text"><strong>Endereço:</strong> Avenida Acioni Souza Filho</p>
                                <p className="ro-schedule-text"><strong>Cidade:</strong> São José</p>
                                <p className="ro-schedule-text"><strong>Bairro:</strong> Praia Comprida</p>
                                <p className="ro-schedule-text"><strong>CEP:</strong> 88.103-790</p>
                                <p className="ro-schedule-text"><strong>Período de inscrição:</strong> 19/02/2024 até 25/03/2024</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Info Section */}
                <section className="ro-section">
                    <div className="ro-section-header">
                        <h2 className="ro-section-title">Informações</h2>
                        <div className="ro-divider"></div>
                    </div>

                    <div className="ro-info-container">
                        <div className="ro-info-card">
                            <h3 className="ro-info-title">CERTIFICADO</h3>
                            <p className="ro-info-text">Fará jus ao certificado o aluno que tiver, no mínimo, 75% de frequência.</p>
                        </div>

                        <div className="ro-info-card">
                            <h3 className="ro-info-title">CONTATO</h3>
                            <p className="ro-info-text">Nosso contato com o participante será pelo e-mail cadastrado no ato da inscrição. Verifique sua caixa de entrada e seu Spam periodicamente.</p>
                        </div>

                        <div className="ro-info-card">
                            <h3 className="ro-info-title">INFORMAÇÕES</h3>
                            <p className="ro-info-text">Qualquer dúvida ou informação adicional contate-nos pelo email, WhatsApp (48) 3381-0009 ou telefone (48) 3381-0010</p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default RedacaoOficial;