import './realizacoes.css';
import Header from '../header';
import Footer from '../footer/footer';
import Imagem1 from '../../images/fotos realizacoes/banner2024.png';
import Imagem2 from '../../images/fotos realizacoes/1.png';
import Imagem3 from '../../images/fotos realizacoes/2.png';
import Imagem4 from '../../images/fotos realizacoes/3.png';
import Imagem5 from '../../images/fotos realizacoes/4.png';
import Imagem6 from '../../images/fotos realizacoes/5.png';
import Imagem7 from '../../images/fotos realizacoes/6.png';
import Imagem8 from '../../images/fotos realizacoes/7.png';
import Imagem9 from '../../images/fotos realizacoes/8.png';
import Imagem10 from '../../images/fotos realizacoes/9.png';
function Realizacoes() {
    return (
        <>
            <Header />
            <div>
                <div className='realizacoes'>
                    <img src={Imagem1} alt="Foto realizações" className='realizacoesbanner' />
                    <h2 >REALIZAÇÕES 2024</h2>
                </div>
                <div className='todasimagens'>
                    <img src={Imagem2} alt="Imagem 1" className='imagem'/>
                    <img src={Imagem3} alt="Imagem 2" className='imagem'/>
                    <img src={Imagem4} alt="Imagem 3" className='imagem'/><br />
                    <img src={Imagem5} alt="Imagem 4" className='imagem'/>
                    <img src={Imagem6} alt="Imagem 5" className='imagem'/>
                    <img src={Imagem7} alt="Imagem 6" className='imagem'/><br />
                    <img src={Imagem8} alt="Imagem 7" className='imagem'/>
                    <img src={Imagem9} alt="Imagem 8" className='imagem'/>
                    <img src={Imagem10} alt="Imagem 9" className='imagem'/>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Realizacoes;