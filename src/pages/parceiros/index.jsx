import './parceiros.css';
import Header from '../header';
import Footer from '../footer/footer';
import Imagem1 from '../../images/fotos parceiros/CITTADINO.png'
import Imagem2 from '../../images/fotos parceiros/BOMBEIRO.png'
import Imagem3 from '../../images/fotos parceiros/ESTÁCIO.png'
import Imagem4 from '../../images/fotos parceiros/UNIASSELVI.png'
import Imagem5 from '../../images/fotos parceiros/FMP.png'
import Imagem6 from '../../images/fotos parceiros/ACATE SJ.png'
import Imagem7 from '../../images/fotos parceiros/marista.png'
import Imagem8 from '../../images/fotos parceiros/NATURAÇÃO.png'
import Imagem9 from '../../images/fotos parceiros/UFSC_NETI.png'
import Imagem10 from '../../images/fotos parceiros/OAB.png'
import Imagem11 from '../../images/fotos parceiros/SENAC.png'
import Imagem13 from '../../images/fotos parceiros/UNICESUMAR.png'
import Imagem14 from '../../images/fotos parceiros/UNIVALI.png'
import Imagem15 from '../../images/fotos parceiros/BB.png'
function Parceiros() {
    return (
        <>
            <Header />
            <div className='parceiros'>
                <a href="https://www.instagram.com/cittadinogames/" target='_blank' rel='noopener noreferrer'>
                    <img src={Imagem1} alt="img Cittadino" className='imgparceiros'/>
                </a>
                <a href="https://www.cbm.sc.gov.br/" target='_blank' rel='noopener noreferrer'>
                    <img src={Imagem2} alt="img Bombeiros" className='imgparceiros'/>
                </a>
                <a href="https://estacio.br/" target='_blank' rel='noopener noreferrer'>
                    <img src={Imagem3} alt="img Estácio" className='imgparceiros'/>
                </a>
                <a href="https://www.fadesc.com.br/" target='_blank' rel='noopener noreferrer'>
                    <img src={Imagem4} alt="img Uniasselvi" className='imgparceiros'/>
                </a>
                <a href="https://fmpsc.edu.br/" target='_blank' rel='noopener noreferrer'>
                    <img src={Imagem5} alt="img FMP" className='imgparceiros'/>
                </a>
                <a href="https://www.instagram.com/jasantacatarina/" target='_blank' rel='noopener noreferrer'>
                    <img src={Imagem6} alt="img JA" className='imgparceiros'/>
                </a>
                <a href="https://maristaescolassociais.org.br/escola/marista-escola-social-sao-jose/" target='_blank' rel='noopener noreferrer'>
                    <img src={Imagem7} alt="img Marista" className='imgparceiros'/>
                </a>
                <a href="https://www.linkedin.com/company/natura%C3%A7%C3%A3o-brasil/?originalSubdomain=br" target='_blank' rel='noopener noreferrer'>
                    <img src={Imagem8} alt="img Naturação" className='imgparceiros'/>
                </a>
                <a href="https://neti.ufsc.br/" target='_blank' rel='noopener noreferrer'>
                    <img src={Imagem9} alt="img UFSC NETI" className='imgparceiros'/>
                </a>
                <a href="https://www.instagram.com/oabsaojose/" target='_blank' rel='noopener noreferrer'>
                    <img src={Imagem10} alt="img OAB" className='imgparceiros'/>
                </a>
                <a href="https://portal.sc.senac.br/portal/novo/" target='_blank' rel='noopener noreferrer'>
                    <img src={Imagem11} alt="img Senac" className='imgparceiros'/>
                </a>
                <a href="https://www.unicesumar.edu.br/" target='_blank' rel='noopener noreferrer'>
                    <img src={Imagem13} alt="img Unicesumar" className='imgparceiros'/>
                </a>
                <a href="https://univali.br/Paginas/default.aspx" target='_blank' rel='noopener noreferrer'>
                    <img src={Imagem14} alt="img Univali" className='imgparceiros'/>
                </a>
                <a href="https://www.bb.com.br/site/" target='_blank' rel='noopener noreferrer'>
                    <img src={Imagem15} alt="img BB" className='imgparceiros'/>
                </a>
            </div>
            <Footer />
        </>
    );
}

export default Parceiros;