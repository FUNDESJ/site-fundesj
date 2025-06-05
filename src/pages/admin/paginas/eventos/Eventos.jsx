import React, { useState, useEffect } from 'react';
import './Eventos.css';
import ModalEvento from './modal/ModalEvento';
import ModalDeletar from './modal/ModalDeletar';
import axios from 'axios';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

export default function Eventos() {
    const [modalOpen, setModalOpen] = useState(false);
    const [openModalDeletar, setOpenModalDeletar] = useState(false);
    const [eventoSelecionado,setEventoSelecionado] = useState(null)
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        listarEventos();
    }, []);

    async function listarEventos() {
        const token = localStorage.getItem("authToken");
        try {
            const retorno = await axios.get('https://back-end-fundesj.onrender.com/eventos', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setEventos(retorno.data.Eventos);
            console.log(retorno)
        } catch (erro) {
            console.log(erro);
        }
    }
    function abrirModalDeletar(evento){
        setEventoSelecionado(evento)
        setOpenModalDeletar(true);
    }

    return (
        <div className="eventos-container">
            <div className="eventos-header">
                <h1>Gerenciar Eventos</h1>
                <p>Visualize e gerencie todos os eventos do sistema.</p>
            </div>

            <button
                className="btn-criar-evento"
                onClick={() => setModalOpen(true)}
            >
                <FaPlus /> Criar novo evento
            </button>

            <div className="tabela-container">
                <table className="eventos-table">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Palestrante</th>
                            <th>Data</th>
                            <th>Projeto</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventos.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="sem-dados">Nenhum evento encontrado</td>
                            </tr>
                        ) : (
                            eventos.map((evento, index) => (
                                <tr key={index}>
                                    <td className="nome">{evento.titulo}</td>
                                    <td className="email">{evento.palestrante}</td>
                                    <td>{new Date(evento.data).toLocaleDateString("pt-BR")}</td>
                                    <td>{evento.projeto || "N/A"}</td>
                                    <td>
                                        <span className={`status-badge ${evento.ativa ? 'ativo' : 'inativo'}`}>
                                            {evento.ativa ? 'Ativo' : 'Inativo'}
                                        </span>
                                    </td>
                                    <td className="acoes">
                                        <button className="btn-acao btn-editar">
                                            <FaEdit />
                                        </button>
                                        <button className="btn-acao btn-excluir" onClick ={()=> abrirModalDeletar(evento)}>
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <ModalEvento
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
            />
            <ModalDeletar
                isOpen={openModalDeletar}
                onClose={()=>{setOpenModalDeletar(false)}}
                evento={eventoSelecionado}
                deletarEvento={listarEventos}
            />
        </div>
    );
}