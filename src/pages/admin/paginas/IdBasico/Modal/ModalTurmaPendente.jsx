import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {
    FaTimes,
    FaMapMarkerAlt,
    FaClock,
    FaCalendarAlt,
    FaUsers,
    FaSearch,
    FaCheckCircle,
    FaExclamationTriangle,
    FaSpinner,
    FaUserPlus,
    FaUserMinus,
    FaHourglassHalf,
    FaPhoneAlt
} from 'react-icons/fa';
import './ModalTurmaPendente.css';

export default function ModalTurmaPendente({ isOpen, onClose, turma, onTurmaUpdated }) {
    const [inscritos, setInscritos] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [deletandoInscrito, setDeletandoInscrito] = useState(null);
    const [mostrarFormAdicionar, setMostrarFormAdicionar] = useState(false);
    const [buscaInscritos, setBuscaInscritos] = useState('');
    const [inscritosDisponiveis, setInscritosDisponiveis] = useState([]);
    const [carregandoDisponiveis, setCarregandoDisponiveis] = useState(false);
    const [adicionandoInscrito, setAdicionandoInscrito] = useState(null);
    const [ativandoTurma, setAtivandoTurma] = useState(false);
    const [activeSubTab, setActiveSubTab] = useState('alunos');

    useEffect(() => {
        if (turma && turma.id && isOpen) {
            listarInscritos();
        }
    }, [turma, isOpen]);

    function normalizarTexto(texto) {
        return (texto || '')
            .toString()
            .trim()
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
    }

    function ehLocalCompativelComTurma(localAluno) {
        const localTurmaNormalizado = normalizarTexto(turma?.local);
        const localAlunoNormalizado = normalizarTexto(localAluno);

        return localAlunoNormalizado === localTurmaNormalizado;
    }

    async function listarInscritos() {
        try {
            setCarregando(true);
            const token = localStorage.getItem('authToken');

            const retorno = await axios.get(
                `https://back-end-fundesj.onrender.com/turmaId/inscrito/${turma.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            let lista = [];

            if (Array.isArray(retorno.data)) {
                lista = retorno.data;
            } else if (retorno.data && Array.isArray(retorno.data.inscritos)) {
                lista = retorno.data.inscritos;
            }

            const inscritosCompativeis = lista.filter((inscrito) =>
                ehLocalCompativelComTurma(inscrito.local)
            );

            setInscritos(inscritosCompativeis);
        } catch (erro) {
            console.error('Erro ao carregar inscritos:', erro);
            setInscritos([]);
        } finally {
            setCarregando(false);
        }
    }

    async function listarInscritosDisponiveis() {
        try {
            setCarregandoDisponiveis(true);
            const token = localStorage.getItem('authToken');

            const retorno = await axios.get(
                'https://back-end-fundesj.onrender.com/inscritosId/ordenados',
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const idsInscritosNaTurma = inscritos.map(i => i.id);

            const disponiveis = retorno.data.filter((inscrito) => {
                const naoEstaNaTurma = !idsInscritosNaTurma.includes(inscrito.id);
                const localCompativel = ehLocalCompativelComTurma(inscrito.local);
                const semTurma = inscrito.turma_id === null;

                return naoEstaNaTurma && localCompativel && semTurma;
            });

            setInscritosDisponiveis(disponiveis);
        } catch (erro) {
            console.error('Erro ao carregar inscritos disponíveis:', erro);
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

            await axios.put(
                `https://back-end-fundesj.onrender.com/inscritosId/${inscritoId}`,
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

            setInscritos([...inscritos, { ...inscrito, foiChamado: true }]);
            setInscritosDisponiveis(inscritosDisponiveis.filter(i => i.id !== inscrito.id));

            mostrarNotificacao(`${inscrito.nome} foi adicionado à turma!`, 'success');
        } catch (erro) {
            console.error('Erro ao adicionar aluno:', erro);
            mostrarNotificacao('Erro ao adicionar aluno à turma.', 'error');
        } finally {
            setAdicionandoInscrito(null);
        }
    }

    async function ativarTurma() {
        if (!window.confirm('Deseja ativar esta turma? Os alunos serão notificados e a turma ficará disponível para início das aulas.')) {
            return;
        }

        try {
            setAtivandoTurma(true);
            const token = localStorage.getItem('authToken');

            await axios.put(
                `https://back-end-fundesj.onrender.com/turmaId/editar/${turma.id}`,
                { status: 'Ativa' },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            mostrarNotificacao('Turma ativada com sucesso!', 'success');

            if (onTurmaUpdated) {
                onTurmaUpdated();
            }

            setTimeout(() => {
                onClose();
            }, 1500);
        } catch (erro) {
            console.error('Erro ao ativar turma:', erro);
            mostrarNotificacao('Erro ao ativar turma.', 'error');
        } finally {
            setAtivandoTurma(false);
        }
    }

    function mostrarNotificacao(mensagem, tipo) {
        const notificacao = document.createElement('div');
        notificacao.className = `mtp-notificacao mtp-notificacao-${tipo}`;
        notificacao.innerHTML = `
            <div class="mtp-notificacao-conteudo">
                ${tipo === 'success' ? '✓' : '✗'}
                <span>${mensagem}</span>
            </div>
        `;
        document.body.appendChild(notificacao);

        setTimeout(() => {
            notificacao.classList.add('mtp-notificacao-fade-out');
            setTimeout(() => {
                if (document.body.contains(notificacao)) {
                    document.body.removeChild(notificacao);
                }
            }, 300);
        }, 3000);
    }

    function abrirFormAdicionar() {
        setMostrarFormAdicionar(true);
        listarInscritosDisponiveis();
        setActiveSubTab('adicionar');
    }

    function fecharFormAdicionar() {
        setMostrarFormAdicionar(false);
        setBuscaInscritos('');
        setActiveSubTab('alunos');
    }

    const inscritosDisponiveisFiltrados = inscritosDisponiveis.filter(inscrito =>
        inscrito.nome.toLowerCase().includes(buscaInscritos.toLowerCase()) ||
        inscrito.celular.includes(buscaInscritos)
    );

    if (!isOpen || !turma) return null;

    const dataInicioFormatada = turma.dataInicio
        ? new Date(turma.dataInicio).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric'
          })
        : '-';

    return (
        <div className="mtp-overlay" onClick={onClose}>
            <div className="mtp-content" onClick={(e) => e.stopPropagation()}>
                <div className="mtp-header">
                    <div className="mtp-header-left">
                        <div className="mtp-header-icon-wrapper">
                            <FaHourglassHalf className="mtp-header-icon" />
                        </div>
                        <div>
                            <h2>{turma.nome}</h2>
                            <span className="mtp-status-badge mtp-pendente">Pendente</span>
                        </div>
                    </div>

                    <button className="mtp-close-btn" onClick={onClose}>
                        <FaTimes />
                    </button>
                </div>

                <div className="mtp-body">
                    <div className="mtp-info-grid">
                        <div className="mtp-info-card">
                            <div className="mtp-info-icon">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="mtp-info-content">
                                <span className="mtp-info-label">Local</span>
                                <strong className="mtp-info-value">{turma.local}</strong>
                            </div>
                        </div>

                        <div className="mtp-info-card">
                            <div className="mtp-info-icon">
                                <FaClock />
                            </div>
                            <div className="mtp-info-content">
                                <span className="mtp-info-label">Período</span>
                                <strong className="mtp-info-value">{turma.periodo}</strong>
                            </div>
                        </div>

                        <div className="mtp-info-card">
                            <div className="mtp-info-icon">
                                <FaCalendarAlt />
                            </div>
                            <div className="mtp-info-content">
                                <span className="mtp-info-label">Dias da Semana</span>
                                <strong className="mtp-info-value">{turma.dias}</strong>
                            </div>
                        </div>

                        <div className="mtp-info-card">
                            <div className="mtp-info-icon">
                                <FaCalendarAlt />
                            </div>
                            <div className="mtp-info-content">
                                <span className="mtp-info-label">Data de Início</span>
                                <strong className="mtp-info-value">{dataInicioFormatada}</strong>
                            </div>
                        </div>
                    </div>

                    <div className="mtp-compatibilidade-card">
                        <FaCheckCircle className="mtp-compatibilidade-icon" />
                        <div className="mtp-compatibilidade-texto">
                            <strong>Alunos compatíveis com o local da turma</strong>
                            <p>Esta lista mostra apenas inscritos cujo local escolhido é igual ao local desta turma.</p>
                        </div>
                    </div>

                    <div className="mtp-sub-tabs">
                        <button
                            className={`mtp-sub-tab ${activeSubTab === 'alunos' ? 'active' : ''}`}
                            onClick={() => setActiveSubTab('alunos')}
                        >
                            <FaUsers /> Alunos Matriculados ({inscritos.length})
                        </button>

                        <button
                            className={`mtp-sub-tab ${activeSubTab === 'adicionar' ? 'active' : ''}`}
                            onClick={() => {
                                if (!mostrarFormAdicionar) {
                                    abrirFormAdicionar();
                                } else {
                                    setActiveSubTab('adicionar');
                                }
                            }}
                        >
                            <FaUserPlus /> Adicionar Aluno
                        </button>
                    </div>

                    {activeSubTab === 'alunos' && (
                        <div className="mtp-alunos-section">
                            {carregando ? (
                                <div className="mtp-loading-state">
                                    <FaSpinner className="mtp-spinner mtp-rotating" />
                                    <p>Carregando lista de alunos...</p>
                                </div>
                            ) : inscritos.length === 0 ? (
                                <div className="mtp-empty-state">
                                    <div className="mtp-empty-icon">
                                        <FaUsers />
                                    </div>
                                    <h4>Nenhum aluno compatível matriculado</h4>
                                    <p>Esta turma ainda não possui alunos compatíveis com o local selecionado.</p>
                                    <button className="mtp-btn-adicionar" onClick={abrirFormAdicionar}>
                                        <FaUserPlus /> Adicionar Alunos
                                    </button>
                                </div>
                            ) : (
                                <div className="mtp-alunos-lista">
                                    {inscritos.map((inscrito) => (
                                        <div key={inscrito.id} className="mtp-aluno-card">
                                            <div className="mtp-aluno-info">
                                                <div className="mtp-aluno-avatar">
                                                    <span className="mtp-avatar-inicial">
                                                        {inscrito.nome.charAt(0).toUpperCase()}
                                                    </span>
                                                </div>

                                                <div className="mtp-aluno-detalhes">
                                                    <div className="mtp-aluno-nome-container">
                                                        <strong className="mtp-aluno-nome">{inscrito.nome}</strong>
                                                        {inscrito.primeira_vez && (
                                                            <span className="mtp-primeira-vez-badge">
                                                                <FaCheckCircle /> Primeira Vez
                                                            </span>
                                                        )}
                                                    </div>

                                                    <div className="mtp-aluno-metadados">
                                                        <span className="mtp-metadado">
                                                            <FaMapMarkerAlt className="mtp-metadado-icon" />
                                                            {inscrito.local}
                                                        </span>
                                                        <span className="mtp-metadado">
                                                            <FaClock className="mtp-metadado-icon" />
                                                            {inscrito.periodo}
                                                        </span>
                                                        <span className="mtp-metadado">
                                                            <FaCalendarAlt className="mtp-metadado-icon" />
                                                            {inscrito.dias}
                                                        </span>
                                                        <span className="mtp-metadado mtp-telefone">
                                                            <FaPhoneAlt className="mtp-metadado-icon" />
                                                            {inscrito.celular}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <button
                                                className="mtp-btn-remover-aluno"
                                                onClick={() => deletarInscritoDaTurma(inscrito.id)}
                                                disabled={deletandoInscrito === inscrito.id}
                                                title="Remover da turma"
                                            >
                                                {deletandoInscrito === inscrito.id ? (
                                                    <FaSpinner className="mtp-spinner-small mtp-rotating" />
                                                ) : (
                                                    <FaUserMinus className="mtp-icone-remover" />
                                                )}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {activeSubTab === 'adicionar' && mostrarFormAdicionar && (
                        <div className="mtp-adicionar-section">
                            <div className="mtp-busca-alunos">
                                <FaSearch className="mtp-busca-icon" />
                                <input
                                    type="text"
                                    placeholder="Buscar por nome ou telefone..."
                                    value={buscaInscritos}
                                    onChange={(e) => setBuscaInscritos(e.target.value)}
                                    className="mtp-busca-input"
                                />
                            </div>

                            {carregandoDisponiveis ? (
                                <div className="mtp-loading-state">
                                    <FaSpinner className="mtp-spinner mtp-rotating" />
                                    <p>Carregando alunos disponíveis...</p>
                                </div>
                            ) : inscritosDisponiveisFiltrados.length === 0 ? (
                                <div className="mtp-empty-state">
                                    <div className="mtp-empty-icon">
                                        <FaExclamationTriangle />
                                    </div>
                                    <h4>Nenhum aluno disponível</h4>
                                    <p>
                                        {buscaInscritos
                                            ? 'Não encontramos alunos com esta busca.'
                                            : `Não há alunos disponíveis compatíveis com o local ${turma.local} para esta turma.`}
                                    </p>
                                </div>
                            ) : (
                                <div className="mtp-alunos-disponiveis-lista">
                                    {inscritosDisponiveisFiltrados.map((inscrito) => (
                                        <div
                                            key={inscrito.id}
                                            className={`mtp-aluno-disponivel-card ${inscrito.foiChamado ? 'mtp-foi-chamado' : ''}`}
                                        >
                                            <div className="mtp-aluno-disponivel-info">
                                                <div className="mtp-aluno-avatar">
                                                    <span className="mtp-avatar-inicial">
                                                        {inscrito.nome.charAt(0).toUpperCase()}
                                                    </span>
                                                </div>

                                                <div className="mtp-aluno-disponivel-detalhes">
                                                    <div className="mtp-aluno-nome-container">
                                                        <strong className="mtp-aluno-nome">{inscrito.nome}</strong>

                                                        {inscrito.primeira_vez && (
                                                            <span className="mtp-primeira-vez-badge">
                                                                <FaCheckCircle /> Primeira Vez
                                                            </span>
                                                        )}

                                                        {inscrito.foiChamado && (
                                                            <span
                                                                className="mtp-chamado-badge"
                                                                title="Este aluno já foi chamado anteriormente"
                                                            >
                                                                <FaExclamationTriangle /> Já Chamado
                                                            </span>
                                                        )}
                                                    </div>

                                                    <div className="mtp-aluno-metadados">
                                                        <span className="mtp-metadado">
                                                            <FaMapMarkerAlt className="mtp-metadado-icon" />
                                                            {inscrito.local}
                                                        </span>
                                                        <span className="mtp-metadado">
                                                            <FaClock className="mtp-metadado-icon" />
                                                            {inscrito.periodo}
                                                        </span>
                                                        <span className="mtp-metadado">
                                                            <FaCalendarAlt className="mtp-metadado-icon" />
                                                            {inscrito.dias}
                                                        </span>
                                                        <span className="mtp-metadado mtp-telefone">
                                                            <FaPhoneAlt className="mtp-metadado-icon" />
                                                            {inscrito.celular}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <button
                                                className="mtp-btn-adicionar-lista"
                                                onClick={() => adicionarInscritoTurma(inscrito)}
                                                disabled={adicionandoInscrito === inscrito.id}
                                            >
                                                {adicionandoInscrito === inscrito.id ? (
                                                    <FaSpinner className="mtp-spinner-small mtp-rotating" />
                                                ) : (
                                                    <>
                                                        <FaUserPlus /> Adicionar
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="mtp-footer">
                    <button className="mtp-btn-fechar" onClick={onClose}>
                        Fechar
                    </button>

                    <button
                        className="mtp-btn-ativar"
                        onClick={ativarTurma}
                        disabled={ativandoTurma}
                    >
                        {ativandoTurma ? (
                            <>
                                <FaSpinner className="mtp-spinner-small mtp-rotating" />
                                Ativando...
                            </>
                        ) : (
                            <>
                                <FaCheckCircle /> Ativar Turma
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}