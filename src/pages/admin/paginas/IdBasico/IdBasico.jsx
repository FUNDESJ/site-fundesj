import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaPlus, FaSearch, FaExternalLinkAlt } from 'react-icons/fa';

import './idbasico.css';

export default function IdBasico() {
    const [inscritos, setInscritos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    async function listarInscritos() {
        const token = localStorage.getItem('authToken');
        try {
            setCarregando(true);
            setErro(null);
            const retorno = await axios.get('https://back-end-fundesj.onrender.com/idbasico/ordenados', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setInscritos(retorno.data);
            console.log(retorno.data);
        } catch (erro) {
            console.log("Erro na requisição: ", erro);
            setErro('Não foi possível carregar a lista de inscritos. Tente novamente mais tarde.');
        } finally {
            setCarregando(false);
        }
    }

    useEffect(() => {
        listarInscritos();
    }, []);

    return (
        <div className="idbasico-container">
            <header className="idbasico-header">
                <h1>Lista de Inscritos - Curso de Inclusão Digital</h1>
                <p className="idbasico-subtitle">
                    Visualize todos os inscritos para o curso, com informações detalhadas sobre cada participante.
                </p>
            </header>

            <main className="idbasico-main">
                {carregando ? (
                    <div className="loading-container">
                        <div className="loading-spinner"></div>
                        <p>Carregando lista de inscritos...</p>
                    </div>
                ) : erro ? (
                    <div className="error-container">
                        <div className="error-icon">!</div>
                        <p className="error-message">{erro}</p>
                        <button className="retry-button" onClick={listarInscritos}>
                            Tentar Novamente
                        </button>
                    </div>
                ) : inscritos.length === 0 ? (
                    <div className="empty-state">
                        <div className="empty-icon">📋</div>
                        <h3>Nenhum inscrito encontrado</h3>
                        <p>Não há inscrições para o curso de Inclusão Digital no momento.</p>
                    </div>
                ) : (
                    <div className="table-container">
                        <table className="inscritos-table">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Telefone</th>
                                    <th>Primeira Vez?</th>
                                    <th>Local</th>
                                    <th>Período</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inscritos.map((inscrito, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className="nome-cell">
                                                <span className="nome-text">{inscrito.nome}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="telefone-cell">
                                                <span className="telefone-text">{inscrito.celular}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className={`primeira-vez-cell ${inscrito.primeira_vez ? 'sim' : 'nao'}`}>
                                                <span className="primeira-vez-badge">
                                                    {inscrito.primeira_vez ? 'Sim' : 'Não'}
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="local-cell">
                                                <span className="local-text">{inscrito.local}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="periodo-cell">
                                                <span className="periodo-text">{inscrito.periodo}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="acoes-cell">
                                                <button className="acao-btn editar-btn" title="Editar">
                                                    <FaEdit className="acao-icon" />
                                                </button>
                                                <button className="acao-btn excluir-btn" title="Excluir">
                                                    <FaTrash className="acao-icon" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </main>

            <footer className="idbasico-footer">
                <p>
                    Sistema de Gerenciamento de Inscritos - Curso de Inclusão Digital
                    <span className="footer-count"> | Total: {inscritos.length} inscritos</span>
                </p>
            </footer>
        </div>
    );
}