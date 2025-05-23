import Header from '../header';
import Footer from '../footer/footer';
import Imagem1 from '../../images/banner eventos/oab.png';
import './eventos.css';

function Eventos() {
    return (
        <div className="page-container">
            <Header />
            <div className="main-content">
                <div className='OAB'>
                    <img src={Imagem1} alt="imagem OAB" className="oab" />
                    <h2>OAB</h2>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Eventos;