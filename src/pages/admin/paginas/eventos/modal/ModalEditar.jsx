import { useState, useEffect } from "react";
import axios from 'axios';

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
    }, [tarefa])

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
            onClose()

        }catch(erro){
            console.log("Erro ao editar evento", erro);
        }
    }
    async function ativarEvento(){
        const token = localStorage.getItem('authToken');
        try{
            await axios.put('https://back-end-fundesj.onrender.com/eventos', {
                ativa: ativa ? true : false
            },{
                headers: {Authorization: `Bearer ${token}`}
            })
            ativarEvento();
            onClose();
        }catch(erro){
            console.log("Não consegui ativar a o evento", erro)
        }
    }
    if(!isOpen) return null;


}