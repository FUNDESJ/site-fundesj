import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaPlus, FaSearch, FaExternalLinkAlt } from 'react-icons/fa';
import ModalEditar from './modal/ModalEditar';
import ModalDeletar from './modal/ModalDeletar';
import ModalCriar from './modal/ModalCriar';
import './certificadosAdmin.css';

export default function Certificados() {
    const [openModalCriar, setOpenModalCriar] = useState(false);
    const [openModalDeletar, setOpenModalDeletar] = useState(false);
    const [openModalEditar, setOpenModalEditar] = useState(false);
    const [certificadoSelecionado, setCertificadoSelecionado] = useState(null);
    const [certificados, setCertificados] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // Paginação
    const [currentPage, setCurrentPage] = useState(1);
    const certificadosPerPage = 10;

    async function listarCertificados() {
        setIsLoading(true);
        const token = localStorage.getItem('authToken');
        try {
            const retorno = await axios.get('https://back-end-fundesj.onrender.com/certificado', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setCertificados(retorno.data);
        } catch (erro) {
            console.log("Erro ao listar certificados:", erro);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        listarCertificados();
    }, []);

    const filteredCertificados = certificados.filter(certificado =>
        certificado.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        certificado.curso.toLowerCase().includes(searchTerm.toLowerCase()) ||
        certificado.codigo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Paginação - cálculo de páginas
    const indexOfLast = currentPage * certificadosPerPage;
    const indexOfFirst = indexOfLast - certificadosPerPage;
    const currentCertificados = filteredCertificados.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(filteredCertificados.length / certificadosPerPage);

    const abrirModalEditar = (certificado) => {
        setCertificadoSelecionado(certificado);
        setOpenModalEditar(true);
    };

    const abrirModalDeletar = (certificado) => {
        setCertificadoSelecionado(certificado);
        setOpenModalDeletar(true);
    };

    const abrirModalCriar = () => {
        setOpenModalCriar(true);
    };

    const changePage = (number) => {
        setCurrentPage(number);
    };

    // Função para gerar os números de página a serem exibidos
    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;
        
        // Sempre mostra a primeira página
        pages.push(1);
        
        // Determina o intervalo de páginas ao redor da atual
        let startPage = Math.max(2, currentPage - 2);
        let endPage = Math.min(totalPages - 1, currentPage + 2);
        
        // Ajusta se estiver perto do início
        if (currentPage <= 3) {
            endPage = Math.min(maxVisiblePages, totalPages - 1);
        }
        
        // Ajusta se estiver perto do final
        if (currentPage >= totalPages - 2) {
            startPage = Math.max(totalPages - maxVisiblePages + 1, 2);
        }
        
        // Adiciona páginas do intervalo
        if (startPage > 2) {
            pages.push('...');
        }
        
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        
        if (endPage < totalPages - 1) {
            pages.push('...');
        }
        
        // Sempre mostra a última página se houver mais de uma
        if (totalPages > 1) {
            pages.push(totalPages);
        }
        
        return pages;
    };

    return (
        <div className="certificados-container">
            <div className="cabecalho-com-botao">
                <div className="certificados-header">
                    <h1>Lista de Certificados</h1>
                    <p>Gerencie todos os certificados cadastrados no sistema</p>
                </div>
                <button className="btn-add" onClick={abrirModalCriar}>
                    <FaPlus /> Adicionar Certificado
                </button>
            </div>

            <div className="filtro-container">
                <div className="filtro-input-group">
                    <div className="filtro-input-wrapper">
                        <FaSearch className="filtro-icon" />
                        <input
                            type="text"
                            className="filtro-input"
                            placeholder="Pesquisar certificados..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }}
                        />
                    </div>
                </div>
            </div>

            {isLoading ? (
                <div className="carregando">Carregando certificados...</div>
            ) : (
                <>
                    <div className="tabela-container">
                        <table className="certificados-table">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Curso</th>
                                    <th>Código</th>
                                    <th>Horas</th>
                                    <th>Link</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentCertificados.length === 0 ? (
                                    <tr>
                                        <td colSpan="6" className="sem-dados">
                                            {searchTerm ? "Nenhum certificado encontrado" : "Nenhum certificado cadastrado"}
                                        </td>
                                    </tr>
                                ) : (
                                    currentCertificados.map((certificado, index) => (
                                        <tr key={index}>
                                            <td className="nome">{certificado.nome}</td>
                                            <td className="curso">{certificado.curso}</td>
                                            <td>{certificado.codigo}</td>
                                            <td>{certificado.horas}</td>
                                            <td>
                                                <a
                                                    href={certificado.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="certificado-link"
                                                >
                                                    <FaExternalLinkAlt /> Ver Certificado
                                                </a>
                                            </td>
                                            <td>
                                                <div className="acoes">
                                                    <button
                                                        className="btn-acao btn-editar"
                                                        onClick={() => abrirModalEditar(certificado)}
                                                    >
                                                        <FaEdit />
                                                    </button>
                                                    <button
                                                        className="btn-acao btn-excluir"
                                                        onClick={() => abrirModalDeletar(certificado)}
                                                    >
                                                        <FaTrash />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Paginação melhorada */}
                    {totalPages > 1 && (
                        <div className="paginacao">
                            <button 
                                className={`pagina-nav ${currentPage === 1 ? 'disabled' : ''}`}
                                onClick={() => changePage(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                &laquo; Anterior
                            </button>

                            {getPageNumbers().map((page, index) => (
                                page === '...' ? (
                                    <span key={`ellipsis-${index}`} className="separador">...</span>
                                ) : (
                                    <button
                                        key={page}
                                        className={`pagina ${currentPage === page ? 'ativa' : ''}`}
                                        onClick={() => changePage(page)}
                                    >
                                        {page}
                                    </button>
                                )
                            ))}

                            <button 
                                className={`pagina-nav ${currentPage === totalPages ? 'disabled' : ''}`}
                                onClick={() => changePage(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                Próxima &raquo;
                            </button>
                        </div>
                    )}
                </>
            )}

            <ModalEditar
                isOpen={openModalEditar}
                onClose={() => setOpenModalEditar(false)}
                certificado={certificadoSelecionado}
                atualizarCertificado={listarCertificados}
            />
            <ModalDeletar
                isOpen={openModalDeletar}
                onClose={() => setOpenModalDeletar(false)}
                certificado={certificadoSelecionado}
                deletarCertificado={listarCertificados}
            />
            <ModalCriar
                isOpen={openModalCriar}
                onClose={() => setOpenModalCriar(false)}
            />
        </div>
    );
}