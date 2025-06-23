import { useState, useEffect } from 'react';
import axios from 'axios';
import './ModalEditar.css'

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
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Editar Certificado</h2>
                    <button className="modal-close" onClick={onClose}>×</button>
                </div>
                
                <div className="modal-form-group">
                    <label htmlFor="nome">Nome</label>
                    <input 
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>

                <div className="modal-form-group">
                    <label htmlFor="curso">Curso</label>
                    <input 
                        type="text"
                        id="curso"
                        value={curso}
                        onChange={(e) => setCurso(e.target.value)}
                    />
                </div>

                <div className="modal-form-group">
                    <label htmlFor="horas">Horas</label>
                    <input 
                        type="text"
                        id="horas"
                        value={horas}
                        onChange={(e) => setHoras(e.target.value)}
                    />
                </div>

                <div className="modal-form-group">
                    <label htmlFor="codigo">Código</label>
                    <input 
                        type="text"
                        id="codigo"
                        value={codigo}
                        onChange={(e) => setCodigo(e.target.value)}
                    />
                </div>

                <div className="modal-form-group">
                    <label htmlFor="link">Link</label>
                    <input 
                        type="text"
                        id="link"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                </div>

                <div className="modal-actions">
                    <button 
                        className="modal-btn modal-btn-cancel"
                        onClick={onClose}
                        disabled={isLoading}
                    >
                        Cancelar
                    </button>
                    <button 
                        className="modal-btn modal-btn-save"
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