import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTimes, FaSpinner, FaEdit } from 'react-icons/fa';
import './ModalEditarInscrito.css';

const SITUACOES = [
    { value: 'Matriculado', label: 'Matriculado' },
    { value: 'Cancelado', label: 'Cancelado' },
    { value: 'Desistente', label: 'Desistente' },
    { value: 'Aprovado', label: 'Aprovado' },
];

const LOCAIS = [
    { value: 'CATI', label: 'CATI' },
    { value: 'UNISUL', label: 'UNISUL (Continente)' },
    { value: 'UNIASSELVI', label: 'UNIASSELVI (Forquilhas)' },
];

const PERIODOS = [
    { value: 'Matutino', label: 'Matutino' },
    { value: 'Vespertino', label: 'Vespertino' },
];

const DIAS = [
    { value: 'Segunda e Quarta', label: 'Segunda e Quarta' },
    { value: 'Terça e Quinta', label: 'Terça e Quinta' },
    { value: 'Segunda e Quinta', label: 'Segunda e Quinta' },
    { value: 'Terça e Quarta', label: 'Terça e Quarta' },
];
  
export default function ModalEditarInscrito({ isOpen, onClose, inscrito, recarregarLista }) {
    const [nome, setNome] = useState('');
    const [celular, setCelular] = useState('');
    const [email, setEmail] = useState('');
    const [primeiraVez, setPrimeiraVez] = useState(false);
    const [local, setLocal] = useState('CATI');
    const [periodo, setPeriodo] = useState('');
    const [dias, setDias] = useState('');
    const [situacao, setSituacao] = useState('Matriculado');
    const [foiChamado, setFoiChamado] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [erro, setErro] = useState('');

    useEffect(() => {
        if (inscrito) {
            setNome(inscrito.nome || '');
            setCelular(inscrito.celular || '');
            setEmail(inscrito.email || '');
            setPrimeiraVez(!!inscrito.primeira_vez);
            setLocal(inscrito.local || 'CATI');
            setPeriodo(inscrito.periodo || '');
            setDias(inscrito.dias || '');
            setSituacao(inscrito.Situacao || 'Matriculado');
            setFoiChamado(!!inscrito.foiChamado);
            setErro('');
        }
    }, [inscrito]);

    async function salvarEdicao() {
        if (!nome || !celular || !local || !periodo || !dias) {
            setErro('Preencha todos os campos obrigatórios.');
            return;
        }

        setIsLoading(true);
        setErro('');
        const token = localStorage.getItem('authToken');

        try {
            await axios.put(
                `https://back-end-fundesj.onrender.com/inscritosId/${inscrito.id}`,
                {
                    nome,
                    celular,
                    email,
                    primeira_vez: primeiraVez,
                    local,
                    periodo,
                    dias,
                    Situacao: situacao,
                    foiChamado: foiChamado,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (recarregarLista) recarregarLista();
            setIsLoading(false);
            onClose();
        } catch (err) {
            console.error('Erro ao editar inscrito:', err);
            setErro('Erro ao salvar. Tente novamente.');
            setIsLoading(false);
        }
    }

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-editar-inscrito" onClick={(e) => e.stopPropagation()}>
                <div className="modal-editar-header">
                    <h3><FaEdit /> Editar Inscrição</h3>
                    <button className="modal-editar-close" onClick={onClose} disabled={isLoading}>
                        <FaTimes />
                    </button>
                </div>

                <div className="modal-editar-body">
                    <div className="modal-editar-info">
                        Editando inscrição de <strong>{inscrito?.nome}</strong>
                    </div>

                    <div className="modal-editar-grid">
                        <div className="modal-editar-field">
                            <label>Nome Completo *</label>
                            <input
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>

                        <div className="modal-editar-field">
                            <label>Celular *</label>
                            <input
                                type="text"
                                value={celular}
                                onChange={(e) => setCelular(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>

                        <div className="modal-editar-field">
                            <label>Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>

                        <div className="modal-editar-field">
                            <label>Primeira vez? *</label>
                            <select
                                value={primeiraVez ? 'sim' : 'nao'}
                                onChange={(e) => setPrimeiraVez(e.target.value === 'sim')}
                                disabled={isLoading}
                            >
                                <option value="nao">Não</option>
                                <option value="sim">Sim</option>
                            </select>
                        </div>

                        <div className="modal-editar-field">
                            <label>Local *</label>
                            <select
                                value={local}
                                onChange={(e) => setLocal(e.target.value)}
                                disabled={isLoading}
                            >
                                {LOCAIS.map((opt) => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                        </div>

                        <div className="modal-editar-field">
                            <label>Período *</label>
                            <select
                                value={periodo}
                                onChange={(e) => setPeriodo(e.target.value)}
                                disabled={isLoading}
                            >
                                <option value="">Selecione</option>
                                {PERIODOS.map((opt) => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                        </div>

                        <div className="modal-editar-field">
                            <label>Dias *</label>
                            <select
                                value={dias}
                                onChange={(e) => setDias(e.target.value)}
                                disabled={isLoading}
                            >
                                <option value="">Selecione</option>
                                {DIAS.map((opt) => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                        </div>

                        <div className="modal-editar-field">
                            <label>Situação *</label>
                            <select
                                value={situacao}
                                onChange={(e) => setSituacao(e.target.value)}
                                disabled={isLoading}
                                className="modal-editar-select-situacao"
                            >
                                {SITUACOES.map((opt) => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                        </div>

                        <div className="modal-editar-field modal-editar-field-checkbox">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={foiChamado}
                                    onChange={(e) => setFoiChamado(e.target.checked)}
                                    disabled={isLoading}
                                />
                                Já foi chamado para alguma turma
                            </label>
                        </div>
                    </div>

                    {erro && <div className="modal-editar-erro">{erro}</div>}
                </div>

                <div className="modal-editar-footer">
                    <button className="modal-editar-btn-cancelar" onClick={onClose} disabled={isLoading}>
                        Cancelar
                    </button>
                    <button className="modal-editar-btn-salvar" onClick={salvarEdicao} disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <FaSpinner className="spin-animation" /> Salvando...
                            </>
                        ) : (
                            'Salvar Alterações'
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
