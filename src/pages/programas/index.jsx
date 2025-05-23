import './programas.css';
import Footer from '../footer/footer';
import Imagem1 from '../../images/banner programas/LA.png';
import Imagem2 from '../../images/banner programas/volutarios.png';
import Imagem3 from '../../images/banner programas/bombeiro.png';
import Header from '../header/index.jsx'; // Co
function Programas () {
  return (
    <>
    <Header />
    <div>
      <div className='longevidade'>
        <img src={Imagem1} alt="imagem LA" className="la" />
        <h2>LONGEVIDADE ATIVA</h2>
      </div>

      <div className='voluntario'>
        <img src={Imagem2} alt="imagem voluntarios" className="voluntarios" />
        <h2>PROGRAMA DE FORMAÇÃO DE VOLUNTARIADO</h2>
      </div>

      <div className='bombeiros'>
        <img src={Imagem3} alt="imagem bombeiro" className="bombeiro" />
        <h2>PROGRAMA BOMBEIRO MIRIM</h2>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Programas;