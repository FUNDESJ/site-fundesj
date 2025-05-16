import Header from '../header';
import Footer from '../footer/footer';
import Imagem1 from '../../images/oab.png';
import './eventos.css';

function Eventos() {
    return (
        <div className="eventos-container">
            <Header />
            <div className="main-content">
                <h2>OAB</h2>
                <img src={Imagem1} alt="imagem OAB" className="oab" />
            </div>
            <Footer />
        </div>
    )
}

export default Eventos;