import './certificados.css'
import Footer from '../footer/footer';
import Header from '../header/index.jsx';
import Imagem1 from '../../images/certificado.png';

function Certificados() {

    return (
        <div className="certificados-container">
            <Header />
            <div className="main-content">

                <div>
                    <h2>Certificados</h2>
                    <img src={Imagem1} alt="imagem Certificados" className="certificados" />
                </div>

                <div className="verificador-container">
                    <input
                        type="text"
                        placeholder="Digite o código de verificação"
                        className="verificador-input"
                    />
                    <button className="verificador-botao">Procurar</button>

                </div>
            </div>
            <Footer />
        </div>

    )

}

export default Certificados;