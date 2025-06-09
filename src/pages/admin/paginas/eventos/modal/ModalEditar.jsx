import { useState, useEffect } from "react";
import axios from 'axios';
import "./ModalEditar.css"; 

export default function ModalEditar({ isOpen, onClose, evento, atualizarEvento, ativarEvento }) {
    const [titulo, setTitulo] = useState('')
    const [local, setLocal] = useState('')
    const [data, setData] = useState('')
    const [horario, setHorario] = useState('')
    const [palestrante, setPalestrante] = useState('')
    const [projeto, setProjeto] = useState('')
    const [subTitulo, setSubTitulo] = useState('')
    const [foto, setFoto] = useState('')
    const [ativa, setAtiva] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        if (evento) {
            setTitulo(evento.titulo);
            setLocal(evento.local);
            setData(evento.data);
            setHorario(evento.horario);
            setPalestrante(evento.palestrante);
            setProjeto(evento.projeto);
            setSubTitulo(evento.subTitulo);
            setFoto(evento.foto);
            setAtiva(evento.ativa);
        }
    }, [evento])

    async function editarEvento() {
        const token = localStorage.getItem('authToken');
        try {
            await axios.put(`https://back-end-fundesj.onrender.com/eventos/${evento.id}`, {
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
            atualizarEvento()
        } catch (erro) {
            console.log("Erro ao editar evento", erro);
            throw erro;
        }
    }

    async function atualizarStatus() {
        const token = localStorage.getItem('authToken');
        try {
            await axios.put('https://back-end-fundesj.onrender.com/eventos', {
                titulo,
                projeto,
                ativa
            }, {
                headers: { Authorization: `Bearer ${token}` }
            })
            ativarEvento();
        } catch (erro) {
            console.log("Não foi possivel ativar a o evento", erro);
            throw erro;
        }
    }

    async function atualizar() {
        setIsLoading(true);
        try {
            await editarEvento();
            await atualizarStatus();
            onClose();
        } catch(erro) {
            console.log(erro);
        } finally {
            setIsLoading(false);
        }
    }

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <h3>Editar Evento</h3>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label>Título</label>
                        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Data</label>
                        <input type="date" value={data} onChange={(e) => setData(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Horário</label>
                        <input type="time" value={horario} onChange={(e) => setHorario(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Local</label>
                        <input type="text" value={local} onChange={(e) => setLocal(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Palestrante</label>
                        <input type="text" value={palestrante} onChange={(e) => setPalestrante(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Projeto</label>
                        <input type="text" value={projeto} onChange={(e) => setProjeto(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Descrição</label>
                        <textarea value={subTitulo} onChange={(e) => setSubTitulo(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Foto (URL)</label>
                        <input type="text" value={foto} onChange={(e) => setFoto(e.target.value)} />
                    </div>
                    <div className="form-group status-group">
                        <label>Status</label>
                        <select 
                            value={ativa ? 'true' : 'false'} 
                            onChange={(e) => setAtiva(e.target.value === 'true')}
                            className="status-select"
                        >
                            <option value="true">Ativo</option>
                            <option value="false">Inativo</option>
                        </select>
                    </div>
                </div>
                <div className="modal-footer">
                    <button 
                        onClick={onClose} 
                        className="btn btn-cancelar"
                        disabled={isLoading}
                    >
                        Cancelar
                    </button>
                    <button 
                        onClick={atualizar} 
                        className="btn btn-salvar"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="loading-spinner">
                                <div className="spinner"></div>
                                Salvando...
                            </div>
                        ) : "Salvar Alterações"}
                    </button>
                </div>
            </div>
        </div>
    );
}