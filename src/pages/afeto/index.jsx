import Header from "../header";
import Footer from "../footer/footer";
import './afeto.css'
export default function AfertarAfeto(){
    return (
    <div className="afeto-page">
        <Header/>
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
            O <span className="section-highlight">Projeto Afetar com Afeto</span> é uma iniciativa da FUNDESJ em parceria com a Prefeitura de São José, Secretaria de Educação e Secretaria de Saúde. Seu objetivo é promover acolhimento emocional e suporte psicológico a estudantes da rede pública municipal.
          </p>
          <p className="section-text">
            Através de ações preventivas e interventivas, o projeto visa fortalecer vínculos afetivos, desenvolver escuta qualificada e contribuir para a melhoria do bem-estar e desempenho escolar.
          </p>
        </section>

        <section className="afeto-section">
          <h2 className="afeto-section-title">Objetivos</h2>
          <ul className="afeto-list">
            <li>Oferecer acolhimento emocional e acompanhamento psicossocial a estudantes.</li>
            <li>Estimular escuta sensível, empatia e cultura de paz no ambiente escolar.</li>
            <li>Fortalecer os vínculos entre escola, família e comunidade.</li>
            <li>Contribuir para o desenvolvimento pessoal, social e escolar dos estudantes atendidos.</li>
          </ul>
        </section>

        <section className="afeto-section">
          <h2 className="section-title">Metodologia</h2>
          <p className="section-text">
            As atividades são conduzidas por uma equipe interdisciplinar de <span className="section-highlight">psicólogos e assistentes sociais</span> que atuam em colaboração com professores, gestores escolares e serviços públicos.
          </p>
          <p className="section-text">
            O trabalho inclui atendimentos individuais e coletivos, rodas de conversa, oficinas, mediações de conflito e encaminhamentos necessários para o cuidado integral.
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
      <Footer/>
    </div>
  );
}
