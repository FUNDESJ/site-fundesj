import "./idBasico.css";
import { useNavigate } from "react-router-dom";
import voluntario from "../../images/fotos idbasico/voluntarios.png";
import conheca from "../../images/fotos idbasico/conheca1.png";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <main className="projeto-page">
        <section className="projeto-hero">
          <div className="projeto-container">
            <div className="projeto-hero-content">

              <h1 className="projeto-title">Conheça o Projeto</h1>

              <p className="projeto-subtitle">
                Um espaço dedicado à informação, participação e engajamento
                social. Conheça a iniciativa, descubra como contribuir como
                voluntário e acompanhe as inscrições.
              </p>
            </div>
          </div>
        </section>

        <section className="projeto-cards-section">
          <div className="projeto-container">
            <div className="projeto-grid">
              <article className="action-card card-sobre">
              
                <div className="card-content">
                  <span className="card-tag">Apresentação</span>
                  <h2>Sobre o Projeto</h2>
                  <p>
                    Saiba mais sobre os objetivos, a proposta e o impacto social
                    da iniciativa.
                  </p>

                  <button
                    className="card-button"
                    onClick={() => navigate("conheca")}
                  >
                    Saiba mais
                  </button>
                </div>
              </article>

              <article className="action-card card-voluntario">
                <div className="card-content">
                  <span className="card-tag">Participação</span>
                  <h2>Seja um Voluntário</h2>
                  <p>
                    Faça parte da iniciativa e contribua para transformar vidas
                    por meio do engajamento social.
                  </p>

                  <button
                    className="card-button"
                    onClick={() => navigate("voluntarios")}
                  >
                    Participar
                  </button>
                </div>
              </article>

              <article className="action-card card-chamada card-wide">
                <div className="card-content">
                  <span className="card-tag">Acesso</span>
                  <h2>Inscrições</h2>
                  <p>
                    Consulte as informações disponíveis e acompanhe os detalhes
                    sobre o processo de inscrição.
                  </p>

                  <button
                    className="card-button"
                    onClick={() => navigate("inscricoes")}
                  >
                    Informações
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;