import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/footer.jsx';
import './egressos.css';

function EgressosUnivali(){
    return(
        <>
            <Header />

            <main className="egressos-page">
                <section className="egressos-hero">
                    <div className="egressos-container">
                        <div className="egressos-hero-content">
                            <h1 className="egressos-title">
                                Projeto Inserção de Egressos da Univali e Ações Comunitárias
                            </h1>

                            <p className="egressos-subtitle">
                                Uma iniciativa que une formação acadêmica, responsabilidade social
                                e compromisso com a comunidade, fortalecendo a conexão entre
                                educação, cidadania e impacto positivo na vida das pessoas.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="egressos-content-section">
                    <div className="egressos-container">
                        <div className="egressos-grid">
                            <div className="egressos-main-card">
                                <h2>Sobre a iniciativa</h2>

                                <p>
                                    Mais do que uma parceria, a união entre a Fundação
                                    Educacional de São José (FUNDESJ) e a Universidade do Vale
                                    do Itajaí (UNIVALI), firmada em 2025 e alinhada ao Programa
                                    Universidade Gratuita do Governo do Estado, traduz, na
                                    prática, o verdadeiro sentido da formação superior: preparar
                                    profissionais não apenas competentes em suas áreas, mas
                                    também conscientes do seu papel na construção de uma
                                    sociedade mais justa, humana e solidária.
                                </p>

                                <p>
                                    Por meio dessa iniciativa, egressos passam a atuar em
                                    projetos e ações comunitárias, levando para perto da
                                    população todo o conhecimento construído ao longo da vida
                                    acadêmica. É a educação se transformando em presença,
                                    cuidado, escuta e contribuição real na vida de quem mais
                                    precisa.
                                </p>

                                <p>
                                    Ao cumprir a contrapartida social prevista pelo Programa
                                    Universidade Gratuita, essa cooperação fortalece as políticas
                                    públicas locais, amplia a conexão entre conhecimento e
                                    cidadania.
                                </p>

                                <p>
                                    Essa aproximação mostra a força transformadora da educação
                                    quando ela encontra propósito social. Os estudantes têm a
                                    oportunidade de vivenciar a prática, desenvolver
                                    sensibilidade e ampliar seu olhar sobre a realidade. A
                                    comunidade, por sua vez, recebe esse retorno em forma de
                                    atendimento qualificado, apoio e ações que impactam
                                    positivamente o cotidiano das pessoas.
                                </p>
                            </div>

                            <aside className="egressos-side-card">
                                <h3>Destaques</h3>

                                <ul className="egressos-list">
                                    <li>Integração entre formação acadêmica e responsabilidade social</li>
                                    <li>Participação de egressos em ações comunitárias</li>
                                    <li>Fortalecimento das políticas públicas locais</li>
                                    <li>Promoção de cidadania, cuidado e impacto social real</li>
                                </ul>

                                <div className="egressos-side-divider"></div>

                                <h3>Objetivo</h3>
                                <p>
                                    Aproximar universidade e comunidade por meio de ações que
                                    transformam conhecimento em atendimento, apoio e contribuição
                                    concreta para a população.
                                </p>
                            </aside>
                        </div>
                    </div>
                </section>

                <section className="egressos-info-section">
                    <div className="egressos-container">
                        <div className="egressos-info-header">
                            <span className="egressos-section-tag">Educação com propósito</span>
                            <h2>Conhecimento que retorna para a comunidade</h2>
                        </div>

                        <div className="egressos-info-card">
                            <p>
                                A parceria entre FUNDESJ e UNIVALI representa um passo importante
                                na construção de uma formação mais humana, prática e conectada
                                com as necessidades reais da sociedade.
                            </p>

                            <p>
                                Quando a educação encontra o compromisso social, ela ultrapassa
                                os limites da sala de aula e se transforma em presença,
                                acolhimento e mudança concreta no cotidiano das pessoas.
                            </p>

                            <p className="egressos-final-message">
                                Formar profissionais também é formar cidadãos capazes de
                                transformar realidades.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
};

export default EgressosUnivali;