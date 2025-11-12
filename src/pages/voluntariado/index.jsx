import Header from '../../components/header/index'
import Footer from '../../components/footer/footer'
import MariaHelena from '../../images/Palestrantes Voluntariado/MariaHelena.jpg'
import solange from '../../images/Palestrantes Voluntariado/solange.webp'
import priscila from '../../images/Palestrantes Voluntariado/priscila.webp'
import moacir from '../../images/Palestrantes Voluntariado/moacir.webp'
import "./voluntariado.css"
export default function Voluntariado() {
    const encontros = [
        {
            id: 1,
            nome: 'Abertura e Apresentação do Programa',
            data: '24 de março',
            horario: '14h',
            palestrante: "Maria Helena Krüger – Superintendente da Fundação Educacional. Educadora e Gestora de Programas e Projetos Sociais.",
            desc: 'Atividade de abertura irá contemplar as orientações para atuar como voluntário(a), garantindo que todos os participantes estejam alinhados com os princípios e procedimentos fundamentais para essa prática.',
            foto: MariaHelena,
            listaPresenca: ''
        },
        {
            id: 2,
            nome: 'A comunicação humana',
            data: '23 de abril',
            horario: '14h',
            palestrante: 'Solange Fonseca – Comunicóloga, com formação em Ontologia da Linguagem, Biologia Cultural e Comunicação Não-Violenta. É facilitadora de processos de aprendizagem. Instrutora do Sebrae-SC, professora da ENAP e Co-fundadora do Instituto Converse.',
            desc: 'O papel da linguagem como ferramenta primordial de expressão e conexão. Habilidade essencial, que vai muito além das palavras, envolvendo empatia, escuta ativa e a capacidade de transmitir sentimentos e pensamentos. Discutir esse tema é reconhecer o poder que a comunicação possui na construção de relações mais saudáveis e enriquecedoras.',
            foto: solange,
            listaPresenca: ''
        },
        {
            id: 3,
            nome: 'Ser e Conviver',
            data: '7 de maio',
            horario: '14h',
            palestrante: 'Priscila Cardoso da Silva – Psicanalista clínica, escritora e professora.',
            desc: 'O tema remete a olhar para o próprio ser, compreendendo como funcionamos, agimos e interagimos com o mundo e com as pessoas que nos cercam. Ao reconhecer a complexidade de nossa existência, passamos a valorizar a singularidade de cada indivíduo e a importância de um olhar humanizado, que nos permite acolher a diversidade e construir relações verdadeiras e transformadoras promovendo uma convivência mais harmoniosa e consciente.',
            foto: priscila,
            listaPresenca: ''
        },
        {
            id: 4,
            nome: 'Emoções e Afeto',
            data: '12 de junho',
            horario: '14h',
            palestrante: 'Moacir Rauber – atua como palestrante e formador, é escritor e coach especializado em superação e motivação',
            desc: 'O tema encaminha para refletir como nossas emoções guiam nossas ações, moldam nossas relações e influenciam a forma como percebemos o mundo. Reconhecer e acolher tanto as próprias emoções quanto as dos outros é um passo essencial para criar ambientes de cuidado e compreensão.',
            foto: moacir,
            listaPresenca: ''
        }
    ]

    return (
        <>
            <Header />

            <div className="voluntariado-container">
                <div className="voluntariado-hero">
                    <h1 className="hero-titulo">Programa de Formação de Voluntariado</h1>
                    <h2 className="hero-subtitulo">FUNDESJ/AVOS</h2>
                    <div className="hero-divider"></div>

                </div>

                {/* Introduction Section */}
                <section className="intro-section">

                    <p className="section-text">
                        A <span className="highlight">Fundação Educacional de São José</span> desenvolveu o <span className="highlight">Programa de Formação de Voluntariado</span>, junto a AVOS, onde em 4 encontros foi reunido os voluntários da Associação para refletir, aprender e compartilhar experiências que enriquecem a prática voluntária.
                    </p>
                    <p className="section-text">
                        Ao longo do Programa, os participantes serão certificados pela Fundação Educacional, reconhecendo o comprometimento e a evolução de cada um na prática do voluntariado.
                    </p>
                </section>

                {/* Objectives Section */}
                <section className="objectives-section">
                    <h2 className="section-title">Objetivos do Programa</h2>
                    <div className="objectives-grid">
                        <div className="objective-card">
                            <div className="objective-icon">
                                <svg viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="var(--accent-color)" d="M19 3h-2.25V1h-1.5v2H8.75V1h-1.5v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
                                </svg>
                            </div>
                            <h3>Formação Continuada</h3>
                            <div className="card-divider"></div>

                            <p>Capacitar voluntários através de encontros formativos mensais</p>
                        </div>
                        <div className="objective-card">

                            <div className="objective-icon">
                                <svg viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="var(--accent-color)" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                            </div>
                            <h3>Dimensões Humanas</h3>
                            <div className="card-divider"></div>

                            <p>Explorar diferentes aspectos do desenvolvimento humano</p>
                        </div>
                        <div className="objective-card">
                            <div className="objective-icon">
                                <svg viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="var(--accent-color)" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                                </svg>
                            </div>
                            <h3>Prática Voluntária</h3>
                            <div className="card-divider"></div>

                            <p>Fortalecer a importância do voluntariado e suas diretrizes</p>
                        </div>
                    </div>
                </section>

                {/* Encontros Section */}
                <section className="encontros-section">
                    <h2 className="section-title">Programação de Encontros</h2>
                    <div className="encontros-timeline">
                        {encontros.map((encontro) => (
                            <div className="encontro-card" key={encontro.id}>
                                <div className="encontro-image-container">
                                    <img src={encontro.foto} alt={encontro.palestrante} className="encontro-image" />
                                </div>
                                <div className="encontro-content">
                                    <h3 className="encontro-title">{encontro.nome}</h3>
                                    <div className="encontro-meta">
                                        <span className="meta-item">
                                            <svg viewBox="0 0 24 24" width="16" height="16">
                                                <path fill="var(--primary-light)" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
                                            </svg>
                                            {encontro.data}
                                        </span>
                                        <span className="meta-item">
                                            <svg viewBox="0 0 24 24" width="16" height="16">
                                                <path fill="var(--primary-light)" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                                                <path fill="var(--primary-light)" d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                                            </svg>
                                            {encontro.horario}
                                        </span>
                                    </div>
                                    <div className="encontro-palestrante">
                                        <div className='icone-encontro'>
                                            <svg viewBox="0 0 24 24" width="16" height="16">
                                                <path fill="var(--text-color)" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                            </svg>
                                            <strong>Palestrante:</strong>
                                        </div>
                                        <p> {encontro.palestrante}</p>

                                    </div>
                                    <p className="encontro-desc">{encontro.desc}</p>
                                    {encontro.listaPresenca && (
                                        <a href={encontro.listaPresenca} target="_blank" rel="noopener noreferrer" className="presenca-button">
                                            <svg viewBox="0 0 24 24" width="16" height="16">
                                                <path fill="white" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                                            </svg>
                                            Lista de Presença
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Methodology Section */}
                <section className="methodology-section">
                    <div className="section-content">
                        <h2 className="section-title">Metodologia</h2>
                        <p className="voluntario-section-text">
                            Os encontros incluem atividades lúdicas e foram pensados para explorar diferentes dimensões do ser humano, fortalecendo não apenas a importância do voluntariado, mas também as normas e diretrizes que orientam a ação.
                        </p>
                        <p className="voluntario-section-text">
                            Esta série de encontros é uma oportunidade para aprofundar o autoconhecimento e aprimorar as relações interpessoais, contribuindo para um ambiente de cuidado, respeito e solidariedade, fundamental para o apoio às mães e crianças que enfrentam desafios tão delicados.
                        </p>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    )
}