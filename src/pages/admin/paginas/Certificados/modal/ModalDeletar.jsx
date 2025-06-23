import { useState, useEffect } from "react";
import axios from 'axios';
import { FaExclamationTriangle, FaSpinner, FaTimes, FaCheck } from 'react-icons/fa';
import './ModalDeletar.css'; 

export default function DeletarCertificado({ isOpen, onClose, certificado, deletarCertificado }) {
    const [nome, setNome] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (certificado) {
            setNome(certificado.nome);
        }
    }, [certificado]);

    async function removerCertificado() {
        setIsLoading(true);
        setError(null);
        const token = localStorage.getItem('authToken');
        try {
            await axios.delete(`https://back-end-fundesj.onrender.com/certificado/${certificado.codigo}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            deletarCertificado();
            onClose();
        } catch (erro) {
            console.log("Erro ao deletar certificado", erro);
            setError("Ocorreu um erro ao deletar o certificado. Por favor, tente novamente.");
        } finally {
            setIsLoading(false);
        }
    }

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="delete-modal">
                <div className="modal-header">
                    <h2>Confirmar Exclusão</h2>
                    <button className="close-btn" onClick={onClose} disabled={isLoading}>
                        <FaTimes />
                    </button>
                </div>

                <div className="modal-content">
                    <div className="warning-icon">
                        <FaExclamationTriangle />
                    </div>
                    <p>Tem certeza que deseja excluir permanentemente o certificado?</p>
                    <div className="certificado-info">
                        <strong>Nome:</strong> {nome}<br />
                        <strong>Código:</strong> {certificado?.codigo}
                    </div>

                    {error && (
                        <div className="error-message">
                            {error}
                        </div>
                    )}
                </div>

                <div className="modal-actions">
                    <button 
                        className="cancel-btn"
                        onClick={onClose}
                        disabled={isLoading}
                    >
                        Cancelar
                    </button>
                    <button 
                        className="confirm-btn"
                        onClick={removerCertificado}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <FaSpinner className="spinner" /> Excluindo...
                            </>
                        ) : (
                            <>
                                <FaCheck /> Confirmar Exclusão
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}