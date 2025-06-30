import { useState } from 'react'
import axios from 'axios'
import Header from "../../header";
import Footer from "../../footer/footer";
import "./Requerimento.css";
import { FiUpload } from "react-icons/fi";
import { ClipLoader } from 'react-spinners';

export default function Requerimento() {
    const [dados, setDados] = useState({
        nome: '',
        cpf: '',
        email: '',
        telefone: '',
        endereco: '',
        cidade: '',
        estado: '',
        cep: '',
        curso: '',
        envio: '',
        requerimento: '',
        rg: null,
        cpfDoc: null,
        certidao: null,
        procuracao: null,
        declaracao: false
    });

    const [loading, setLoading] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    function submit(e) {
        e.preventDefault();

        if (!dados.declaracao) {
            alert("Por favor confirme a declaração de responsabilidade");
            return;
        }

        setLoading(true);

        const formData = new FormData();
        formData.append('nome', dados.nome);
        formData.append('cpf', dados.cpf);
        formData.append('email', dados.email);
        formData.append('telefone', dados.telefone);
        formData.append('endereco', dados.endereco);
        formData.append('cidade', dados.cidade);
        formData.append('estado', dados.estado);
        formData.append('cep', dados.cep);
        formData.append('curso', dados.curso);
        formData.append('envio', dados.envio);
        formData.append('requerimento', dados.requerimento);
        formData.append('declaracao', dados.declaracao);

        if (dados.rg) formData.append('rg', dados.rg);
        if (dados.cpfDoc) formData.append('cpfDoc', dados.cpfDoc);
        if (dados.certidao) formData.append('certidao', dados.certidao);
        if (dados.procuracao) formData.append('procuracao', dados.procuracao);

        axios.post('https://back-end-fundesj.onrender.com/enviar-requerimento', formData)
            .then(response => {
                setSubmitSuccess(true);
                console.log(response.data);
            })
            .catch(error => {
                alert('Erro ao enviar requerimento. Por favor, tente novamente.');
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    if (submitSuccess) {
        return (
            <>
                <Header />
                <div className="requerimento-container">
                    <div className="success-message">
                        <h2>Requerimento Enviado com Sucesso!</h2>
                        <p>Seu requerimento foi recebido e será processado em breve.</p>
                        <p>Você receberá um e-mail de confirmação em breve.</p>
                        <button 
                            className="back-button"
                            onClick={() => setSubmitSuccess(false)}
                        >
                            Enviar Novo Requerimento
                        </button>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="requerimento-container">
                <div className="requerimento-wrapper">
                    <div className="requerimento-header">
                        <h1 className="requerimento-title">Requerimento de Certificado</h1>
                        <p className="requerimento-subtitle">Preencha o formulário abaixo para solicitar seu certificado</p>
                    </div>

                    <form className="requerimento-form" onSubmit={submit}>
                        <div className="form-grid">
                            <div className="form-group">
                                <label className="form-label" htmlFor="nome">Nome Completo<span className="required-marker">*</span></label>
                                <input
                                    type="text"
                                    id="nome"
                                    className="form-control"
                                    placeholder="Digite seu nome completo"
                                    required
                                    value={dados.nome}
                                    onChange={(e) => setDados({ ...dados, nome: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="cpfTexto">CPF<span className="required-marker">*</span></label>
                                <input
                                    type="text"
                                    id="cpfTexto"
                                    className="form-control"
                                    placeholder="000.000.000-00"
                                    required
                                    value={dados.cpf}
                                    onChange={(e) => setDados({ ...dados, cpf: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="email">E-mail<span className="required-marker">*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="seu@email.com"
                                    required
                                    value={dados.email}
                                    onChange={(e) => setDados({ ...dados, email: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="telefone">Telefone<span className="required-marker">*</span></label>
                                <input
                                    type="tel"
                                    id="telefone"
                                    className="form-control"
                                    placeholder="(00) 00000-0000"
                                    required
                                    value={dados.telefone}
                                    onChange={(e) => setDados({ ...dados, telefone: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="endereco">Endereço Completo</label>
                            <input
                                type="text"
                                id="endereco"
                                className="form-control"
                                placeholder="Rua, número, complemento"
                                value={dados.endereco}
                                onChange={(e) => setDados({ ...dados, endereco: e.target.value })}
                            />
                        </div>

                        <div className="form-grid">
                            <div className="form-group">
                                <label className="form-label" htmlFor="cidade">Cidade</label>
                                <input
                                    type="text"
                                    id="cidade"
                                    className="form-control"
                                    placeholder="Sua cidade"
                                    value={dados.cidade}
                                    onChange={(e) => setDados({ ...dados, cidade: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="estado">Estado</label>
                                <select
                                    id="estado"
                                    className="form-control"
                                    value={dados.estado}
                                    onChange={(e) => setDados({ ...dados, estado: e.target.value })}
                                    required
                                >
                                    <option value="">Selecione</option>
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="cep">CEP</label>
                                <input
                                    type="text"
                                    id="cep"
                                    className="form-control"
                                    placeholder="00000-000"
                                    value={dados.cep}
                                    onChange={(e) => setDados({ ...dados, cep: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="curso">Curso<span className="required-marker">*</span></label>
                                <select
                                    id="curso"
                                    className="form-control"
                                    required
                                    value={dados.curso}
                                    onChange={(e) => setDados({ ...dados, curso: e.target.value })}
                                >
                                    <option value="">Selecione seu curso</option>
                                    <option value="adm">Administração</option>
                                    <option value="ads">Análise e Desenvolvimento de Sistemas</option>
                                    <option value="Ciências Contábeis">Ciências Contábeis</option>
                                    <option value="pedagogia">Pedagogia</option>
                                    <option value="Ciências da Religião">Ciências da Religião</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Forma de Recebimento<span className="required-marker">*</span></label>
                            <div className="radio-group">
                                <label className="radio-option">
                                    <input
                                        type="radio"
                                        name="envio"
                                        value="email"
                                        className="radio-input"
                                        required
                                        onChange={(e) => setDados({ ...dados, envio: e.target.value })}
                                    />
                                    <span>Receber por E-mail</span>
                                </label>
                                <label className="radio-option">
                                    <input
                                        type="radio"
                                        name="envio"
                                        value="secretaria"
                                        className="radio-input"
                                        onChange={(e) => setDados({ ...dados, envio: e.target.value })}
                                    />
                                    <span>Retirar na Secretaria</span>
                                </label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="requerimento">Tipo de Requerimento<span className="required-marker">*</span></label>
                            <select
                                id="requerimento"
                                className="form-control"
                                required
                                value={dados.requerimento}
                                onChange={(e) => setDados({ ...dados, requerimento: e.target.value })}
                            >
                                <option value="">Selecione o tipo</option>
                                <option value="2ª Via de Histórico Escolar">2ª Via de Histórico Escolar</option>
                                <option value="diploma">Diploma</option>
                                <option value="Certificado de curso de pós-graduação">Certificado de curso de pós-graduação</option>
                                <option value="Certificados(Palestras/Cursos)">Certificados(Palestras/Cursos)</option>
                                <option value="Ementa de Disciplinas">Ementa de Disciplinas</option>
                            </select>
                        </div>

                        <h3 className="form-section-title">Documentos Necessários</h3>
                        <div className="form-grid">
                            <div className="form-group">
                                <label className="form-label">Carteira de Identidade (RG)<span className="required-marker">*</span></label>
                                <div className="file-upload">
                                    <input
                                        type="file"
                                        id="rg"
                                        className="file-input"
                                        required
                                        onChange={(e) => setDados({ ...dados, rg: e.target.files[0] })}
                                    />
                                    <label htmlFor="rg" className="file-label">
                                        <FiUpload className="file-icon" />
                                        <span>Selecionar arquivo</span>
                                    </label>
                                    <div className="file-name">
                                        {dados.rg ? dados.rg.name : "Nenhum arquivo selecionado"}
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">CPF (se não constar no RG)</label>
                                <div className="file-upload">
                                    <input
                                        type="file"
                                        id="cpfArquivo"
                                        className="file-input"
                                        onChange={(e) => setDados({ ...dados, cpfDoc: e.target.files[0] })}
                                    />
                                    <label htmlFor="cpfArquivo" className="file-label">
                                        <FiUpload className="file-icon" />
                                        <span>Selecionar arquivo</span>
                                    </label>
                                    <div className="file-name">
                                        {dados.cpfDoc ? dados.cpfDoc.name : "Nenhum arquivo selecionado"}
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Certidão de Nascimento<span className="required-marker">*</span></label>
                                <div className="file-upload">
                                    <input
                                        type="file"
                                        id="certidao"
                                        className="file-input"
                                        required
                                        onChange={(e) => setDados({ ...dados, certidao: e.target.files[0] })}
                                    />
                                    <label htmlFor="certidao" className="file-label">
                                        <FiUpload className="file-icon" />
                                        <span>Selecionar arquivo</span>
                                    </label>
                                    <div className="file-name">
                                        {dados.certidao ? dados.certidao.name : "Nenhum arquivo selecionado"}
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Procuração (se aplicável)</label>
                                <div className="file-upload">
                                    <input
                                        type="file"
                                        id="procuracao"
                                        className="file-input"
                                        onChange={(e) => setDados({ ...dados, procuracao: e.target.files[0] })}
                                    />
                                    <label htmlFor="procuracao" className="file-label">
                                        <FiUpload className="file-icon" />
                                        <span>Selecionar arquivo</span>
                                    </label>
                                    <div className="file-name">
                                        {dados.procuracao ? dados.procuracao.name : "Opcional"}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="declaration-box">
                            <div className="declaration-content">
                                <input
                                    type="checkbox"
                                    id="declaracao"
                                    required
                                    onChange={(e) => setDados({ ...dados, declaracao: e.target.checked })}
                                />
                                <label htmlFor="declaracao" className="declaration-text">
                                    Declaro que assumo inteira responsabilidade pelas informações prestadas e pela autenticidade das cópias dos documentos, estando ciente de que a falsidade nas informações acima implicará nas penalidades cabíveis.
                                </label>
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className="submit-button"
                            disabled={loading}
                        >
                            {loading ? (
                                <ClipLoader color="#ffffff" size={20} />
                            ) : (
                                "Enviar Requerimento"
                            )}
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}