import React, { useState, useEffect } from "react";
import "./ModalPalestras.css";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

export default function ModalInscritos({ isOpen, onClose }) {
    const [inscritos, setInscritos] = useState([]);
    const [inscritosFiltrados, setInscritosFiltrados] = useState([]);
    const [termoBusca, setTermoBusca] = useState("");

    useEffect(() => {
        if (isOpen) {
            buscarLista();
        }
    }, [isOpen]);

    useEffect(() => {
        filtrarInscritos();
    }, [termoBusca, inscritos]);

    async function buscarLista() {
        const token = localStorage.getItem('authToken');
        if (!token) {
            alert("Erro no sistema");
            return;
        }

        try {
            const retorno = await axios.get('https://back-end-fundesj.onrender.com/listaInscritos', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setInscritos(retorno.data);
        } catch (erro) {
            console.log(erro);
        }
    }

    function filtrarInscritos() {
        if (!termoBusca.trim()) {
            setInscritosFiltrados(inscritos);
            return;
        }

        const termo = termoBusca.toLowerCase();
        const resultados = inscritos.filter(inscrito => {
            return (
                inscrito.nome.toLowerCase().includes(termo) ||
                (inscrito.titulo && inscrito.titulo.toLowerCase().includes(termo)) ||
                inscrito.email.toLowerCase().includes(termo)
            );
        });

        setInscritosFiltrados(resultados);
    }


    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h2>Lista de Inscritos</h2>

                <div className="search-container">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Pesquisar por nome, palestra ou email..."
                        value={termoBusca}
                        onChange={(e) => setTermoBusca(e.target.value)}
                    />
                </div>

                {inscritosFiltrados.length === 0 ? (
                    <h3 className="empty-message">
                        {termoBusca ? "Nenhum resultado encontrado" : "Nenhuma inscrição encontrada"}
                    </h3>
                ) : (
                    <>
                     <div className="total-inscritos">
                            Total de inscritos: <span>{inscritosFiltrados.length}</span>
                        </div>
                    <div className="inscritos-container">
                        {inscritosFiltrados.map((inscrito, index) => (
                            <div className="inscrito-card" key={index}>
                                <div className="card-header">
                                    <div className="palestra-titulo">{inscrito.titulo || "Palestra sem título"}</div>
                                </div>

                                <div className="inscrito-nome">{inscrito.nome}</div>

                                <div className="inscrito-detalhes">
                                    <div className="detalhe-item">
                                        <strong>Email</strong>
                                        <span>{inscrito.email}</span>
                                    </div>
                                    <div className="detalhe-item">
                                        <strong>Telefone</strong>
                                        <span>{inscrito.telefone}</span>
                                    </div>
                                </div>

                                <div className="como-conheceu">
                                    <strong>Como conheceu o evento?</strong>
                                    <span>{inscrito.comoConheceu}</span>
                                </div>
                            </div>

                        ))}
                    </div>
                    </>
                )}

                <button className="modal-close-btn" onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
}