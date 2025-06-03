import React, { useState, useEffect } from "react";
import "./ModalPalestras.css";
import axios from "axios";

export default function ModalInscritos({ isOpen, onClose }) {
    const [inscritos, setInscritos] = useState([]);

    useEffect(() => {
        if (isOpen) {
            buscarLista();
        }
    }, [isOpen]);

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
        } catch(erro) {
            console.log(erro);
        }
    }

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h2>Lista de Inscritos</h2>
                
                {inscritos.length === 0 ? (
                    <h3 className="empty-message">Nenhuma inscrição encontrada</h3>
                ) : (
                    <div className="inscritos-container">
                        {inscritos.map((inscrito, index) => (
                            <div className="inscrito-card" key={index}>
                                <div className="palestra-titulo">{inscrito.titulo || "Palestra sem título"}</div>
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
                )}
                
                <button className="modal-close-btn" onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
}