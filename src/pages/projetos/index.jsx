import { useEffect } from 'react';
import './projetos.css';
import Header from '../header';
import Footer from '../footer/footer';

function Projetos() {
  useEffect(() => {
    const scrollReveals = document.querySelectorAll('.scroll-reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    scrollReveals.forEach(el => observer.observe(el));
    
    return () => {
      scrollReveals.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="projetos-page">
      <Header />
      <main className="projetos-main">
        <div className="projetos-container">
          <h1 className="scroll-reveal projetos-title">Projetos anteriores</h1>
          <p className="scroll-reveal projetos-intro">
            Nossa organização já realizou diversos projetos impactantes na comunidade. 
            Cada iniciativa foi cuidadosamente planejada para trazer transformações 
            positivas e duradouras.
          </p>
          
          <div className="projects-grid">
            <div className="project-card scroll-reveal">
              <div className="project-content">
                <h3 className="project-title">Inclusão Digital para Todos</h3>
                <p className="project-description">
                  Projeto que levou capacitação tecnológica para comunidades carentes, 
                  ensinando habilidades digitais essenciais para o mercado de trabalho.
                </p>
                <a href="#" className="project-link">Saiba mais</a>
              </div>
            </div>
            
            <div className="project-card scroll-reveal">
              <div className="project-content">
                <h3 className="project-title">Projeto Golfinho</h3>
                <p className="project-description">
                  Iniciativa de preservação ambiental que conscientizou mais de 5.000 
                  pessoas sobre a importância da conservação dos oceanos e vida marinha.
                </p>
                <a href="#" className="project-link">Saiba mais</a>
              </div>
            </div>
            
            <div className="project-card scroll-reveal">
              <div className="project-content">
                <h3 className="project-title">Projeto Afeto</h3>
                <p className="project-description">
                  Programa de apoio emocional e psicológico que atendeu mais de 300 
                  famílias durante a pandemia, oferecendo suporte e acompanhamento.
                </p>
                <a href="#" className="project-link">Saiba mais</a>
              </div>
            </div>
          </div>
          
          <div className="projetos-section">
            <h2 className="scroll-reveal">Nossa abordagem</h2>
            <p className="scroll-reveal">
              Trabalhamos com metodologias inovadoras que combinam conhecimento técnico 
              com envolvimento comunitário. Cada projeto é desenvolvido em parceria com 
              os beneficiários, garantindo que as soluções sejam sustentáveis e adequadas 
              ao contexto local.
            </p>
          </div>
          
          <div className="projetos-section">
            <h2 className="scroll-reveal">Impacto alcançado</h2>
            <p className="scroll-reveal">
              Nos últimos 5 anos, nossos projetos impactaram diretamente mais de 10.000 
              pessoas, com índices de satisfação acima de 95%. Medimos nossos resultados 
              através de indicadores quantitativos e qualitativos, com acompanhamento 
              contínuo mesmo após o término das atividades.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projetos;