import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/footer.jsx';
import './memoriasAfetivas.css';
import heroImg from '../../images/projetos/memorias-afetivas/memorias-2.jpeg';
import imgEncontros from '../../images/projetos/memorias-afetivas/memorias-3.jpeg';

function MemoriasAfetivas() {
    return (
        <>
            <Header />

            <main className="ma-page">
                <section className="ma-hero">
                    <div className="ma-container">
                        <div className="ma-hero-grid">
                            <div className="ma-hero-text">
                                <h1>Memórias Afetivas</h1>
                                <p className="ma-hero-subtitle">
                                    Restauração, organização e valorização de fotografias e memórias
                                    familiares com apoio da Inteligência Artificial.
                                </p>
                                <p className="ma-hero-desc">
                                    Oficina temática ofertada pelo Programa Longevidade Ativa da FUNDESJ,
                                    voltada à preservação e à valorização de fotografias e histórias
                                    familiares. A proposta convida os participantes a selecionar registros
                                    significativos, organizar pequenos acervos pessoais, restaurar imagens
                                    antigas e associar a elas informações e narrativas que ajudem a conservar
                                    seu contexto afetivo. A tecnologia é utilizada como recurso de apoio —
                                    o centro da experiência permanece na memória das pessoas, na autenticidade
                                    das histórias e no cuidado com os registros familiares.
                                </p>

                                <div className="ma-hero-chips">
                                    <span className="ma-chip">12 horas</span>
                                    <span className="ma-chip">4 encontros semanais de 3 horas</span>
                                    <span className="ma-chip">Oficina prática e acompanhada</span>
                                </div>

                                <p className="ma-hero-prof">
                                    Desenvolvida pelo <strong>Prof. Paulo Ramos (MRPAUL)</strong>, profissional
                                    voluntário no Programa Longevidade Ativa.
                                </p>
                            </div>

                            <div>
                                <img
                                    src={heroImg}
                                    alt="Participantes do projeto Memórias Afetivas reunidos em torno de um álbum de fotografias"
                                    className="ma-hero-image"
                                />
                                <p className="ma-hero-image-caption">
                                    Sua história merece ser vista e guardada.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ma-sobre">
                    <div className="ma-container">
                        <span className="ma-section-tag">Por que o projeto existe</span>
                        <h2 className="ma-section-title">Preservar é cuidar das nossas histórias</h2>
                        <p className="ma-section-text">
                            Fotografias familiares guardam histórias, vínculos, costumes e referências de
                            diferentes gerações. Com o passar do tempo, esses registros podem sofrer desgaste,
                            perder identificação ou permanecer dispersos em caixas, álbuns, celulares e arquivos
                            digitais sem organização.
                        </p>
                        <p className="ma-section-text">
                            A restauração digital, aliada à identificação das pessoas, datas, lugares e
                            acontecimentos retratados, contribui para proteger esse patrimônio afetivo.
                            Quando empregada com critérios, a Inteligência Artificial pode auxiliar nesse
                            processo sem substituir a memória humana, alterar fatos ou criar versões fictícias
                            do passado.
                        </p>
                    </div>
                </section>

                <section className="ma-timeline">
                    <div className="ma-container">
                        <span className="ma-section-tag">Metodologia</span>
                        <h2 className="ma-section-title">Cinco movimentos para guardar suas memórias</h2>
                        <p className="ma-section-text ma-section-text-bottom">
                            A oficina é desenvolvida por meio de demonstrações breves, atividades práticas
                            acompanhadas e momentos de partilha. Cada participante trabalha com o seu próprio
                            conjunto de fotografias, avançando progressivamente até compor um pequeno acervo
                            de memória familiar.
                        </p>

                        <div className="ma-step">
                            <div className="ma-step-marker">01</div>
                            <div className="ma-step-body">
                                <span className="ma-step-tag">Selecionar</span>
                                <div className="ma-step-card">
                                    <h3>Escolha dos registros</h3>
                                    <p>
                                        Escolher fotografias significativas para a história pessoal e familiar
                                        e definir o recorte do acervo que será trabalhado durante a oficina.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="ma-step">
                            <div className="ma-step-marker">02</div>
                            <div className="ma-step-body">
                                <span className="ma-step-tag">Preparar</span>
                                <div className="ma-step-card">
                                    <h3>Digitalização e segurança</h3>
                                    <p>
                                        Digitalizar fotografias impressas, conferir a qualidade dos arquivos e
                                        manter cópias de segurança de todo o material.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="ma-step">
                            <div className="ma-step-marker">03</div>
                            <div className="ma-step-body">
                                <span className="ma-step-tag">Restaurar</span>
                                <div className="ma-step-card">
                                    <h3>Restauração responsável com IA</h3>
                                    <p>
                                        Aplicar recursos de IA para corrigir danos e melhorar nitidez,
                                        iluminação, contraste e cores, sempre comparando o resultado com a
                                        imagem original e preservando os traços e a identidade das pessoas
                                        fotografadas.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="ma-step">
                            <div className="ma-step-marker">04</div>
                            <div className="ma-step-body">
                                <span className="ma-step-tag">Contextualizar</span>
                                <div className="ma-step-card">
                                    <h3>Registro das lembranças</h3>
                                    <p>
                                        Identificar pessoas, lugares, datas, acontecimentos e lembranças,
                                        produzindo legendas e pequenos relatos afetivos com apoio da IA,
                                        sempre a partir das informações fornecidas pelo participante.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="ma-step">
                            <div className="ma-step-marker">05</div>
                            <div className="ma-step-body">
                                <span className="ma-step-tag">Organizar e compartilhar</span>
                                <div className="ma-step-card">
                                    <h3>Composição do acervo</h3>
                                    <p>
                                        Estruturar pastas, nomear arquivos e apresentar o acervo produzido: um
                                        miniacervo digital familiar organizado, revisado e pronto para ser
                                        compartilhado com as próximas gerações.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ma-encontros">
                    <div className="ma-container">
                        <div className="ma-encontros-grid">
                            <div className="ma-encontros-texto">
                                <span className="ma-section-tag">Organização</span>
                                <h2 className="ma-section-title">4 encontros para salvar suas memórias</h2>
                                <p className="ma-section-text">
                                    A oficina tem carga horária total de 12 horas, distribuídas em quatro
                                    encontros semanais de três horas:
                                </p>

                                <ul className="ma-encontros-lista">
                                    <li>
                                        <strong>Encontro 1 — Escolha e preparação do acervo:</strong>{' '}
                                        selecionar, digitalizar, fazer backup e anotar dados iniciais.
                                    </li>
                                    <li>
                                        <strong>Encontro 2 — Restauração responsável com IA:</strong>{' '}
                                        corrigir danos, sem alterar traços ou identidade, sempre comparando
                                        com o original.
                                    </li>
                                    <li>
                                        <strong>Encontro 3 — Organização e narrativa das lembranças:</strong>{' '}
                                        nomear arquivos, registrar nomes, datas e lugares, e escrever
                                        legendas com apoio de IA.
                                    </li>
                                    <li>
                                        <strong>Encontro 4 — Composição do acervo:</strong>{' '}
                                        estruturar o álbum digital, revisar privacidade e compartilhar
                                        histórias.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <img
                                    src={imgEncontros}
                                    alt="Etapas da oficina: escolha e preparação, restauração responsável com IA, organização e narrativa, montagem do acervo"
                                    className="ma-encontros-image"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ma-participacao">
                    <div className="ma-container">
                        <span className="ma-section-tag">Quem pode participar</span>
                        <h2 className="ma-section-title">Condições de participação</h2>
                        <p className="ma-section-text ma-section-text-bottom">
                            A oficina é voltada a pessoas interessadas em preservar fotografias e histórias de
                            sua família, preferencialmente com 50 anos ou mais. Para acompanhar as atividades,
                            recomenda-se que o participante:
                        </p>

                        <div className="ma-cards">
                            <div className="ma-card">
                                <h3>Operações básicas</h3>
                                <p>Saiba realizar operações básicas no celular ou no computador.</p>
                            </div>
                            <div className="ma-card">
                                <h3>Dispositivo próprio</h3>
                                <p>
                                    Tenha acesso a um smartphone, tablet ou notebook durante os encontros.
                                </p>
                            </div>
                            <div className="ma-card">
                                <h3>Fotografias da família</h3>
                                <p>
                                    Leve de cinco a dez fotografias impressas ou digitais de sua família.
                                </p>
                            </div>
                            <div className="ma-card">
                                <h3>Autorização de uso</h3>
                                <p>
                                    Tenha autorização para utilizar e compartilhar, no ambiente da oficina,
                                    as imagens selecionadas.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ma-cuidados">
                    <div className="ma-container">
                        <div className="ma-cuidados-card">
                            <span className="ma-section-tag ma-section-tag-light">Cuidados e ética</span>
                            <h2 className="ma-cuidados-title">Privacidade e uso responsável</h2>

                            <ul className="ma-cuidados-lista">
                                <li>Utilizar apenas fotografias próprias ou autorizadas pelos familiares envolvidos;</li>
                                <li>Manter a fotografia original sem alterações e guardar cópias de segurança;</li>
                                <li>Não utilizar a IA para inventar fatos, inserir pessoas ou modificar características identitárias;</li>
                                <li>Revisar cuidadosamente as restaurações, pois a IA pode produzir detalhes incorretos;</li>
                                <li>Compartilhar publicamente apenas conteúdos autorizados.</li>
                            </ul>
                        </div>
                    </div>
                </section>



                <section className="ma-quote-section">
                    <div className="ma-container">
                        <div className="ma-quote-card">
                            <p className="ma-quote-text">
                                A tecnologia não ocupa o lugar das lembranças; ela contribui para
                                preservá-las, organizá-las e transmiti-las às próximas gerações.
                            </p>
                            <span className="ma-quote-source">— Projeto Memórias Afetivas</span>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default MemoriasAfetivas;
