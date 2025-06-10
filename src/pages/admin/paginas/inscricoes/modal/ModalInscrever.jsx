import React, { useState } from "react";
import "./ModalPalestras.css";
import axios from "axios";

export default function ModalInscritos({ isOpen, onClose }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [titulo, setTitulo] = useState('');
    const [comoConheceu, setComoConheceu] = useState('');

    async function criarInscricao() {
        if (!nome || !email || !telefone || !titulo || !comoConheceu) {
            return alert("Complete todos os campos corretamente");
        }
        try {
            await axios.post('https://back-end-fundesj.onrender.com/inscrever', {
                nome,
                email,
                telefone,
                titulo,
                comoConheceu
            });
            onClose();
            console.log("Inscrição concluída com sucesso");
        } catch (erro) {
            console.log(erro);
        }
    }

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>Criar Inscrição</h3>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label>Nome</label>
                        <input
                            type="text"
                            placeholder="Digite seu nome completo"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="text"
                            placeholder="Digite o seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Telefone</label>
                        <input
                            type="text"
                            placeholder="(**)*****-****"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Nome do evento</label>
                        <input
                            type="text"
                            placeholder="Digite o nome do evento"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Como conheceu</label>
                        <input
                            type="text"
                            placeholder="Como você conheceu o evento?"
                            value={comoConheceu}
                            onChange={(e) => setComoConheceu(e.target.value)}
                        />
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancelar" onClick={onClose}>Cancelar</button>
                    <button className="btn-salvar" onClick={criarInscricao}>Criar Inscrição</button>
                </div>
            </div>
        </div>
    );
}
