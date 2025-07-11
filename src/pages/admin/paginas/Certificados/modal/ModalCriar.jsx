import { useState } from "react";
import axios from 'axios';
import './ModalCriar.css';

export default function ModalCriar({ isOpen, onClose }) {
    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');
    const [horas, setHoras] = useState('');
    const [codigo, setCodigo] = useState('');
    const [link, setLink] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});

    async function adicionarCertificado() {
        const newErrors = {};
        if (!nome) newErrors.nome = 'Nome é obrigatório';
        if (!curso) newErrors.curso = 'Curso é obrigatório';
        if (!horas) newErrors.horas = 'Horas é obrigatório';
        if (!codigo) newErrors.codigo = 'Código é obrigatório';
        if (!link) newErrors.link = 'Link é obrigatório';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const horasConvertido = parseInt(horas, 10);
        if (isNaN(horasConvertido)) {
            setErrors({...errors, horas: 'Deve ser um número válido'});
            return;
        }

        setIsLoading(true);
        const token = localStorage.getItem('authToken');

        try {
            await axios.post('https://back-end-fundesj.onrender.com/certificado', {
                nome,
                curso,
                horas: horasConvertido,
                codigo,
                link
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            onClose();
            setNome('');
            setCurso('');
            setHoras('');
            setCodigo('');
            setLink('');
            setErrors({});
        } catch (erro) {
            console.error("Erro ao cadastrar certificado:", erro);
            alert("Erro ao cadastrar certificado: " + (erro.response?.data?.mensagem || 'Erro interno'));
        } finally {
            setIsLoading(false);
        }
    }

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <h2 className="modal-title">Adicionar certificado</h2>

                <div className={`input-group ${errors.nome ? 'invalid' : ''}`}>
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(e) => {
                            setNome(e.target.value);
                            setErrors({...errors, nome: ''});
                        }}
                        className="modal-input"
                    />
                    {errors.nome && <span className="error-message">{errors.nome}</span>}
                </div>

                <div className={`input-group ${errors.curso ? 'invalid' : ''}`}>
                    <label htmlFor="curso">Curso</label>
                    <input
                        type="text"
                        id="curso"
                        value={curso}
                        onChange={(e) => {
                            setCurso(e.target.value);
                            setErrors({...errors, curso: ''});
                        }}
                        className="modal-input"
                    />
                    {errors.curso && <span className="error-message">{errors.curso}</span>}
                </div>

                <div className={`input-group ${errors.horas ? 'invalid' : ''}`}>
                    <label htmlFor="horas">Horas</label>
                    <input
                        type="number"
                        id="horas"
                        value={horas}
                        onChange={(e) => {
                            setHoras(e.target.value);
                            setErrors({...errors, horas: ''});
                        }}
                        className="modal-input"
                    />
                    {errors.horas && <span className="error-message">{errors.horas}</span>}
                </div>

                <div className={`input-group ${errors.codigo ? 'invalid' : ''}`}>
                    <label htmlFor="codigo">Código</label>
                    <input
                        type="text"
                        id="codigo"
                        value={codigo}
                        onChange={(e) => {
                            setCodigo(e.target.value);
                            setErrors({...errors, codigo: ''});
                        }}
                        className="modal-input"
                    />
                    {errors.codigo && <span className="error-message">{errors.codigo}</span>}
                </div>

                <div className={`input-group ${errors.link ? 'invalid' : ''}`}>
                    <label htmlFor="link">Link</label>
                    <input
                        type="text"
                        id="link"
                        value={link}
                        onChange={(e) => {
                            setLink(e.target.value);
                            setErrors({...errors, link: ''});
                        }}
                        className="modal-input"
                    />
                    {errors.link && <span className="error-message">{errors.link}</span>}
                </div>

                <div className="modal-buttons">
                    <button 
                        onClick={onClose} 
                        className="modal-button cancel-button"
                        disabled={isLoading}
                    >
                        Cancelar
                    </button>
                    <button 
                        onClick={adicionarCertificado} 
                        className={`modal-button confirm-button ${isLoading ? 'loading' : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Enviando...' : 'Confirmar'}
                    </button>
                </div>
            </div>
        </div>
    );
}