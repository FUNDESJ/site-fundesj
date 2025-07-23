import Header from "../header";
import Footer from "../footer/footer";
import './idTodos.css'
export default function IdTodos() {
    return (

        <div className="inclusao-page">
            <Header />

            <main className="inclusao-main">
                <section className="inclusao-hero">
                    <div className="inclusao-hero-content">
                        <h1 className="inclusao-title">Inclusão Digital para Todos</h1>
                        <p className="inclusao-subtitle">
                            Educação tecnológica acessível para transformar vidas em São José
                        </p>
                    </div>
                </section>

                <section className="inclusao-section">
                    <h2 className="id-section-title">Sobre o Projeto</h2>
                    <p className="section-text">
                        Em parceria com a <span className="section-highlight">Prefeitura Municipal de São José</span>, o <span className="section-highlight">Instituto Federal</span> e a comunidade local, a <span className="section-highlight">FUNDESJ</span> apresenta o projeto <strong>Inclusão Digital para Todos</strong>, uma iniciativa inovadora voltada à democratização do acesso às tecnologias e ao conhecimento digital para pessoas da terceira idade.
                    </p>
                </section>

                <section className="inclusao-section">
                    <h2 className="id-section-title">Objetivos</h2>
                    <p className="section-text">
                        O projeto tem como meta capacitar cidadãos da terceira idade – para que possam utilizar com autonomia ferramentas como serviços públicos digitais, aplicativos de comunicação, plataformas de educação e soluções financeiras.
                    </p>
                    <p className="section-text">
                        A proposta é ampliar os horizontes dessas pessoas, promovendo inclusão social, fortalecimento da cidadania e redução da exclusão digital.
                    </p>
                </section>

                <div className="wave-divider">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="var(--primary-color)"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="var(--primary-color)"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="var(--primary-color)"></path>
                    </svg>
                </div>

                <section className="inclusao-section">
                    <h2 className="section-title">Atividades Realizadas</h2>
                    <ul className="inclusao-list">
                        <li>Oficinas práticas com uso de celulares</li>
                        <li>Navegação em plataformas públicas e e-Gov</li>
                        <li>Criação de contas, agendamentos online e segurança digital</li>
                        <li>Aplicação de conhecimentos em situações do cotidiano</li>
                    </ul>
                </section>

                <section className="inclusao-section">
                    <h2 className="id-section-title">Impacto Social</h2>
                    <p className="section-text">
                        O projeto busca promover autonomia digital, ampliar o acesso a serviços essenciais, fortalecer vínculos sociais e reduzir a vulnerabilidade tecnológica. A proposta valoriza o indivíduo, a convivência e o desenvolvimento humano por meio da tecnologia.
                    </p>
                </section>

                <section className="inclusao-section">
                    <h2 className="id-section-title">Resultados e Continuidade</h2>
                    <p className="section-text">
                        Desde sua criação, o projeto já beneficiou centenas de cidadãos em diversos bairros de São José. A alta demanda evidencia a importância de expandir a iniciativa com novas turmas, conteúdos atualizados e parcerias que fortaleçam a inclusão digital como política pública permanente.
                    </p>
                </section>
            </main>

            <Footer />
        </div>
    );


}