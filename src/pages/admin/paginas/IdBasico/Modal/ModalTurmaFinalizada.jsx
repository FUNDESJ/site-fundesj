import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import {
    FaTimes,
    FaClock,
    FaCalendarAlt,
    FaUsers,
    FaCheckCircle,
    FaChartLine,
    FaUserGraduate,
    FaHistory,
    FaThumbsUp,
    FaUserSlash,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaPercentage
} from 'react-icons/fa';
import './ModalTurmaFinalizada.css';

export default function ModalTurmaFinalizada({ isOpen, onClose, turma }) {
    const [inscritos, setInscritos] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [activeSubTab, setActiveSubTab] = useState(false);

    useEffect(() => {
        if (turma && turma.id && isOpen) {
            listarInscritos();
        }
    }, [turma, isOpen]);

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
            console.error('Erro ao carregar inscritos da turma finalizada:', erro);
            setInscritos([]);
        } finally {
            setCarregando(false);
        }
    }

    function normalizarSituacao(situacao) {
        return (situacao || '').toString().trim().toLowerCase();
    }

    function formatarData(data) {
        if (!data) return '-';

        const dataObj = new Date(`${data}`.includes('T') ? data : `${data}T00:00:00`);

        if (Number.isNaN(dataObj.getTime())) return '-';

        return dataObj.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }

    function calcularDiasDuracao(dataInicio, dataFim) {
        if (!dataInicio || !dataFim) return 0;

        const inicio = new Date(`${dataInicio}`.includes('T') ? dataInicio : `${dataInicio}T00:00:00`);
        const fim = new Date(`${dataFim}`.includes('T') ? dataFim : `${dataFim}T00:00:00`);

        if (Number.isNaN(inicio.getTime()) || Number.isNaN(fim.getTime())) {
            return 0;
        }

        const diferencaMs = fim.getTime() - inicio.getTime();
        const dias = Math.ceil(diferencaMs / (1000 * 60 * 60 * 24));

        return dias >= 0 ? dias + 1 : 0;
    }

    const estatisticas = useMemo(() => {
        const totalAlunos = inscritos.length;

        const aprovados = inscritos.filter(
            (i) => normalizarSituacao(i.Situacao) === 'aprovado'
        ).length;

        const desistentes = inscritos.filter(
            (i) => normalizarSituacao(i.Situacao) === 'desistente'
        ).length;

        const matriculados = totalAlunos - aprovados - desistentes;

        const primeiraVez = inscritos.filter(
            (i) => i.primeira_vez === true || i.primeira_vez === 1
        ).length;

        const retornantes = totalAlunos - primeiraVez;

        const percentualRetornantes =
            totalAlunos > 0 ? (retornantes / totalAlunos) * 100 : 0;

        const percentualAprovacao =
            totalAlunos > 0 ? (aprovados / totalAlunos) * 100 : 0;

        const percentualDesistencia =
            totalAlunos > 0 ? (desistentes / totalAlunos) * 100 : 0;

        const percentualPrimeiraVez =
            totalAlunos > 0 ? (primeiraVez / totalAlunos) * 100 : 0;

        const diasDuracao = calcularDiasDuracao(turma?.dataInicio, turma?.dataFim);

        return {
            totalAlunos,
            aprovados,
            desistentes,
            matriculados,
            primeiraVez,
            retornantes,
            percentualRetornantes,
            percentualAprovacao,
            percentualDesistencia,
            percentualPrimeiraVez,
            diasDuracao
        };
    }, [inscritos, turma]);

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

    return (
        <div className="modal-turma-finalizada-overlay" onClick={onClose}>
            <div
                className="modal-turma-finalizada-content"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-turma-finalizada-header">
                    <div className="header-left">
                        <div className="header-icon-wrapper">
                            <FaUserGraduate className="header-icon" />
                        </div>
                        <div>
                            <h2>{turma.nome}</h2>
                            <span className="turma-status-badge finalizada">Finalizada</span>
                        </div>
                    </div>

                    <button className="modal-close-btn" onClick={onClose}>
                        <FaTimes />
                    </button>
                </div>

                <div className="modal-turma-finalizada-body">
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
                            <div className="estatistica-icon aprovados">
                                <FaThumbsUp />
                            </div>
                            <div className="estatistica-info">
                                <span className="estatistica-valor">{estatisticas.aprovados}</span>
                                <span className="estatistica-label">Aprovados</span>
                            </div>
                        </div>

                        <div className="estatistica-card">
                            <div className="estatistica-icon desistentes">
                                <FaUserSlash />
                            </div>
                            <div className="estatistica-info">
                                <span className="estatistica-valor">{estatisticas.desistentes}</span>
                                <span className="estatistica-label">Desistentes</span>
                            </div>
                        </div>

                        <div className="estatistica-card">
                            <div className="estatistica-icon duracao">
                                <FaClock />
                            </div>
                            <div className="estatistica-info">
                                <span className="estatistica-valor">{estatisticas.diasDuracao}</span>
                                <span className="estatistica-label">Dias de Duração</span>
                            </div>
                        </div>

                        <div className="estatistica-card">
                            <div className="estatistica-icon retorno">
                                <FaHistory />
                            </div>
                            <div className="estatistica-info">
                                <span className="estatistica-valor">
                                    {Math.round(estatisticas.percentualRetornantes)}%
                                </span>
                                <span className="estatistica-label">Retornantes</span>
                            </div>
                        </div>

                        <div className="estatistica-card">
                            <div className="estatistica-icon aprovacao">
                                <FaPercentage />
                            </div>
                            <div className="estatistica-info">
                                <span className="estatistica-valor">
                                    {Math.round(estatisticas.percentualAprovacao)}%
                                </span>
                                <span className="estatistica-label">Taxa de Aprovação</span>
                            </div>
                        </div>
                    </div>

                    <div className="turma-resumo-grid">
                        <div className="turma-resumo-card">
                            <div className="turma-resumo-item">
                                <FaMapMarkerAlt className="turma-resumo-icon" />
                                <div>
                                    <span className="turma-resumo-label">Local</span>
                                    <strong>{turma.local || '-'}</strong>
                                </div>
                            </div>

                            <div className="turma-resumo-item">
                                <FaClock className="turma-resumo-icon" />
                                <div>
                                    <span className="turma-resumo-label">Período</span>
                                    <strong>{turma.periodo || '-'}</strong>
                                </div>
                            </div>

                            <div className="turma-resumo-item">
                                <FaCalendarAlt className="turma-resumo-icon" />
                                <div>
                                    <span className="turma-resumo-label">Dias da Semana</span>
                                    <strong>{turma.dias || '-'}</strong>
                                </div>
                            </div>
                        </div>

                        <div className="turma-resumo-card">
                            <div className="turma-resumo-item">
                                <FaCalendarAlt className="turma-resumo-icon" />
                                <div>
                                    <span className="turma-resumo-label">Data de Início</span>
                                    <strong>{formatarData(turma.dataInicio)}</strong>
                                </div>
                            </div>

                            <div className="turma-resumo-item">
                                <FaCalendarAlt className="turma-resumo-icon" />
                                <div>
                                    <span className="turma-resumo-label">Data de Finalização</span>
                                    <strong>{formatarData(turma.dataFim)}</strong>
                                </div>
                            </div>

                            <div className="turma-resumo-item">
                                <FaChartLine className="turma-resumo-icon" />
                                <div>
                                    <span className="turma-resumo-label">Desistência</span>
                                    <strong>{Math.round(estatisticas.percentualDesistencia)}%</strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ocupacao-progresso">
                        <div className="progresso-header">
                            <span>Aprovação da turma</span>
                            <span>
                                {estatisticas.aprovados} / {estatisticas.totalAlunos} alunos
                            </span>
                        </div>
                        <div className="progresso-bar">
                            <div
                                className="progresso-fill aprovacao-fill"
                                style={{ width: `${estatisticas.percentualAprovacao}%` }}
                            ></div>
                        </div>
                    </div>

                    <div className="ocupacao-progresso">
                        <div className="progresso-header">
                            <span>Participantes que já fizeram outra vez</span>
                            <span>
                                {estatisticas.retornantes} / {estatisticas.totalAlunos} alunos
                            </span>
                        </div>
                        <div className="progresso-bar">
                            <div
                                className="progresso-fill retorno-fill"
                                style={{ width: `${estatisticas.percentualRetornantes}%` }}
                            ></div>
                        </div>
                    </div>

                    <div className="sub-tabs">
                        <button
                            className={`sub-tab ${activeSubTab === true ? 'active' : ''}`}
                            onClick={() => setActiveSubTab(!activeSubTab)}
                        >
                            <FaUsers /> Clique para ver os alunos da turma ({inscritos.length})
                        </button>
                    </div>

                    {activeSubTab === true && (
                        <div className="alunos-section">
                            {carregando ? (
                                <div className="loading-state">
                                    <div className="spinner rotating">↻</div>
                                    <p>Carregando lista de alunos...</p>
                                </div>
                            ) : inscritos.length === 0 ? (
                                <div className="empty-state">
                                    <div className="empty-icon">
                                        <FaUsers />
                                    </div>
                                    <h4>Nenhum aluno encontrado</h4>
                                    <p>Esta turma finalizada não possui alunos vinculados.</p>
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

                                                        {(inscrito.primeira_vez === true || inscrito.primeira_vez === 1) ? (
                                                            <span className="primeira-vez-badge">
                                                                <FaCheckCircle /> Primeira Vez
                                                            </span>
                                                        ) : (
                                                            <span className="retornante-badge">
                                                                <FaHistory /> Retornante
                                                            </span>
                                                        )}

                                                        {getSituacaoBadge(inscrito)}
                                                    </div>

                                                    <div className="aluno-metadados">
                                                        <span className="metadado">
                                                            <FaClock className="metadado-icon" />
                                                            {inscrito.periodo || turma.periodo || '-'}
                                                        </span>

                                                        <span className="metadado">
                                                            <FaCalendarAlt className="metadado-icon" />
                                                            {inscrito.dias || turma.dias || '-'}
                                                        </span>

                                                        <span className="metadado telefone">
                                                            <FaPhoneAlt className="metadado-icon" />
                                                            {inscrito.celular || '-'}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="modal-turma-finalizada-footer">
                    <button className="btn-fechar" onClick={onClose}>
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
}