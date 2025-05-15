import './projetos.css';
import Imagem1 from '../../images/idpratodos.png';
import Imagem2 from '../../images/golfinho.png';
import Imagem3 from '../../images/afeto.png';
import Header from '../header';

function Projetos () {
  return (
    <>
    <Header />
    <div>
      <div>
        <h2>Inclusão Digital para Todos</h2>
        <img src={Imagem1} alt="imagem ID" className="idptodos" />
      </div>

      <div>
        <h2>Projeto Golfinho</h2>
        <img src={Imagem2} alt="imagem golfinho" className="golfinho" />
      </div>

      <div>
        <h2>Programa Afetar com Afeto</h2>
        <img src={Imagem3} alt="imagem ACA" className="aca" />
      </div>
    </div>
    </>
  );
};

export default Projetos;