import './cursos.css';
import Footer from '../footer/footer';
import Header from '../header/index.jsx';
import Imagem1 from '../../images/banner cursos/ia.png';
import Imagem2 from '../../images/banner cursos/aee.png';
import Imagem3 from '../../images/banner cursos/nef.png';
import Imagem4 from '../../images/banner cursos/redacao.png';

function Cursos() {
  const cursos = [
    {
      id: 1,
      titulo: "Inteligência Artificial no Ambiente de Trabalho",
      imagem: Imagem1,
      descricao: "Curso introdutório que apresenta os impactos da inteligência artificial no ambiente de trabalho, incentivando a compreensão de novas tecnologias e sua aplicação ética e produtiva.",
      status: "Realizado",
      link: '/cursos/inteligencia-artificial'
    },
    {
      id: 2,
      titulo: "Orientação Parental para Professores do AEE",
      imagem: Imagem2,
      descricao: "Voltado a educadores da área de Educação Especial, o curso aborda estratégias de apoio à parentalidade, com foco no fortalecimento do vínculo entre escola e família.",
      status: "Realizado",
      link: '/cursos/orientacao-parental'
    },
    {
      id: 3,
      titulo: "Redação Oficial",
      imagem: Imagem4,
      descricao: "Formação voltada à produção de documentos oficiais com clareza, objetividade e respeito às normas da linguagem administrativa, essencial para servidores e profissionais da gestão pública.",
      status: "Realizado",
      link: '/cursos/redacao-oficial'
    },
    {
      id: 4,
      titulo: "NEF – Educação Continuada",
      imagem: Imagem3,
      descricao: "Curso atualmente em andamento, realizado por meio da Escola Federativa, que oferece conteúdos de aperfeiçoamento contínuo para servidores públicos e agentes políticos.",
      status: "Ativo",
      link: '/cursos/nef'

    }
  ];

  return (
    <>
      <Header />
      <main className="cursos-container">
        {/* Hero Section */}
        <section className="cursos-hero">
          <div className="hero-content">
            <h1 className="hero-title">Cursos Oferecidos pela FUNDESJ</h1>
            <p className="hero-subtitle">
              A FUNDESJ promove cursos e formações continuadas com foco na qualificação profissional, no desenvolvimento institucional e na disseminação de conhecimentos relevantes para o serviço público e a comunidade em geral.
            </p>
          </div>
        </section>

        {/* Cursos Section */}


        {/* Curso Ativo Section */}
        <section className="curso-ativo-section">
          <h2 className="section-title">Curso Ativo</h2>
          {cursos.filter(curso => curso.status === "Ativo").map(curso => (
             <a href={curso.link}>
            <article key={curso.id} className="curso-ativo-card">
              <div className="ativo-image-container">
                
                <img src={curso.imagem} alt={curso.titulo} className="ativo-image" />
                  <div className="curso-status realizado">Em Andamento</div>
              </div>
              <div className="ativo-content">
                <h3 className="ativo-title">{curso.titulo}</h3>
                <p className="ativo-description">{curso.descricao}</p>
                <p className="ativo-info">A iniciativa visa promover a qualificação técnica alinhada às boas práticas da administração pública.</p>
              </div>
            </article>
            </a>

          ))}
        </section>
        <section className="cursos-section">
          <h2 className="section-title">Cursos Realizados</h2>
          <div className="cursos-grid">
            {cursos.filter(curso => curso.status === "Realizado").map(curso => (
              <a href={curso.link}>
              <article key={curso.id} className="curso-card">
                <div className="curso-image-container">
                  <img src={curso.imagem} alt={curso.titulo} className="curso-image" />
                  <div className="curso-status ativo ">Realizado</div>
                </div>
                <div className="curso-content">
                  <h3 className="curso-title">{curso.titulo}</h3>
                  <p className="curso-description">{curso.descricao}</p>
                </div>
              </article>
              </a>
            ))}
          </div>
        </section>

        {/* Estrutura Section */}
        <section className="estrutura-section">
          <div className="estrutura-content">
            <h2 className="estrutura-title">Estrutura e Propósito</h2>
            <p className="estrutura-text">
              Os cursos ofertados pela FUNDESJ refletem o compromisso com a formação contínua, a inovação pedagógica e o fortalecimento das competências profissionais. As edições anteriores atenderam temáticas emergentes e específicas, enquanto o curso NEF – Educação Continuada representa a consolidação de uma política educacional voltada ao desenvolvimento permanente de agentes públicos.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Cursos;