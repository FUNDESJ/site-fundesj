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
                                Prevenção e enfrentamento da violência contra mulheres em São José/SC.
                            </p>

                            <p className="mv-hero-description">
                                O Movimento Mulher Viva, coordenado pela FUNDESJ, é uma iniciativa sem fins lucrativos,
                                voltada à prevenção e ao enfrentamento da violência contra mulheres
                                no município de São José/SC. O movimento nasce com o propósito de
                                articular ações permanentes de educação, conscientização, acolhimento
                                e fortalecimento da autonomia feminina, contribuindo para uma cultura
                                de respeito, igualdade de gênero e não violência.
                            </p>
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

                <section className="mv-section">
                    <div className="mv-container">
                        <div className="mv-section-heading">
                            <span className="mv-section-tag">Sobre o Movimento</span>
                            <h2>Articulação permanente por respeito, proteção e autonomia</h2>
                            <p>
                                A proposta reúne órgãos públicos, instituições de ensino, entidades
                                de proteção, organizações da sociedade civil e demais parceiros que
                                atuam direta ou indiretamente na defesa dos direitos das mulheres,
                                fortalecendo a rede local de apoio e criando caminhos mais claros
                                para orientação, escuta qualificada e encaminhamento aos serviços
                                especializados.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mv-section mv-section-light">
                    <div className="mv-container">
                        <div className="mv-section-heading">
                            <span className="mv-section-tag">Eixos de Atuação</span>
                            <h2>Três eixos principais</h2>
                        </div>

                        <div className="mv-pillars">
                            <article className="mv-pillar-card">
                                <div className="mv-pillar-icon">01</div>
                                <h3>Prevenção</h3>
                                <p>
                                    Rodas de conversa, oficinas educativas e campanhas permanentes.
                                </p>
                            </article>

                            <article className="mv-pillar-card">
                                <div className="mv-pillar-icon">02</div>
                                <h3>Acolhimento e Encaminhamento</h3>
                                <p>
                                    Apoio psicossocial e jurídico por meio da rede parceira.
                                </p>
                            </article>

                            <article className="mv-pillar-card">
                                <div className="mv-pillar-icon">03</div>
                                <h3>Autonomia Econômica</h3>
                                <p>
                                    Cursos, mentorias e conexão com oportunidades de renda e
                                    trabalho para mulheres em situação de vulnerabilidade.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="mv-section">
                    <div className="mv-container">
                        <div className="mv-section-heading">
                            <span className="mv-section-tag">Formato de Atuação</span>
                            <h2>Projeto-piloto com mobilização comunitária</h2>
                            <p>
                                Com atuação inicial em formato de projeto-piloto, o Movimento busca
                                mobilizar a comunidade, envolver homens e meninos como aliados
                                responsáveis e fortalecer políticas e práticas integradas de
                                proteção às mulheres em São José.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default MulherViva;