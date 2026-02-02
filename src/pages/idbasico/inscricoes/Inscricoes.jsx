import './inscricoes.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Inscricoes() {
    const [formData, setFormData] = useState({
        nomeCompleto: '',
        dataNascimento: '',
        celular: '',
        email: '',
        primeira_vez: null,
        localAula: '',
        horarioAula: ''
    })

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [submissionStatus, setSubmissionStatus] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {
        const { name, value, type } = e.target

        if (name === 'primeira_vez') {
            setFormData(prev => ({
                ...prev,
                primeira_vez: value === 'true'
            }))
            return
        }

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Validação dos campos obrigatórios
        if (!formData.nomeCompleto || !formData.dataNascimento || !formData.celular ||
            formData.primeira_vez === null || !formData.localAula || !formData.horarioAula) {
            setSubmissionStatus('error')
            setErrorMessage('Preencha todos os campos obrigatórios.')
            return
        }

        setIsLoading(true)
        setSubmissionStatus(null)

        const data = new FormData()
        data.append('nome', formData.nomeCompleto)
        data.append('nascimento', formData.dataNascimento)
        data.append('celular', formData.celular)
        data.append('email', formData.email)
        data.append('primeira_vez', formData.primeira_vez)
        data.append('local_aula', formData.localAula)
        data.append('horario_aula', formData.horarioAula)

        try {
            // Simula tempo de processamento
            await new Promise(resolve => setTimeout(resolve, 1500))

            await axios.post('https://back-end-fundesj.onrender.com/idbasico', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })

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
            localAula: '',
            horarioAula: ''
        })
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

                        {/* Overlay de carregamento */}
                        {isLoading && (
                            <div className="loading-overlay">
                                <div className="loading-content">
                                    <div className="loading-spinner"></div>
                                    <h3 className="loading-title">Enviando sua inscrição...</h3>
                                    <p className="loading-text">Aguarde enquanto processamos suas informações.</p>
                                </div>
                            </div>
                        )}

                        {/* Mensagem de sucesso temporária */}
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

                        {/* Mensagem de erro */}
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
                                    className="form-input"
                                    required
                                    disabled={isLoading}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="dataNascimento">Data de Nascimento *</label>
                                <input
                                    type="date"
                                    id="dataNascimento"
                                    name="dataNascimento"
                                    value={formData.dataNascimento}
                                    onChange={handleChange}
                                    className="form-input"
                                    required
                                    disabled={isLoading}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="celular">Celular *</label>
                                <input
                                    type="tel"
                                    id="celular"
                                    name="celular"
                                    value={formData.celular}
                                    onChange={handleChange}
                                    placeholder="(00) 00000-0000"
                                    className="form-input"
                                    required
                                    disabled={isLoading}
                                />
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
                                    className="form-input"
                                    disabled={isLoading}
                                />
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
                                            name="localAula"
                                            value="estacio"
                                            checked={formData.localAula === 'estacio'}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                            required
                                        />
                                        <div className="radio-custom"></div>
                                        Estácio de SC
                                    </label>
                                    <label className={`radio-option ${isLoading ? 'disabled' : ''}`}>
                                        <input
                                            type="radio"
                                            name="localAula"
                                            value="cati"
                                            checked={formData.localAula === 'cati'}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                            required
                                        />
                                        <div className="radio-custom"></div>
                                        CATI (Centro de Atenção à Terceira Idade)
                                    </label>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="horarioAula">Horário preferível de aula *</label>
                                <div className="radio-group">
                                    <label className={`radio-option ${isLoading ? 'disabled' : ''}`}>
                                        <input
                                            type="radio"
                                            name="horarioAula"
                                            value="matutino"
                                            checked={formData.horarioAula === 'matutino'}
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
                                            name="horarioAula"
                                            value="vespertino"
                                            checked={formData.horarioAula === 'vespertino'}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                            required
                                        />
                                        <div className="radio-custom"></div>
                                        Vespertino (14h às 16h)
                                    </label>
                                </div>
                            </div>

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
                            <p><strong>Local preferido:</strong> {formData.localAula === 'estacio' ? 'Estácio de SC' : 'CATI'}</p>
                            <p><strong>Horário preferido:</strong> {formData.horarioAula === 'matutino' ? 'Matutino (9h às 11h)' : 'Vespertino (14h às 16h)'}</p>
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