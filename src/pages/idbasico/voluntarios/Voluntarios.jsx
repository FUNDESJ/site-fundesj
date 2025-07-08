import { useState } from "react";
import axios from 'axios';
import './Voluntarios.css';

export default function Voluntarios() {
  const [dados, setDados] = useState({
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
    cidade: '',
    estado: '',
    escolaridade: '',
    nivelConhecimento: '',
  });

  const [termoFile, setTermoFile] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!termoFile) {
      setMensagem('Por favor, selecione o Termo de Adesão.');
      return;
    }

    try {
      const formData = new FormData();

      for (const key in dados) {
        formData.append(key, dados[key]);
      }

      formData.append('termoAdesao', termoFile);

      await axios.post('https://back-end-fundesj.onrender.com/enviar-voluntariado', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMensagem('Inscrição enviada com sucesso!');
      setDados({
        nome: '',
        email: '',
        telefone: '',
        endereco: '',
        cidade: '',
        estado: '',
        escolaridade: '',
        nivelConhecimento: '',
      });
      setTermoFile(null);

    } catch (error) {
      console.error('Erro ao enviar:', error);
      setMensagem('Erro ao enviar inscrição. Tente novamente.');
    }
  };

  return (
    <div className="voluntarios-container">
      <div className="form-header">
        <h1>Seja um voluntário</h1>
        <h2>Formulário de inscrição</h2>
        <p>Preencha o formulário abaixo para se candidatar como voluntário em nossa organização.</p>
      </div>

      <form className="voluntarios-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome*</label>
          <input
            type="text"
            id="nome"
            placeholder="Nome completo"
            value={dados.nome}
            onChange={(e) => setDados({ ...dados, nome: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail*</label>
          <input
            type="email"
            id="email"
            placeholder="E-mail"
            value={dados.email}
            onChange={(e) => setDados({ ...dados, email: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefone">Telefone*</label>
          <input
            type="tel"
            id="telefone"
            placeholder="(**) *****-****"
            value={dados.telefone}
            onChange={(e) => setDados({ ...dados, telefone: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="endereco">Endereço completo*</label>
          <input
            type="text"
            id="endereco"
            placeholder="Bairro, rua, número"
            value={dados.endereco}
            onChange={(e) => setDados({ ...dados, endereco: e.target.value })}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="cidade">Cidade</label>
            <input
              type="text"
              id="cidade"
              placeholder="Cidade"
              value={dados.cidade}
              onChange={(e) => setDados({ ...dados, cidade: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="estado">Estado</label>
            <select
              id="estado"
              value={dados.estado}
              onChange={(e) => setDados({ ...dados, estado: e.target.value })}
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
        </div>

        <div className="form-group">
          <label htmlFor="escolaridade">Escolaridade*</label>
          <select
            id="escolaridade"
            value={dados.escolaridade}
            onChange={(e) => setDados({ ...dados, escolaridade: e.target.value })}
            required
          >
            <option value="">Selecione</option>
            <option value="Ensino Fundamental Incompleto">Ensino Fundamental Incompleto</option>
            <option value="Ensino Fundamental Completo">Ensino Fundamental Completo</option>
            <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
            <option value="Ensino Médio Completo">Ensino Médio Completo</option>
            <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
            <option value="Ensino Superior Completo">Ensino Superior Completo</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="nivelConhecimento">Nível de conhecimento em tecnologias móveis*</label>
          <div className="range-container">
            <input
              type="range"
              id="nivelConhecimento"
              min="1"
              max="10"
              value={dados.nivelConhecimento}
              onChange={(e) => setDados({ ...dados, nivelConhecimento: e.target.value })}
              className="range-input"
            />
            <span className="range-value">{dados.nivelConhecimento || '0'}</span>
          </div>
          <div className="range-labels">
            <span>Iniciante</span>
            <span>Avançado</span>
          </div>
        </div>

        <div className="form-group file-upload">
          <label htmlFor="termo">Termo de Adesão Voluntariado*</label>
          <div className="file-upload-container">
            <label htmlFor="termo" className="file-upload-label">
              <span>{termoFile ? termoFile.name : 'Selecionar arquivo'}</span>
              <input
                type="file"
                id="termo"
                required
                onChange={(e) => setTermoFile(e.target.files[0])}
              />
            </label>
          </div>
        </div>

        <div className="form-footer">
          <button type="submit" className="submit-button">
            <span>Enviar</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round" />
            </svg>
          </button>
          <a
            href="https://docs.google.com/document/d/1pmJ6qB8BvvBHgUKbrfSzEoJZjtROuTja/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="termo-link"
          >
            <span>Clique aqui para ter acesso ao documento de termo de adesão</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M18 13V19C18 20.1046 17.1046 21 16 21H5C3.89543 21 3 20.1046 3 19V8C3 6.89543 3.89543 6 5 6H11M15 3H21M21 3V9M21 3L10 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {mensagem && <p className="mensagem-envio">{mensagem}</p>}
      </form>
    </div>
  );
}
