import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/footer.jsx';
import './contato.css';
import MapaIframe from "../../pages/contato/mapa.jsx";
import { FaPhone, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

function Contato() {
    const handlePhoneClick = (number) => {
        window.location.href = `tel:${number}`;
    };

    const handleWhatsappClick = () => {
        window.open('https://wa.me/5548996792332', '_blank');
    };

    return (
        <>
            <Header />

            <div className='contato-container'>
                <div className='informacoes'>
                    <h1>Contatos</h1>
                    
                    <p>
                        <FaPhone style={{ marginRight: '10px', color: '#3498db' }} />
                        (48) 3381-0010
                    </p>
                    
                    <p onClick={handleWhatsappClick}>
                        <FaWhatsapp style={{ marginRight: '10px', color: '#25D366' }} />
                        (48) 99679-2332
                    </p>
                    
                    <p>
                        <FaMapMarkerAlt style={{ marginRight: '10px', color: '#e74c3c' }} />
                        Av. Acioni Souza Filho, 403, São José
                    </p>
                    
                    <div className="map-container">
                        <MapaIframe />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Contato;