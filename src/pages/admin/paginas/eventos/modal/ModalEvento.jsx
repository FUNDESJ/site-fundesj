import React, { useState } from 'react';
import './ModalEvento.css';
import axios from 'axios';

export default function ModalEvento({ isOpen, onClose }) {
    const [titulo, setTitulo] = useState('');
    const [local, setLocal] = useState('');
    const [data, setData] = useState('');
    const [horario, setHorario] = useState('');
    const [palestrante, setPalestrante] = useState('');
    const [projeto, setProjeto] = useState('');
    const [subTitulo, setSubTitulo] = useState('');
    const [foto, setFoto] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    if (!isOpen) return null;

    async function criarNovoEvento() {
        if (!titulo || !local || !data || !horario || !projeto || !palestrante || !subTitulo || !foto) {
            return alert("Complete todos os campos corretamente");
        }
        
        setIsLoading(true)
        const token = localStorage.getItem('authToken');
        
        try {
            await axios.post('https://back-end-fundesj.onrender.com/eventos', {
                titulo,
                local,
                data,
                horario,
                palestrante,
                projeto,
                subTitulo,
                foto,
            }, {
                headers: { Authorization: `Bearer ${token}` }
            })
            
            onClose()
            alert("Evento criado com sucesso")
        } catch (erro) {
            alert("Erro no sistema")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <h3>Criar Novo Evento</h3>
                </div>

                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="evento-nome">Nome do Evento</label>
                            <input
                                id="evento-nome"
                                type="text"
                                placeholder="Digite o nome do evento"
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="evento-data">Data do Evento</label>
                            <input
                                id="evento-data"
                                type="date"
                                value={data}
                                onChange={(e) => setData(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="evento-local">Horário</label>
                            <input
                                id="evento-local"
                                type="time"
                                placeholder="Digite o horário do evento"
                                value={horario}
                                onChange={(e) => setHorario(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="evento-local">Local</label>
                            <input
                                id="evento-local"
                                type="text"
                                placeholder="Digite o local do evento"
                                value={local}
                                onChange={(e) => setLocal(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="evento-local">Palestrante</label>
                            <input
                                id="evento-local"
                                type="text"
                                placeholder="Digite o nome do palestrante"
                                value={palestrante}
                                onChange={(e) => setPalestrante(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="evento-local">Projeto</label>
                            <input
                                id="Projeto"
                                type="text"
                                placeholder="Digite qual projeto é esse evento"
                                value={projeto}
                                onChange={(e) => setProjeto(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="evento-descricao">Descrição</label>
                            <textarea
                                id="evento-descricao"
                                placeholder="Descreva o evento"
                                value={subTitulo}
                                onChange={(e) => setSubTitulo(e.target.value)}
                                disabled={isLoading}
                            ></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="evento-vagas">Foto de capa</label>
                            <input
                                id="URL fotos"
                                type="text"
                                placeholder="Url da foto"
                                value={foto}
                                onChange={(e) => setFoto(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>
                    </form>
                </div>

                <div className="modal-footer">
                    <button
                        type="button"
                        onClick={onClose}
                        className="btn-cancelar"
                        disabled={isLoading}
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="btn-salvar"
                        onClick={criarNovoEvento}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="loading-spinner">
                                <div className="spinner"></div>
                                Salvando...
                            </div>
                        ) : "Salvar Evento"}
                    </button>
                </div>
            </div>
        </div>
    );
}