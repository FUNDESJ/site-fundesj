import Header from '../header/index.jsx';
import Footer from '../footer/footer'
import voluntario from '../../images/fotos idbasico/voluntarios.png';
import conheca from '../../images/fotos idbasico/conheca1.png';
import './idbasico.css';

function Idbasico() {
  return (
    <>
    <Header /> 
    <div className="projeto-container">
      <div className="projeto-header">
        <h1 className="projeto-title">CONHEÇA O PROJETO</h1>
      </div>
      
      <div className="projeto-grid">
        {/* Linha Superior */}
        <div className="projeto-row">
          <div className="action-card">
            <h2>SOBRE O PROJETO</h2>
            <img src={conheca} alt="img conheça o projeto" className='imgconheca'/>
          </div>
          
          <div className="action-card">
            <h2>SEJA UM VOLUNTÁRIO</h2>
            <img src={voluntario} alt="img voluntários" className='imgvoluntario'/>
          </div>
        </div>

        {/* Linha Inferior */}
        <div className="projeto-row">
          <div className="action-card2">
            <h2>MÓDULOS</h2>
          </div>
          
          <div className="action-card2">
            <h2>CHAMADA 2025</h2>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Idbasico;