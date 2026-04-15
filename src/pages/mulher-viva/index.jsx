import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/footer.jsx';
import './mulherViva.css';
import image1 from "../../images/projetos/mulher-viva.jpeg"

function MulherViva() {
    return (
        <>
            <Header />

            <main className="mulher-viva-page">
                <section className="mv-hero">
                    <div className="mv-container mv-hero-content">
                        <div className="mv-hero-text">
                            <h1>Movimento Mulher Viva</h1>

                            <p className="mv-hero-subtitle">
                                Um movimento comunitário por respeito, proteção e autonomia.
                            </p>

                            <p className="mv-hero-description">
                                O Movimento Mulher Viva reúne organizações públicas, privadas e a
                                sociedade civil para atuar de forma integrada na prevenção e no
                                enfrentamento da violência contra mulheres em São José, unindo
                                educação, acolhimento e geração de oportunidades.
                            </p>

                            <div className="mv-hero-actions">
                                <a href="#sobre" className="mv-btn mv-btn-primary">
                                    Conheça o movimento
                                </a>
                                <a href="#contato" className="mv-btn mv-btn-secondary">
                                    Participar
                                </a>
                            </div>
                        </div>

                        <div className="mv-hero-image-wrapper">
                            <img
                                src={image1}
                                alt="Mulheres reunidas em um ambiente de acolhimento e fortalecimento coletivo"
                                className="mv-hero-image"
                            />
                        </div>
                    </div>
                </section>

                <section className="mv-overview-cards mv-container">
                    <article className="mv-info-card">
                        <h3>Integração comunitária</h3>
                        <p>
                            O projeto conecta poder público, instituições, organizações locais e a
                            sociedade civil em uma atuação conjunta e contínua.
                        </p>
                    </article>

                    <article className="mv-info-card">
                        <h3>Proteção e apoio</h3>
                        <p>
                            A iniciativa fortalece o acesso à escuta qualificada, orientação segura
                            e encaminhamento para serviços essenciais.
                        </p>
                    </article>

                    <article className="mv-info-card">
                        <h3>Autonomia e oportunidades</h3>
                        <p>
                            Além da prevenção, o movimento também incentiva independência
                            financeira, geração de renda e novas possibilidades de futuro.
                        </p>
                    </article>
                </section>

                <section id="sobre" className="mv-section">
                    <div className="mv-container">
                        <div className="mv-section-heading">
                            <span className="mv-section-tag">Sobre o Movimento</span>
                            <h2>Respeito, proteção e autonomia para transformar realidades</h2>
                            <p>
                                O Movimento Mulher Viva foi criado para fortalecer uma comunidade
                                mais segura e justa. A proposta é atuar de forma integrada na
                                prevenção da violência contra mulheres, no acolhimento de quem
                                precisa de apoio e na criação de oportunidades que ampliem a
                                autonomia e a independência das mulheres em situação de
                                vulnerabilidade.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mv-section mv-section-light">
                    <div className="mv-container">
                        <div className="mv-section-heading">
                            <span className="mv-section-tag">O que queremos transformar</span>
                            <h2>Uma comunidade mais segura, justa e consciente</h2>
                        </div>

                        <div className="mv-objective-grid">
                            <div className="mv-objective-card">
                                <h3>Prevenção pela educação</h3>
                                <p>
                                    Fortalecer a prevenção desde a base, com informação,
                                    conscientização e diálogo sobre respeito, igualdade e sinais de
                                    alerta.
                                </p>
                            </div>

                            <div className="mv-objective-card">
                                <h3>Apoio rápido e seguro</h3>
                                <p>
                                    Garantir que mulheres tenham acesso mais ágil a apoio
                                    psicológico e jurídico por meio de orientação e encaminhamento.
                                </p>
                            </div>

                            <div className="mv-objective-card">
                                <h3>Homens e meninos como aliados</h3>
                                <p>
                                    Incentivar a participação ativa de homens e meninos como parte
                                    da solução e da mudança cultural.
                                </p>
                            </div>

                            <div className="mv-objective-card">
                                <h3>Autonomia financeira</h3>
                                <p>
                                    Criar caminhos para que mulheres em situação de vulnerabilidade
                                    fortaleçam sua independência e ampliem suas possibilidades de
                                    escolha.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mv-section">
                    <div className="mv-container">
                        <div className="mv-section-heading">
                            <span className="mv-section-tag">Como o projeto funciona</span>
                            <h2>Três eixos de atuação para gerar impacto real</h2>
                        </div>

                        <div className="mv-pillars">
                            <article className="mv-pillar-card">
                                <div className="mv-pillar-icon">01</div>
                                <h3>Prevenção</h3>
                                <p>
                                    Rodas de conversa em comunidades, oficinas para jovens,
                                    campanhas permanentes com linguagem acessível, formação de
                                    lideranças comunitárias e engajamento de homens e meninos como
                                    aliados na prevenção.
                                </p>
                            </article>

                            <article className="mv-pillar-card">
                                <div className="mv-pillar-icon">02</div>
                                <h3>Acolhimento e Encaminhamento</h3>
                                <p>
                                    Escuta qualificada, orientação segura, encaminhamento para
                                    atendimento psicológico e jurídico, além de acompanhamento para
                                    ampliar o acesso aos serviços necessários.
                                </p>
                            </article>

                            <article className="mv-pillar-card">
                                <div className="mv-pillar-icon">03</div>
                                <h3>Autonomia Econômica</h3>
                                <p>
                                    Cursos rápidos sobre finanças, emprego e empreendedorismo, apoio
                                    com currículo e entrevistas, conexão com oportunidades de
                                    trabalho e geração de renda, além de articulação de rede de
                                    apoio.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="mv-section mv-section-light">
                    <div className="mv-container">
                        <div className="mv-section-heading">
                            <span className="mv-section-tag">Por que isso é importante</span>
                            <h2>Uma mudança que começa na comunidade</h2>
                        </div>

                        <div className="mv-change-grid">
                            <div className="mv-change-card">
                                <h3>Informação salva vidas</h3>
                                <p>
                                    O acesso à informação ajuda a reconhecer violências, orientar
                                    decisões e ampliar a prevenção.
                                </p>
                            </div>

                            <div className="mv-change-card">
                                <h3>Apoio acessível reduz barreiras</h3>
                                <p>
                                    Quando o acolhimento é claro e próximo, mulheres conseguem
                                    acessar ajuda com mais segurança.
                                </p>
                            </div>

                            <div className="mv-change-card">
                                <h3>Autonomia amplia escolhas</h3>
                                <p>
                                    Independência financeira fortalece a liberdade, a proteção e as
                                    possibilidades de reconstrução.
                                </p>
                            </div>

                            <div className="mv-change-card">
                                <h3>A mudança cultural é coletiva</h3>
                                <p>
                                    O envolvimento de toda a comunidade é essencial para construir
                                    relações mais respeitosas e igualitárias.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mv-section">
                    <div className="mv-container">
                        <div className="mv-section-heading">
                            <span className="mv-section-tag">Quem participa</span>
                            <h2>Parcerias que fortalecem o movimento</h2>
                            <p>
                                O projeto é construído em parceria com instituições e organizações
                                locais comprometidas com a proteção, a justiça social e a
                                transformação da comunidade.
                            </p>
                        </div>

                        <div className="mv-partners-grid">
                            <div className="mv-partner-item">OAB São José</div>
                            <div className="mv-partner-item">Conselho Municipal dos Direitos das Mulheres</div>
                            <div className="mv-partner-item">Procuradoria da Mulher</div>
                            <div className="mv-partner-item">Instituições de ensino</div>
                            <div className="mv-partner-item">Secretarias municipais</div>
                            <div className="mv-partner-item">Câmara Municipal</div>
                            <div className="mv-partner-item">Sociedade civil</div>
                        </div>
                    </div>
                </section>

                <section id="contato" className="mv-cta-section">
                    <div className="mv-container">
                        <div className="mv-cta-box">
                            <h2>Participe do Movimento Mulher Viva</h2>
                            <p>
                                Você pode contribuir participando das ações e rodas de conversa,
                                divulgando as campanhas, tornando-se voluntário(a) ou oferecendo
                                oportunidades e parcerias. Juntos, podemos construir uma comunidade
                                mais segura, respeitosa e igualitária para todas as mulheres.
                            </p>

                            <div className="mv-cta-actions">
                                <a
                                    href="mailto:secretaria@fundesj.com.br"
                                    className="mv-btn mv-btn-light"
                                >
                                    secretaria@fundesj.com.br
                                </a>

                                <a
                                    href="https://www.fundesj.com.br"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mv-btn mv-btn-outline-light"
                                >
                                    Saiba mais
                                </a>
                            </div>

                            <div className="mv-contact-extra">
                                <p>Av. Acioni Souza Filho, 403 • São José - SC • CEP 88.103-790</p>
                                <p>(48) 3381-0070</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default MulherViva;