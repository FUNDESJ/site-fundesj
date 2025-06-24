import { useState, useEffect } from 'react';
import axios from 'axios';
import './ModalEditar.css';

export default function ModalEditar({ isOpen, onClose, certificado, atualizarCertificado }) {
    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');
    const [horas, setHoras] = useState('');
    const [codigo, setCodigo] = useState('');
    const [link, setLink] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (certificado) {
            setNome(certificado.nome);
            setCurso(certificado.curso);
            setHoras(certificado.horas);
            setCodigo(certificado.codigo);
            setLink(certificado.link);
        }
    }, [certificado]);

    async function editarCertificado() {
        setIsLoading(true);
        const token = localStorage.getItem('authToken');
        try {
            await axios.put(`https://back-end-fundesj.onrender.com/certificado/${certificado.codigo}`, {
                nome,
                curso,
                horas,
                codigo,
                link
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            atualizarCertificado();
            onClose();
        } catch (erro) {
            console.log("Erro ao editar certificado", erro);
            alert("Ocorreu um erro ao editar o certificado");
        } finally {
            setIsLoading(false);
        }
    }

    if (!isOpen) return null;

    return (
        <div className="modal-editar-overlay">
            <div className="modal-editar-content">
                <div className="modal-editar-header">
                    <h2 className="modal-editar-title">Editar Certificado</h2>
                    <button className="modal-editar-close" onClick={onClose}>×</button>
                </div>
                
                <div className="modal-editar-form-group">
                    <label htmlFor="nome" className="modal-editar-label">Nome</label>
                    <input 
                        type="text"
                        id="nome"
                        className="modal-editar-input"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>

                <div className="modal-editar-form-group">
                    <label htmlFor="curso" className="modal-editar-label">Curso</label>
                    <input 
                        type="text"
                        id="curso"
                        className="modal-editar-input"
                        value={curso}
                        onChange={(e) => setCurso(e.target.value)}
                    />
                </div>

                <div className="modal-editar-form-group">
                    <label htmlFor="horas" className="modal-editar-label">Horas</label>
                    <input 
                        type="text"
                        id="horas"
                        className="modal-editar-input"
                        value={horas}
                        onChange={(e) => setHoras(e.target.value)}
                    />
                </div>

                <div className="modal-editar-form-group">
                    <label htmlFor="codigo" className="modal-editar-label">Código</label>
                    <input 
                        type="text"
                        id="codigo"
                        className="modal-editar-input"
                        value={codigo}
                        onChange={(e) => setCodigo(e.target.value)}
                    />
                </div>

                <div className="modal-editar-form-group">
                    <label htmlFor="link" className="modal-editar-label">Link</label>
                    <input 
                        type="text"
                        id="link"
                        className="modal-editar-input"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                </div>

                <div className="modal-editar-actions">
                    <button 
                        className="modal-editar-btn modal-editar-btn-cancel"
                        onClick={onClose}
                        disabled={isLoading}
                    >
                        Cancelar
                    </button>
                    <button 
                        className="modal-editar-btn modal-editar-btn-save"
                        onClick={editarCertificado}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Salvando...' : 'Salvar Alterações'}
                    </button>
                </div>
            </div>
        </div>
    );
}