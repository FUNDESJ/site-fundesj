import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {
    FaTimes, FaMapMarkerAlt, FaClock, FaCalendarAlt, FaUsers,
    FaTrash, FaPlus, FaSearch, FaCheckCircle, FaExclamationTriangle,
    FaChartLine, FaUserGraduate, FaCalendarCheck, FaPlay, FaStop,
    FaSpinner, FaUserPlus, FaUserMinus, FaHistory, FaFileAlt
} from 'react-icons/fa';
import './ModalTurmaAtiva.css';

export default function ModalTurmaAtiva({ isOpen, onClose, turma, onTurmaUpdated }) {
    const [inscritos, setInscritos] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [deletandoInscrito, setDeletandoInscrito] = useState(null);
    const [mostrarFormAdicionar, setMostrarFormAdicionar] = useState(false);
    const [buscaInscritos, setBuscaInscritos] = useState('');
    const [inscritosDisponiveis, setInscritosDisponiveis] = useState([]);
    const [carregandoDisponiveis, setCarregandoDisponiveis] = useState(false);
    const [adicionandoInscrito, setAdicionandoInscrito] = useState(null);
    const [finalizandoTurma, setFinalizandoTurma] = useState(false);
    const [estatisticas, setEstatisticas] = useState({
        totalAlunos: 0,
        primeiraVez: 0,
        retornantes: 0,
        taxaOcupacao: 0
    });
    const [activeSubTab, setActiveSubTab] = useState('alunos');

    useEffect(() => {
        if (turma && turma.id && isOpen) {
            listarInscritos();
        }
    }, [turma, isOpen]);

    useEffect(() => {
        if (inscritos.length > 0) {
            calcularEstatisticas();
        }
    }, [inscritos]);

    async function listarInscritos() {
        try {
            setCarregando(true);
            const token = localStorage.getItem('authToken');
            const retorno = await axios.get(`https://back-end-fundesj.onrender.com/turmaId/inscrito/${turma.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (Array.isArray(retorno.data)) {
                setInscritos(retorno.data);
            } else if (retorno.data && Array.isArray(retorno.data.inscritos)) {
                setInscritos(retorno.data.inscritos);
            } else {
                setInscritos([]);
            }
        } catch (erro) {
            console.error('Erro ao carregar inscritos:', erro);
            setInscritos([]);
        } finally {
            setCarregando(false);
        }
    }

    function calcularEstatisticas() {
        const primeiraVezCount = inscritos.filter(i => i.primeira_vez === true || i.primeira_vez === 1).length;
        const retornantesCount = inscritos.length - primeiraVezCount;
        const taxaOcupacao = (inscritos.length / 15) * 100; // Considerando capacidade máxima de 30 alunos

        setEstatisticas({
            totalAlunos: inscritos.length,
            primeiraVez: primeiraVezCount,
            retornantes: retornantesCount,
            taxaOcupacao: Math.min(taxaOcupacao, 100)
        });
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

            const disponiveis = retorno.data.filter(inscrito => {
                const naoEstaNaTurma = !idsInscritosNaTurma.includes(inscrito.id);
                const localCompativel = inscrito.local === turma.local;
                const semTurma = inscrito.turma_id === null;

                return naoEstaNaTurma && localCompativel && semTurma;
            });

            setInscritosDisponiveis(disponiveis);
        } catch (erro) {
            console.error("Erro ao carregar inscritos disponíveis:", erro);
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
                { turma_id: null, foiChamado: false },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            const alunoRemovido = inscritos.find(i => i.id === inscritoId);
            setInscritos(inscritos.filter(i => i.id !== inscritoId));

            if (mostrarFormAdicionar && alunoRemovido && alunoRemovido.local === turma.local) {
                listarInscritosDisponiveis();
            }

            mostrarNotificacao('Aluno removido da turma com sucesso!', 'success');
        } catch (erro) {
            console.error('Erro ao remover aluno:', erro);
            mostrarNotificacao('Erro ao remover aluno da turma.', 'error');
        } finally {
            setDeletandoInscrito(null);
        }
    }

    async function adicionarInscritoTurma(inscrito) {
        if (!window.confirm(`Deseja adicionar ${inscrito.nome} à turma ${turma.nome}?`)) {
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

            setInscritos([...inscritos, { ...inscrito, foiChamado: true, turma_id: turma.id }]);
            setInscritosDisponiveis(inscritosDisponiveis.filter(i => i.id !== inscrito.id));

            mostrarNotificacao(`${inscrito.nome} foi adicionado à turma!`, 'success');
        } catch (erro) {
            console.error('Erro ao adicionar aluno:', erro);
            mostrarNotificacao('Erro ao adicionar aluno à turma.', 'error');
        } finally {
            setAdicionandoInscrito(null);
        }
    }

    async function finalizarTurma() {
        if (!window.confirm('Tem certeza que deseja finalizar esta turma?\n\nEsta ação não poderá ser desfeita e os alunos serão liberados para novas turmas.')) {
            return;
        }

        try {
            setFinalizandoTurma(true);
            const token = localStorage.getItem('authToken');

            await axios.put(`https://back-end-fundesj.onrender.com/turmaId/editar/${turma.id}`,
                { status: "Finalizada" },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            // Liberar todos os alunos da turma
            for (const inscrito of inscritos) {
                await axios.put(`https://back-end-fundesj.onrender.com/inscritosId/${inscrito.id}`,
                    { turma_id: null, foiChamado: false },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    }
                );
            }

            mostrarNotificacao('Turma finalizada com sucesso!', 'success');

            if (onTurmaUpdated) {
                onTurmaUpdated();
            }

            setTimeout(() => {
                onClose();
            }, 1500);

        } catch (erro) {
            console.error('Erro ao finalizar turma:', erro);
            mostrarNotificacao('Erro ao finalizar turma.', 'error');
        } finally {
            setFinalizandoTurma(false);
        }
    }

    function mostrarNotificacao(mensagem, tipo) {
        const notificacao = document.createElement('div');
        notificacao.className = `notificacao-turma-ativa notificacao-${tipo}`;
        notificacao.innerHTML = `
            <div class="notificacao-conteudo">
                ${tipo === 'success' ? '✓' : '✗'}
                <span>${mensagem}</span>
            </div>
        `;
        document.body.appendChild(notificacao);

        setTimeout(() => {
            notificacao.classList.add('notificacao-fade-out');
            setTimeout(() => {
                document.body.removeChild(notificacao);
            }, 300);
        }, 3000);
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

    const dataInicioFormatada = new Date(turma.dataInicio).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    return (
        <div className="modal-turma-ativa-overlay" onClick={onClose}>
            <div className="modal-turma-ativa-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-turma-ativa-header">
                    <div className="header-left">
                        <div className="header-icon-wrapper">
                            <FaUserGraduate className="header-icon" />
                        </div>
                        <div>
                            <h2>{turma.nome}</h2>
                            <span className="turma-status-badge ativa">Ativa</span>
                        </div>
                    </div>
                    <button className="modal-close-btn" onClick={onClose}>
                        <FaTimes />
                    </button>
                </div>

                <div className="modal-turma-ativa-body">
                    {/* Cards de Informações */}

                    {/* Cards de Estatísticas */}
                    <div className="estatisticas-grid">
                        <div className="estatistica-card">
                            <div className="estatistica-icon total">
                                <FaUsers />
                            </div>
                            <div className="estatistica-info">
                                <span className="estatistica-valor">{estatisticas.totalAlunos}</span>
                                <span className="estatistica-label">Total de Alunos</span>
                            </div>
                        </div>

                        <div className="estatistica-card">
                            <div className="estatistica-icon primeira-vez">
                                <FaCheckCircle />
                            </div>
                            <div className="estatistica-info">
                                <span className="estatistica-valor">{estatisticas.primeiraVez}</span>
                                <span className="estatistica-label">Primeira Vez</span>
                            </div>
                        </div>

                        <div className="estatistica-card">
                            <div className="estatistica-icon retornantes">
                                <FaHistory />
                            </div>
                            <div className="estatistica-info">
                                <span className="estatistica-valor">{estatisticas.retornantes}</span>
                                <span className="estatistica-label">Retornantes</span>
                            </div>
                        </div>

                        <div className="estatistica-card">
                            <div className="estatistica-icon ocupacao">
                                <FaChartLine />
                            </div>
                            <div className="estatistica-info">
                                <span className="estatistica-valor">{Math.round(estatisticas.taxaOcupacao)}%</span>
                                <span className="estatistica-label">Taxa de Ocupação</span>
                            </div>
                        </div>
                        <div className="estatistica-card">
                            <div className="estatistica-icon data">
                                <FaCalendarAlt />
                            </div>
                            <div className="info-card-content">
                                <span className="info-card-label">Data de Início</span>
                                <strong className="info-card-value">{dataInicioFormatada}</strong>
                            </div>
                        </div>
                    </div>

                    {/* Barra de Progresso de Ocupação */}
                    <div className="ocupacao-progresso">
                        <div className="progresso-header">
                            <span>Capacidade da Turma</span>
                            <span>{inscritos.length} / 15 alunos</span>
                        </div>
                        <div className="progresso-bar">
                            <div
                                className="progresso-fill"
                                style={{ width: `${estatisticas.taxaOcupacao}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* Sub-tabs */}
                    <div className="sub-tabs">
                        <button
                            className={`sub-tab ${activeSubTab === 'alunos' ? 'active' : ''}`}
                            onClick={() => setActiveSubTab('alunos')}
                        >
                            <FaUsers /> Alunos Matriculados ({inscritos.length})
                        </button>
                        <button
                            className={`sub-tab ${activeSubTab === 'adicionar' ? 'active' : ''}`}
                            onClick={() => {
                                setActiveSubTab('adicionar');
                                if (!mostrarFormAdicionar) {
                                    abrirFormAdicionar();
                                }
                            }}
                        >
                            <FaUserPlus /> Adicionar Aluno
                        </button>
                    </div>

                    {/* Lista de Alunos */}
                    {activeSubTab === 'alunos' && (
                        <div className="alunos-section">
                            {carregando ? (
                                <div className="loading-state">
                                    <FaSpinner className="spinner rotating" />
                                    <p>Carregando lista de alunos...</p>
                                </div>
                            ) : inscritos.length === 0 ? (
                                <div className="empty-state">
                                    <div className="empty-icon">
                                        <FaUsers />
                                    </div>
                                    <h4>Nenhum aluno matriculado</h4>
                                    <p>Esta turma ainda não possui alunos matriculados.</p>
                                    <button
                                        className="btn-adicionar-aluno"
                                        onClick={() => {
                                            setActiveSubTab('adicionar');
                                            abrirFormAdicionar();
                                        }}
                                    >
                                        <FaUserPlus /> Adicionar Alunos
                                    </button>
                                </div>
                            ) : (
                                <div className="alunos-lista">
                                    {inscritos.map((inscrito) => (
                                        <div key={inscrito.id} className="aluno-card">
                                            <div className="aluno-info">
                                                <div className="aluno-avatar">
                                                    <span className="avatar-inicial">
                                                        {inscrito.nome.charAt(0).toUpperCase()}
                                                    </span>
                                                </div>
                                                <div className="aluno-detalhes">
                                                    <div className="aluno-nome-container">
                                                        <strong className="aluno-nome">{inscrito.nome}</strong>
                                                        {inscrito.primeira_vez && (
                                                            <span className="primeira-vez-badge">
                                                                <FaCheckCircle /> Primeira Vez
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="aluno-metadados">
                                                        <span className="metadado">
                                                            <FaClock className="metadado-icon" />
                                                            {inscrito.periodo}
                                                        </span>
                                                        <span className="metadado">
                                                            <FaCalendarAlt className="metadado-icon" />
                                                            {inscrito.dias}
                                                        </span>
                                                        <span className="metadado telefone">
                                                            📱 {inscrito.celular}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                className="btn-remover-aluno"
                                                onClick={() => deletarInscritoDaTurma(inscrito.id)}
                                                disabled={deletandoInscrito === inscrito.id}
                                                title="Remover da turma"
                                            >
                                                {deletandoInscrito === inscrito.id ? (
                                                    <FaSpinner className="spinner-small rotating" />
                                                ) : (
                                                    <div className="estatistica-icon apagar">
                                                        <FaTrash />
                                                    </div>
                                                )}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Adicionar Alunos */}
                    {activeSubTab === 'adicionar' && mostrarFormAdicionar && (
                        <div className="adicionar-alunos-section">
                            <div className="busca-alunos">
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
                                <div className="loading-state">
                                    <FaSpinner className="spinner rotating" />
                                    <p>Carregando alunos disponíveis...</p>
                                </div>
                            ) : inscritosDisponiveisFiltrados.length === 0 ? (
                                <div className="empty-state">
                                    <div className="empty-icon">
                                        <FaExclamationTriangle />
                                    </div>
                                    <h4>Nenhum aluno disponível</h4>
                                    <p>
                                        {buscaInscritos
                                            ? 'Não encontramos alunos com esta busca.'
                                            : `Não há alunos disponíveis no ${turma.local} para esta turma.`}
                                    </p>
                                </div>
                            ) : (
                                <div className="alunos-disponiveis-lista">
                                    {inscritosDisponiveisFiltrados.map((inscrito) => (
                                        <div key={inscrito.id} className="aluno-disponivel-card">
                                            <div className="aluno-disponivel-info">
                                                <div className="aluno-avatar">
                                                    <span className="avatar-inicial">
                                                        {inscrito.nome.charAt(0).toUpperCase()}
                                                    </span>
                                                </div>
                                                <div className="aluno-disponivel-detalhes">
                                                    <div className="aluno-nome-container">
                                                        <strong className="aluno-nome">{inscrito.nome}</strong>
                                                        {inscrito.primeira_vez && (
                                                            <span className="primeira-vez-badge">
                                                                <FaCheckCircle /> Primeira Vez
                                                            </span>
                                                        )}
                                                        {inscrito.foiChamado && (
                                                            <span className="chamado-badge">
                                                                <FaExclamationTriangle /> Já foi Chamado
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="aluno-metadados">
                                                        <span className="metadado">
                                                            <FaClock className="metadado-icon" />
                                                            {inscrito.periodo}
                                                        </span>
                                                        <span className="metadado">
                                                            <FaCalendarAlt className="metadado-icon" />
                                                            {inscrito.dias}
                                                        </span>
                                                        <span className="metadado telefone">
                                                            📱 {inscrito.celular}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                className="btn-adicionar-aluno-lista"
                                                onClick={() => adicionarInscritoTurma(inscrito)}
                                                disabled={adicionandoInscrito === inscrito.id}
                                            >
                                                {adicionandoInscrito === inscrito.id ? (
                                                    <FaSpinner className="spinner-small rotating" />
                                                ) : (
                                                    <><FaUserPlus /> Adicionar</>
                                                )}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="modal-turma-ativa-footer">
                    <button className="btn-fechar" onClick={onClose}>
                        Fechar
                    </button>
                    <button
                        className="btn-finalizar-turma"
                        onClick={finalizarTurma}
                        disabled={finalizandoTurma}
                    >
                        {finalizandoTurma ? (
                            <>
                                <FaSpinner className="spinner-small rotating" />
                                Finalizando...
                            </>
                        ) : (
                            <>
                                <FaStop /> Finalizar Turma
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div >
    );
}