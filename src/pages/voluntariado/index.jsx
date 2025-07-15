import Header from '../header/index'
import Footer from '../footer/footer'
import MariaHelena from '../../images/Palestrantes Voluntariado/MariaHelena.jpg'
import solange from '../../images/Palestrantes Voluntariado/solange.webp'
import priscila from '../../images/Palestrantes Voluntariado/priscila.webp'
import moacir from '../../images/Palestrantes Voluntariado/moacir.webp'
import { FaCalendarAlt, FaClock, FaChalkboardTeacher, FaClipboardCheck } from 'react-icons/fa'
import './voluntariado.css'
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
            listaPresenca: 'https://docs.google.com/spreadsheets/d/1a79Dd6uDombLUWZ_jI3KN1DyNDZwPZN4vsRTMirSLH4/edit?gid=0#gid=0'
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
                {/* Hero Section */}
                <div className="voluntariado-hero">
                    <div className="hero-content">
                        <h1 className="hero-title">Bem-Estar e Conectividade</h1>
                        <h2 className="hero-subtitle">Transformando Vidas nas Instituições de Longa Permanência</h2>
                        <div className="hero-divider"></div>
                        <p className="hero-text">
                            Inovação, cuidado e tecnologia para a melhor idade - uma abordagem integrada que renova o cotidiano dos idosos.
                        </p>
                    </div>
                </div>

                {/* Introduction Section */}
                <section className="intro-section">
                    <div className="section-content">
                        <h2 className="section-title">Apresentação</h2>
                        <p className="section-text">
                            O projeto <span className="highlight">Bem-Estar e Conectividade</span> é uma iniciativa inovadora que vem ressignificando o cotidiano em instituições de longa permanência para idosos. Mais do que levar atividades, criamos ambientes acolhedores, vivos e inspiradores, adaptando metodologias exclusivas às realidades de cada instituição.
                        </p>
                        <p className="section-text">
                            Nossa missão é transformar esses espaços em lugares onde o cuidado, a tecnologia e o afeto se encontram.
                        </p>
                    </div>
                </section>

                {/* Objectives Section */}
                <section className="objectives-section">
                    <h2 className="section-title">Objetivo</h2>
                    <div className="objectives-grid">
                        <div className="objective-card">
                            <div className="objective-icon"><FaHeart /></div>
                            <h3>Bem-Estar Emocional</h3>
                            <p>Fortalecer o equilíbrio emocional e social dos participantes</p>
                        </div>
                        <div className="objective-card">
                            <div className="objective-icon"><FaChalkboardTeacher /></div>
                            <h3>Inclusão Digital</h3>
                            <p>Facilitar o acesso e uso de tecnologias digitais</p>
                        </div>
                        <div className="objective-card">
                            <div className="objective-icon"><FaUsers /></div>
                            <h3>Vínculos Familiares</h3>
                            <p>Estreitar relações familiares e comunitárias</p>
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
                                        <span className="meta-item"><FaCalendarAlt /> {encontro.data}</span>
                                        <span className="meta-item"><FaClock /> {encontro.horario}</span>
                                    </div>
                                    <div className="encontro-palestrante">
                                        <FaChalkboardTeacher /> <strong>Palestrante:</strong> {encontro.palestrante}
                                    </div>
                                    <p className="encontro-desc">{encontro.desc}</p>
                                    {encontro.listaPresenca && (
                                        <a href={encontro.listaPresenca} target="_blank" rel="noopener noreferrer" className="presenca-button">
                                            <FaClipboardCheck /> Lista de Presença
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
                        <p className="section-text">
                            A proposta pedagógica alia o uso de tecnologias digitais ao cuidado com a saúde mental e emocional. As oficinas incluem audiolivros, jogos cognitivos, meditações guiadas, músicas e playlists temáticas, sempre adaptadas aos interesses e capacidades dos participantes.
                        </p>
                        <p className="section-text">
                            Cada encontro é planejado para ser uma experiência significativa — de relaxamento, desenvolvimento e convivência.
                        </p>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    )
}