import { useNavigate } from "react-router-dom";
import voluntario from "../../images/fotos idbasico/voluntarios.png";
import conheca from "../../images/fotos idbasico/conheca1.png";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="projeto-hero">
        <h1 className="projeto-title">CONHEÇA O PROJETO</h1>
        <div className="title-decoration">
          <div className="decoration-line"></div>
          <div className="decoration-dot"></div>
          <div className="decoration-line"></div>
        </div>
      </div>

      <div className="projeto-grid">
        <div className="top-row">
          <div className="action-card card-sobre">
            <div className="card-content">
              <h2>SOBRE O PROJETO</h2>
              <img src={conheca} alt="Conheça o projeto" className="card-image" />
              <div className="card-overlay">
             <button className="card-button" onClick={()=> navigate('conheca')}>Saiba mais</button> 
              </div>
            </div>
          </div>

          <div className="action-card card-voluntario">
            <div className="card-content">
              <h2>SEJA UM VOLUNTÁRIO</h2>
              <img src={voluntario} alt="Voluntários" className="card-image" />
              <div className="card-overlay">
                <button className="card-button" onClick={() => navigate("voluntarios")}>
                  Participar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-row">
          <div className="action-card card-modulos">
            <div className="card-content">
              <h2>MÓDULOS</h2>
              <div className="card-overlay">
                <button className="card-button">Ver módulos</button>
              </div>
            </div>
          </div>

          <div className="action-card card-chamada">
            <div className="card-content">
              <h2>CHAMADA 2025</h2>
              <div className="card-overlay">
                <button className="card-button">Informações</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
