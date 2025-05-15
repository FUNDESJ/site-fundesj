import './programas.css';
import Imagem1 from '../../images/LA.png';
import Imagem2 from '../../images/volutarios.png';
import Imagem3 from '../../images/bombeiro.png';
import Header from '../header/index.jsx'; // Co
function Programas () {
  return (
    <>
    <Header />
    <div>
      <div>
        <h2>Longevidade Ativa</h2>
        <img src={Imagem1} alt="imagem LA" className="la" />
      </div>

      <div>
        <h2>Programa de Formação Voluntariado</h2>
        <img src={Imagem2} alt="imagem voluntarios" className="voluntarios" />
      </div>

      <div>
        <h2>Programa Bombeiro Mirim</h2>
        <img src={Imagem3} alt="imagem bombeiro" className="bombeiro" />
      </div>
    </div>
    </>
  );
};

export default Programas;