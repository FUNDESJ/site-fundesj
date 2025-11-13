import './inscricoes.css'
import { useState } from 'react'

export default function Inscricoes() {
    const [formData, setFormData] = useState({
        nomeCompleto: '',
        dataNascimento: '',
        celular: '',
        email: '', // Agora opcional
        cursoAnterior: '',
        documentoFoto: null, // Novo campo
        comprovanteResidencia: null // Novo campo
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        
        if (type === 'file') {
            setFormData(prevState => ({
                ...prevState,
                [name]: files[0] || null
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validação dos campos obrigatórios (exceto email)
        if (!formData.nomeCompleto || !formData.dataNascimento || !formData.celular || !formData.cursoAnterior || !formData.documentoFoto || !formData.comprovanteResidencia) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Aqui você pode adicionar a lógica para enviar os dados
        console.log('Dados do formulário:', formData);
        alert('Inscrição enviada com sucesso! Entraremos em contato em breve.');
        
        // Limpar formulário após envio
        setFormData({
            nomeCompleto: '',
            dataNascimento: '',
            celular: '',
            email: '',
            cursoAnterior: '',
            documentoFoto: null,
            comprovanteResidencia: null
        });

        // Limpar os inputs de arquivo
        const fileInputs = document.querySelectorAll('input[type="file"]');
        fileInputs.forEach(input => input.value = '');
    };

    return (
        <div className="inscricoes-page">
            <div className="inscricoes-hero">
                <div className="inscricoes-hero-content">
                    <h1>Inscrições Inclusão Digital 2026</h1>
                    <p>Curso Básico de Inclusão Digital para a Melhor Idade</p>
                </div>
            </div>

            <div className="form-container">
                <div className="form-card">
                    <h2>Formulário de Inscrição</h2>
                    <p className="form-description">
                        Preencha todos os campos abaixo com suas informações para garantir sua vaga no curso. 
                        <span className="required-notice"> Campos marcados com * são obrigatórios.</span>
                    </p>

                    <form onSubmit={handleSubmit} className="inscricao-form">
                        <div className="form-group">
                            <label htmlFor="nomeCompleto">Nome Completo *</label>
                            <input
                                type="text"
                                id="nomeCompleto"
                                name="nomeCompleto"
                                value={formData.nomeCompleto}
                                onChange={handleChange}
                                required
                                placeholder="Digite seu nome completo"
                                className="form-input"
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
                                required
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="celular">Número de Celular *</label>
                            <input
                                type="tel"
                                id="celular"
                                name="celular"
                                value={formData.celular}
                                onChange={handleChange}
                                required
                                placeholder="(00) 00000-0000"
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Gmail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="seuemail@gmail.com (opcional)"
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="cursoAnterior">Já realizou o curso anteriormente? *</label>
                            <div className="radio-group">
                                <label className="radio-option">
                                    <input
                                        type="radio"
                                        name="cursoAnterior"
                                        value="sim"
                                        checked={formData.cursoAnterior === 'sim'}
                                        onChange={handleChange}
                                        required
                                    />
                                    <span className="radio-custom"></span>
                                    Sim
                                </label>
                                <label className="radio-option">
                                    <input
                                        type="radio"
                                        name="cursoAnterior"
                                        value="nao"
                                        checked={formData.cursoAnterior === 'nao'}
                                        onChange={handleChange}
                                        required
                                    />
                                    <span className="radio-custom"></span>
                                    Não
                                </label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="documentoFoto">Documento com Foto *</label>
                            <div className="file-upload-container">
                                <input
                                    type="file"
                                    id="documentoFoto"
                                    name="documentoFoto"
                                    onChange={handleChange}
                                    accept=".jpg,.jpeg,.png,.pdf"
                                    required
                                    className="file-input"
                                />
                                <label htmlFor="documentoFoto" className="file-label">
                                    <span className="file-text">
                                        {formData.documentoFoto ? formData.documentoFoto.name : 'Clique para enviar RG, CNH ou outro documento com foto'}
                                    </span>
                                </label>
                            </div>
                            <p className="file-hint">Formatos aceitos: JPG, PNG, PDF (máx. 5MB)</p>
                        </div>

                        <div className="form-group">
                            <label htmlFor="comprovanteResidencia">Comprovante de Residência *</label>
                            <div className="file-upload-container">
                                <input
                                    type="file"
                                    id="comprovanteResidencia"
                                    name="comprovanteResidencia"
                                    onChange={handleChange}
                                    accept=".jpg,.jpeg,.png,.pdf"
                                    required
                                    className="file-input"
                                />
                                <label htmlFor="comprovanteResidencia" className="file-label">
                                    <span className="file-text">
                                        {formData.comprovanteResidencia ? formData.comprovanteResidencia.name : 'Clique para enviar comprovante de residência'}
                                    </span>
                                </label>
                            </div>
                            <p className="file-hint">Formatos aceitos: JPG, PNG, PDF (máx. 5MB)</p>
                        </div>

                        <button type="submit" className="submit-btn">
                            Enviar Inscrição
                        </button>
                    </form>

                    <div className="form-info">
                        <p>
                            <strong>Importante:</strong> Após o envio da inscrição, 
                            nossa equipe entrará em contato por WhatsApp ou ligação 
                            para confirmar sua participação no curso.
                        </p>
                        <p style={{marginTop: '10px'}}>
                            <strong>Documentação:</strong> É obrigatório o envio dos documentos solicitados para validação da inscrição.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}