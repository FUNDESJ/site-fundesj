import './cursos.css';
import Footer from '../footer/footer';
import Header from '../header/index.jsx';
import Imagem1 from '../../images/banner cursos/ia.png';
import Imagem2 from '../../images/banner cursos/aee.png';
import Imagem3 from '../../images/banner cursos/nef.png';
import Imagem4 from '../../images/banner cursos/redacao.png';
function Cursos() { 
    return(
        <>
        <Header />
        <div>
              <div className='IA'>
                <img src={Imagem1} alt="imagem IA" className="ia" />
                <h2>OFICINA IA</h2>
              </div>
        
              <div className='AEE'>
                <img src={Imagem2} alt="imagem aee" className="aee" />
                <h2>OFICINA ORIENTAÇÃO PARENTAL</h2>
              </div>
        
              <div className='NEF'>
                <img src={Imagem3} alt="imagem NEF" className="nef" />
                <h2>NEF</h2>
              </div>

              <div className='Redacao'>
                <img src={Imagem4} alt="imagem redação oficial" className="redacao" />
                <h2>REDAÇÃO OFICIAL</h2>
              </div>
                <Footer/>
            </div>

        </>

    )







}

export default Cursos;