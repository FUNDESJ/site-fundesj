import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Inscricoes.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import ModalInscritos from './modal/ModalInscrever';
import ModalDeletar from './modal/ModalDeletar'
import ModalEditar from './modal/ModalEditar';
const Inscricoes = () => {
    const [inscritos, setInscritos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [abrirModalInscritos, setAbrirModalInscritos] = useState(false);
    const [openModalDeletar, setOpenModalDeletar] = useState(false);
    const [openModalEditar, setOpenModalEditar] = useState(false);
    const [inscritoSelecionado, setInscritoSelecionado] = useState(null);
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

    function openModalInscritos() {
        setAbrirModalInscritos(true);
    }
    function abrirModalDeletar(inscrito){
        setInscritoSelecionado(inscrito);
        setOpenModalDeletar(true);
    }
    function abrirModalEditar(inscrito){
        setInscritoSelecionado(inscrito);
        setOpenModalEditar(true);
    }

    return (
        <div className="inscricoes-container">
            <div className="inscricoes-header">
                <h1>Gerenciar Inscrições</h1>
                <p>Visualize e gerencie todas as inscrições do sistema.</p>

                <button onClick={openModalInscritos} className="btn-modal">
                    Adicionar Inscritos
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
                                    <th>Evento</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inscritos.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="sem-dados">Nenhuma inscrição encontrada</td>
                                    </tr>
                                ) : (
                                    inscritos.map((inscrito, index) => (
                                        <tr key={index}>
                                            <td className="nome">{inscrito.nome}</td>
                                            <td className="email">{inscrito.email}</td>
                                            <td>{inscrito.telefone}</td>
                                            <td>{inscrito.titulo || "N/A"}</td>
                                            <td className="acoes">
                                                <button className="btn-acao btn-editar" onClick={()=>abrirModalEditar(inscrito)}>
                                                    <FaEdit />
                                                </button>
                                                <button className="btn-acao btn-excluir" onClick={()=> abrirModalDeletar(inscrito)}>
                                                    <FaTrash />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {inscritos.length > 10 && (
                        <div className="total-inscritos">
                            <p>Mostrando 10 de {inscritos.length} inscrições</p>
                            <button onClick={openModalInscritos} className="btn-ver-todos">
                                Ver lista completa
                            </button>
                        </div>
                    )}
                </>
            )}

            <ModalInscritos
                isOpen={abrirModalInscritos}
                onClose={() => setAbrirModalInscritos(false)}
            />
            <ModalDeletar
            isOpen={openModalDeletar}
            onClose = {()=>{setOpenModalDeletar(false)}}
            inscrito={inscritoSelecionado}
            deletarInscrito={buscarLista}
            />
            <ModalEditar
            isOpen={openModalEditar}
            onClose={()=>{setOpenModalEditar(false)}}
            inscrito={inscritoSelecionado}
            atualizarInscrito={buscarLista}
            />
            
        </div>
    );
};

export default Inscricoes;
