import './certificados.css';
import axios from 'axios';
import Footer from '../../components/footer/footer.jsx';
import Header from '../../components/header/index.jsx';
import { useState } from 'react';

function Certificados() {
    const [codigo, setCodigo] = useState('');
    const [loading, setLoading] = useState(false);
    const [retorno, setRetorno] = useState(null);
    const [erro, setErro] = useState(false); 
    
    const certificado = async () => {
        if (!codigo.trim()) {
            setErro(true);
            setRetorno(null);
            return;
        }

        setLoading(true);
        setErro(false);
        setRetorno(null);

        try {
            const resposta = await axios.get(`https://back-end-fundesj.onrender.com/certificado/${codigo}`);
            setRetorno(resposta.data); 
        } catch (erro) {
            setErro(true);
            console.error("Erro na requisição:", erro);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header />

            <div className="certificados-container">
                <div className="main-content">
                    <div className="certificate-titles">
                        <h4>Digite o código do seu</h4>
                        <h1>CERTIFICADO</h1>
                    </div>

                    <div className="certificate-example">
                        <div className="example-card">
                            <span>Exemplo: FU7P91Q5</span>
                        </div>
                    </div>

                    <div className="verificador-container">
                        <div className="search-box">
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
                                    <>
                                        <p className='buscar'>Buscar Certificado</p> 
                                        <svg className="search-icon" viewBox="0 0 24 24">
                                            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                                        </svg>
                                    </>
                                )}
                            </button>
                        </div>
                        
                        {erro && (
                            <>
                                <div className="mensagem-erro">
                                    <svg className="error-icon" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                                    </svg>
                                    <span>Certificado não encontrado. Verifique o código e tente novamente.</span>
                                </div>
                                
                                <div className="certificate-info">
                                    <div className="info-card">
                                        <svg className="info-icon" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                                        </svg>
                                        <h4>Não encontrou seu certificado?</h4>
                                        <p>Entre em contato com nosso suporte através do email: tecnologia@fundesj.com.br</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    {retorno && !erro && (
                        <div className="tabela-certificado">
                            <div className="certificate-header">
                                <h3>Dados do Certificado</h3>
                                <div className="certificate-badge">
                                    <span className={`status-${retorno.status.toLowerCase()}`}>
                                        {retorno.status}
                                    </span>
                                </div>
                            </div>
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
                                        <th>Certificado:</th>
                                        <td>
                                            {retorno.link ? (
                                                <a href={retorno.link} target="_blank" rel="noopener noreferrer" className="link-certificado">
                                                    Visualizar Certificado
                                                    <svg className="download-icon" viewBox="0 0 24 24">
                                                        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                                                    </svg>
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
        </>
    );
}

export default Certificados;
