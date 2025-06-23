import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaPlus, FaSearch, FaExternalLinkAlt } from 'react-icons/fa';
import ModalEditar from './modal/ModalEditar';
import ModalDeletar from './modal/ModalDeletar';
import './certificadosAdmin.css';

export default function Certificados() {
    const [openModalCriar, setOpenModalCriar] = useState(false);
    const [openModalDeletar, setOpenModalDeletar] = useState(false);
    const [openModalEditar, setOpenModalEditar] = useState(false);
    const [certificadoSelecionado, setCertificadoSelecionado] = useState(null);
    const [certificados, setCertificados] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);

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

    function abrirModalEditar(certificado) {
        setCertificadoSelecionado(certificado);
        setOpenModalEditar(true);
    }
    function abrirModalDeletar(certificado) {
        setCertificadoSelecionado(certificado);
        setOpenModalDeletar(true)
    }

    return (
        <div className="certificados-container">
            <div className="cabecalho-com-botao">
                <div className="certificados-header">
                    <h1>Lista de Certificados</h1>
                    <p>Gerencie todos os certificados cadastrados no sistema</p>
                </div>
                <button
                    className="btn-add"
                    onClick={() => setOpenModalCriar(true)}
                >
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
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {isLoading ? (
                <div className="carregando">Carregando certificados...</div>
            ) : (
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
                            {filteredCertificados.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="sem-dados">
                                        {searchTerm ? "Nenhum certificado encontrado" : "Nenhum certificado cadastrado"}
                                    </td>
                                </tr>
                            ) : (
                                filteredCertificados.map((certificado, index) => (
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
                deletarCertificado={listarCertificados} />
        </div>
    );
}
