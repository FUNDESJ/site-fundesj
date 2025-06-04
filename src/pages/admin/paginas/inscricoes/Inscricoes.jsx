import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Inscricoes.css';

const Inscricoes = ({ abrirModal }) => {
    const [inscritos, setInscritos] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        buscarLista();
    }, []);

    async function buscarLista() {
        const token = localStorage.getItem('authToken');
        if (!token) {
            alert("Erro no sistema");
            setCarregando(false);
            return;
        }

        try {
            const retorno = await axios.get('https://back-end-fundesj.onrender.com/listaInscritos', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setInscritos(retorno.data);
            setCarregando(false);
        } catch (erro) {
            console.log(erro);
            setCarregando(false);
        }
    }

    const primeirosInscritos = inscritos.slice(0, 10);

    return (
        <div className="inscricoes-container">
            <div className="inscricoes-header">
                <h1>Gerenciar Inscrições</h1>
                <p>Visualize e gerencie todas as inscrições do sistema.</p>
                
                <button onClick={abrirModal} className="btn-modal">
                    Lista completa de inscritos
                </button>
            </div>

            {carregando ? (
                <div className="carregando">Carregando inscrições...</div>
            ) : (
                <>
                <h3>Inscritos recentemente:</h3>
                    <div className="tabela-container">
                        <table className="inscritos-table">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Email</th>
                                    <th>Telefone</th>
                                    <th>Palestra</th>
                                </tr>
                            </thead>
                            <tbody>
                                {primeirosInscritos.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="sem-dados">Nenhuma inscrição encontrada</td>
                                    </tr>
                                ) : (
                                    primeirosInscritos.map((inscrito, index) => (
                                        <tr key={index}>
                                            <td className="nome">{inscrito.nome}</td>
                                            <td className="email">{inscrito.email}</td>
                                            <td>{inscrito.telefone}</td>
                                            <td>{inscrito.titulo || "N/A"}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {inscritos.length > 10 && (
                        <div className="total-inscritos">
                            <p>Mostrando 10 de {inscritos.length} inscrições</p>
                            <button onClick={abrirModal} className="btn-ver-todos">
                                Ver lista completa
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Inscricoes;