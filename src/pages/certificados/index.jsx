import './certificados.css';
import axios from 'axios';
import Footer from '../footer/footer';
import Header from '../header/index.jsx';
import Imagem1 from '../../images/banner certificados/certificado.png';
import { useState } from 'react';

function Certificados() {
    const [codigo, setCodigo] = useState('');
    const [loading, setLoading] = useState(false);
    const [retorno, setRetorno] = useState(null);
    const [erro, setErro] = useState(false); 
    
    const certificado = async () => {
        if (!codigo.trim()) {
            return alert("Informe o código do seu certificado");
        }

        setLoading(true);
        setErro(false);
        setRetorno(null);

        try {
            const resposta = await axios.get(`https://back-end-fundesj.onrender.com/certificado/${codigo}`);
            setRetorno(resposta.data); 
            console.log(resposta.data);
        } catch (erro) {
            setErro(true);
            console.error("Erro na requisição:", erro);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="certificados-container">
            <Header />
            <div className="main-content">
                <div className='Certificados'>
                    <img 
                        src={Imagem1} 
                        alt="Banner de Certificados" 
                        className="certificados-banner" 
                    />
                    <h2>Certificados</h2>
                </div>

                <div className="verificador-container">
                    <input
                        type="text"
                        placeholder="Digite o código de verificação"
                        className="verificador-input"
                        value={codigo}
                        onChange={(e) => setCodigo(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && certificado()}
                    />

                    <button 
                        className="verificador-botao"
                        onClick={certificado}
                        disabled={loading}
                    >
                        {loading ? (
                            <div className="spinner"></div>
                        ) : (
                            "Buscar Certificado"
                        )}
                    </button>
                </div>

                <div className="resultado-container">
                    {erro && (
                        <div className="mensagem-erro">
                            <i className="icone-erro">!</i>
                            <span>Certificado não encontrado. Verifique o código e tente novamente.</span>
                        </div>
                    )}

                    {retorno && !erro && (
                        <div className="tabela-certificado">
                            <h3>Dados do Certificado</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Nome:</th>
                                        <td>{retorno.nome}</td>
                                    </tr>
                                    <tr>
                                        <th>Curso:</th>
                                        <td>{retorno.curso}</td>
                                    </tr>
                                    <tr>
                                        <th>Carga Horária:</th>
                                        <td>{retorno.horas} horas</td>
                                    </tr>
                                    <tr>
                                        <th>Status:</th>
                                        <td className={`status-${retorno.status.toLowerCase()}`}>
                                            {retorno.status}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Certificado:</th>
                                        <td>
                                            {retorno.link ? (
                                                <a href={retorno.link} target="_blank" rel="noopener noreferrer" className="link-certificado">
                                                    Visualizar Certificado
                                                </a>
                                            ) : 'Não disponível'}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Certificados;