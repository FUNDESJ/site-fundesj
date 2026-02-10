import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUsers, FaEdit, FaTrash, FaList, FaSearch, FaPlus, FaCalendarAlt, FaMapMarkerAlt, FaClock, FaGraduationCap, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import './idbasico.css';
import DeletarInscrito from './Modal/ModalDeletarInscrito';

export default function IdBasico() {
    const [inscritos, setInscritos] = useState([]);
    const [turmasAtivas, setTurmasAtivas] = useState([]);
    const [turmasFinalizadas, setTurmasFinalizadas] = useState([]);
    const [novaTurma, setNovaTurma] = useState({
        nome: '',
        local: '',
        periodo: '',
        dias: '',
        dataInicio: '',
    });
    const [carregandoInscritos, setCarregandoInscritos] = useState(true);
    const [erroInscritos, setErroInscritos] = useState(null);
    const [activeTab, setActiveTab] = useState('inscritos');
    const [busca, setBusca] = useState('');
    const [filtroLocal, setFiltroLocal] = useState('todos');
    const [mostrarFormTurma, setMostrarFormTurma] = useState(false);
    const [inscritoSelecionado, setInscritoSelecionado] = useState(null);
    const [openModalDeletar, setOpenModalDeletar] = useState(false);

    useEffect(() => {
        carregarInscritos();
        listarTurmasAtivas();
        listarTurmasFinalizadas();
    }, []);

    async function carregarInscritos() {
        try {
            const token = localStorage.getItem('authToken');
            setCarregandoInscritos(true);
            setErroInscritos(null);
            const retorno = await axios.get('https://back-end-fundesj.onrender.com/inscritosId/ordenados', {
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

    async function listarTurmasAtivas() {
        try {
            const token = localStorage.getItem('authToken');
            const turmasAtivas = await axios.get('https://back-end-fundesj.onrender.com/turmaId/turmas/Ativa', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setTurmasAtivas(turmasAtivas.data);
        } catch (erro) {
            console.log(erro);
        }
    }

    async function listarTurmasFinalizadas() {
        try {
            const token = localStorage.getItem('authToken');
            const turmasAnteriores = await axios.get('https://back-end-fundesj.onrender.com/turmaId/turmas/Finalizada', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setTurmasFinalizadas(turmasAnteriores.data);
        } catch (erro) {
            console.log(erro);
        }
    }

    async function criarTurma(e) {
        e.preventDefault();
        try {
            const token = localStorage.getItem('authToken');
            if (!novaTurma.nome || !novaTurma.local || !novaTurma.periodo || !novaTurma.dias || !novaTurma.dataInicio) {
                alert("Complete todos os campos corretamente");
                return;
            }

            await axios.post('https://back-end-fundesj.onrender.com/turmaId/criar', novaTurma, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            alert('Turma criada com sucesso!');
            setNovaTurma({
                nome: '',
                local: '',
                periodo: '',
                dias: '',
                dataInicio: '',
            });
            setMostrarFormTurma(false);
            listarTurmasAtivas();
        } catch (erro) {
            console.log(erro);
            alert('Erro ao criar turma');
        }
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setNovaTurma(prev => ({
            ...prev,
            [name]: value
        }));
    }

    // Função para abrir modal de deletar
    function abrirModalDeletar(inscrito) {
        setInscritoSelecionado(inscrito);
        setOpenModalDeletar(true);
    }

    // Função para fechar modal
    function fecharModalDeletar() {
        setOpenModalDeletar(false);
        setInscritoSelecionado(null);
    }

    // Função para recarregar a lista de inscritos após deletar
    function recarregarListaInscritos() {
        carregarInscritos();
    }

    const inscritosFiltrados = inscritos.filter(inscrito => {
        const correspondeBusca = inscrito.nome.toLowerCase().includes(busca.toLowerCase()) ||
            inscrito.celular.includes(busca);
        const correspondeLocal = filtroLocal === 'todos' || inscrito.local === filtroLocal;
        return correspondeBusca && correspondeLocal;
    });

    const locaisDisponiveis = [...new Set(inscritos.map(i => i.local))];

    return (
        <div className="idbasico-container">
            <header className="idbasico-header">
                <div className="header-content">
                    <div className="header-title">
                        <FaUsers className="header-icon" />
                        <h1>Gerenciamento - Curso de Inclusão Digital</h1>
                    </div>
                    <p className="idbasico-subtitle">
                        Gerencie inscritos, turmas e acompanhe o progresso do curso
                    </p>
                </div>
            </header>

            <main className="idbasico-main">
                <div className="tabs-container">
                    <div className="tabs">
                        <button
                            className={`tab ${activeTab === 'inscritos' ? 'active' : ''}`}
                            onClick={() => setActiveTab('inscritos')}
                        >
                            <FaUsers /> Inscritos
                            <span className="tab-count">{inscritos.length}</span>
                        </button>
                        <button
                            className={`tab ${activeTab === 'turmas' ? 'active' : ''}`}
                            onClick={() => setActiveTab('turmas')}
                        >
                            <FaGraduationCap /> Turmas Ativas
                            <span className="tab-count">{turmasAtivas.length}</span>
                        </button>
                        <button
                            className={`tab ${activeTab === 'anteriores' ? 'active' : ''}`}
                            onClick={() => setActiveTab('anteriores')}
                        >
                            <FaCalendarAlt /> Turmas Anteriores
                            <span className="tab-count">{turmasFinalizadas.length}</span>
                        </button>
                    </div>

                    <div className="tab-content">
                        {activeTab === 'inscritos' && (
                            <div className="content-card">
                                <div className="card-header">
                                    <h3>
                                        <FaList /> Lista de Inscritos
                                    </h3>
                                    <div className="header-actions">
                                        <div className="search-container">
                                            <FaSearch className="search-icon" />
                                            <input
                                                type="text"
                                                placeholder="Buscar por nome ou telefone..."
                                                value={busca}
                                                onChange={(e) => setBusca(e.target.value)}
                                                className="search-input"
                                            />
                                        </div>
                                        <select
                                            value={filtroLocal}
                                            onChange={(e) => setFiltroLocal(e.target.value)}
                                            className="filter-select"
                                        >
                                            <option value="todos">Todos os locais</option>
                                            {locaisDisponiveis.map((local, index) => (
                                                <option key={index} value={local}>{local}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {carregandoInscritos ? (
                                    <div className="loading-container">
                                        <div className="loading-spinner"></div>
                                        <p>Carregando lista de inscritos...</p>
                                    </div>
                                ) : erroInscritos ? (
                                    <div className="error-container">
                                        <div className="error-icon">!</div>
                                        <p className="error-message">{erroInscritos}</p>
                                        <button className="retry-button" onClick={carregarInscritos}>
                                            <FaSearch /> Tentar Novamente
                                        </button>
                                    </div>
                                ) : inscritosFiltrados.length === 0 ? (
                                    <div className="empty-state">
                                        <div className="empty-icon"><FaUsers /></div>
                                        <h3>Nenhum inscrito encontrado</h3>
                                        <p>
                                            {busca || filtroLocal !== 'todos' 
                                                ? 'Tente ajustar os filtros de busca.' 
                                                : 'Não há inscrições para o curso de Inclusão Digital no momento.'}
                                        </p>
                                    </div>
                                ) : (
                                    <div className="table-container">
                                        <div className="table-info">
                                            <span className="info-count">
                                                Mostrando {inscritosFiltrados.length} de {inscritos.length} inscritos
                                            </span>
                                        </div>
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
                                                {inscritosFiltrados.map((inscrito, index) => (
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
                                                                    {inscrito.primeira_vez ? 
                                                                        <><FaCheckCircle /> Sim</> : 
                                                                        <><FaTimesCircle /> Não</>
                                                                    }
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="local-cell">
                                                                <FaMapMarkerAlt className="local-icon" />
                                                                <span className="local-text">{inscrito.local}</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="periodo-cell">
                                                                <FaClock className="periodo-icon" />
                                                                <span className="periodo-text">{inscrito.periodo}</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="dias-cell">
                                                                <span className="dias-text">{inscrito.dias}</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="acoes-cell">
                                                                <button className="acao-btn editar-btn" title="Editar">
                                                                    <FaEdit className="acao-icon" />
                                                                    <span>Editar</span>
                                                                </button>
                                                                <button 
                                                                    className="acao-btn excluir-btn" 
                                                                    title="Excluir"
                                                                    onClick={() => abrirModalDeletar(inscrito)}
                                                                >
                                                                    <FaTrash className="acao-icon" />
                                                                    <span>Excluir</span>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === 'turmas' && (
                            <div className="content-card">
                                <div className="card-header">
                                    <h3><FaGraduationCap /> Turmas Ativas</h3>
                                    <button 
                                        className="btn-nova-turma"
                                        onClick={() => setMostrarFormTurma(!mostrarFormTurma)}
                                    >
                                        <FaPlus /> Nova Turma
                                    </button>
                                </div>

                                {mostrarFormTurma && (
                                    <div className="form-turma-container">
                                        <form onSubmit={criarTurma} className="form-turma">
                                            <h4><FaPlus /> Criar Nova Turma</h4>
                                            <div className="form-grid">
                                                <div className="form-group">
                                                    <label>Nome da Turma *</label>
                                                    <input
                                                        type="text"
                                                        name="nome"
                                                        value={novaTurma.nome}
                                                        onChange={handleInputChange}
                                                        placeholder="Ex: Turma 01 - Manhã"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Local *</label>
                                                    <select
                                                        name="local"
                                                        value={novaTurma.local}
                                                        onChange={handleInputChange}
                                                        required
                                                    >
                                                        <option value="">Selecione</option>
                                                        <option value="CATI">CATI</option>
                                                        <option value="Estácio">Estácio</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label>Período *</label>
                                                    <select
                                                        name="periodo"
                                                        value={novaTurma.periodo}
                                                        onChange={handleInputChange}
                                                        required
                                                    >
                                                        <option value="">Selecione</option>
                                                        <option value="Matutino">Matutino</option>
                                                        <option value="Vespertino">Vespertino</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label>Dias da Semana *</label>
                                                    <select
                                                        name="dias"
                                                        value={novaTurma.dias}
                                                        onChange={handleInputChange}
                                                        required
                                                    >
                                                        <option value="">Selecione</option>
                                                        <option value="Segunda e Quarta">Segunda e Quarta</option>
                                                        <option value="Terça e Quinta">Terça e Quinta</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label>Data de Início *</label>
                                                    <input
                                                        type="date"
                                                        name="dataInicio"
                                                        value={novaTurma.dataInicio}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-actions">
                                                <button type="button" className="btn-cancelar" onClick={() => setMostrarFormTurma(false)}>
                                                    Cancelar
                                                </button>
                                                <button type="submit" className="btn-salvar">
                                                    <FaPlus /> Criar Turma
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                )}

                                {turmasAtivas.length === 0 ? (
                                    <div className="empty-state">
                                        <div className="empty-icon"><FaGraduationCap /></div>
                                        <h3>Nenhuma turma ativa</h3>
                                        <p>Crie uma nova turma para começar as aulas.</p>
                                    </div>
                                ) : (
                                    <div className="turmas-grid">
                                        {turmasAtivas.map((turma, index) => (
                                            <div key={index} className="turma-card">
                                                <div className="turma-header">
                                                    <h4>{turma.nome}</h4>
                                                    <span className="turma-status ativa">Ativa</span>
                                                </div>
                                                <div className="turma-info">
                                                    <div className="info-item">
                                                        <FaMapMarkerAlt />
                                                        <span>{turma.local}</span>
                                                    </div>
                                                    <div className="info-item">
                                                        <FaClock />
                                                        <span>{turma.periodo}</span>
                                                    </div>
                                                    <div className="info-item">
                                                        <FaCalendarAlt />
                                                        <span>{turma.dias}</span>
                                                    </div>
                                                    <div className="info-item">
                                                        <FaUsers />
                                                        <span>0 alunos</span>
                                                    </div>
                                                </div>
                                                <div className="turma-actions">
                                                    <button className="btn-detalhes">Ver Detalhes</button>
                                                    <button className="btn-finalizar">Finalizar Turma</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === 'anteriores' && (
                            <div className="content-card">
                                <div className="card-header">
                                    <h3><FaCalendarAlt /> Turmas Anteriores</h3>
                                </div>

                                {turmasFinalizadas.length === 0 ? (
                                    <div className="empty-state">
                                        <div className="empty-icon"><FaCalendarAlt /></div>
                                        <h3>Nenhuma turma finalizada</h3>
                                        <p>As turmas finalizadas aparecerão aqui.</p>
                                    </div>
                                ) : (
                                    <div className="turmas-grid">
                                        {turmasFinalizadas.map((turma, index) => (
                                            <div key={index} className="turma-card finalizada">
                                                <div className="turma-header">
                                                    <h4>{turma.nome}</h4>
                                                    <span className="turma-status finalizada">Finalizada</span>
                                                </div>
                                                <div className="turma-info">
                                                    <div className="info-item">
                                                        <FaMapMarkerAlt />
                                                        <span>{turma.local}</span>
                                                    </div>
                                                    <div className="info-item">
                                                        <FaClock />
                                                        <span>{turma.periodo}</span>
                                                    </div>
                                                    <div className="info-item">
                                                        <FaCalendarAlt />
                                                        <span>{turma.dias}</span>
                                                    </div>
                                                    <div className="info-item">
                                                        <FaUsers />
                                                        <span>0 alunos</span>
                                                    </div>
                                                </div>
                                                <div className="turma-actions">
                                                    <button className="btn-detalhes">Ver Histórico</button>
                                                    <button className="btn-reabrir">Reabrir Turma</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
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
                    <span className="footer-count"> | Turmas Ativas: {turmasAtivas.length}</span>
                </p>
            </footer>

            {/* Modal de deletar inscrito - Agora dentro do componente principal */}
            <DeletarInscrito
                isOpen={openModalDeletar}
                onClose={fecharModalDeletar}
                inscrito={inscritoSelecionado}
                recarregarLista={recarregarListaInscritos}
            />
        </div>
    );
}