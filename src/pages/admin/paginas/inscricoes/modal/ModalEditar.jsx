import { useState, useEffect } from 'react';
import axios from 'axios';
import './ModalEditar.css';
import { FaSpinner } from 'react-icons/fa';

export default function ModalEditar({ isOpen, onClose, inscrito, atualizarInscrito }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [titulo, setTitulo] = useState('');
    const [comoConheceu, setComoConheceu] = useState('');
    const [isLoading, setIsLoading] = useState(false); // 👈 Novo estado

    useEffect(() => {
        if (inscrito) {
            setNome(inscrito.nome);
            setEmail(inscrito.email);
            setTelefone(inscrito.telefone);
            setTitulo(inscrito.titulo);
            setComoConheceu(inscrito.comoConheceu);
        }
    }, [inscrito]);

    async function editarInscrito() {
        setIsLoading(true); 
        const token = localStorage.getItem('authToken');
        try {
            await axios.put(`https://back-end-fundesj.onrender.com/lista/editar/${inscrito.id}`, {
                nome,
                email,
                telefone,
                titulo,
                comoConheceu
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            atualizarInscrito();
            onClose();
        } catch (erro) {
            console.log("Erro ao editar inscrito", erro);
        } finally {
            setIsLoading(false); 
        }
    }

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-editar-container" onClick={(e) => e.stopPropagation()}>
                <h3>Editar Inscrição</h3>
                <div>
                    <div className="modal-editar-form-group">
                        <label>Nome</label>
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div className="modal-editar-form-group">
                        <label>Email</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="modal-editar-form-group">
                        <label>Telefone</label>
                        <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                    </div>
                    <div className="modal-editar-form-group">
                        <label>Nome do evento</label>
                        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    </div>
                    <div className="modal-editar-form-group">
                        <label>Como conheceu</label>
                        <input type="text" value={comoConheceu} onChange={(e) => setComoConheceu(e.target.value)} />
                    </div>
                </div>
                <div className="modal-editar-buttons">
                    <button className="btn-cancelar" onClick={onClose} disabled={isLoading}>Cancelar</button>
                    <button className="btn-salvar" onClick={editarInscrito} disabled={isLoading}>
                        {isLoading ? (
                            <span className="loading-text">
                                <FaSpinner className="spinner-icon" />
                                Salvando...
                            </span>
                        ) : (
                            'Editar Inscrição'
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
