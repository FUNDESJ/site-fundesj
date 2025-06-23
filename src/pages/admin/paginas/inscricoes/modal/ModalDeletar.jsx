import { useState, useEffect } from 'react';
import axios from 'axios';
import './ModalDeletar.css'
import { FaExclamationTriangle, FaSpinner } from 'react-icons/fa';

export default function deletarInscricao({ isOpen, onClose, inscrito, deletarInscrito }) {
    const [nome, setNome] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (inscrito) {
            setNome(inscrito.nome)
        }
    }, [inscrito])
   
   
    async function removerInscrito() {
        setIsLoading(true);
        const token = localStorage.getItem('authToken');
        try {
            await axios.delete(`https://back-end-fundesj.onrender.com/lista/editar/${inscrito.id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            deletarInscrito();
            onClose();
        } catch (erro) {
            console.log("Erro ao deletar inscrição", erro);
        } finally {
            setIsLoading(false);
        }
    }


    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-delete-container" onClick={(e) => e.stopPropagation()}>
                <div className="delete-warning-icon">
                    <FaExclamationTriangle size={48} color="#e74c3c" />
                </div>

                <h2>Confirmar Exclusão</h2>

                <div className="delete-confirmation-message">
                    <p>Tem certeza que deseja remover a inscrição de <strong>{nome}</strong>?</p>
                    <p>Esta ação não poderá ser desfeita.</p>
                </div>

                <div className="modal-delete-buttons">
                    <button
                        className="cancel-button"
                        onClick={onClose}
                        disabled={isLoading}
                    >
                        Cancelar
                    </button>

                    <button
                        className="confirm-delete-button"
                        onClick={removerInscrito}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <FaSpinner className="spinner-icon" />
                                Excluindo...
                            </>
                        ) : (
                            'Confirmar Exclusão'
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}