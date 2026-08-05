import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    FaUsers, FaGraduationCap, FaCheckCircle, FaUserTimes,
    FaHourglassHalf, FaSpinner, FaChartBar, FaSyncAlt, FaPercentage,
    FaUserClock, FaUserCheck, FaMapMarkerAlt, FaStar
} from 'react-icons/fa';
import './Dashboard.css';

const API = 'https://back-end-fundesj.onrender.com';

function normalizarSituacao(situacao) {
    return (situacao || '').toString().trim().toLowerCase();
}

function getSituacaoKey(inscrito) {
    const situacao = normalizarSituacao(inscrito.Situacao);
    if (situacao === 'desistente') return 'desistente';
    if (situacao === 'aprovado') return 'aprovado';
    if (situacao === 'cancelado') return 'cancelado';
    if (inscrito.foiChamado) return 'chamado';
    return 'matriculado';
}

export default function Dashboard() {
    const [inscritos, setInscritos] = useState([]);
    const [turmasAtivas, setTurmasAtivas] = useState([]);
    const [turmasPendentes, setTurmasPendentes] = useState([]);
    const [turmasFinalizadas, setTurmasFinalizadas] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState('');

    async function carregarDados() {
        setCarregando(true);
        setErro('');
        const token = localStorage.getItem('authToken');
        const headers = { Authorization: `Bearer ${token}` };

        try {
            const [respInscritos, respAtivas, respPendentes, respFinalizadas] = await Promise.all([
                axios.get(`${API}/inscritosId/ordenados`, { headers }).catch(() => ({ data: [] })),
                axios.get(`${API}/turmaId/turmas/Ativa`, { headers }).catch(() => ({ data: {} })),
                axios.get(`${API}/turmaId/turmas/Pendente`, { headers }).catch(() => ({ data: {} })),
                axios.get(`${API}/turmaId/turmas/Finalizada`, { headers }).catch(() => ({ data: {} })),
            ]);

            const extraerTurmas = (resp) =>
                resp && resp.data && Array.isArray(resp.data.turmas) ? resp.data.turmas : [];

            setInscritos(Array.isArray(respInscritos.data) ? respInscritos.data : []);
            setTurmasAtivas(extraerTurmas(respAtivas));
            setTurmasPendentes(extraerTurmas(respPendentes));
            setTurmasFinalizadas(extraerTurmas(respFinalizadas));
        } catch (err) {
            console.error('Erro ao carregar dados do dashboard:', err);
            setErro('Não foi possível carregar as métricas. Tente novamente.');
        } finally {
            setCarregando(false);
        }
    }

    useEffect(() => {
        carregarDados();
    }, []);

    // Computa as métricas a partir dos inscritos
    const totalInscritos = inscritos.length;
    const porSituacao = inscritos.reduce((acc, inscrito) => {
        const key = getSituacaoKey(inscrito);
        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {});

    const matriculados = porSituacao['matriculado'] || 0;
    const chamados = porSituacao['chamado'] || 0;
    const aprovados = porSituacao['aprovado'] || 0;
    const desistentes = porSituacao['desistente'] || 0;
    const cancelados = porSituacao['cancelado'] || 0;

    // Por local
    const porLocal = inscritos.reduce((acc, inscrito) => {
        const local = inscrito.local || 'Não informado';
        acc[local] = (acc[local] || 0) + 1;
        return acc;
    }, {});

    // Primeira vez
    const primeiraVezSim = inscritos.filter(i => i.primeira_vez === true).length;
    const primeiraVezNao = inscritos.filter(i => i.primeira_vez === false).length;

    // Taxa de aprovação (aprovados / (aprovados + desistentes))
    const concluidos = aprovados + desistentes;
    const taxaAprovacao = concluidos > 0 ? Math.round((aprovados / concluidos) * 100) : 0;

    // Total de turmas
    const totalTurmas = turmasAtivas.length + turmasPendentes.length + turmasFinalizadas.length;

    const situacoesParaGrafico = [
        { key: 'matriculado', label: 'Matriculados', valor: matriculados, cor: '#667eea' },
        { key: 'chamado', label: 'Já chamados', valor: chamados, cor: '#f6ad55' },
        { key: 'aprovado', label: 'Aprovados', valor: aprovados, cor: '#48bb78' },
        { key: 'desistente', label: 'Desistentes', valor: desistentes, cor: '#f56565' },
        { key: 'cancelado', label: 'Cancelados', valor: cancelados, cor: '#a0aec0' },
    ].filter(s => s.valor > 0);

    const maxSituacoes = Math.max(...situacoesParaGrafico.map(s => s.valor), 1);

    const locaisParaGrafico = Object.entries(porLocal)
        .map(([local, valor]) => ({ local, valor }))
        .sort((a, b) => b.valor - a.valor);

    const maxLocais = Math.max(...locaisParaGrafico.map(l => l.valor), 1);

    // Donut chart: proporção de aprovados vs desistentes
    const donutAprovacao = concluidos > 0 ? (aprovados / concluidos) * 100 : 0;
    const donutDeg = `${donutAprovacao * 3.6}deg`;

    if (carregando) {
        return (
            <div className="dashboard-page">
                <div className="dashboard-loading">
                    <FaSpinner className="dashboard-spinner" />
                    <p>Carregando métricas...</p>
                </div>
            </div>
        );
    }

    if (erro) {
        return (
            <div className="dashboard-page">
                <div className="dashboard-error">
                    <p>{erro}</p>
                    <button onClick={carregarDados}>
                        <FaSyncAlt /> Tentar novamente
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="dashboard-page">
            <header className="dashboard-header">
                <div>
                    <h1>
                        <FaChartBar className="dashboard-header-icon" />
                        Dashboard
                    </h1>
                    <p>Visão geral das métricas do sistema, com foco em Inclusão Digital</p>
                </div>
                <button className="dashboard-refresh" onClick={carregarDados} title="Atualizar métricas">
                    <FaSyncAlt /> Atualizar
                </button>
            </header>

            {/* Cards principais */}
            <section className="dashboard-cards">
                <div className="dashboard-card dashboard-card-primary">
                    <div className="dashboard-card-icon">
                        <FaUsers />
                    </div>
                    <div className="dashboard-card-content">
                        <span className="dashboard-card-value">{totalInscritos}</span>
                        <span className="dashboard-card-label">Total de Inscritos</span>
                    </div>
                </div>

                <div className="dashboard-card">
                    <div className="dashboard-card-icon dashboard-card-icon-blue">
                        <FaGraduationCap />
                    </div>
                    <div className="dashboard-card-content">
                        <span className="dashboard-card-value">{totalTurmas}</span>
                        <span className="dashboard-card-label">Turmas (Total)</span>
                    </div>
                </div>

                <div className="dashboard-card">
                    <div className="dashboard-card-icon dashboard-card-icon-orange">
                        <FaHourglassHalf />
                    </div>
                    <div className="dashboard-card-content">
                        <span className="dashboard-card-value">{turmasPendentes.length}</span>
                        <span className="dashboard-card-label">Turmas Pendentes</span>
                    </div>
                </div>

                <div className="dashboard-card">
                    <div className="dashboard-card-icon dashboard-card-icon-green">
                        <FaCheckCircle />
                    </div>
                    <div className="dashboard-card-content">
                        <span className="dashboard-card-value">{turmasFinalizadas.length}</span>
                        <span className="dashboard-card-label">Turmas Concluídas</span>
                    </div>
                </div>
            </section>

            {/* Foco: Inclusão Digital — Gráficos */}
            <section className="dashboard-section">
                <div className="dashboard-section-title">
                    <FaStar />
                    <h2>Inclusão Digital — Detalhamento dos inscritos</h2>
                </div>

                <div className="dashboard-grid-2">
                    {/* Gráfico de barras: Situação dos inscritos */}
                    <div className="dashboard-chart-card">
                        <h3 className="dashboard-chart-title">Situação dos inscritos</h3>
                        <p className="dashboard-chart-subtitle">Distribuição por status atual</p>

                        <div className="dashboard-bar-chart">
                            {situacoesParaGrafico.length === 0 ? (
                                <p className="dashboard-chart-empty">Sem dados disponíveis</p>
                            ) : (
                                situacoesParaGrafico.map((s) => (
                                    <div key={s.key} className="dashboard-bar-item">
                                        <div className="dashboard-bar-label">
                                            <span className="dashboard-bar-dot" style={{ background: s.cor }}></span>
                                            {s.label}
                                        </div>
                                        <div className="dashboard-bar-track">
                                            <div
                                                className="dashboard-bar-fill"
                                                style={{
                                                    width: `${(s.valor / maxSituacoes) * 100}%`,
                                                    background: s.cor
                                                }}
                                            ></div>
                                        </div>
                                        <span className="dashboard-bar-value">{s.valor}</span>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Donut: Taxa de aprovação */}
                    <div className="dashboard-chart-card">
                        <h3 className="dashboard-chart-title">Taxa de aprovação</h3>
                        <p className="dashboard-chart-subtitle">
                            Aprovados vs desistentes (entre quem concluiu)
                        </p>

                        {concluidos === 0 ? (
                            <p className="dashboard-chart-empty">
                                Ainda não há alunos aprovados ou desistentes para calcular.
                            </p>
                        ) : (
                            <>
                                <div className="dashboard-donut-wrapper">
                                    <div
                                        className="dashboard-donut"
                                        style={{
                                            background: `conic-gradient(#48bb78 0deg ${donutDeg}, #f56565 ${donutDeg} 360deg)`
                                        }}
                                    >
                                        <div className="dashboard-donut-inner">
                                            <span className="dashboard-donut-value">{taxaAprovacao}%</span>
                                            <span className="dashboard-donut-label">Aprovação</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="dashboard-donut-legend">
                                    <div className="dashboard-donut-legend-item">
                                        <span className="dashboard-bar-dot" style={{ background: '#48bb78' }}></span>
                                        Aprovados: <strong>{aprovados}</strong>
                                    </div>
                                    <div className="dashboard-donut-legend-item">
                                        <span className="dashboard-bar-dot" style={{ background: '#f56565' }}></span>
                                        Desistentes: <strong>{desistentes}</strong>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div className="dashboard-grid-2">
                    {/* Gráfico de barras: Por local */}
                    <div className="dashboard-chart-card">
                        <h3 className="dashboard-chart-title">Inscritos por local</h3>
                        <p className="dashboard-chart-subtitle">Onde os alunos preferem assistir às aulas</p>

                        <div className="dashboard-bar-chart">
                            {locaisParaGrafico.length === 0 ? (
                                <p className="dashboard-chart-empty">Sem dados disponíveis</p>
                            ) : (
                                locaisParaGrafico.map((l) => (
                                    <div key={l.local} className="dashboard-bar-item">
                                        <div className="dashboard-bar-label">
                                            <FaMapMarkerAlt className="dashboard-bar-mappointer" />
                                            {l.local}
                                        </div>
                                        <div className="dashboard-bar-track">
                                            <div
                                                className="dashboard-bar-fill"
                                                style={{
                                                    width: `${(l.valor / maxLocais) * 100}%`,
                                                    background: '#667eea'
                                                }}
                                            ></div>
                                        </div>
                                        <span className="dashboard-bar-value">{l.valor}</span>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Indicadores rápidos */}
                    <div className="dashboard-chart-card dashboard-indicators-card">
                        <h3 className="dashboard-chart-title">Indicadores rápidos</h3>
                        <p className="dashboard-chart-subtitle">Resumo dos alunos</p>

                        <div className="dashboard-indicators-grid">
                            <div className="dashboard-indicator">
                                <FaUserClock className="dashboard-indicator-icon dashboard-icon-orange" />
                                <span className="dashboard-indicator-value">{matriculados}</span>
                                <span className="dashboard-indicator-label">Matriculados</span>
                            </div>

                            <div className="dashboard-indicator">
                                <FaUserCheck className="dashboard-indicator-icon dashboard-icon-yellow" />
                                <span className="dashboard-indicator-value">{chamados}</span>
                                <span className="dashboard-indicator-label">Já chamados</span>
                            </div>

                            <div className="dashboard-indicator">
                                <FaCheckCircle className="dashboard-indicator-icon dashboard-icon-green" />
                                <span className="dashboard-indicator-value">{aprovados}</span>
                                <span className="dashboard-indicator-label">Aprovados</span>
                            </div>

                            <div className="dashboard-indicator">
                                <FaUserTimes className="dashboard-indicator-icon dashboard-icon-red" />
                                <span className="dashboard-indicator-value">{desistentes}</span>
                                <span className="dashboard-indicator-label">Desistentes</span>
                            </div>

                            <div className="dashboard-indicator">
                                <FaPercentage className="dashboard-indicator-icon dashboard-icon-blue" />
                                <span className="dashboard-indicator-value">
                                    {totalInscritos > 0 ? Math.round((primeiraVezSim / totalInscritos) * 100) : 0}%
                                </span>
                                <span className="dashboard-indicator-label">Primeira vez</span>
                            </div>

                            <div className="dashboard-indicator">
                                <FaUserTimes className="dashboard-indicator-icon dashboard-icon-gray" />
                                <span className="dashboard-indicator-value">{cancelados}</span>
                                <span className="dashboard-indicator-label">Cancelados</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resumo das turmas */}
            <section className="dashboard-section">
                <div className="dashboard-section-title">
                    <FaGraduationCap />
                    <h2>Turmas de Inclusão Digital</h2>
                </div>

                <div className="dashboard-turmas-grid">
                    <div className="dashboard-turma-card dashboard-turma-pendente">
                        <div className="dashboard-turma-icon">
                            <FaHourglassHalf />
                        </div>
                        <span className="dashboard-turma-value">{turmasPendentes.length}</span>
                        <span className="dashboard-turma-label">Turmas Pendentes</span>
                        <span className="dashboard-turma-hint">
                            Aguardando ativação para início das aulas
                        </span>
                    </div>

                    <div className="dashboard-turma-card dashboard-turma-ativa">
                        <div className="dashboard-turma-icon">
                            <FaUserClock />
                        </div>
                        <span className="dashboard-turma-value">{turmasAtivas.length}</span>
                        <span className="dashboard-turma-label">Turmas Ativas</span>
                        <span className="dashboard-turma-hint">
                            Em andamento no momento
                        </span>
                    </div>

                    <div className="dashboard-turma-card dashboard-turma-finalizada">
                        <div className="dashboard-turma-icon">
                            <FaCheckCircle />
                        </div>
                        <span className="dashboard-turma-value">{turmasFinalizadas.length}</span>
                        <span className="dashboard-turma-label">Turmas Concluídas</span>
                        <span className="dashboard-turma-hint">
                            Aulas já finalizadas
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
}
