import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/footer.jsx';
import './avos.css';
import heroImg from "../../images/projetos/avos-pagina.jpg"

function Avos() {
    return (
        <>
            <Header />

            <main className="av-page">
                <section className="av-hero">
                    <div className="av-container">
                        <div className="av-hero-grid">
                            <div className="av-hero-text">
                                <h1>FUNDESJ e AVOS</h1>
                                <p className="av-hero-subtitle">Fortalecimento da comunicação, escuta qualificada e cuidado emocional.</p>
                                <p className="av-hero-desc">
                                    A FUNDESJ atua como parceira da AVOS – Associação de Voluntários de Apoio
                                    e Assistência à Criança e ao Adolescente, instituição que, desde 1975,
                                    desenvolve um importante trabalho de humanização hospitalar, acolhimento e
                                    apoio a crianças, adolescentes e famílias, especialmente em momentos de
                                    tratamento oncológico.
                                </p>
                            </div>
                            <div>
                                <img src={heroImg} alt="Voluntários da AVOS" className="av-hero-image" />
                                <p className="av-hero-image-caption">Desde 1975 — humanização, acolhimento e cuidado.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="av-timeline">
                    <div className="av-container">
                        <div className="av-step">
                            <div className="av-step-marker">01</div>
                            <div className="av-step-body">
                                <span className="av-step-tag">Formação e Capacitação</span>
                                <div className="av-step-card">
                                    <h3>Fortalecendo quem cuida</h3>
                                    <p>
                                        Por meio dessa parceria, a FUNDESJ desenvolve um projeto onde contribui com
                                        ações de formação e capacitação voltadas à equipe de colaboradores e voluntários
                                        da AVOS, com foco no fortalecimento da comunicação, da escuta qualificada e
                                        do cuidado emocional.
                                    </p>
                                    <a
                                        href="https://avos.org.br/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="av-link"
                                    >
                                        Visite o site da AVOS →
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="av-step">
                            <div className="av-step-marker">02</div>
                            <div className="av-step-body">
                                <span className="av-step-tag">Impacto do Projeto</span>
                                <div className="av-step-card">
                                    <h3>Aprimorando vínculos e práticas humanizadas</h3>
                                    <p>
                                        A iniciativa busca apoiar quem atua diretamente no atendimento de crianças e
                                        famílias, oferecendo uma capacitação estruturada para aprimorar vínculos,
                                        acolhimento e práticas humanizadas.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="av-step">
                            <div className="av-step-marker">03</div>
                            <div className="av-step-body">
                                <span className="av-step-tag">Compromisso</span>
                                <div className="av-step-card">
                                    <h3>Educação, responsabilidade social e valorização das pessoas</h3>
                                    <p>
                                        A parceria para o desenvolvimento do projeto reafirma o compromisso da FUNDESJ
                                        com a educação, a responsabilidade social e a valorização das pessoas que
                                        dedicam seu trabalho ao cuidado, à solidariedade e à transformação de vidas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default Avos;