import './programas.css';
import Footer from '../footer/footer';
import { useState } from 'react';
import Header from '../header/index.jsx';
import Imagem1 from '../../images/banner programas/LA.png';
import Imagem2 from '../../images/banner programas/voluntariado.png';
import Imagem3 from '../../images/banner programas/bombeiro.png';
import HeroPages from '../../components/heros/hero_pages.jsx';
function Programas() {
  const [currentProgram, setCurrentProgram] = useState(0);

  const programas = [
    {
      id: 1,
      nome: "Longevidade Ativa",
      foto: Imagem1,
      descricao: "Programa voltado para a promoção do envelhecimento saudável e ativo, com atividades físicas, culturais e educacionais para idosos.",
      link: '/longevidade-ativa'
    },
    {
      id: 2,
      nome: "Programa de formação voluntariado",
      foto: Imagem2,
      descricao: "Iniciativa que capacita cidadãos para atuarem como voluntários em diversas frentes de trabalho social e comunitário.",
      link: '/voluntariado'
    },
    {
      id: 3,
      nome: 'Programa Bombeiro Mirim',
      foto: Imagem3,
      descricao: "Projeto educativo que ensina noções de prevenção, cidadania e primeiros socorros para crianças e adolescentes.",
      link: '/bombeiro-mirim'
    }
  ];

  const nextProgram = () => {
    setCurrentProgram((prev) => (prev === programas.length - 1 ? 0 : prev + 1));
  };

  const prevProgram = () => {
    setCurrentProgram((prev) => (prev === 0 ? programas.length - 1 : prev - 1));
  };

  return (
    <>
      <Header />
      <main className="programas-container">

        <HeroPages
          titulo="Nossos Programas"
          descricao="Transformando vidas através da educação e inclusão social"
        />

        <section className="programas-intro">
          <p className="intro-text">
            A FUNDESJ – Fundação Educacional de São José desenvolve e coordena uma série de programas estratégicos voltados à promoção da educação, inclusão digital, desenvolvimento humano e cidadania. Atuando de forma integrada com o poder público e instituições parceiras, a FUNDESJ tem como missão contribuir ativamente para a formação de uma sociedade mais justa, participativa e preparada para os desafios contemporâneos.
          </p>
        </section>

        <section className="programas-eixos">
          <h2 className="eixos-title">Nossos programas são estruturados em três grandes eixos de atuação:</h2>

          <div className="eixos-grid">
            <article className="eixo-card">
              <h3 className="eixo-title">Educação e Formação Profissional</h3>
              <p className="eixo-description">
                Iniciativas voltadas à qualificação de servidores públicos e da comunidade por meio de bolsas de estudos e cursos especializados. O destaque é o Programa Stricto Sensu, que apoia a formação em nível de pós-graduação, fortalecendo a gestão pública e incentivando o aprimoramento técnico e acadêmico.
              </p>
            </article>

            <article className="eixo-card">
              <h3 className="eixo-title">Inclusão Digital</h3>
              <p className="eixo-description">
                Projetos que democratizam o acesso à tecnologia e à informação, capacitando pessoas de diferentes faixas etárias — com ênfase na população idosa — para o uso consciente e autônomo de recursos digitais. Programas como a Inclusão Digital para Idosos, Inclusão Digital para Todos e ações em Lares de Repouso promovem independência, comunicação e integração social.
              </p>
            </article>

            <article className="eixo-card">
              <h3 className="eixo-title">Cidadania, Bem-Estar e Valorização da Vida</h3>
              <p className="eixo-description">
                Programas que promovem bem-estar, saúde emocional e integração social para o público 60+. O destaque é o Longevidade Ativa, ciclo de palestras quinzenais que estimula o protagonismo e o envelhecimento saudável, além de projetos de formação de voluntariado para atuação em ações comunitárias e eventos da Fundação.
              </p>
            </article>

          </div>
        </section>

        <section className="programas-commitment">
          <div className="commitment-content">
            <h2 className="commitment-title">Compromisso com o Desenvolvimento Humano</h2>
            <p className="commitment-text">
              Iniciativas que promovem o desenvolvimento humano em todas as fases da vida, com foco em cidadania, saúde e integração social. O Programa Longevidade Ativa oferece palestras quinzenais voltadas ao público 60+, incentivando o envelhecimento saudável e o protagonismo na terceira idade.
              Já o Programa Bombeiro Mirim atua com crianças da rede pública, promovendo educação cidadã e prevenção, em parceria com o Corpo de Bombeiros Militar. Complementam esse eixo as ações de formação de voluntários, que fortalecem o engajamento comunitário por meio da participação ativa em projetos sociais.            </p>
          </div>
        </section>

        <section className="programas-carousel">
          <h2 className="carousel-title">Conheça nossos programas em destaque</h2>
          <div className="carousel-container">
            <button
              className="carousel-button prev"
              onClick={prevProgram}
              aria-label="Programa anterior"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="carousel-slide">
              <a href={programas[currentProgram].link}>
                <div className="program-card">
                  <div className="program-image-container">
                    <img
                      src={programas[currentProgram].foto}
                      alt={programas[currentProgram].nome}
                      className="program-image"
                    />
                    <div className="program-overlay">
                      <span className="know-more">Saiba mais</span>
                    </div>
                  </div>
                  <div className="program-info">
                    <h3 className="program-name">{programas[currentProgram].nome}</h3>
                    <p className="program-description">{programas[currentProgram].descricao}</p>
                  </div>
                </div>
              </a>
            </div>

            <button
              className="carousel-button next"
              onClick={nextProgram}
              aria-label="Próximo programa"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="carousel-dots">
            {programas.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentProgram ? 'active' : ''}`}
                onClick={() => setCurrentProgram(index)}
                aria-label={`Ir para programa ${index + 1}`}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Programas;