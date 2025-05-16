import './cursos.css';
import Footer from '../footer/footer';
import Header from '../header/index.jsx';
import Imagem1 from '../../images/ia.png';
import Imagem2 from '../../images/aee.png';
import Imagem3 from '../../images/nef.png';
import Imagem4 from '../../images/redacao.png';
function Cursos() { 
    return(
        <>
        <Header />
        <div>
              <div>
                <h2>Oficina IA</h2>
                <img src={Imagem1} alt="imagem IA" className="ia" />
              </div>
        
              <div>
                <h2>Oficina orientação Parental</h2>
                <img src={Imagem2} alt="imagem aee" className="aee" />
              </div>
        
              <div>
                <h2>NEF</h2>
                <img src={Imagem3} alt="imagem NEF" className="nef" />
              </div>

              <div>
                <h2>Redação Oficial</h2>
                <img src={Imagem4} alt="imagem redação oficial" className="redacao" />
              </div>
                <Footer/>
            </div>

        </>

    )







}

export default Cursos;