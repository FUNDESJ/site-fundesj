import Header from "../header";
import Footer from "../footer/footer";
import './afeto.css'
export default function AfertarAfeto() {
  return (
    <div className="afeto-page">
      <Header />
      <main className="afeto-main">
        <div className="afeto-hero">
          <div className="afeto-hero-content">
            <h1 className="afeto-title">Projeto Afetar com Afeto</h1>
            <p className="afeto-subtitle">
              Apoio psicossocial para fortalecer laços, escutar com empatia e transformar realidades escolares.
            </p>
          </div>
        </div>


        <section className="afeto-section">
          <h2 className="afeto-section-title">Sobre o Projeto</h2>
          <p className="section-text">
            O <span className="section-highlight">Projeto Afetar com Afeto</span>  é uma iniciativa da Fundação Educacional Municipal de São José (Fundesj) em parceria com a Prefeitura de São José e a Secretaria Municipal de Educação. Seu objetivo foi fortalecer lideranças escolares e promover práticas de comunicação afetiva, contribuindo para a criação de ambientes educacionais mais saudáveis e colaborativos.
          </p>
          <p className="section-text">
            Por meio de ações formativas e reflexivas, o projeto buscou desenvolver competências socioemocionais, incentivar a escuta qualificada, a empatia e a comunicação construtiva, fundamentais para a melhoria do clima escolar e para o fortalecimento das relações no cotidiano educacional.
          </p>
        </section>

        <section className="afeto-section">
          <h2 className="afeto-section-title">Objetivos</h2>
          <ul className="afeto-list">
            <li>
              Desenvolver competências socioemocionais em gestores e equipes escolares.
            </li>
            <li>
              Estimular práticas de escuta sensível, empatia e cultura de paz no ambiente educacional.
            </li>
            <li>
              Fortalecer vínculos e relações interpessoais no contexto escolar.
            </li>
            <li>
              Contribuir para a melhoria do clima organizacional e da qualidade da gestão escolar.
            </li>
          </ul>
        </section>

        <section className="afeto-section">
          <h2 className="section-title">Metodologia</h2>
          <p className="section-text">
            As atividades foram conduzidas por um com experiência em gestão educacional, comportamento humano e metodologias inovadoras, como Comunicação Não-Violenta e Inteligência Positiva.
          </p>
          <p className="section-text">
            O trabalho incluiu oficinas, rodas de conversa, dinâmicas reflexivas e práticas integrativas, que possibilitaram momentos de aprendizado, troca de experiências e construção coletiva de estratégias para um ambiente escolar mais humano e efetivo.
          </p>
        </section>

        <section className="afeto-section">
          <h2 className="afeto-section-title">Impacto</h2>
          <div className="afeto-stats">
            <div className="stat-card">
              <div className="stat-number">+150</div>
              <div className="stat-label">Estudantes Acompanhados</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">+10</div>
              <div className="stat-label">Escolas Atendidas</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Compromisso com o Cuidado</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
