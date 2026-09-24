import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {
    FaTimes,
    FaClock,
    FaCalendarAlt,
    FaUsers,
    FaCheckCircle,
    FaChartLine,
    FaUserGraduate,
    FaStop,
    FaSpinner,
    FaHistory,
    FaThumbsUp,
    FaUserSlash,
    FaUserPlus,
    FaSearch,
    FaTrashAlt,
    FaExclamationTriangle,
    FaPhoneAlt
} from 'react-icons/fa';
import './ModalTurmaAtiva.css';

export default function ModalTurmaAtiva({ isOpen, onClose, turma, onTurmaUpdated }) {
    const [inscritos, setInscritos] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [reprovandoInstrido, setReprovandoInscrito] = useState(null);
    const [finalizandoTurma, setFinalizandoTurma] = useState(false);
    const [estatisticas, setEstatisticas] = useState({
        totalAlunos: 0,
        primeiraVez: 0,
        retornantes: 0,
        taxaOcupacao: 0
    });
    const [activeSubTab, setActiveSubTab] = useState('alunos');
    const [dataFinalizacao, setDataFinalizacao] = useState('');
    const [finalizaTurma, setFinalizaTurma] = useState(false);

    // Estados: adicionar alunos
    const [inscritosDisponiveis, setInscritosDisponiveis] = useState([]);
    const [carregandoDisponiveis, setCarregandoDisponiveis] = useState(false);
    const [buscaInscritos, setBuscaInscritos] = useState('');
    const [adicionandoInscrito, setAdicionandoInscrito] = useState(null);

    // Estado: excluir turma
    const [excluindoTurma, setExcluindoTurma] = useState(false);

    useEffect(() => {
        if (turma && turma.id && isOpen) {
            listarInscritos();
            setFinalizaTurma(false);
            setDataFinalizacao('');
            setActiveSubTab('alunos');
            setBuscaInscritos('');
            setInscritosDisponiveis([]);
        }
    }, [turma, isOpen]);

    useEffect(() => {
        if (activeSubTab === 'adicionar' && turma && isOpen) {
            listarInscritosDisponiveis();
        }
    }, [activeSubTab]);

    useEffect(() => {
        if (inscritos.length > 0) {
            calcularEstatisticas();
            console.log(inscritos);
        } else {
            setEstatisticas({
                totalAlunos: 0,
                primeiraVez: 0,
                retornantes: 0,
                taxaOcupacao: 0
            });
        }
    }, [inscritos]);

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
        const primeiraVezCount = inscritos.filter(
            i => i.primeira_vez === true || i.primeira_vez === 1
        ).length;

        const retornantesCount = inscritos.length - primeiraVezCount;
        const taxaOcupacao = (inscritos.length / 15) * 100;

        setEstatisticas({
            totalAlunos: inscritos.length,
            primeiraVez: primeiraVezCount,
            retornantes: retornantesCount,
            taxaOcupacao: Math.min(taxaOcupacao, 100)
        });
    }

    async function reprovarAluno(inscritoId) {
        if (!window.confirm('Tem certeza que deseja definir este aluno como desistente?')) {
            return;
        }

        try {
            setReprovandoInscrito(inscritoId);
            const token = localStorage.getItem('authToken');

            await axios.put(
                `https://back-end-fundesj.onrender.com/inscritosId/${inscritoId}`,
                { Situacao: 'Desistente' },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            await listarInscritos();
            mostrarNotificacao('Aluno definido como desistente com sucesso!', 'success');
        } catch (erro) {
            console.error('Erro ao reprovar aluno:', erro);
            mostrarNotificacao('Erro ao definir aluno como desistente.', 'error');
        } finally {
            setReprovandoInscrito(null);
        }
    }

    async function aprovarAluno(inscritoId) {
        if (!window.confirm('Tem certeza que deseja aprovar este aluno da turma?')) {
            return;
        }

        try {
            setReprovandoInscrito(inscritoId);
            const token = localStorage.getItem('authToken');

            await axios.put(
                `https://back-end-fundesj.onrender.com/inscritosId/${inscritoId}`,
                { Situacao: 'Aprovado' },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            await listarInscritos();
            mostrarNotificacao('Aluno aprovado com sucesso!', 'success');
        } catch (erro) {
            console.error('Erro ao aprovar aluno:', erro);
            mostrarNotificacao('Erro ao aprovar aluno.', 'error');
        } finally {
            setReprovandoInscrito(null);
        }
    }

    async function finalizarTurma() {
        if (!dataFinalizacao) {
            mostrarNotificacao('Selecione a data de finalização da turma.', 'error');
            return;
        }

        if (
            !window.confirm(
                `Tem certeza que deseja finalizar esta turma com a data ${new Date(
                    `${dataFinalizacao}T00:00:00`
                ).toLocaleDateString('pt-BR')}?\n\nEsta ação não poderá ser desfeita.`
            )
        ) {
            return;
        }

        try {
            setFinalizandoTurma(true);
            const token = localStorage.getItem('authToken');

            await axios.put(
                `https://back-end-fundesj.onrender.com/turmaId/editar/${turma.id}`,
                {
                    status: 'Finalizada',
                    dataFim: dataFinalizacao
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            mostrarNotificacao('Turma finalizada com sucesso!', 'success');
            setFinalizaTurma(false);
            setDataFinalizacao('');

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

    async function excluirTurma() {
        const qtdAlunos = inscritos.length;
        const mensagem = qtdAlunos > 0
            ? `Tem certeza que deseja EXCLUIR a turma "${turma.nome}"?\n\nOs ${qtdAlunos} aluno(s) vinculados a ela retornarão à lista de inscritos como "Matriculado" (disponíveis para novas turmas).\n\nA turma NÃO será contabilizada como finalizada. Esta ação não poderá ser desfeita.`
            : `Tem certeza que deseja EXCLUIR a turma "${turma.nome}"?\n\nA turma NÃO será contabilizada como finalizada. Esta ação não poderá ser desfeita.`;

        if (!window.confirm(mensagem)) {
            return;
        }

        try {
            setExcluindoTurma(true);
            const token = localStorage.getItem('authToken');
            const headers = {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            };

            // 1) Desvincula todos os alunos da turma (FK com RESTRICT impediria o delete)
            await Promise.all(
                inscritos.map(inscrito =>
                    axios.put(
                        `https://back-end-fundesj.onrender.com/inscritosId/${inscrito.id}`,
                        { turma_id: null, foiChamado: false },
                        { headers }
                    )
                )
            );

            // 2) Deleta a turma
            await axios.delete(
                `https://back-end-fundesj.onrender.com/turmaId/deletar/${turma.id}`,
                { headers }
            );

            mostrarNotificacao('Turma excluída com sucesso!', 'success');

            if (onTurmaUpdated) {
                onTurmaUpdated();
            }

            setTimeout(() => {
                onClose();
            }, 1500);
        } catch (erro) {
            console.error('Erro ao excluir turma:', erro);
            mostrarNotificacao('Erro ao excluir turma.', 'error');
        } finally {
            setExcluindoTurma(false);
        }
    }

    // ===============================
    // ADICIONAR ALUNOS (turma ativa)
    // ===============================
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

        const mapaLocais = {
            estacio: ['estacio', 'estacio de sa', 'estácio', 'estácio de sá'],
            cati: ['cati'],
            unisul: ['unisul'],
            uniasselvi: ['uniasselvi']
        };

        for (const chave of Object.keys(mapaLocais)) {
            if (mapaLocais[chave].includes(localTurmaNormalizado)) {
                return mapaLocais[chave].includes(localAlunoNormalizado);
            }
        }

        return localAlunoNormalizado === localTurmaNormalizado;
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

            const listaRetornada = Array.isArray(retorno.data) ? retorno.data : [];
            const idsInscritosNaTurma = inscritos.map(i => i.id);

            const disponiveis = listaRetornada.filter((inscrito) => {
                const naoEstaNaTurmaAtual = !idsInscritosNaTurma.includes(inscrito.id);
                const semTurma = inscrito.turma_id === null;
                const localCompativel = ehLocalCompativelComTurma(inscrito.local);
                const naoCancelado = (inscrito.Situacao || '').trim().toLowerCase() !== 'cancelado';
                const naoDesistente = (inscrito.Situacao || '').trim().toLowerCase() !== 'desistente';
                const naoAprovado = (inscrito.Situacao || '').trim().toLowerCase() !== 'aprovado';

                return naoEstaNaTurmaAtual && semTurma && localCompativel && naoCancelado && naoDesistente && naoAprovado;
            });

            setInscritosDisponiveis(disponiveis);
        } catch (erro) {
            console.error('Erro ao carregar inscritos disponíveis:', erro);
            setInscritosDisponiveis([]);
        } finally {
            setCarregandoDisponiveis(false);
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

            const inscritoAdicionado = { ...inscrito, foiChamado: true, turma_id: turma.id };
            setInscritos(prev => [...prev, inscritoAdicionado]);
            setInscritosDisponiveis(prev => prev.filter(i => i.id !== inscrito.id));

            mostrarNotificacao(`${inscrito.nome} foi adicionado à turma!`, 'success');
        } catch (erro) {
            console.error('Erro ao adicionar aluno:', erro);
            mostrarNotificacao('Erro ao adicionar aluno à turma.', 'error');
        } finally {
            setAdicionandoInscrito(null);
        }
    }

    const inscritosDisponiveisFiltrados = inscritosDisponiveis.filter(inscrito =>
        (inscrito.nome || '').toLowerCase().includes(buscaInscritos.toLowerCase()) ||
        (inscrito.celular || '').includes(buscaInscritos)
    );

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
                if (document.body.contains(notificacao)) {
                    document.body.removeChild(notificacao);
                }
            }, 300);
        }, 3000);
    }

    function normalizarSituacao(situacao) {
        return (situacao || '').toString().trim().toLowerCase();
    }

    function getAlunoCardClassName(inscrito) {
        const situacao = normalizarSituacao(inscrito.Situacao);

        if (situacao === 'desistente') return 'aluno-card aluno-card-desistente';
        if (situacao === 'aprovado') return 'aluno-card aluno-card-aprovado';

        return 'aluno-card';
    }

    function getSituacaoBadge(inscrito) {
        const situacao = normalizarSituacao(inscrito.Situacao);

        if (situacao === 'desistente') {
            return <span className="situacao-badge desistente">Desistente</span>;
        }

        if (situacao === 'aprovado') {
            return <span className="situacao-badge aprovado">Aprovado</span>;
        }

        return <span className="situacao-badge matriculado">Matriculado</span>;
    }

    if (!isOpen || !turma) return null;

    const dataInicioFormatada = turma.dataInicio
        ? new Date(turma.dataInicio).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric'
          })
        : '-';

    return (
        <div className="modal-turma-ativa-overlay" onClick={onClose}>
            <div
                className="modal-turma-ativa-content"
                onClick={(e) => e.stopPropagation()}
            >
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
                                <span className="estatistica-valor">
                                    {Math.round(estatisticas.taxaOcupacao)}%
                                </span>
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

                    <div className="finalizacao-bloco">
                        <div className="turma-acoes-botoes">
                            <button
                                className="btn-finalizar-turma"
                                onClick={() => setFinalizaTurma(true)}
                                disabled={finalizandoTurma || excluindoTurma}
                            >
                                <FaStop />
                                Finalizar Turma
                            </button>

                            <button
                                className="btn-excluir-turma"
                                onClick={excluirTurma}
                                disabled={excluindoTurma || finalizandoTurma}
                                title="Excluir a turma sem contabilizá-la como finalizada"
                            >
                                {excluindoTurma ? (
                                    <>
                                        <FaSpinner className="spinner-btn rotating" />
                                        Excluindo...
                                    </>
                                ) : (
                                    <>
                                        <FaTrashAlt />
                                        Excluir Turma
                                    </>
                                )}
                            </button>
                        </div>

                        {finalizaTurma && (
                            <div className="finalizar-container">
                                <label className="finalizar-label" htmlFor="dataFimTurma">
                                    Data de finalização
                                </label>

                                <input
                                    id="dataFimTurma"
                                    className="finalizar-input"
                                    type="date"
                                    value={dataFinalizacao}
                                    onChange={(e) => setDataFinalizacao(e.target.value)}
                                />

                                <div className="finalizar-acoes">
                                    <button
                                        className="btn-confirmar-finalizacao"
                                        onClick={finalizarTurma}
                                        disabled={finalizandoTurma}
                                    >
                                        {finalizandoTurma ? (
                                            <>
                                                <FaSpinner className="spinner-btn rotating" />
                                                Finalizando...
                                            </>
                                        ) : (
                                            <>
                                                <FaCheckCircle />
                                                Confirmar Finalização
                                            </>
                                        )}
                                    </button>

                                    <button
                                        className="btn-cancelar-finalizacao"
                                        onClick={() => {
                                            setFinalizaTurma(false);
                                            setDataFinalizacao('');
                                        }}
                                        disabled={finalizandoTurma}
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

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

                    <div className="sub-tabs">
                        <button
                            className={`sub-tab ${activeSubTab === 'alunos' ? 'active' : ''}`}
                            onClick={() => setActiveSubTab('alunos')}
                        >
                            <FaUsers /> Alunos Matriculados ({inscritos.length})
                        </button>

                        <button
                            className={`sub-tab ${activeSubTab === 'adicionar' ? 'active' : ''}`}
                            onClick={() => setActiveSubTab('adicionar')}
                        >
                            <FaUserPlus /> Adicionar Alunos
                        </button>
                    </div>

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
                                </div>
                            ) : (
                                <div className="alunos-lista">
                                    {inscritos.map((inscrito) => (
                                        <div key={inscrito.id} className={getAlunoCardClassName(inscrito)}>
                                            <div className="aluno-info">
                                                <div className="aluno-avatar">
                                                    <span className="avatar-inicial">
                                                        {inscrito.nome?.charAt(0)?.toUpperCase() || '?'}
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

                                                        {getSituacaoBadge(inscrito)}
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
                                                            <FaPhoneAlt className="metadado-icon" />
                                                            {inscrito.celular}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="aluno-acoes">
                                                <button
                                                    className="btn-aprovar-aluno"
                                                    onClick={() => aprovarAluno(inscrito.id)}
                                                    disabled={reprovandoInstrido === inscrito.id}
                                                    title="Aprovar aluno"
                                                >
                                                    {reprovandoInstrido === inscrito.id ? (
                                                        <FaSpinner className="spinner-btn rotating" />
                                                    ) : (
                                                        <FaThumbsUp className="icone-botao-acao" />
                                                    )}
                                                </button>

                                                <button
                                                    className="btn-remover-aluno"
                                                    onClick={() => reprovarAluno(inscrito.id)}
                                                    disabled={reprovandoInstrido === inscrito.id}
                                                    title="Definir como desistente"
                                                >
                                                    {reprovandoInstrido === inscrito.id ? (
                                                        <FaSpinner className="spinner-btn rotating" />
                                                    ) : (
                                                        <FaUserSlash className="icone-botao-acao" />
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {activeSubTab === 'adicionar' && (
                        <div className="alunos-section">
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
                                            : `Não há alunos disponíveis compatíveis com o local ${turma.local} para adicionar a esta turma.`}
                                    </p>
                                </div>
                            ) : (
                                <div className="alunos-lista">
                                    {inscritosDisponiveisFiltrados.map((inscrito) => (
                                        <div
                                            key={inscrito.id}
                                            className={`aluno-card ${inscrito.foiChamado ? 'aluno-card-ja-chamado' : ''}`}
                                        >
                                            <div className="aluno-info">
                                                <div className="aluno-avatar">
                                                    <span className="avatar-inicial">
                                                        {inscrito.nome?.charAt(0)?.toUpperCase() || '?'}
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

                                                        {inscrito.foiChamado && (
                                                            <span
                                                                className="chamado-badge"
                                                                title="Este aluno já foi chamado anteriormente"
                                                            >
                                                                <FaExclamationTriangle /> Já Chamado
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
                                                            <FaPhoneAlt className="metadado-icon" />
                                                            {inscrito.celular}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <button
                                                className="btn-adicionar-lista"
                                                onClick={() => adicionarInscritoTurma(inscrito)}
                                                disabled={adicionandoInscrito === inscrito.id}
                                            >
                                                {adicionandoInscrito === inscrito.id ? (
                                                    <FaSpinner className="spinner-btn rotating" />
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

                <div className="modal-turma-ativa-footer">
                    <button className="btn-fechar" onClick={onClose}>
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
}