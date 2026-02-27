import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { FaTimes, FaMapMarkerAlt, FaClock, FaCalendarAlt, FaUsers, FaTrash, FaPlus, FaSearch, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import './ModalTurmaPendente.css';

export default function ModalTurmaPendente({ isOpen, onClose, turma }) {
    const [inscritos, setInscritos] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [deletandoInscrito, setDeletandoInscrito] = useState(null);
    const [mostrarFormAdicionar, setMostrarFormAdicionar] = useState(false);
    const [buscaInscritos, setBuscaInscritos] = useState('');
    const [inscritosDisponiveis, setInscritosDisponiveis] = useState([]);
    const [carregandoDisponiveis, setCarregandoDisponiveis] = useState(false);
    const [adicionandoInscrito, setAdicionandoInscrito] = useState(null);

    useEffect(() => {
        if (turma && turma.id) {
            listarInscritos();
        }
    }, [turma]);

    async function listarInscritos() {
        try {
            setCarregando(true);
            const token = localStorage.getItem('authToken');
            const retorno = await axios.get(`https://back-end-fundesj.onrender.com/turmaId/inscrito/${turma.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            console.log('Dados brutos dos inscritos:', retorno.data);

            if (Array.isArray(retorno.data)) {
                setInscritos(retorno.data);
            } else if (retorno.data && Array.isArray(retorno.data.inscritos)) {
                setInscritos(retorno.data.inscritos);
            } else {
                setInscritos([]);
            }
        } catch (erro) {
            setInscritos([]);
        } finally {
            setCarregando(false);
        }
    }

    async function listarInscritosDisponiveis() {
        try {
            setCarregandoDisponiveis(true);
            const token = localStorage.getItem('authToken');
            const retorno = await axios.get('https://back-end-fundesj.onrender.com/inscritosId/ordenados', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const idsInscritosNaTurma = inscritos.map(i => i.id);

            // Filtra apenas inscritos que:
            // 1. Não estão na turma atual
            // 2. Têm local = "CATI"
            const disponiveis = retorno.data.filter(inscrito => {
                const naoEstaNaTurma = !idsInscritosNaTurma.includes(inscrito.id);
                const localCati = inscrito.local === "CATI" || inscrito.local === "Estácio" ;
                const turma_id = inscrito.turma_id === null
                
                return naoEstaNaTurma && localCati && turma_id;
            });

            console.log('Inscritos disponíveis (CATI):', disponiveis);
            setInscritosDisponiveis(disponiveis);
        } catch (erro) {
            console.log("Erro ao carregar inscritos disponíveis:", erro);
            setInscritosDisponiveis([]);
        } finally {
            setCarregandoDisponiveis(false);
        }
    }

    async function deletarInscritoDaTurma(inscritoId) {
        if (!window.confirm('Tem certeza que deseja remover este aluno da turma?')) {
            return;
        }

        try {
            setDeletandoInscrito(inscritoId);
            const token = localStorage.getItem('authToken');

            await axios.put(`https://back-end-fundesj.onrender.com/inscritosId/${inscritoId}`,
                { turma_id: null },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            setInscritos(inscritos.filter(i => i.id !== inscritoId));

            if (mostrarFormAdicionar) {
                listarInscritosDisponiveis();
            }

            alert('Aluno removido da turma com sucesso!');
        } catch (erro) {
            alert('Erro ao remover aluno da turma. Tente novamente.');
        } finally {
            setDeletandoInscrito(null);
        }
    }

    async function adicionarInscritoTurma(inscrito) {
        if (!window.confirm('Tem certeza que deseja adicionar este aluno na turma?')) {
            return;
        }

        try {
            setAdicionandoInscrito(inscrito.id);
            const token = localStorage.getItem('authToken');

            await axios.put(
                `https://back-end-fundesj.onrender.com/inscritosId/${inscrito.id}`,
                {
                    turma_id: turma.id,
                    foiChamado: true
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            setInscritos([...inscritos, { ...inscrito, foiChamado: true }]);
            setInscritosDisponiveis(inscritosDisponiveis.filter(i => i.id !== inscrito.id));

            alert('Aluno adicionado à turma com sucesso!');
        } catch (erro) {
            alert('Erro ao adicionar aluno à turma. Tente novamente.');
        } finally {
            setAdicionandoInscrito(null);
        }
    }

    function abrirFormAdicionar() {
        setMostrarFormAdicionar(true);
        listarInscritosDisponiveis();
    }

    function fecharFormAdicionar() {
        setMostrarFormAdicionar(false);
        setBuscaInscritos('');
    }

    const inscritosDisponiveisFiltrados = inscritosDisponiveis.filter(inscrito =>
        inscrito.nome.toLowerCase().includes(buscaInscritos.toLowerCase()) ||
        inscrito.celular.includes(buscaInscritos)
    );

    if (!isOpen || !turma) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Detalhes da Turma</h2>
                    <button className="modal-close" onClick={onClose}>
                        <FaTimes />
                    </button>
                </div>

                <div className="modal-body">
                    <div className="turma-detalhes">
                        <h3>{turma.nome}</h3>
                        <span className={`turma-status ${turma.status?.toLowerCase()}`}>
                            {turma.status || 'Pendente'}
                        </span>

                        <div className="detalhes-grid">
                            <div className="detalhe-item">
                                <FaMapMarkerAlt className="detalhe-icon" />
                                <div>
                                    <strong>Local:</strong>
                                    <p>{turma.local}</p>
                                </div>
                            </div>

                            <div className="detalhe-item">
                                <FaClock className="detalhe-icon" />
                                <div>
                                    <strong>Período:</strong>
                                    <p>{turma.periodo}</p>
                                </div>
                            </div>

                            <div className="detalhe-item">
                                <FaCalendarAlt className="detalhe-icon" />
                                <div>
                                    <strong>Dias:</strong>
                                    <p>{turma.dias}</p>
                                </div>
                            </div>

                            <div className="detalhe-item">
                                <FaCalendarAlt className="detalhe-icon" />
                                <div>
                                    <strong>Data de Início:</strong>
                                    <p>{new Date(turma.dataInicio).toLocaleDateString('pt-BR')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="compatibilidade-info">
                            <p className="compatibilidade-texto">
                                <FaCheckCircle className="compatibilidade-icon" />
                                Listando todos os alunos inscritos no <strong>CATI</strong>
                            </p>
                        </div>

                        <div className="inscritos-section">
                            <div className="inscritos-header">
                                <h4>
                                    <FaUsers /> Alunos Inscritos ({inscritos.length})
                                </h4>
                                <button
                                    className="btn-adicionar-inscrito"
                                    onClick={abrirFormAdicionar}
                                >
                                    <FaPlus /> Adicionar Aluno
                                </button>
                            </div>

                            {carregando ? (
                                <div className="loading-inscritos">Carregando alunos...</div>
                            ) : inscritos.length === 0 ? (
                                <div className="nenhum-inscrito">
                                    Nenhum aluno inscrito nesta turma
                                </div>
                            ) : (
                                <div className="lista-inscritos">
                                    {inscritos.map((inscrito) => (
                                        <div key={inscrito.id} className={`inscrito-item`}>
                                            <div className="inscrito-info">
                                                <div className="inscrito-nome-container">
                                                    <span className="inscrito-nome">{inscrito.nome}</span>
                                                </div>
                                                <span className="inscrito-telefone">{inscrito.celular}</span>
                                                <div className="inscrito-caracteristicas">
                                                    <span className="caracteristica-badge">{inscrito.local}</span>
                                                    <span className="caracteristica-badge">{inscrito.periodo}</span>
                                                    <span className="caracteristica-badge">{inscrito.dias}</span>
                                                </div>
                                            </div>
                                            <button
                                                className="btn-deletar-inscrito"
                                                onClick={() => deletarInscritoDaTurma(inscrito.id)}
                                                disabled={deletandoInscrito === inscrito.id}
                                                title="Remover da turma"
                                            >
                                                {deletandoInscrito === inscrito.id ? (
                                                    <span className="loading-spinner-small"></span>
                                                ) : (
                                                    <FaTrash />
                                                )}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {mostrarFormAdicionar && (
                            <div className="adicionar-inscrito-section">
                                <div className="adicionar-header">
                                    <h5><FaPlus /> Adicionar Aluno à Turma</h5>
                                    <button className="btn-fechar-form" onClick={fecharFormAdicionar}>
                                        <FaTimes />
                                    </button>
                                </div>

                                <div className="info-selecao">
                                    <p className="info-selecao-texto">
                                        <strong>Mostrando apenas alunos do CATI</strong> (período e dias variados)
                                    </p>
                                </div>

                                <div className="busca-container">
                                    <FaSearch className="busca-icon" />
                                    <input
                                        type="text"
                                        placeholder="Buscar por nome ou telefone..."
                                        value={buscaInscritos}
                                        onChange={(e) => setBuscaInscritos(e.target.value)}
                                        className="busca-input"
                                    />
                                </div>

                                {carregandoDisponiveis ? (
                                    <div className="loading-disponiveis">Carregando alunos disponíveis...</div>
                                ) : inscritosDisponiveisFiltrados.length === 0 ? (
                                    <div className="nenhum-disponivel">
                                        {buscaInscritos
                                            ? 'Nenhum aluno do CATI encontrado com esta busca'
                                            : 'Não há alunos disponíveis no CATI'}
                                    </div>
                                ) : (
                                    <div className="lista-disponiveis">
                                        {inscritosDisponiveisFiltrados.map((inscrito) => (
                                            <div key={inscrito.id} className={`disponivel-item ${inscrito.foiChamado ? 'foi-chamado' : ''}`}>
                                                <div className="disponivel-info">
                                                    <div className="disponivel-nome-container">
                                                        <span className="disponivel-nome">{inscrito.nome}</span>
                                                        {inscrito.foiChamado && (
                                                            <span className="chamado-badge" title="Este aluno já foi chamado anteriormente">
                                                                <FaExclamationTriangle /> Já chamado
                                                            </span>
                                                        )}
                                                    </div>
                                                    <span className="disponivel-telefone">{inscrito.celular}</span>
                                                    <div className="disponivel-caracteristicas">
                                                        <span className="caracteristica-badge">{inscrito.periodo}</span>
                                                        <span className="caracteristica-badge">{inscrito.dias}</span>
                                                        {inscrito.primeira_vez && (
                                                            <span className="caracteristica-badge primeira-vez">Primeira vez</span>
                                                        )}
                                                    </div>
                                                </div>
                                                <button
                                                    className="btn-adicionar"
                                                    onClick={() => adicionarInscritoTurma(inscrito)}
                                                    disabled={adicionandoInscrito === inscrito.id}
                                                >
                                                    {adicionandoInscrito === inscrito.id ? (
                                                        <span className="loading-spinner-small"></span>
                                                    ) : (
                                                        <><FaCheckCircle /> Adicionar</>
                                                    )}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="btn-fechar" onClick={onClose}>
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
}