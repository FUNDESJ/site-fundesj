import React from 'react';
import './ModalDeletarInscrito.css'
import { useState, useEffect } from "react";
import axios from 'axios';
import { FaExclamationTriangle, FaSpinner } from 'react-icons/fa';

export default function DeletarInscrito({ isOpen, onClose, inscrito, recarregarLista }) {
    const [nome, setNome] = useState('');
    const [id, setId] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (inscrito) {
            setNome(inscrito.nome || '');
            setId(inscrito.id || inscrito._id || '');
        }
    }, [inscrito]);

    async function removerInscrito() {
        if (!id) {
            console.error("ID do inscrito não encontrado");
            return;
        }

        setIsLoading(true);
        const token = localStorage.getItem('authToken');
        try {
            await axios.delete(`https://back-end-fundesj.onrender.com/inscritosId/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            // Agora chama recarregarLista em vez de deletarInscrito
            recarregarLista();
            setIsLoading(false);
            onClose();
        } catch (erro) {
            console.log("Erro ao deletar inscrito", erro);
            setIsLoading(false);
            alert("Erro ao excluir inscrito. Tente novamente.");
        }
    }

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-warning-icon">
                        <FaExclamationTriangle />
                    </div>
                    <h2>Confirmar Exclusão</h2>
                    <p className="modal-warning-text">
                        Você está prestes a excluir permanentemente a inscrição de:
                    </p>
                    <p className="modal-event-title">{nome}</p>
                    <p className="modal-warning-text">
                        Esta ação não pode ser desfeita. Tem certeza que deseja continuar?
                    </p>
                    
                    <div className="modal-button-group">
                        <button 
                            onClick={onClose} 
                            className="modal-cancel-btn"
                            disabled={isLoading}
                        >
                            Cancelar
                        </button>
                        <button 
                            onClick={removerInscrito} 
                            className="modal-confirm-btn"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <FaSpinner className="spin-animation" /> Processando...
                                </>
                            ) : (
                                'Confirmar Exclusão'
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}