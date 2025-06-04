import React, { useState, useEffect } from 'react';
import './Eventos.css';
import ModalEvento from './modal/ModalEvento';
import axios from 'axios';
export default function Eventos() {
    const [modalOpen, setModalOpen] = useState(false);
    const [eventos, setEventos] = useState([])

    useEffect(()=>{
        listarEventos();
    }, [])
    async function listarEventos() {
        const token = localStorage.getItem("authToken");
        try {
            const retorno = await axios.get('https://back-end-fundesj.onrender.com/eventos', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setEventos(retorno.data.Eventos)
        } catch (erro) {
            console.log(erro)
        }
    }
    return (
        <div className="eventos-container">
            <div className="eventos-header">
                <h1>Gerenciar Eventos</h1>
                <p>Visualize e gerencie todos os eventos do sistema.</p>
            </div>

            <button
                className="btn-criar-evento"
                onClick={() => setModalOpen(true)}
            >
                Criar novo evento
            </button>

            <div className="tabela-container">
                <table className="eventos-table">
                    <tbody>
                        {eventos.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="sem-dados">Nenhuma inscrição encontrada</td>
                            </tr>
                        ) : (
                            eventos.map((evento, index) => (
                                <tr key={index}>
                                    <td className="nome">{evento.titulo}</td>
                                    <td className="email">{evento.palestrante}</td>
                                    <td>{evento.data}</td>
                                    <td>{evento.projeto || "N/A"}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <ModalEvento
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
            />
        </div>
    );
}