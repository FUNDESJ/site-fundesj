import Header from "../../components/header";
import Footer from "../../components/footer/footer";
import "./golfinho.css";

export default function Golfinho() {
    return (
        <div className="golfinho-page">
            <Header />
            
            <main className="golfinho-main">
                <section className="golfinho-hero">
                    <div className="golfinho-hero-content">
                        <h1 className="golfinho-title">Projeto Golfinho</h1>
                        <p className="golfinho-subtitle">
                            Educação preventiva e cidadania para crianças e adolescentes de São José
                        </p>
                    </div>
                </section>

                <section className="golfinho-section">
                    <h2 className="golfinho-section-title">Sobre o Projeto</h2>
                    <p className="section-text">
                        Em uma sólida parceria entre a <span className="section-highlight">Prefeitura Municipal de São José</span>, o <span className="section-highlight">Corpo de Bombeiros Militar de Santa Catarina – CBMSC</span>, e a <span className="section-highlight">Associação Recreativa Social do Corpo de Bombeiros de São José – ABSJ</span>, o <span className="section-highlight">Projeto Golfinho</span> vem sendo desenvolvido com o apoio da <span className="section-highlight">Fundação Educacional de São José – FUNDESJ</span>, consolidando-se como uma importante iniciativa de educação preventiva e cidadania voltada para crianças e adolescentes do município.
                    </p>
                </section>

                <section className="golfinho-section">
                    <h2 className="golfinho-section-title">Objetivos</h2>
                    <p className="section-text">
                        O projeto tem como principal objetivo promover a conscientização de estudantes do ensino fundamental da rede pública municipal sobre temas essenciais relacionados à segurança em ambientes aquáticos, salvamento, educação ambiental e atitudes cidadãs. A proposta é preparar os jovens para identificar e agir diante de situações de risco em locais como piscinas, praias, rios e outros espaços com potencial perigo aquático, especialmente nas regiões do município de São José.
                    </p>
                </section>

                <div className="wave-divider">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="var(--primary-color)"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="var(--primary-color)"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="var(--primary-color)"></path>
                    </svg>
                </div>

                <section className="golfinho-section">
                    <h2 className="golfinho-section-title">Atividades Desenvolvidas</h2>
                    <p className="section-text">
                        As atividades do Projeto Golfinho abordam de forma prática e educativa conteúdos fundamentais:
                    </p>
                    <ul className="golfinho-list">
                        <li>Reconhecimento de ambientes perigosos</li>
                        <li>Noções básicas de prevenção e salvamento aquático</li>
                        <li>Práticas de cidadania e responsabilidade coletiva</li>
                        <li>Preservação do meio ambiente e educação ambiental</li>
                    </ul>
                    <p className="section-text">
                        Essas ações são conduzidas de maneira lúdica, interativa e contextualizada, permitindo que os participantes desenvolvam habilidades de percepção de risco, cuidado com o próximo e valorização da natureza.
                    </p>
                </section>

                <section className="golfinho-section">
                    <h2 className="golfinho-section-title">Resultados em 2023</h2>
                    <div className="golfinho-stats">
                        <div className="stat-card">
                            <div className="stat-number">12</div>
                            <div className="stat-label">Unidades escolares atendidas</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">497</div>
                            <div className="stat-label">Estudantes beneficiados</div>
                        </div>
                    </div>
                    <p className="section-text">
                        Em 2023, o projeto alcançou resultados expressivos, contemplando 12 unidades escolares do município e beneficiando diretamente 497 estudantes do 7º ano do ensino fundamental. Esse impacto reforça o compromisso das instituições envolvidas com a formação de uma geração mais consciente, preparada e engajada com a segurança, o meio ambiente e o bem coletivo.
                    </p>
                </section>
            </main>

            <Footer />
        </div>
    );
}