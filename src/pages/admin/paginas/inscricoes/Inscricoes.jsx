import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './InscricoesAdmin.css';
import { FaEdit, FaTrash, FaSearch, FaFilter } from 'react-icons/fa';
import ModalInscritos from './modal/ModalInscrever';
import ModalDeletar from './modal/ModalDeletar';
import ModalEditar from './modal/ModalEditar';

const Inscricoes = () => {
    const [inscritos, setInscritos] = useState([]);
    const [inscritosFiltrados, setInscritosFiltrados] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [abrirModalInscritos, setAbrirModalInscritos] = useState(false);
    const [openModalDeletar, setOpenModalDeletar] = useState(false);
    const [openModalEditar, setOpenModalEditar] = useState(false);
    const [inscritoSelecionado, setInscritoSelecionado] = useState(null);
    const [termoPesquisa, setTermoPesquisa] = useState('');
    const [filtroEvento, setFiltroEvento] = useState('todos');
    const [campoFiltro, setCampoFiltro] = useState('todos'); 

    useEffect(() => {
        buscarLista();
    }, []);

    useEffect(() => {
        filtrarInscritos();
    }, [termoPesquisa, filtroEvento, campoFiltro, inscritos]);

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

    function filtrarInscritos() {
        let resultado = [...inscritos];

        if (filtroEvento !== 'todos') {
            resultado = resultado.filter(inscrito => inscrito.titulo === filtroEvento);
        }

        if (termoPesquisa) {
            const termo = termoPesquisa.toLowerCase();
            resultado = resultado.filter(inscrito => {
                if (campoFiltro === 'todos') {
                    return (
                        (inscrito.nome && inscrito.nome.toLowerCase().includes(termo)) ||
                        (inscrito.email && inscrito.email.toLowerCase().includes(termo)) ||
                        (inscrito.telefone && inscrito.telefone.includes(termo)) ||
                        (inscrito.titulo && inscrito.titulo.toLowerCase().includes(termo))
                    );
                } else {
                    const campo = inscrito[campoFiltro] || '';
                    return campo.toString().toLowerCase().includes(termo);
                }
            });
        }

        setInscritosFiltrados(resultado);
    }

    function getEventosUnicos() {
        const eventos = inscritos.map(inscrito => inscrito.titulo || "Sem evento");
        return ['todos', ...new Set(eventos)];
    }

    function openModalInscritos() {
        setAbrirModalInscritos(true);
    }

    function abrirModalDeletar(inscrito) {
        setInscritoSelecionado(inscrito);
        setOpenModalDeletar(true);
    }

    function abrirModalEditar(inscrito) {
        setInscritoSelecionado(inscrito);
        setOpenModalEditar(true);
    }

    return (
        <div className="inscricoes-container">
            <div className="inscricoes-header">
                <h1>Gerenciar Inscrições</h1>
                <button onClick={openModalInscritos} className="btn-modal">
                    Adicionar Inscritos
                </button>
            </div>

            <div className="filtros-container">
                <div className="search-bar">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Digite para pesquisar..."
                        value={termoPesquisa}
                        onChange={(e) => setTermoPesquisa(e.target.value)}
                        className="search-input"
                    />
                    <div className="filtro-campo">
                        <FaFilter className="filter-icon" />
                        <select
                            value={campoFiltro}
                            onChange={(e) => setCampoFiltro(e.target.value)}
                            className="select-campo"
                        >
                            <option value="todos">Todos os campos</option>
                            <option value="nome">Nome</option>
                            <option value="email">Email</option>
                            <option value="telefone">Telefone</option>
                            <option value="titulo">Evento</option>
                        </select>
                    </div>
                </div>

                <div className="filtro-evento">
                    <label htmlFor="filtro-evento">Filtrar por evento:</label>
                    <select
                        id="filtro-evento"
                        value={filtroEvento}
                        onChange={(e) => setFiltroEvento(e.target.value)}
                        className="select-evento"
                    >
                        {getEventosUnicos().map((evento, index) => (
                            <option key={index} value={evento}>
                                {evento === 'todos' ? 'Todos os eventos' : evento}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {carregando ? (
                <div className="carregando">Carregando inscrições...</div>
            ) : (
                <>
                    <div className="resultados-info">
                        <h3>Inscritos {termoPesquisa || filtroEvento !== 'todos' ? 'filtrados' : 'recentemente'}:</h3>
                        <span className="total-resultados">
                            {inscritosFiltrados.length} {inscritosFiltrados.length === 1 ? 'resultado' : 'resultados'}
                        </span>
                    </div>

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
                                {inscritosFiltrados.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="sem-dados">
                                            {termoPesquisa || filtroEvento !== 'todos'
                                                ? "Nenhuma inscrição encontrada com os filtros aplicados"
                                                : "Nenhuma inscrição encontrada"}
                                        </td>
                                    </tr>
                                ) : (
                                    inscritosFiltrados.map((inscrito, index) => (
                                        <tr key={index}>
                                            <td className="nome">{inscrito.nome}</td>
                                            <td className="email">{inscrito.email}</td>
                                            <td>{inscrito.telefone}</td>
                                            <td>{inscrito.titulo || "N/A"}</td>
                                            <td className="acoes">
                                                <button className="btn-acao btn-editar" onClick={() => abrirModalEditar(inscrito)}>
                                                    <FaEdit />
                                                </button>
                                                <button className="btn-acao btn-excluir" onClick={() => abrirModalDeletar(inscrito)}>
                                                    <FaTrash />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {inscritosFiltrados.length > 10 && (
                        <div className="total-inscritos">
                            <p>Mostrando 10 de {inscritosFiltrados.length} inscrições</p>
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
                onClose={() => { setOpenModalDeletar(false); }}
                inscrito={inscritoSelecionado}
                deletarInscrito={buscarLista}
            />
            <ModalEditar
                isOpen={openModalEditar}
                onClose={() => { setOpenModalEditar(false); }}
                inscrito={inscritoSelecionado}
                atualizarInscrito={buscarLista}
            />
        </div>
    );
};

export default Inscricoes;