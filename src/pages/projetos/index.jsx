import './projetos.css';
import Footer from '../footer/footer';
import Imagem1 from '../../images/banner projetos/idpratodos.png';
import Imagem2 from '../../images/banner projetos/golfinho.png';
import Imagem3 from '../../images/banner projetos/afeto.png';
import Header from '../header';

function Projetos() {
  return (
    <>
      <Header />
      <div>
        <div className='idPtodos'>
          <img src={Imagem1} alt="imagem ID" className="idptodos" />
          <h2>INCLUSÃO DIGITAL PARA TODOS</h2>
        </div>

        <div className='Golfinho'>
          <img src={Imagem2} alt="imagem golfinho" className="golfinho" />
          <h2>PROJETO GOLFINHO</h2>
        </div>

        <div className='Aca'>
          <img src={Imagem3} alt="imagem ACA" className="aca" />
          <h2>PROGRAMA AFETAR COM AFETO</h2>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projetos;