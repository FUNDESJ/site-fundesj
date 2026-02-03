import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaPlus, FaSearch, FaExternalLinkAlt, FaUsers, FaChalkboardTeacher, FaHistory, FaList } from 'react-icons/fa';
import './idbasico.css';

export default function IdBasico() {
    const [inscritos, setInscritos] = useState([]);
    const [turmasAtuais, setTurmasAtuais] = useState([]);
    const [turmasAnteriores, setTurmasAnteriores] = useState([]);
    const [carregandoInscritos, setCarregandoInscritos] = useState(true);
    const [carregandoTurmasAtuais, setCarregandoTurmasAtuais] = useState(false);
    const [carregandoTurmasAnteriores, setCarregandoTurmasAnteriores] = useState(false);
    const [erroInscritos, setErroInscritos] = useState(null);
    const [erroTurmasAtuais, setErroTurmasAtuais] = useState(null);
    const [erroTurmasAnteriores, setErroTurmasAnteriores] = useState(null);
    const [activeTab, setActiveTab] = useState('inscritos');

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        
        // Carregar inscritos
        async function carregarInscritos() {
            try {
                setCarregandoInscritos(true);
                setErroInscritos(null);
                const retorno = await axios.get('https://back-end-fundesj.onrender.com/idbasico/ordenados', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setInscritos(retorno.data);
            } catch (erro) {
                console.log("Erro na requisição: ", erro);
                setErroInscritos('Não foi possível carregar a lista de inscritos. Tente novamente mais tarde.');
            } finally {
                setCarregandoInscritos(false);
            }
        }

        // Carregar turmas atuais (dados mock - substituir com API real)
        async function carregarTurmasAtuais() {
            try {
                setCarregandoTurmasAtuais(true);
                setErroTurmasAtuais(null);
                // Dados mock temporários
                setTimeout(() => {
                    setTurmasAtuais([
                        { id: 1, nome: 'Turma Matutina - Centro', professor: 'João Silva', alunos: 15, dataInicio: '2024-01-15', status: 'ativa' },
                        { id: 2, nome: 'Turma Vespertina - Zona Norte', professor: 'Maria Santos', alunos: 12, dataInicio: '2024-02-01', status: 'ativa' },
                        { id: 3, nome: 'Turma Noturna - Zona Sul', professor: 'Carlos Oliveira', alunos: 18, dataInicio: '2024-01-20', status: 'ativa' },
                    ]);
                    setCarregandoTurmasAtuais(false);
                }, 500);
            } catch (erro) {
                console.log("Erro ao carregar turmas atuais: ", erro);
                setErroTurmasAtuais('Não foi possível carregar as turmas atuais.');
                setCarregandoTurmasAtuais(false);
            }
        }

        // Carregar turmas anteriores (dados mock - substituir com API real)
        async function carregarTurmasAnteriores() {
            try {
                setCarregandoTurmasAnteriores(true);
                setErroTurmasAnteriores(null);
                // Dados mock temporários
                setTimeout(() => {
                    setTurmasAnteriores([
                        { id: 1, nome: 'Turma 2023/2', professor: 'Ana Costa', alunos: 20, dataInicio: '2023-08-01', dataFim: '2023-12-15', status: 'concluída' },
                        { id: 2, nome: 'Turma 2023/1', professor: 'Pedro Alves', alunos: 25, dataInicio: '2023-02-01', dataFim: '2023-06-30', status: 'concluída' },
                        { id: 3, nome: 'Turma 2022/2', professor: 'Juliana Lima', alunos: 18, dataInicio: '2022-08-01', dataFim: '2022-12-20', status: 'concluída' },
                    ]);
                    setCarregandoTurmasAnteriores(false);
                }, 500);
            } catch (erro) {
                console.log("Erro ao carregar turmas anteriores: ", erro);
                setErroTurmasAnteriores('Não foi possível carregar as turmas anteriores.');
                setCarregandoTurmasAnteriores(false);
            }
        }

        carregarInscritos();
        carregarTurmasAtuais();
        carregarTurmasAnteriores();
    }, []);

    // Função para recarregar inscritos
    const recarregarInscritos = async () => {
        const token = localStorage.getItem('authToken');
        try {
            setCarregandoInscritos(true);
            setErroInscritos(null);
            const retorno = await axios.get('https://back-end-fundesj.onrender.com/idbasico/ordenados', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setInscritos(retorno.data);
        } catch (erro) {
            console.log("Erro na requisição: ", erro);
            setErroInscritos('Não foi possível carregar a lista de inscritos. Tente novamente mais tarde.');
        } finally {
            setCarregandoInscritos(false);
        }
    };

    // Função para recarregar turmas atuais
    const recarregarTurmasAtuais = async () => {
        const token = localStorage.getItem('authToken');
        try {
            setCarregandoTurmasAtuais(true);
            setErroTurmasAtuais(null);
            console.log('Recarregando turmas atuais...');
            setTimeout(() => {
                setCarregandoTurmasAtuais(false);
            }, 500);
        } catch (erro) {
            console.log("Erro ao recarregar turmas atuais: ", erro);
            setErroTurmasAtuais('Não foi possível recarregar as turmas atuais.');
            setCarregandoTurmasAtuais(false);
        }
    };

    // Função para recarregar turmas anteriores
    const recarregarTurmasAnteriores = async () => {
        const token = localStorage.getItem('authToken');
        try {
            setCarregandoTurmasAnteriores(true);
            setErroTurmasAnteriores(null);
            console.log('Recarregando turmas anteriores...');
            setTimeout(() => {
                setCarregandoTurmasAnteriores(false);
            }, 500);
        } catch (erro) {
            console.log("Erro ao recarregar turmas anteriores: ", erro);
            setErroTurmasAnteriores('Não foi possível recarregar as turmas anteriores.');
            setCarregandoTurmasAnteriores(false);
        }
    };

    return (
        <div className="idbasico-container">
            <header className="idbasico-header">
                <h1>
                    <FaUsers /> Gerenciamento - Curso de Inclusão Digital
                </h1>
                <p className="idbasico-subtitle">
                    Gerencie inscritos, turmas ativas, crie novas turmas e visualize o histórico.
                </p>
            </header>

            <main className="idbasico-main">
                <div className="tabs-container">
                    <div className="tabs">
                        <button
                            className={`tab ${activeTab === 'inscritos' ? 'active' : ''}`}
                            onClick={() => setActiveTab('inscritos')}
                        >
                            <FaUsers /> Inscritos
                        </button>
                        <button
                            className={`tab ${activeTab === 'turmas-atuais' ? 'active' : ''}`}
                            onClick={() => setActiveTab('turmas-atuais')}
                        >
                            <FaChalkboardTeacher /> Turmas Atuais
                        </button>
                        <button
                            className={`tab ${activeTab === 'criar-turmas' ? 'active' : ''}`}
                            onClick={() => setActiveTab('criar-turmas')}
                        >
                            <FaPlus /> Criar Turmas
                        </button>
                        <button
                            className={`tab ${activeTab === 'turmas-anteriores' ? 'active' : ''}`}
                            onClick={() => setActiveTab('turmas-anteriores')}
                        >
                            <FaHistory /> Turmas Anteriores
                        </button>
                    </div>

                    <div className="tab-content animate-fade-in">
                        {/* Aba Inscritos */}
                        {activeTab === 'inscritos' && (
                            <div className="content-card">
                                {carregandoInscritos ? (
                                    <div className="loading-container">
                                        <div className="loading-spinner"></div>
                                        <p>Carregando lista de inscritos...</p>
                                    </div>
                                ) : erroInscritos ? (
                                    <div className="error-container">
                                        <div className="error-icon">!</div>
                                        <p className="error-message">{erroInscritos}</p>
                                        <button className="retry-button" onClick={recarregarInscritos}>
                                            <FaSearch /> Tentar Novamente
                                        </button>
                                    </div>
                                ) : inscritos.length === 0 ? (
                                    <div className="empty-state">
                                        <div className="empty-icon"><FaUsers /></div>
                                        <h3>Nenhum inscrito encontrado</h3>
                                        <p>Não há inscrições para o curso de Inclusão Digital no momento.</p>
                                        <button className="retry-button" style={{ marginTop: '20px' }}>
                                            <FaPlus /> Adicionar Primeiro Inscrito
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <div className="table-header" style={{ marginBottom: '20px' }}>
                                            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2c3e50' }}>
                                                <FaList /> Lista de Inscritos
                                                <span style={{ fontSize: '0.9rem', backgroundColor: '#3498db', color: 'white', padding: '5px 12px', borderRadius: '20px' }}>
                                                    {inscritos.length} inscritos
                                                </span>
                                            </h3>
                                        </div>

                                        <div className="table-container">
                                            <table className="inscritos-table">
                                                <thead>
                                                    <tr>
                                                        <th>Nome</th>
                                                        <th>Telefone</th>
                                                        <th>Primeira Vez?</th>
                                                        <th>Local</th>
                                                        <th>Período</th>
                                                        <th>Dias</th>
                                                        <th>Ações</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {inscritos.map((inscrito, index) => (
                                                        <tr key={index}>
                                                            <td>
                                                                <div className="nome-cell">
                                                                    <span className="nome-text">{inscrito.nome}</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="telefone-cell">
                                                                    <span className="telefone-text">{inscrito.celular}</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className={`primeira-vez-cell ${inscrito.primeira_vez ? 'sim' : 'nao'}`}>
                                                                    <span className="primeira-vez-badge">
                                                                        {inscrito.primeira_vez ? 'Sim' : 'Não'}
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="local-cell">
                                                                    <span className="local-text">{inscrito.local}</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="periodo-cell">
                                                                    <span className="periodo-text">{inscrito.periodo}</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="periodo-cell">
                                                                    <span className="periodo-text">{inscrito.dias}</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="acoes-cell">
                                                                    <button className="acao-btn editar-btn" title="Editar">
                                                                        <FaEdit className="acao-icon" />
                                                                    </button>
                                                                    <button className="acao-btn excluir-btn" title="Excluir">
                                                                        <FaTrash className="acao-icon" />
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </>
                                )}
                            </div>
                        )}

                        {/* Aba Turmas Atuais */}
                        {activeTab === 'turmas-atuais' && (
                            <div className="content-card">
                                {carregandoTurmasAtuais ? (
                                    <div className="loading-container">
                                        <div className="loading-spinner"></div>
                                        <p>Carregando turmas atuais...</p>
                                    </div>
                                ) : erroTurmasAtuais ? (
                                    <div className="error-container">
                                        <div className="error-icon">!</div>
                                        <p className="error-message">{erroTurmasAtuais}</p>
                                        <button className="retry-button" onClick={recarregarTurmasAtuais}>
                                            <FaSearch /> Tentar Novamente
                                        </button>
                                    </div>
                                ) : turmasAtuais.length === 0 ? (
                                    <div className="empty-state">
                                        <div className="empty-icon"><FaChalkboardTeacher /></div>
                                        <h3>Nenhuma turma ativa no momento</h3>
                                        <p>Não há turmas em andamento para o curso de Inclusão Digital.</p>
                                        <button 
                                            className="retry-button" 
                                            style={{ marginTop: '20px' }}
                                            onClick={() => setActiveTab('criar-turmas')}
                                        >
                                            <FaPlus /> Criar Nova Turma
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <div className="table-header" style={{ marginBottom: '20px' }}>
                                            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2c3e50' }}>
                                                <FaChalkboardTeacher /> Turmas Atuais
                                                <span style={{ fontSize: '0.9rem', backgroundColor: '#27ae60', color: 'white', padding: '5px 12px', borderRadius: '20px' }}>
                                                    {turmasAtuais.length} turmas ativas
                                                </span>
                                            </h3>
                                        </div>

                                        <div className="table-container">
                                            <table className="inscritos-table">
                                                <thead>
                                                    <tr>
                                                        <th>Nome da Turma</th>
                                                        <th>Professor</th>
                                                        <th>Alunos</th>
                                                        <th>Data de Início</th>
                                                        <th>Status</th>
                                                        <th>Ações</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {turmasAtuais.map((turma) => (
                                                        <tr key={turma.id}>
                                                            <td>
                                                                <div className="nome-cell">
                                                                    <span className="nome-text">{turma.nome}</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="telefone-cell">
                                                                    <span className="telefone-text">{turma.professor}</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="periodo-cell">
                                                                    <span className="periodo-text">{turma.alunos} alunos</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="local-cell">
                                                                    <span className="local-text">{new Date(turma.dataInicio).toLocaleDateString('pt-BR')}</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="primeira-vez-cell sim">
                                                                    <span className="primeira-vez-badge">Ativa</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="acoes-cell">
                                                                    <button className="acao-btn editar-btn" title="Ver Detalhes">
                                                                        <FaExternalLinkAlt className="acao-icon" />
                                                                    </button>
                                                                    <button className="acao-btn editar-btn" title="Editar">
                                                                        <FaEdit className="acao-icon" />
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </>
                                )}
                            </div>
                        )}

                        {/* Aba Criar Turmas (vazia) */}
                        {activeTab === 'criar-turmas' && (
                            <div className="content-card">
                                <div className="empty-state">
                                    <div className="empty-icon"><FaPlus /></div>
                                    <h3>Criar Nova Turma</h3>
                                    <p>Em breve você poderá criar novas turmas aqui.</p>
                                    <p style={{ marginTop: '10px', color: '#7f8c8d' }}>
                                        Esta funcionalidade está em desenvolvimento.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Aba Turmas Anteriores */}
                        {activeTab === 'turmas-anteriores' && (
                            <div className="content-card">
                                {carregandoTurmasAnteriores ? (
                                    <div className="loading-container">
                                        <div className="loading-spinner"></div>
                                        <p>Carregando turmas anteriores...</p>
                                    </div>
                                ) : erroTurmasAnteriores ? (
                                    <div className="error-container">
                                        <div className="error-icon">!</div>
                                        <p className="error-message">{erroTurmasAnteriores}</p>
                                        <button className="retry-button" onClick={recarregarTurmasAnteriores}>
                                            <FaSearch /> Tentar Novamente
                                        </button>
                                    </div>
                                ) : turmasAnteriores.length === 0 ? (
                                    <div className="empty-state">
                                        <div className="empty-icon"><FaHistory /></div>
                                        <h3>Nenhuma turma anterior registrada</h3>
                                        <p>Não há histórico de turmas concluídas para o curso de Inclusão Digital.</p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="table-header" style={{ marginBottom: '20px' }}>
                                            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2c3e50' }}>
                                                <FaHistory /> Turmas Anteriores
                                                <span style={{ fontSize: '0.9rem', backgroundColor: '#7f8c8d', color: 'white', padding: '5px 12px', borderRadius: '20px' }}>
                                                    {turmasAnteriores.length} turmas concluídas
                                                </span>
                                            </h3>
                                        </div>

                                        <div className="table-container">
                                            <table className="inscritos-table">
                                                <thead>
                                                    <tr>
                                                        <th>Nome da Turma</th>
                                                        <th>Professor</th>
                                                        <th>Alunos</th>
                                                        <th>Período</th>
                                                        <th>Status</th>
                                                        <th>Ações</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {turmasAnteriores.map((turma) => (
                                                        <tr key={turma.id}>
                                                            <td>
                                                                <div className="nome-cell">
                                                                    <span className="nome-text">{turma.nome}</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="telefone-cell">
                                                                    <span className="telefone-text">{turma.professor}</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="periodo-cell">
                                                                    <span className="periodo-text">{turma.alunos} alunos</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="local-cell">
                                                                    <span className="local-text">
                                                                        {new Date(turma.dataInicio).toLocaleDateString('pt-BR')} - {new Date(turma.dataFim).toLocaleDateString('pt-BR')}
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="primeira-vez-cell nao">
                                                                    <span className="primeira-vez-badge">Concluída</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="acoes-cell">
                                                                    <button className="acao-btn editar-btn" title="Ver Histórico">
                                                                        <FaExternalLinkAlt className="acao-icon" />
                                                                    </button>
                                                                    <button className="acao-btn editar-btn" title="Relatório">
                                                                        <FaSearch className="acao-icon" />
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>

            </main>

            <footer className="idbasico-footer">
                <p>
                    Sistema de Gerenciamento - Curso de Inclusão Digital
                    <span className="footer-count"> | Total de Inscritos: {inscritos.length}</span>
                    <span className="footer-count"> | Turmas Ativas: {turmasAtuais.length}</span>
                    <span className="footer-count"> | Turmas Concluídas: {turmasAnteriores.length}</span>
                </p>
            </footer>
        </div>
    );
}