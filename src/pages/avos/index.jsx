import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/footer.jsx';
import './avos.css';
import image1 from "../../images/fotos parceiros/Logo-AVOS-Coracao.jpg"

function Avos() {
    return (
        <>
            <Header />

            <main className="avos-page">
                <section className="avos-hero">
                    <div className="avos-container avos-hero-content">
                        <div className="avos-hero-text">
                            <h1>Projeto de Formação e Capacitação FUNDESJ e AVOS</h1>

                            <p className="avos-hero-subtitle">
                                Fortalecimento da comunicação, escuta qualificada e cuidado emocional.
                            </p>

                            <p className="avos-hero-description">
                                A FUNDESJ atua como parceira da AVOS – Associação de Voluntários
                                de Apoio e Assistência à Criança e ao Adolescente, instituição que,
                                desde 1975, desenvolve um importante trabalho de humanização
                                hospitalar, acolhimento e apoio a crianças, adolescentes e
                                famílias, especialmente em momentos de tratamento oncológico.
                            </p>
                        </div>

                        <div className="avos-hero-image-wrapper">
                            <img
                                src={image1}
                                alt="Logo da AVOS – Associação de Voluntários de Apoio e Assistência à Criança e ao Adolescente"
                                className="avos-hero-image"
                            />
                        </div>
                    </div>
                </section>

                <section className="avos-section">
                    <div className="avos-container">
                        <div className="avos-section-heading">
                            <span className="avos-section-tag">Formação e Capacitação</span>
                            <h2>Fortalecendo quem cuida</h2>
                            <p>
                                Por meio dessa parceria, a FUNDESJ desenvolve um projeto onde
                                contribui com ações de formação e capacitação voltadas à equipe de
                                colaboradores e voluntários da AVOS, com foco no fortalecimento da
                                comunicação, da escuta qualificada e do cuidado emocional.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="avos-section avos-section-light">
                    <div className="avos-container">
                        <div className="avos-section-heading">
                            <span className="avos-section-tag">Impacto do Projeto</span>
                            <h2>Aprimorando vínculos e práticas humanizadas</h2>
                            <p>
                                A iniciativa busca apoiar quem atua diretamente no atendimento
                                de crianças e famílias, oferecendo uma capacitação estruturada
                                para aprimorar vínculos, acolhimento e práticas humanizadas.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="avos-section">
                    <div className="avos-container">
                        <div className="avos-section-heading">
                            <span className="avos-section-tag">Compromisso</span>
                            <h2>Educação, responsabilidade social e valorização das pessoas</h2>
                            <p>
                                A parceria para o desenvolvimento do projeto reafirma o
                                compromisso da FUNDESJ com a educação, a responsabilidade
                                social e a valorização das pessoas que dedicam seu trabalho
                                ao cuidado, à solidariedade e à transformação de vidas.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default Avos;