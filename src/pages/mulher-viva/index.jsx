import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/footer.jsx';
import './mulherViva.css';
import image1 from "../../images/projetos/mulher-viva.jpeg"

function MulherViva() {
    return (
        <>
            <Header />

            <main className="mv-page">
                <section className="mv-hero">
                    <div className="mv-hero-content">
                        <div className="mv-hero-text">
                            <h1>Movimento Mulher Viva</h1>
                            <p className="mv-hero-subtitle">
                                Prevenção e enfrentamento da violência contra mulheres em São José/SC.
                            </p>
                            <p className="mv-hero-desc">
                                O Movimento Mulher Viva, coordenado pela FUNDESJ, é uma iniciativa sem fins lucrativos,
                                voltada à prevenção e ao enfrentamento da violência contra mulheres no município de
                                São José/SC. O movimento nasce com o propósito de articular ações permanentes de educação,
                                conscientização, acolhimento e fortalecimento da autonomia feminina, contribuindo para
                                uma cultura de respeito, igualdade de gênero e não violência.
                            </p>
                        </div>
                        <div className="mv-hero-image-wrapper">
                            <img src={image1} alt="Mulheres reunidas em ambiente de acolhimento" className="mv-hero-image" />
                        </div>
                    </div>
                </section>

                <section className="mv-section">
                    <div className="mv-container">
                        <span className="mv-tag">Sobre o Movimento</span>
                        <h2 className="mv-section-title">Articulação permanente por respeito, proteção e autonomia</h2>
                        <p className="mv-section-text">
                            A proposta reúne órgãos públicos, instituições de ensino, entidades de proteção,
                            organizações da sociedade civil e demais parceiros que atuam direta ou indiretamente
                            na defesa dos direitos das mulheres, fortalecendo a rede local de apoio e criando
                            caminhos mais claros para orientação, escuta qualificada e encaminhamento aos
                            serviços especializados.
                        </p>
                    </div>
                </section>

                <section className="mv-section mv-section-alt">
                    <div className="mv-container">
                        <span className="mv-tag">Eixos de Atuação</span>
                        <h2 className="mv-section-title">Três eixos principais</h2>

                        <div className="mv-pillars">
                            <article className="mv-pillar">
                                <div className="mv-pillar-num">01</div>
                                <div>
                                    <h3>Prevenção</h3>
                                    <p>Rodas de conversa, oficinas educativas e campanhas permanentes.</p>
                                </div>
                            </article>

                            <article className="mv-pillar">
                                <div className="mv-pillar-num">02</div>
                                <div>
                                    <h3>Acolhimento e Encaminhamento</h3>
                                    <p>Apoio psicossocial e jurídico por meio da rede parceira.</p>
                                </div>
                            </article>

                            <article className="mv-pillar">
                                <div className="mv-pillar-num">03</div>
                                <div>
                                    <h3>Autonomia Econômica</h3>
                                    <p>Cursos, mentorias e conexão com oportunidades de renda e trabalho para mulheres em situação de vulnerabilidade.</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="mv-section">
                    <div className="mv-container">
                        <span className="mv-tag">Formato de Atuação</span>
                        <h2 className="mv-section-title">Projeto-piloto com mobilização comunitária</h2>
                        <p className="mv-section-text">
                            Com atuação inicial em formato de projeto-piloto, o Movimento busca mobilizar
                            a comunidade, envolver homens e meninos como aliados responsáveis e fortalecer
                            políticas e práticas integradas de proteção às mulheres em São José.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default MulherViva;