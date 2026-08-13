import './inscricoes.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// Expressões regulares para validação dos campos
const REGEX = {
    // Nome: letras (com acentos), espaços, mínimo 3 caracteres, primeiro/último não-vazio
    nome: /^[A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ\s'.-]*[A-Za-zÀ-ÖØ-öø-ÿ]$/,

    // Data de nascimento DD/MM/AAAA (validação de faixa é feita em validarDataNascimento)
    dataTexto: /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,

    // Celular com DDD + 9 dígitos: (00) 00000-0000
    celular: /^\(\d{2}\)\s9\d{4}-\d{4}$/,

    // Email no formato padrão
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

// Aplica a máscara (00) 00000-0000 ao celular conforme o usuário digita
function aplicarMascaraCelular(valor) {
    const digitos = (valor || '').replace(/\D/g, '').slice(0, 11);
    if (digitos.length === 0) return '';
    if (digitos.length <= 2) return `(${digitos}`;
    if (digitos.length <= 7) return `(${digitos.slice(0, 2)}) ${digitos.slice(2)}`;
    return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 7)}-${digitos.slice(7)}`;
}

// Aplica a máscara DD/MM/AAAA conforme o usuário digita
function aplicarMascaraData(valor) {
    const digitos = (valor || '').replace(/\D/g, '').slice(0, 8);
    if (digitos.length === 0) return '';
    if (digitos.length <= 2) return digitos;
    if (digitos.length <= 4) return `${digitos.slice(0, 2)}/${digitos.slice(2)}`;
    return `${digitos.slice(0, 2)}/${digitos.slice(2, 4)}/${digitos.slice(4)}`;
}

// Converte a data DD/MM/AAAA para YYYY-MM-DD (formato aceito pelo backend)
function dataTextoParaIso(dataTexto) {
    if (!REGEX.dataTexto.test(dataTexto)) return '';
    const [dia, mes, ano] = dataTexto.split('/');
    return `${ano}-${mes}-${dia}`;
}

// Valida se a data de nascimento é coerente (idade mínima 60 anos, não futura)
function validarDataNascimento(dataTexto) {
    if (!REGEX.dataTexto.test(dataTexto)) {
        return 'Data inválida. Use o formato DD/MM/AAAA.';
    }
    const [dia, mes, ano] = dataTexto.split('/').map(Number);
    const data = new Date(ano, mes - 1, dia);
    if (data.getFullYear() !== ano || data.getMonth() !== mes - 1 || data.getDate() !== dia) {
        return 'Data inválida. Verifique o dia e o mês.';
    }
    const hoje = new Date();
    let idade = hoje.getFullYear() - ano;
    const fezAniversario = (hoje.getMonth() > mes - 1) ||
        (hoje.getMonth() === mes - 1 && hoje.getDate() >= dia);
    if (!fezAniversario) idade -= 1;
    if (idade < 60) return 'É necessário ter pelo menos 60 anos.';
    if (idade > 120) return 'Data de nascimento inválida.';
    if (data > hoje) return 'Data de nascimento não pode ser no futuro.';
    return '';
}

export default function Inscricoes() {
    const [formData, setFormData] = useState({
        nomeCompleto: '',
        dataNascimento: '',
        celular: '',
        email: '',
        primeira_vez: null,
        local: '',
        periodo: '',
        dias: ''
    })

    const [dataTexto, setDataTexto] = useState(''); // Estado separado para a data com máscara DD/MM/AAAA
    const [erros, setErros] = useState({});
    const [showErrors, setShowErrors] = useState(false);

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [submissionStatus, setSubmissionStatus] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target

        if (name === 'primeira_vez') {
            setFormData(prev => ({ ...prev, primeira_vez: value === 'true' }))
            return
        }

        // Se o local mudar, definir automaticamente o período e os dias quando aplicável
        if (name === 'local') {
            const locaisVespertinoFixo = ['UNISUL', 'UNIASSELVI']
            const diasFixosPorLocal = {
                UNISUL: 'Segunda e Quinta',
                UNIASSELVI: 'Terça e Quarta'
            }
            setFormData(prev => ({
                ...prev,
                [name]: value,
                periodo: locaisVespertinoFixo.includes(value) ? 'Vespertino' : prev.periodo,
                dias: diasFixosPorLocal[value] || prev.dias
            }))
            return
        }

        // Nome: aplica Regex (apenas letras, espaços e alguns caracteres válidos)
        if (name === 'nomeCompleto') {
            // Permite apenas letras (com acento), espaços, apóstrofo, hífen e ponto
            const valorLimpo = value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s'.-]/g, '');
            setFormData(prev => ({ ...prev, nomeCompleto: valorLimpo }));
            setErros(prev => ({ ...prev, nomeCompleto: '' }));
            return;
        }

        // Celular: aplica máscara automática (00) 00000-0000
        if (name === 'celular') {
            const celularFormatado = aplicarMascaraCelular(value);
            setFormData(prev => ({ ...prev, celular: celularFormatado }));
            setErros(prev => ({ ...prev, celular: '' }));
            return;
        }

        // Data: aplica máscara DD/MM/AAAA e mantém um estado visual paralelo
        if (name === 'dataNascimentoTexto') {
            const dataFormatada = aplicarMascaraData(value);
            setDataTexto(dataFormatada);
            setErros(prev => ({ ...prev, dataNascimento: '' }));
            // Atualiza o formData no formato YYYY-MM-DD para o backend
            if (dataFormatada.length === 10) {
                setFormData(prev => ({ ...prev, dataNascimento: dataTextoParaIso(dataFormatada) }));
            } else {
                setFormData(prev => ({ ...prev, dataNascimento: '' }));
            }
            return;
        }

        // Email: filtro básico enquanto digita (remove espaços)
        if (name === 'email') {
            const valorLimpo = value.replace(/\s/g, '');
            setFormData(prev => ({ ...prev, email: valorLimpo }));
            setErros(prev => ({ ...prev, email: '' }));
            return;
        }

        setFormData(prev => ({ ...prev, [name]: value }))
    }

    // Valida todos os campos via Regex
    function validarFormulario(dados) {
        const novosErros = {};

        // Nome Completo
        const nomeTrim = (dados.nomeCompleto || '').trim();
        if (!nomeTrim) {
            novosErros.nomeCompleto = 'Nome completo é obrigatório.';
        } else if (nomeTrim.length < 3) {
            novosErros.nomeCompleto = 'Nome muito curto.';
        } else if (!REGEX.nome.test(nomeTrim)) {
            novosErros.nomeCompleto = 'Use apenas letras e espaços.';
        }

        // Data de Nascimento
        const erroData = validarDataNascimento(dataTexto);
        if (erroData) {
            novosErros.dataNascimento = erroData;
        }

        // Celular
        if (!REGEX.celular.test(dados.celular || '')) {
            novosErros.celular = 'Celular inválido. Use o formato (00) 00000-0000.';
        }

        // Email (opcional, mas se preenchido deve ser válido)
        if (dados.email && !REGEX.email.test(dados.email)) {
            novosErros.email = 'Email inválido.';
        }

        return novosErros;
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setShowErrors(true);

        // Validação Regex de todos os campos
        const novosErros = validarFormulario(formData);
        if (Object.keys(novosErros).length > 0) {
            setErros(novosErros);
            setSubmissionStatus('error');
            setErrorMessage('Verifique os campos destacados e tente novamente.');
            return;
        }
        setErros({});

        // Validação dos campos obrigatórios (local, período, dias, primeira_vez)
        if (
            formData.primeira_vez === null ||
            !formData.local ||
            !formData.periodo ||
            !formData.dias
        ) {
            setSubmissionStatus('error');
            setErrorMessage('Preencha todos os campos obrigatórios.');
            return;
        }

        setIsLoading(true)
        setSubmissionStatus(null)

        // Garantir período Vespertino e dias fixos para locais sem escolha
        const locaisVespertinoFixo = ['UNISUL', 'UNIASSELVI']
        const diasFixosPorLocal = {
            UNISUL: 'Segunda e Quinta',
            UNIASSELVI: 'Terça e Quarta'
        }
        const dadosParaEnviar = {
            ...formData,
            periodo: locaisVespertinoFixo.includes(formData.local) ? 'Vespertino' : formData.periodo,
            dias: diasFixosPorLocal[formData.local] || formData.dias
        }

        try {
            await new Promise(resolve => setTimeout(resolve, 1500))

            await axios.post(
                'https://back-end-fundesj.onrender.com/inscritosId',
                {
                    nome: dadosParaEnviar.nomeCompleto,
                    nascimento: dadosParaEnviar.dataNascimento,
                    celular: dadosParaEnviar.celular,
                    email: dadosParaEnviar.email,
                    primeira_vez: dadosParaEnviar.primeira_vez,
                    local: dadosParaEnviar.local,
                    periodo: dadosParaEnviar.periodo,
                    dias: dadosParaEnviar.dias
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            setIsLoading(false)
            setSubmissionStatus('success')

            setTimeout(() => {
                setIsSubmitted(true)
            }, 2000)

        } catch (erro) {
            console.error(erro)
            setIsLoading(false)
            setSubmissionStatus('error')
            setErrorMessage('Erro ao enviar inscrição. Por favor, tente novamente.')
        }
    }

    const handleNewInscription = () => {
        setFormData({
            nomeCompleto: '',
            dataNascimento: '',
            celular: '',
            email: '',
            primeira_vez: null,
            local: '',
            periodo: '',
            dias: ''
        })
        setDataTexto('');
        setErros({});
        setShowErrors(false);
        setIsSubmitted(false)
        setSubmissionStatus(null)
        setErrorMessage('')
    }

    return (
        <div className="inscricoes-page">
            <section className="inscricoes-hero">
                <div className="inscricoes-hero-content">
                    <h1>Inscrição ID Básico</h1>
                    <p>Complete o formulário abaixo para iniciar seu processo de inscrição</p>
                </div>
            </section>

            <div className="form-container">
                {!isSubmitted ? (
                    <div className="form-card">
                        <h2>Formulário de Inscrição</h2>
                        <p className="form-description">
                            Preencha todos os campos abaixo com atenção. Os campos marcados com * são obrigatórios.
                        </p>

                        {isLoading && (
                            <div className="loading-overlay">
                                <div className="loading-content">
                                    <div className="loading-spinner"></div>
                                    <h3 className="loading-title">Enviando sua inscrição...</h3>
                                    <p className="loading-text">Aguarde enquanto processamos suas informações.</p>
                                </div>
                            </div>
                        )}

                        {submissionStatus === 'success' && !isLoading && (
                            <div className="success-overlay">
                                <div className="success-animation">
                                    <div className="success-checkmark">
                                        <div className="check-icon">
                                            <span className="icon-line line-tip"></span>
                                            <span className="icon-line line-long"></span>
                                            <div className="icon-circle"></div>
                                            <div className="icon-fix"></div>
                                        </div>
                                    </div>
                                    <h3 className="success-title-animation">Inscrição enviada!</h3>
                                    <p className="success-text">Redirecionando para confirmação...</p>
                                </div>
                            </div>
                        )}

                        {submissionStatus === 'error' && !isLoading && (
                            <div className="error-message">
                                <div className="error-icon">!</div>
                                <h3 className="error-title">Erro no envio</h3>
                                <p className="error-text">{errorMessage}</p>
                                <button
                                    onClick={() => setSubmissionStatus(null)}
                                    className="error-retry-btn"
                                >
                                    Tentar novamente
                                </button>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="inscricao-form">
                            <div className="form-group">
                                <label htmlFor="nomeCompleto">Nome Completo *</label>
                                <input
                                    type="text"
                                    id="nomeCompleto"
                                    name="nomeCompleto"
                                    value={formData.nomeCompleto}
                                    onChange={handleChange}
                                    placeholder="Digite seu nome completo"
                                    className={`form-input ${showErrors && erros.nomeCompleto ? 'form-input-error' : ''}`}
                                    required
                                    disabled={isLoading}
                                />
                                {showErrors && erros.nomeCompleto && (
                                    <span className="form-error-message">{erros.nomeCompleto}</span>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="dataNascimento">Data de Nascimento *</label>
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    id="dataNascimento"
                                    name="dataNascimentoTexto"
                                    value={dataTexto}
                                    onChange={handleChange}
                                    placeholder="DD/MM/AAAA"
                                    maxLength="10"
                                    className={`form-input ${showErrors && erros.dataNascimento ? 'form-input-error' : ''}`}
                                    required
                                    disabled={isLoading}
                                />
                                {showErrors && erros.dataNascimento && (
                                    <span className="form-error-message">{erros.dataNascimento}</span>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="celular">Celular *</label>
                                <input
                                    type="tel"
                                    inputMode="numeric"
                                    id="celular"
                                    name="celular"
                                    value={formData.celular}
                                    onChange={handleChange}
                                    placeholder="(00) 00000-0000"
                                    maxLength="15"
                                    className={`form-input ${showErrors && erros.celular ? 'form-input-error' : ''}`}
                                    required
                                    disabled={isLoading}
                                />
                                {showErrors && erros.celular && (
                                    <span className="form-error-message">{erros.celular}</span>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="seu.email@exemplo.com"
                                    className={`form-input ${showErrors && erros.email ? 'form-input-error' : ''}`}
                                    disabled={isLoading}
                                />
                                {showErrors && erros.email && (
                                    <span className="form-error-message">{erros.email}</span>
                                )}
                            </div>

                            <div className="form-group">
                                <label>É a primeira vez que participa? *</label>
                                <div className="radio-group">
                                    <label className={`radio-option ${isLoading ? 'disabled' : ''}`}>
                                        <input
                                            type="radio"
                                            name="primeira_vez"
                                            value="true"
                                            checked={formData.primeira_vez === true}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                            required
                                        />
                                        <div className="radio-custom"></div>
                                        <span>Sim</span>
                                    </label>

                                    <label className={`radio-option ${isLoading ? 'disabled' : ''}`}>
                                        <input
                                            type="radio"
                                            name="primeira_vez"
                                            value="false"
                                            checked={formData.primeira_vez === false}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                            required
                                        />
                                        <div className="radio-custom"></div>
                                        <span>Não</span>
                                    </label>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="localAula">Onde prefere assistir às aulas? *</label>
                                <div className="radio-group">
                                    <label className={`radio-option ${isLoading ? 'disabled' : ''}`}>
                                        <input
                                            type="radio"
                                            name="local"
                                            value="CATI"
                                            checked={formData.local === 'CATI'}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                            required
                                        />
                                        <div className="radio-custom"></div>
                                        <span>CATI — Centro de Atenção à Terceira Idade</span>
                                    </label>
                                    {/* 
                                    <label className={`radio-option ${isLoading ? 'disabled' : ''}`}>
                                        <input
                                            type="radio"
                                            name="local"
                                            value="UNISUL"
                                            checked={formData.local === 'UNISUL'}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                            required
                                        />
                                        <div className="radio-custom"></div>
                                        <span>UNISUL (Continente) — Vespertino 14h às 16h</span>
                                    </label>
                                    <label className={`radio-option ${isLoading ? 'disabled' : ''}`}>
                                        <input
                                            type="radio"
                                            name="local"
                                            value="UNIASSELVI"
                                            checked={formData.local === 'UNIASSELVI'}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                            required
                                        />
                                        <div className="radio-custom"></div>
                                        <span>UNIASSELVI (Forquilhas) — Vespertino 14h às 16h</span>
                                    </label>
                                    */}
                                </div>
                            </div>

                            {/* Campo de período - aparece apenas quando CATI é selecionado */}
                            {formData.local === 'CATI' && (
                                <div className="form-group">
                                    <label htmlFor="horarioAula">Horário preferível de aula *</label>
                                    <div className="radio-group">
                                        <label className={`radio-option ${isLoading ? 'disabled' : ''}`}>
                                            <input
                                                type="radio"
                                                name="periodo"
                                                value="Matutino"
                                                checked={formData.periodo === 'Matutino'}
                                                onChange={handleChange}
                                                disabled={isLoading}
                                                required
                                            />
                                            <div className="radio-custom"></div>
                                            Matutino (9h às 11h)
                                        </label>
                                        <label className={`radio-option ${isLoading ? 'disabled' : ''}`}>
                                            <input
                                                type="radio"
                                                name="periodo"
                                                value="Vespertino"
                                                checked={formData.periodo === 'Vespertino'}
                                                onChange={handleChange}
                                                disabled={isLoading}
                                                required
                                            />
                                            <div className="radio-custom"></div>
                                            Vespertino (14h às 16h)
                                        </label>
                                    </div>
                                </div>
                            )}

                            {/* Aviso de horário e dias fixos para UNISUL */}
                            {formData.local === 'UNISUL' && (
                                <div className="form-info-notice">
                                    <p><strong>Importante:</strong> Na UNISUL oferecemos turmas no período <strong>vespertino (14h às 16h)</strong>, às <strong>segundas e quintas-feiras</strong>.</p>
                                </div>
                            )}

                            {/* Aviso de horário e dias fixos para UNIASSELVI */}
                            {formData.local === 'UNIASSELVI' && (
                                <div className="form-info-notice">
                                    <p><strong>Importante:</strong> Na UNIASSELVI oferecemos turmas no período <strong>vespertino (14h às 16h)</strong>, às <strong>terças e quartas-feiras</strong>.</p>
                                </div>
                            )}

                            {/* Campo de dias - aparece apenas quando CATI é selecionado */}
                            {formData.local === 'CATI' && (
                                <div className="form-group">
                                    <label htmlFor="horarioAula">Quais dias você deseja? *</label>
                                    <div className="radio-group">
                                        <label className={`radio-option ${isLoading ? 'disabled' : ''}`}>
                                            <input
                                                type="radio"
                                                name="dias"
                                                value="Segunda e Quarta"
                                                checked={formData.dias === 'Segunda e Quarta'}
                                                onChange={handleChange}
                                                disabled={isLoading}
                                                required
                                            />
                                            <div className="radio-custom"></div>
                                            Segunda e Quarta
                                        </label>
                                        <label className={`radio-option ${isLoading ? 'disabled' : ''}`}>
                                            <input
                                                type="radio"
                                                name="dias"
                                                value="Terça e Quinta"
                                                checked={formData.dias === 'Terça e Quinta'}
                                                onChange={handleChange}
                                                disabled={isLoading}
                                                required
                                            />
                                            <div className="radio-custom"></div>
                                            Terça e Quinta
                                        </label>
                                    </div>
                                </div>
                            )}

                            <div className="form-info">
                                <p>
                                    <strong>Importante:</strong> Após o envio, sua inscrição será analisada pela equipe.
                                    Entraremos em contato logo para confirmação.
                                </p>
                            </div>

                            <button
                                type="submit"
                                className="submit-btn"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Enviando...' : 'Enviar Inscrição'}
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="success-card">
                        <div className="success-icon">✓</div>
                        <h2 className="success-title">Inscrição Enviada com Sucesso!</h2>

                        <div className="success-message">
                            Sua inscrição para o ID Básico foi recebida e está em processo de análise.
                        </div>

                        <div className="success-details">
                            <p><strong>Nome:</strong> {formData.nomeCompleto}</p>
                            <p><strong>Celular:</strong> {formData.celular}</p>
                            <p><strong>Local preferido:</strong> {formData.local === 'CATI' ? 'CATI (Centro de Atenção à Terceira Idade)' : formData.local === 'UNISUL' ? 'UNISUL (Continente)' : formData.local === 'UNIASSELVI' ? 'UNIASSELVI (Forquilhas)' : formData.local}</p>
                            <p><strong>Horário preferido:</strong> {formData.local === 'CATI' ? (formData.periodo === 'Matutino' ? 'Matutino (9h às 11h)' : 'Vespertino (14h às 16h)') : 'Vespertino (14h às 16h)'}</p>
                            <p><strong>Dias:</strong> {formData.local === 'UNISUL' ? 'Segunda e Quinta' : formData.local === 'UNIASSELVI' ? 'Terça e Quarta' : formData.dias}</p>
                            <p><strong>Data de envio:</strong> {new Date().toLocaleDateString('pt-BR')}</p>
                        </div>

                        <div className="success-actions">
                            <Link to="/" className="confirm-link">
                                <button className="confirm-btn">
                                    Voltar para a Página Inicial
                                </button>
                            </Link>

                            <button
                                onClick={handleNewInscription}
                                className="new-inscription-btn"
                            >
                                Nova Inscrição
                            </button>
                        </div>

                        <p className="success-footer">
                            Em caso de dúvidas, entre em contato através do nosso WhatsApp.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}