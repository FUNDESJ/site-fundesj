import React, { useState, useEffect } from 'react';
import './Eventos.css';
import ModalEvento from './modal/ModalEvento';
import ModalDeletar from './modal/ModalDeletar';
import ModalEditar from './modal/ModalEditar';
import axios from 'axios';
import { FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa';

export default function Eventos() {
    const [modalOpen, setModalOpen] = useState(false);
    const [openModalDeletar, setOpenModalDeletar] = useState(false);
    const [openModalEditar, setOpenModalEditar] = useState(false);
    const [eventoSelecionado, setEventoSelecionado] = useState(null);
    const [eventos, setEventos] = useState([]);
    const [eventosFiltrados, setEventosFiltrados] = useState([]);
    const [filtro, setFiltro] = useState("");
    const [tipoFiltro, setTipoFiltro] = useState("título");

    useEffect(() => {
        listarEventos();
    }, []);

    useEffect(() => {
        if (filtro === "") {
            setEventosFiltrados(eventos);
        } else {
            const filtrado = eventos.filter(evento => {
                const campo = tipoFiltro === "título" ? evento.titulo.toLowerCase() :
                    tipoFiltro === "palestrante" ? evento.palestrante.toLowerCase() :
                        evento.projeto.toLowerCase();

                return campo.includes(filtro.toLowerCase());
            });
            setEventosFiltrados(filtrado);
        }
    }, [filtro, tipoFiltro, eventos]);

    async function listarEventos() {
        const token = localStorage.getItem("authToken");
        try {
            const retorno = await axios.get('https://back-end-fundesj.onrender.com/eventos', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setEventos(retorno.data.Eventos);
            setEventosFiltrados(retorno.data.Eventos);
        } catch (erro) {
            console.log(erro);
        }
    }

    function abrirModalDeletar(evento) {
        setEventoSelecionado(evento);
        setOpenModalDeletar(true);
    }

    function abrirModalEditar(evento) {
        setEventoSelecionado(evento);
        setOpenModalEditar(true);
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
            <div className="filtro-container">
                <div className="filtro-input-group">
                    <div className="filtro-select-container">
                        <select
                            value={tipoFiltro}
                            onChange={(e) => setTipoFiltro(e.target.value)}
                            className="filtro-select"
                        >
                            <option value="título">Título</option>
                            <option value="palestrante">Palestrante</option>
                            <option value="projeto">Projeto</option>
                        </select>
                    </div>
                    <div className="filtro-input-wrapper">
                        <FaSearch className="filtro-icon" />
                        <input
                            type="text"
                            placeholder={`Filtrar por ${tipoFiltro}...`}
                            value={filtro}
                            onChange={(e) => setFiltro(e.target.value)}
                            className="filtro-input"
                        />
                    </div>
                </div>
            </div>

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
                        {eventosFiltrados.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="sem-dados">
                                    {filtro ? "Nenhum evento encontrado com esses critérios" : "Nenhum evento encontrado"}
                                </td>
                            </tr>
                        ) : (
                            eventosFiltrados.map((evento, index) => (
                                <tr key={index}>
                                    <td className="nome">{evento.titulo}</td>
                                    <td className="email">{evento.palestrante}</td>
                                    <td>{evento.data.split("T")[0].split("-").reverse().join("/")}</td>
                                    <td>{evento.projeto || "N/A"}</td>
                                    <td>
                                        <span className={`status-badge ${evento.ativa ? 'ativo' : 'inativo'}`}>
                                            {evento.ativa ? 'Ativo' : 'Inativo'}
                                        </span>
                                    </td>
                                    <td className="acoes">
                                        <button className="btn-acao btn-editar" onClick={() => abrirModalEditar(evento)}>
                                            <FaEdit />
                                        </button>
                                        <button className="btn-acao btn-excluir" onClick={() => abrirModalDeletar(evento)}>
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
                atualizarEventos={listarEventos}
            />
            <ModalDeletar
                isOpen={openModalDeletar}
                onClose={() => { setOpenModalDeletar(false) }}
                evento={eventoSelecionado}
                deletarEvento={listarEventos}
            />
            <ModalEditar
                isOpen={openModalEditar}
                onClose={() => setOpenModalEditar(false)}
                evento={eventoSelecionado}
                atualizarEvento={listarEventos}
                ativarEvento={listarEventos}
            />
        </div>
    );
}