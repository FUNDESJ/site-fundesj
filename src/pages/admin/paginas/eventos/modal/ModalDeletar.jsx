import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';
import { FaExclamationTriangle, FaSpinner } from 'react-icons/fa';

export default function DeletarEvento({ isOpen, onClose, evento, deletarEvento }) {
    const [titulo, setTitulo] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (evento) {
            setTitulo(evento.titulo);
        }
    }, [evento]);

    async function removerEvento() {
        setIsLoading(true);
        const token = localStorage.getItem('authToken');
        try {
            await axios.delete(`https://back-end-fundesj.onrender.com/eventos/${evento.id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            deletarEvento();
            setIsLoading(false);
            onClose();
        } catch (erro) {
            console.log("Erro ao deletar evento", erro);
            setIsLoading(false);
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
                        Você está prestes a excluir permanentemente o evento:
                    </p>
                    <p className="modal-event-title">{titulo}</p>
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
                            onClick={removerEvento} 
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