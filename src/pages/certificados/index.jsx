import './certificados.css'
import axios from 'axios'
import Footer from '../footer/footer';
import Header from '../header/index.jsx';
import Imagem1 from '../../images/certificado.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Certificados() {
    const [codigo, setCodigo] = useState('')
    const certificado = async () => {
        if (!codigo) {
            return alert("Informe o codigo do seu certificado")
        }
        try {
            const resposta = await axios.get(`https://back-end-fundesj.onrender.com/certificado/${codigo}`,
            )
            console.log(resposta.data)
        } catch (erro) {
            alert("Certificado nao encontrado");
            console.log("Certificado nao encontrado")
        }
    }

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
                        value={codigo}
                        onChange={((e) => setCodigo(e.target.value))}
                    />
                    <button className="verificador-botao" onClick={certificado}>Procurar</button>

                </div>
            </div>
            <Footer />
        </div>

    )

}

export default Certificados;