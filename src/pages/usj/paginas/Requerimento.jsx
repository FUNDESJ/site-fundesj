import Header from "../../header";
import Footer from "../../footer/footer";
import "./Requerimento.css";
import { FiUpload, FiCheck } from "react-icons/fi";

export default function Requerimento() {
    
    return (
        <>
            <Header />
            <div className="requerimento-container">
                <div className="requerimento-wrapper">
                    <div className="requerimento-header">
                        <h1 className="requerimento-title">Requerimento de Certificado</h1>
                        <p className="requerimento-subtitle">Preencha o formulário abaixo para solicitar seu certificado</p>
                    </div>

                    <form className="requerimento-form">
                        <div className="form-grid">
                            <div className="form-group">
                                <label className="form-label" htmlFor="nome">
                                    Nome Completo<span className="required-marker">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="nome"
                                    className="form-control"
                                    placeholder="Digite seu nome completo"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="cpf">
                                    CPF<span className="required-marker">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="cpf"
                                    className="form-control"
                                    placeholder="000.000.000-00"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="email">
                                    E-mail<span className="required-marker">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="seu@email.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="telefone">
                                    Telefone<span className="required-marker">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="telefone"
                                    className="form-control"
                                    placeholder="(00) 00000-0000"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="endereco">
                                Endereço Completo
                            </label>
                            <input
                                type="text"
                                id="endereco"
                                className="form-control"
                                placeholder="Rua, número, complemento"
                            />
                        </div>

                        <div className="form-grid">
                            <div className="form-group">
                                <label className="form-label" htmlFor="cidade">
                                    Cidade
                                </label>
                                <input
                                    type="text"
                                    id="cidade"
                                    className="form-control"
                                    placeholder="Sua cidade"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="estado">
                                    Estado
                                </label>
                                <select id="estado" className="form-control">
                                    <option value="">Selecione</option>
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    {/* Adicione todos os estados */}
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="cep">
                                    CEP
                                </label>
                                <input
                                    type="text"
                                    id="cep"
                                    className="form-control"
                                    placeholder="00000-000"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="curso">
                                    Curso<span className="required-marker">*</span>
                                </label>
                                <select id="curso" className="form-control" required>
                                    <option value="">Selecione seu curso</option>
                                    <option value="1">Administração</option>
                                    <option value="2">Análise e Desenvolvimento de Sistemas</option>
                                    <option value="3">Ciências Contábeis</option>
                                    <option value="3">Pedagogia</option>
                                    <option value="3">Ciências da Religião</option>

                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                Forma de Recebimento<span className="required-marker">*</span>
                            </label>
                            <div className="radio-group">
                                <label className="radio-option">
                                    <input
                                        type="radio"
                                        name="envio"
                                        value="email"
                                        className="radio-input"
                                        required
                                    />
                                    <span>Receber por E-mail</span>
                                </label>
                                <label className="radio-option">
                                    <input
                                        type="radio"
                                        name="envio"
                                        value="secretaria"
                                        className="radio-input"
                                    />
                                    <span>Retirar na Secretaria</span>
                                </label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="requerimento">
                                Tipo de Requerimento<span className="required-marker">*</span>
                            </label>
                            <select id="requerimento" className="form-control" required>
                                <option value="">Selecione o tipo</option>
                                <option value="historico">2ª Via de Histórico Escolar</option>
                                <option value="diploma">Diploma</option>
                                <option value="certificado">Certificado de curso de pós-graduação</option>
                                <option value="certificado">Certificados (Palestras/Cursos)</option>
                                <option value="certificado">Ementas de Disciplinas</option>
                            </select>
                        </div>

                        <h3 className="form-section-title">Documentos Necessários</h3>

                        <div className="form-grid">
                            <div className="form-group">
                                <label className="form-label">
                                    Carteira de Identidade (RG)<span className="required-marker">*</span>
                                </label>
                                <div className="file-upload">
                                    <input type="file" id="rg" className="file-input" required />
                                    <label htmlFor="rg" className="file-label">
                                        <FiUpload className="file-icon" />
                                        <span> Selecionar arquivo</span>
                                    </label>
                                    <div className="file-name">Nenhum arquivo selecionado</div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    CPF (se não constar no RG)<span className="required-marker">*</span>
                                </label>
                                <div className="file-upload">
                                    <input type="file" id="cpf" className="file-input" required />
                                    <label htmlFor="cpf" className="file-label">
                                        <FiUpload className="file-icon" />
                                        <span> Selecionar arquivo</span>
                                    </label>
                                    <div className="file-name">Nenhum arquivo selecionado</div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    Certidão de Nascimento/Casamento<span className="required-marker">*</span>
                                </label>
                                <div className="file-upload">
                                    <input type="file" id="certidao" className="file-input" required />
                                    <label htmlFor="certidao" className="file-label">
                                        <FiUpload className="file-icon" />
                                        <span> Selecionar arquivo</span>
                                    </label>
                                    <div className="file-name">Nenhum arquivo selecionado</div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    Procuração (se aplicável)
                                </label>
                                <div className="file-upload">
                                    <input type="file" id="procuracao" className="file-input" />
                                    <label htmlFor="procuracao" className="file-label">
                                        <FiUpload className="file-icon" />
                                        <span> Selecionar arquivo</span>
                                    </label>
                                    <div className="file-name">Opcional</div>
                                </div>
                            </div>
                        </div>

                        <div className="declaration-box">
                            <div className="declaration-content">
                                <input type="checkbox" id="declaracao" required />
                                <label htmlFor="declaracao" className="declaration-text">
                                    Declaro que assumo inteira responsabilidade pelas informações prestadas e pela
                                    autenticidade das cópias dos documentos, estando ciente de que a falsidade nas
                                    informações acima implicará nas penalidades cabíveis.
                                </label>
                            </div>
                        </div>

                        <button type="submit" className="submit-button">
                            Enviar Requerimento
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}