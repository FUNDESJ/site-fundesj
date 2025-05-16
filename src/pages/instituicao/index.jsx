// src/pages/Sobre.jsx
import Header from '../header/index.jsx'; // Co
import Footer from '../footer/footer';

function Instituicao() {
  return (
    <>
    <Header />  
    <div className="sobre-page">
      <header className="header">
        <h1>Sobre a FUNDESJ</h1>
      </header>

      <section className="sobre-intro">
        <p>
          A Fundação Educacional de São José (FUNDESJ) é uma entidade sem fins lucrativos
          que atua na promoção da educação, ciência e tecnologia, contribuindo para o
          desenvolvimento social e econômico da região.
        </p>
      </section>

      <section className="missao-visao-valores">
        <div className="card">
          <h2>Missão</h2>
          <p>Promover educação pública de qualidade para a formação cidadã e profissional.</p>
        </div>

        <div className="card">
          <h2>Visão</h2>
          <p>
            Ser reconhecida como referência em gestão educacional, comprometida com a
            inovação e a inclusão.
          </p>
        </div>

        <div className="card">
          <h2>Valores</h2>
          <ul>
            <li>Ética</li>
            <li>Transparência</li>
            <li>Inovação</li>
            <li>Inclusão</li>
            <li>Comprometimento</li>
          </ul>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}

export default Instituicao;