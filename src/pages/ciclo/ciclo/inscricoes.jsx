import { useEffect, useState } from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer/footer";
import axios from "axios";
import "./inscricoes.css";

export default function Inscricoes() {
    const [titulo, setTitulo] = useState('');
    const [local, setLocal] = useState('');
    const [data, setData] = useState('');
    const [horario, setHorario] = useState('');
    const [palestrante, setPalestrante] = useState('');
    const [projeto, setProjeto] = useState('');
    const [subTitulo, setSubTitulo] = useState('');
    const [foto, setFoto] = useState('');

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [comoConheceu, setComoConheceu] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [carregando, setCarregando] = useState(false);

    useEffect(() => {
        buscarEvento();
    }, []);

    async function buscarEvento() {
        try {
            const retorno = await axios.post('https://back-end-fundesj.onrender.com/eventos/ativa', {
                projeto: "Ciclo de palestras"
            });

            const evento = retorno.data.consulta;
            const dataOriginal = evento.data;
            const dataEvento = new Date(dataOriginal);
            const hoje = new Date();

            const dataEventoSemHora = new Date(dataEvento.getFullYear(), dataEvento.getMonth(), dataEvento.getDate());
            const hojeSemHora = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());

            if (dataEventoSemHora.getTime() < hojeSemHora.getTime()) {
                setMensagem("Não há palestras para se inscrever no momento");
                return;
            }

            const dataFormatada = dataOriginal.split("T")[0].split("-").reverse().join("/");

            let horarioFormatado = evento.horario;
            if (horarioFormatado.includes(':')) {
                horarioFormatado = horarioFormatado.slice(0, 5);
            }

            setProjeto(evento.projeto);
            setTitulo(evento.titulo);
            setSubTitulo(evento.subTitulo);
            setLocal(evento.local);
            setData(dataFormatada);
            setHorario(horarioFormatado);
            setPalestrante(evento.palestrante);
            setFoto(evento.foto);

        } catch (erro) {
            console.log(erro);
            setMensagem("Não há palestras para se inscrever no momento");
        }
    }


    async function inscrever() {
        setMensagem('');
        setCarregando(true);

        if (!nome || !email || !telefone || !titulo || !comoConheceu) {
            setMensagem("Por favor, preencha todos os campos obrigatórios");
            setCarregando(false);
            return;
        }

        try {
            await axios.post('https://back-end-fundesj.onrender.com/inscrever', {
                nome,
                email,
                telefone,
                titulo,
                comoConheceu
            });

            setMensagem("Inscrição realizada com sucesso!");
            setNome('');
            setEmail('');
            setTelefone('');
            setComoConheceu('');
        } catch (erro) {
            console.log(erro);
            setMensagem("Você já está Inscrito neste evento");
        } finally {
            setCarregando(false);
            setTimeout(() => setMensagem(''), 5000);
        }
    }

    return (
        <>
            <div className="page-container">
                <Header />
                <div className="inscricoes-container main-content">
                    <div className="inscricoes-header">
                        <h1 className="inscricoes-title">Inscrição no Ciclo de Palestras</h1>
                        <p className="inscricoes-subtitle">Preencha o formulário abaixo para garantir sua vaga</p>
                    </div>

                    {titulo && !mensagem ? (
                        <div className="evento-card">
                            {foto && (
                                <div className="evento-imagem-container">
                                    <img
                                        src={foto}
                                        alt={`Imagem do evento ${titulo}`}
                                        className="evento-imagem"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://via.placeholder.com/800x400?text=Imagem+do+Evento";
                                        }}
                                    />
                                </div>
                            )}

                            <div className="evento-detalhes">
                                <h2 className="evento-titulo">{titulo}</h2>
                                {subTitulo && <p className="evento-subtitulo">{subTitulo}</p>}

                                <div className="evento-info">
                                    <div className="evento-info-item">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        <span>{local}</span>
                                    </div>

                                    <div className="evento-info-item">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="16" y1="2" x2="16" y2="6"></line>
                                            <line x1="8" y1="2" x2="8" y2="6"></line>
                                            <line x1="3" y1="10" x2="21" y2="10"></line>
                                        </svg>
                                        <span>{data} às {horario}</span>
                                    </div>

                                    {palestrante && (
                                        <div className="evento-info-item">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="9" cy="7" r="4"></circle>
                                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                            </svg>
                                            <span>Palestrante: {palestrante}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        !mensagem && <p className="carregando">Carregando informações do evento...</p>
                    )}

                    {!mensagem ? (
                        <div className="inscricao-form">
                            <h3>Formulário de Inscrição</h3>

                            <div className="form-group">
                                <label htmlFor="nome" className="form-label">Nome Completo*</label>
                                <input
                                    type="text"
                                    id="nome"
                                    className="form-input"
                                    placeholder="Digite seu nome completo"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="form-label">E-mail*</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-input"
                                    placeholder="Digite seu e-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="telefone" className="form-label">Telefone*</label>
                                <input
                                    type="tel"
                                    id="telefone"
                                    className="form-input"
                                    placeholder="(00) 00000-0000"
                                    value={telefone}
                                    onChange={(e) => setTelefone(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="comoConheceu" className="form-label">Como você conheceu o evento?*</label>

                                <select id="comoConheceu"
                                    className="form-input"
                                    value={comoConheceu}
                                    onChange={(e) => setComoConheceu(e.target.value)}
                                    required
                                >
                                    <option value="">Selecione</option>
                                    <option value="Amigos">Amigos</option>
                                    <option value="Instagram">Instragram</option>
                                    <option value="Facebook">Facebook</option>
                                    <option value="Televisão">Televisão</option>
                                    <option value="Outros">Outros</option>
                                </select>
                            </div>

                            <button
                                className="form-button"
                                onClick={inscrever}
                                disabled={carregando}
                            >
                                {carregando ? (
                                    <>
                                        <div className="loading-spinner">
                                        </div>
                                        <span>Carregando....</span>
                                    </>
                                ) : (
                                    "Confirmar Inscrição"
                                )}
                            </button>
                            {mensagem && (
                                <div className={`mensagem ${mensagem.includes("sucesso") ? "sucesso" : "erro"}`}>
                                    {mensagem}
                                </div>
                            )}
                        </div>
                    ) : (
                        <p className="mensagem erro">{mensagem}</p>
                    )}

                </div>
            </div>
            <Footer />
        </>
    );
}