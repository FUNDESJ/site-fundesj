import { useState, useEffect } from 'react';
import axios from 'axios';
import {
    FaUsers, FaEdit, FaTrash, FaList, FaSearch, FaPlus,
    FaCalendarAlt, FaMapMarkerAlt, FaClock, FaGraduationCap,
    FaCheckCircle, FaTimesCircle, FaSpinner, FaSyncAlt
} from 'react-icons/fa';
import './idbasico.css';
import DeletarInscrito from './Modal/ModalDeletarInscrito';
import ModalTurmaPendente from './Modal/ModalTurmaPendente';
import ModalTurmaAtiva from './Modal/ModalTurmaAtiva';

export default function IdBasico() {
    const [inscritos, setInscritos] = useState([]);
    const [turmasAtivas, setTurmasAtivas] = useState([]);
    const [turmasFinalizadas, setTurmasFinalizadas] = useState([]);
    const [turmasPendentes, setTurmasPendentes] = useState([]);
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
    const [modalTurmaPendenteAberto, setModalTurmaPendenteAberto] = useState(false);
    const [modalTurmaAtivaAberto, setModalTurmaAtivaAberto] = useState(false);
    const [turmaAtivaSelecionada, setTurmaAtivaSelecionada] = useState(null);
    const [turmaSelecionada, setTurmaSelecionada] = useState(null);
    const [ativandoTurma, setAtivandoTurma] = useState(null);
    const [sincronizando, setSincronizando] = useState(false);
    const [mensagemAnimacao, setMensagemAnimacao] = useState({ mostrar: false, texto: '', tipo: '' });

    useEffect(() => {
        carregarInscritos();
        listarTurmasAtivas();
        listarTurmasFinalizadas();
        listarTurmasPendentes();
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
            const response = await axios.get('https://back-end-fundesj.onrender.com/turmaId/turmas/Ativa', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.data && Array.isArray(response.data.turmas)) {
                setTurmasAtivas(response.data.turmas);
            } else {
                setTurmasAtivas([]);
            }
        } catch (erro) {
            console.log(erro);
            setTurmasAtivas([]);
        }
    }

    async function listarTurmasPendentes() {
        try {
            const token = localStorage.getItem('authToken');
            const response = await axios.get('https://back-end-fundesj.onrender.com/turmaId/turmas/Pendente', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.data && Array.isArray(response.data.turmas)) {
                setTurmasPendentes(response.data.turmas);
            } else {
                console.log('Estrutura de dados inesperada:', response.data);
                setTurmasPendentes([]);
            }
        } catch (erro) {
            console.log(erro);
            setTurmasPendentes([]);
        }
    }

    async function listarTurmasFinalizadas() {
        try {
            const token = localStorage.getItem('authToken');
            const response = await axios.get('https://back-end-fundesj.onrender.com/turmaId/turmas/Finalizada', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.data && Array.isArray(response.data.turmas)) {
                setTurmasFinalizadas(response.data.turmas);
            } else {
                setTurmasFinalizadas([]);
            }
        } catch (erro) {
            console.log(erro);
            setTurmasFinalizadas([]);
        }
    }

    async function criarTurma(e) {
        e.preventDefault();

        try {
            const token = localStorage.getItem('authToken');

            if (!novaTurma.nome || !novaTurma.local || !novaTurma.periodo || !novaTurma.dias || !novaTurma.dataInicio) {
                mostrarMensagem("Complete todos os campos corretamente", "erro");
                return;
            }

            await axios.post('https://back-end-fundesj.onrender.com/turmaId/criar', novaTurma, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            mostrarMensagem("Turma criada com sucesso!", "sucesso");
            setNovaTurma({
                nome: '',
                local: '',
                periodo: '',
                dias: '',
                dataInicio: '',
            });
            setMostrarFormTurma(false);
            listarTurmasPendentes();
        } catch (erro) {
            console.log(erro);
            mostrarMensagem("Erro ao criar turma", "erro");
        }
    }

    async function ativarTurma(turmaId) {
        try {
            setAtivandoTurma(turmaId);
            const token = localStorage.getItem('authToken');

            await axios.put(
                `https://back-end-fundesj.onrender.com/turmaId/editar/${turmaId}`,
                { status: "Ativa" },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            mostrarMensagem("Turma ativada com sucesso!", "sucesso");

            await listarTurmasPendentes();
            await listarTurmasAtivas();
        } catch (erro) {
            console.log("Erro ao ativar turma", erro);
            mostrarMensagem("Erro ao ativar turma", "erro");
        } finally {
            setAtivandoTurma(null);
        }
    }

    async function sincronizarPlanilha() {
        try {
            setSincronizando(true);
            mostrarMensagem("Sincronizando com a planilha...", "info");

            await axios.post('https://back-end-fundesj.onrender.com/sheets/sync');

            mostrarMensagem("Planilha sincronizada com sucesso!", "sucesso");

            await carregarInscritos();
        } catch (erro) {
            console.log("Erro ao sincronizar com a planilha", erro);
            mostrarMensagem("Erro ao sincronizar com a planilha", "erro");
        } finally {
            setSincronizando(false);
        }
    }

    function mostrarMensagem(texto, tipo) {
        setMensagemAnimacao({ mostrar: true, texto, tipo });

        setTimeout(() => {
            setMensagemAnimacao({ mostrar: false, texto: '', tipo: '' });
        }, 3000);
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setNovaTurma(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function abrirModalDeletar(inscrito) {
        setInscritoSelecionado(inscrito);
        setOpenModalDeletar(true);
    }

    function fecharModalDeletar() {
        setOpenModalDeletar(false);
        setInscritoSelecionado(null);
    }

    function abrirModalTurmaPendente(turma) {
        setTurmaSelecionada(turma);
        setModalTurmaPendenteAberto(true);
    }

    function fecharModalTurmaPendente() {
        setModalTurmaPendenteAberto(false);
        setTurmaSelecionada(null);
    }

    function recarregarListaInscritos() {
        carregarInscritos();
    }

    function abrirModalTurmaAtiva(turma) {
        setTurmaAtivaSelecionada(turma);
        setModalTurmaAtivaAberto(true);
    }

    function fecharModalTurmaAtiva() {
        setModalTurmaAtivaAberto(false);
        setTurmaAtivaSelecionada(null);
    }

    async function recarregarTurmas() {
        await listarTurmasAtivas();
        await listarTurmasPendentes();
        await listarTurmasFinalizadas();
    }

    function normalizarSituacao(situacao) {
        return (situacao || '').toString().trim().toLowerCase();
    }

    function getLinhaClassName(inscrito) {
        const situacao = normalizarSituacao(inscrito.Situacao);

        if (situacao === 'desistente') return 'idbasico-linha-desistente';
        if (situacao === 'aprovado') return 'idbasico-linha-aprovado';
        if (inscrito.foiChamado && situacao !== "desistente") return 'idbasico-linha-chamado';

        return '';
    }

    function getTextoSituacao(inscrito) {
        const situacao = normalizarSituacao(inscrito.Situacao);

        if (situacao === 'desistente') return 'Desistente';
        if (situacao === 'aprovado') return 'Aprovado';
        if (inscrito.foiChamado) return 'Já chamado';

        return inscrito.Situacao || 'Matriculado';
    }

    const inscritosFiltrados = inscritos.filter(inscrito => {
        const correspondeBusca =
            inscrito.nome?.toLowerCase().includes(busca.toLowerCase()) ||
            inscrito.celular?.includes(busca);

        const correspondeLocal = filtroLocal === 'todos' || inscrito.local === filtroLocal;

        return correspondeBusca && correspondeLocal;
    });

    const locaisDisponiveis = [...new Set(inscritos.map(i => i.local))];

    return (
        <div className="idbasico-container">
            {mensagemAnimacao.mostrar && (
                <div className={`mensagem-animacao ${mensagemAnimacao.tipo}`}>
                    {mensagemAnimacao.tipo === 'sucesso' && <FaCheckCircle />}
                    {mensagemAnimacao.tipo === 'erro' && <FaTimesCircle />}
                    {mensagemAnimacao.tipo === 'info' && <FaSyncAlt className="rotating" />}
                    <span>{mensagemAnimacao.texto}</span>
                </div>
            )}

            <header className="idbasico-header">
                <div className="header-content">
                    <div className="header-title">
                        <FaUsers className="header-icon" />
                        <h1>Gerenciamento - Curso de Inclusão Digital</h1>
                    </div>
                    <p className="idbasico-subtitle">
                        Gerencie inscritos, turmas e acompanhe o progresso do curso
                    </p>
                    <button
                        className={`btn-sincronizar ${sincronizando ? 'sincronizando' : ''}`}
                        onClick={sincronizarPlanilha}
                        disabled={sincronizando}
                    >
                        <FaSyncAlt className={`sync-icon ${sincronizando ? 'rotating' : ''}`} />
                        {sincronizando ? 'Sincronizando...' : 'Sincronizar dados com a planilha'}
                    </button>
                </div>
            </header>

            <main className="idbasico-main">
                <div className="idbasico-tabs-container">
                    <div className="idbasico-tabs">
                        <button
                            className={`idbasico-tab ${activeTab === 'inscritos' ? 'active' : ''}`}
                            onClick={() => setActiveTab('inscritos')}
                        >
                            <FaUsers /> Inscritos
                            <span className="idbasico-tab-count">{inscritos.length}</span>
                        </button>

                        <button
                            className={`idbasico-tab ${activeTab === 'turmasPendentes' ? 'active' : ''}`}
                            onClick={() => setActiveTab('turmasPendentes')}
                        >
                            <FaGraduationCap /> Turmas Pendentes
                            <span className="idbasico-tab-count">{turmasPendentes.length}</span>
                        </button>

                        <button
                            className={`idbasico-tab ${activeTab === 'turmasAtivas' ? 'active' : ''}`}
                            onClick={() => setActiveTab('turmasAtivas')}
                        >
                            <FaGraduationCap /> Turmas Ativas
                            <span className="idbasico-tab-count">{turmasAtivas.length}</span>
                        </button>

                        <button
                            className={`idbasico-tab ${activeTab === 'anteriores' ? 'active' : ''}`}
                            onClick={() => setActiveTab('anteriores')}
                        >
                            <FaCalendarAlt /> Turmas Anteriores
                            <span className="idbasico-tab-count">{turmasFinalizadas.length}</span>
                        </button>
                    </div>

                    <div className="idbasico-tab-content">
                        {activeTab === 'inscritos' && (
                            <div className="idbasico-content-card">
                                <div className="idbasico-card-header">
                                    <h3>
                                        <FaList /> Lista de Inscritos
                                    </h3>

                                    <div className="idbasico-header-actions">
                                        <div className="idbasico-search-container">
                                            <FaSearch className="idbasico-search-icon" />
                                            <input
                                                type="text"
                                                placeholder="Buscar por nome ou telefone..."
                                                value={busca}
                                                onChange={(e) => setBusca(e.target.value)}
                                                className="idbasico-search-input"
                                            />
                                        </div>

                                        <select
                                            value={filtroLocal}
                                            onChange={(e) => setFiltroLocal(e.target.value)}
                                            className="idbasico-filter-select"
                                        >
                                            <option value="todos">Todos os locais</option>
                                            {locaisDisponiveis.map((local, index) => (
                                                <option key={index} value={local}>
                                                    {local}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="idbasico-legenda-status">
                                    <span className="idbasico-legenda-titulo">Legenda:</span>

                                    <div className="idbasico-legenda-item">
                                        <span className="idbasico-legenda-cor idbasico-legenda-matriculado"></span>
                                        <span>Matriculado</span>
                                    </div>

                                    <div className="idbasico-legenda-item">
                                        <span className="idbasico-legenda-cor idbasico-legenda-desistente"></span>
                                        <span>Desistente</span>
                                    </div>

                                    <div className="idbasico-legenda-item">
                                        <span className="idbasico-legenda-cor idbasico-legenda-aprovado"></span>
                                        <span>Aprovado</span>
                                    </div>

                                    <div className="idbasico-legenda-item">
                                        <span className="idbasico-legenda-cor idbasico-legenda-chamado"></span>
                                        <span>Já chamado</span>
                                    </div>
                                </div>

                                {carregandoInscritos ? (
                                    <div className="idbasico-loading-container">
                                        <div className="idbasico-loading-spinner"></div>
                                        <p>Carregando lista de inscritos...</p>
                                    </div>
                                ) : erroInscritos ? (
                                    <div className="idbasico-error-container">
                                        <div className="idbasico-error-icon">!</div>
                                        <p className="idbasico-error-message">{erroInscritos}</p>
                                        <button className="idbasico-retry-button" onClick={carregarInscritos}>
                                            <FaSearch /> Tentar Novamente
                                        </button>
                                    </div>
                                ) : inscritosFiltrados.length === 0 ? (
                                    <div className="idbasico-empty-state">
                                        <div className="idbasico-empty-icon"><FaUsers /></div>
                                        <h3>Nenhum inscrito encontrado</h3>
                                        <p>
                                            {busca || filtroLocal !== 'todos'
                                                ? 'Tente ajustar os filtros de busca.'
                                                : 'Não há inscrições para o curso de Inclusão Digital no momento.'}
                                        </p>
                                    </div>
                                ) : (
                                    <div className="idbasico-table-container">
                                        <div className="idbasico-table-info">
                                            <span className="idbasico-info-count">
                                                Mostrando {inscritosFiltrados.length} de {inscritos.length} inscritos
                                            </span>
                                        </div>

                                        <table className="idbasico-inscritos-table">
                                            <thead>
                                                <tr>
                                                    <th>Nome</th>
                                                    <th>Telefone</th>
                                                    <th>Primeira Vez?</th>
                                                    <th>Local</th>
                                                    <th>Período</th>
                                                    <th>Dias</th>
                                                    <th>Situação</th>
                                                    <th>Ações</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {inscritosFiltrados.map((inscrito, index) => (
                                                    <tr
                                                        key={index}
                                                        className={getLinhaClassName(inscrito)}
                                                    >
                                                        <td>
                                                            <div className="idbasico-nome-cell">
                                                                <span className="idbasico-nome-text">{inscrito.nome}</span>
                                                            </div>
                                                        </td>

                                                        <td>
                                                            <div className="idbasico-telefone-cell">
                                                                <span className="idbasico-telefone-text">{inscrito.celular}</span>
                                                            </div>
                                                        </td>

                                                        <td>
                                                            <div className={`idbasico-primeira-vez-cell ${inscrito.primeira_vez ? 'sim' : 'nao'}`}>
                                                                <span className="idbasico-primeira-vez-badge">
                                                                    {inscrito.primeira_vez ? (
                                                                        <>
                                                                            <FaCheckCircle /> Sim
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <FaTimesCircle /> Não
                                                                        </>
                                                                    )}
                                                                </span>
                                                            </div>
                                                        </td>

                                                        <td>
                                                            <div className="idbasico-local-cell">
                                                                <FaMapMarkerAlt className="idbasico-local-icon" />
                                                                <span className="idbasico-local-text">{inscrito.local}</span>
                                                            </div>
                                                        </td>

                                                        <td>
                                                            <div className="idbasico-periodo-cell">
                                                                <FaClock className="idbasico-periodo-icon" />
                                                                <span className="idbasico-periodo-text">{inscrito.periodo}</span>
                                                            </div>
                                                        </td>

                                                        <td>
                                                            <div className="idbasico-dias-cell">
                                                                <span className="idbasico-dias-text">{inscrito.dias}</span>
                                                            </div>
                                                        </td>

                                                        <td>
                                                            <span className="idbasico-situacao-badge">
                                                                {getTextoSituacao(inscrito)}
                                                            </span>
                                                        </td>

                                                        <td>
                                                            <div className="idbasico-acoes-cell">
                                                                <button className="idbasico-acao-btn idbasico-editar-btn" title="Editar">
                                                                    <FaEdit className="idbasico-acao-icon" />
                                                                    <span>Editar</span>
                                                                </button>

                                                                <button
                                                                    className="idbasico-acao-btn idbasico-excluir-btn"
                                                                    title="Excluir"
                                                                    onClick={() => abrirModalDeletar(inscrito)}
                                                                >
                                                                    <FaTrash className="idbasico-acao-icon" />
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

                        {activeTab === 'turmasPendentes' && (
                            <div className="idbasico-content-card">
                                <div className="idbasico-card-header">
                                    <h3><FaGraduationCap /> Turmas Pendentes</h3>
                                    <button
                                        className="idbasico-btn-nova-turma"
                                        onClick={() => setMostrarFormTurma(!mostrarFormTurma)}
                                    >
                                        <FaPlus /> Nova Turma
                                    </button>
                                </div>

                                {mostrarFormTurma && (
                                    <div className="idbasico-form-turma-container">
                                        <form onSubmit={criarTurma} className="idbasico-form-turma">
                                            <h4><FaPlus /> Criar Nova Turma</h4>
                                            <div className="idbasico-form-grid">
                                                <div className="idbasico-form-group">
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

                                                <div className="idbasico-form-group">
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

                                                <div className="idbasico-form-group">
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

                                                <div className="idbasico-form-group">
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

                                                <div className="idbasico-form-group">
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

                                            <div className="idbasico-form-actions">
                                                <button
                                                    type="button"
                                                    className="idbasico-btn-cancelar"
                                                    onClick={() => setMostrarFormTurma(false)}
                                                >
                                                    Cancelar
                                                </button>

                                                <button type="submit" className="idbasico-btn-salvar">
                                                    <FaPlus /> Criar Turma
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                )}

                                {turmasPendentes.length === 0 ? (
                                    <div className="idbasico-empty-state">
                                        <div className="idbasico-empty-icon"><FaGraduationCap /></div>
                                        <h3>Nenhuma turma Pendente</h3>
                                        <p>Crie uma nova turma para começar as aulas.</p>
                                    </div>
                                ) : (
                                    <div className="idbasico-turmas-grid">
                                        {turmasPendentes.map((turma, index) => (
                                            <div key={turma.id || index} className="idbasico-turma-card idbasico-pendente">
                                                <div className="idbasico-turma-header">
                                                    <h4>{turma.nome}</h4>
                                                    <span className="idbasico-turma-status idbasico-pendente">
                                                        {turma.status || 'Pendente'}
                                                    </span>
                                                </div>

                                                <div className="idbasico-turma-info">
                                                    <div className="idbasico-info-item">
                                                        <FaMapMarkerAlt />
                                                        <span>{turma.local}</span>
                                                    </div>
                                                    <div className="idbasico-info-item">
                                                        <FaClock />
                                                        <span>{turma.periodo}</span>
                                                    </div>
                                                    <div className="idbasico-info-item">
                                                        <FaCalendarAlt />
                                                        <span>{turma.dias}</span>
                                                    </div>
                                                </div>

                                                <div className="idbasico-turma-actions">
                                                    <button
                                                        className="idbasico-btn-detalhes"
                                                        onClick={() => abrirModalTurmaPendente(turma)}
                                                    >
                                                        Ver Detalhes
                                                    </button>

                                                    <button
                                                        className={`idbasico-btn-ativar ${ativandoTurma === turma.id ? 'ativando' : ''}`}
                                                        onClick={() => ativarTurma(turma.id)}
                                                        disabled={ativandoTurma === turma.id}
                                                    >
                                                        {ativandoTurma === turma.id ? (
                                                            <>
                                                                <FaSpinner className="idbasico-spinner" />
                                                                Ativando...
                                                            </>
                                                        ) : (
                                                            'Ativar Turma'
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === 'turmasAtivas' && (
                            <div className="idbasico-content-card">
                                <div className="idbasico-card-header">
                                    <h3><FaGraduationCap /> Turmas Ativas</h3>
                                </div>

                                {turmasAtivas.length === 0 ? (
                                    <div className="idbasico-empty-state">
                                        <div className="idbasico-empty-icon"><FaGraduationCap /></div>
                                        <h3>Nenhuma turma ativa</h3>
                                        <p>As turmas ativas aparecerão aqui.</p>
                                    </div>
                                ) : (
                                    <div className="idbasico-turmas-grid">
                                        {turmasAtivas.map((turma, index) => (
                                            <div key={turma.id || index} className="idbasico-turma-card idbasico-ativa">
                                                <div className="idbasico-turma-header">
                                                    <h4>{turma.nome}</h4>
                                                    <span className="idbasico-turma-status idbasico-ativa">Ativa</span>
                                                </div>

                                                <div className="idbasico-turma-info">
                                                    <div className="idbasico-info-item">
                                                        <FaMapMarkerAlt />
                                                        <span>{turma.local}</span>
                                                    </div>
                                                    <div className="idbasico-info-item">
                                                        <FaClock />
                                                        <span>{turma.periodo}</span>
                                                    </div>
                                                    <div className="idbasico-info-item">
                                                        <FaCalendarAlt />
                                                        <span>{turma.dias}</span>
                                                    </div>
                                                </div>

                                                <div className="idbasico-turma-actions">
                                                    <button
                                                        className="idbasico-btn-detalhes"
                                                        onClick={() => abrirModalTurmaAtiva(turma)}
                                                    >
                                                        Ver Detalhes
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === 'anteriores' && (
                            <div className="idbasico-content-card">
                                <div className="idbasico-card-header">
                                    <h3><FaCalendarAlt /> Turmas Anteriores</h3>
                                </div>

                                {turmasFinalizadas.length === 0 ? (
                                    <div className="idbasico-empty-state">
                                        <div className="idbasico-empty-icon"><FaCalendarAlt /></div>
                                        <h3>Nenhuma turma finalizada</h3>
                                        <p>As turmas finalizadas aparecerão aqui.</p>
                                    </div>
                                ) : (
                                    <div className="idbasico-turmas-grid">
                                        {turmasFinalizadas.map((turma, index) => (
                                            <div key={turma.id || index} className="idbasico-turma-card idbasico-finalizada">
                                                <div className="idbasico-turma-header">
                                                    <h4>{turma.nome}</h4>
                                                    <span className="idbasico-turma-status idbasico-finalizada">Finalizada</span>
                                                </div>

                                                <div className="idbasico-turma-info">
                                                    <div className="idbasico-info-item">
                                                        <FaMapMarkerAlt />
                                                        <span>{turma.local}</span>
                                                    </div>
                                                    <div className="idbasico-info-item">
                                                        <FaClock />
                                                        <span>{turma.periodo}</span>
                                                    </div>
                                                    <div className="idbasico-info-item">
                                                        <FaCalendarAlt />
                                                        <span>{turma.dias}</span>
                                                    </div>
                                                    <div className="idbasico-info-item">
                                                        <FaUsers />
                                                        <span>0 alunos</span>
                                                    </div>
                                                </div>

                                                <div className="idbasico-turma-actions">
                                                    <button className="idbasico-btn-detalhes">Ver Informações</button>
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
                    <span className="idbasico-footer-count"> | Total de Inscritos: {inscritos.length}</span>
                    <span className="idbasico-footer-count"> | Turmas Ativas: {turmasAtivas.length}</span>
                    <span className="idbasico-footer-count"> | Turmas Pendentes: {turmasPendentes.length}</span>
                </p>
            </footer>

            <DeletarInscrito
                isOpen={openModalDeletar}
                onClose={fecharModalDeletar}
                inscrito={inscritoSelecionado}
                recarregarLista={recarregarListaInscritos}
            />

            <ModalTurmaPendente
                isOpen={modalTurmaPendenteAberto}
                onClose={fecharModalTurmaPendente}
                turma={turmaSelecionada}
            />

            <ModalTurmaAtiva
                isOpen={modalTurmaAtivaAberto}
                onClose={fecharModalTurmaAtiva}
                turma={turmaAtivaSelecionada}
                onTurmaUpdated={recarregarTurmas}
            />
        </div>
    );
}