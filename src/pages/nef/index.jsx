import { Helmet } from 'react-helmet';
import './nef.css';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/footer.jsx';
import HeroCursos from '../../components/heros/hero_cursos.jsx';
const Nef = () => {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Header />
      <div className="nef-container">
        <HeroCursos
          titulo1="Núcleo da Escola Federativa -"
          titulo2={'(NEF)'}
          subtitulo="Capacitação contínua para servidores públicos e agentes políticos municipais"
        />

        <section className="nef-about-section">
          <div className="nef-section-content">
            <h2 className="nef-section-title">Apresentação</h2>
            <div className="nef-divider"></div>

            <p>
              O <strong>Núcleo da Escola Federativa(NEF)</strong>, coordenado pela <strong>Fundação Educacional de São José (FUNDESJ)</strong>, oferece capacitação contínua para servidores públicos e agentes políticos municipais. A proposta é aprimorar competências e fortalecer o serviço público na região.
            </p>
          </div>
        </section>

        <section className="nef-trilha-section">
          <div className="nef-section-header">
            <h2 className="nef-section-title">Cursos disponibilizados</h2>
            <div className="nef-divider"></div>
            <p className="nef-section-subtitle">Segue abaixo alguns dos diversos cursos disponibilizados pelo Núcleo de Ensino Federativo</p>
          </div>

          <div className="nef-cursos-lista">
            <div className="nef-curso-item">
              <h3>Gestão da Informação e Documentação – Conceitos Básicos em Gestão Documental</h3>
              <a href="https://www.escolavirtual.gov.br/curso/73" target="_blank" rel="noopener noreferrer" className="nef-curso-link">
                Inscreva-se
              </a>
            </div>

            <div className="nef-curso-item">
              <h3>Políticas Públicas e Governo Local</h3>
              <a href="https://www.escolavirtual.gov.br/curso/124" target="_blank" rel="noopener noreferrer" className="nef-curso-link">
                Inscreva-se
              </a>
            </div>

            <div className="nef-curso-item">
              <h3>Nova Lei de Licitações: Gestão Contratual</h3>
              <a href="https://www.escolavirtual.gov.br/curso/926" target="_blank" rel="noopener noreferrer" className="nef-curso-link">
                Inscreva-se
              </a>
            </div>

            <div className="nef-curso-item">
              <h3>Gestão Orçamentária e Financeira</h3>
              <a href="https://www.escolavirtual.gov.br/curso/257" target="_blank" rel="noopener noreferrer" className="nef-curso-link">
                Inscreva-se
              </a>
            </div>

            <div className="nef-curso-item">
              <h3>Ética e Serviço Público</h3>
              <a href="https://www.escolavirtual.gov.br/curso/4" target="_blank" rel="noopener noreferrer" className="nef-curso-link">
                Inscreva-se
              </a>
            </div>
          </div>
        </section>

        <section className="nef-inscricao-section">
          <div className="nef-section-header">
            <h2 className="nef-section-title">Como se inscrever</h2>
            <div className="nef-divider"></div>
          </div>

          <div className="nef-steps-container">
            <div className="nef-step">
              <div className="nef-step-number">1</div>
              <p>Acesse a plataforma da <a href="https://www.escolavirtual.gov.br" target="_blank" rel="noopener noreferrer">Escola Virtual.Gov</a> e realize seu cadastro.</p>
            </div>

            <div className="nef-step">
              <div className="nef-step-number">2</div>
              <p>Escolha e inscreva-se nos cursos da trilha recomendada.</p>
            </div>

            <div className="nef-step">
              <div className="nef-step-number">3</div>
              <p>Após a matrícula, envie um e-mail para <a href="mailto:nef@fundesj.com.br">nef@fundesj.com.br</a> com as seguintes informações: Nome completo e matricula, curso(s) em que se inscreveu
                Secretaria ou orgão de lotação.</p>
            </div>
          </div>
        </section>

        <section className="nef-certificacao-section">
          <div className="nef-section-header">
            <h2 className="nef-section-title">Certificação e reconhecimento</h2>
            <div className="nef-divider"></div>
          </div>

          <div className="nef-certificacao-content">
            <p>
              Ao finalizar cada módulo da trilha, os participantes recebem <strong>certificado oficial</strong> emitido pela FUNDESJ por meio do NEF. Esse reconhecimento pode contribuir para o desenvolvimento no <strong>Plano de Cargos, Carreiras e Remuneração</strong>.
            </p>
          </div>
        </section>

        <section className="nef-duvidas-section">
          <div className="nef-section-header">
            <h2 className="nef-section-title">Dúvidas ou suporte</h2>
            <div className="nef-divider"></div>
            <p className="nef-section-subtitle">Informações sobre certificado, reconhecimento ou etapas da inscrição</p>
          </div>

          <div className="nef-contato-info">
            <div className="nef-contato-item">
              <div className="nef-contato-icon">📞</div>
              <p><strong>Telefone:</strong> (48) 3381-0010<br /><small>(atendimento das 13h às 19h)</small></p>
            </div>

            <div className="nef-contato-item">
              <div className="nef-contato-icon">💬</div>
              <p><strong>WhatsApp:</strong> (48) 99679-2332</p>
            </div>

            <div className="nef-contato-item">
                <div className="nef-contato-icon">📧</div>
                <p><strong>E-mail:</strong> <a href="mailto:tecnologia@fundesj.com.br" target="_blank">tecnologia@fundesj.com.br</a></p>
            </div>
          </div>
        </section>

        <section className="nef-links-section">
          <div className="nef-section-header">
            <h2 className="nef-section-title">Links úteis</h2>
            <div className="nef-divider"></div>
          </div>

          <div className="nef-links-grid">
            <a href="https://www.escolavirtual.gov.br" target="_blank" rel="noopener noreferrer" className="nef-link-card">
              Plataforma Escola Virtual.Gov
            </a>

            <a href="mailto:tecnologia@fundesj.com.br" className="nef-link-card">
              Contato NEF – tecnologia@fundesj.com.br
            </a>

            <a href="https://www.fundesj.com.br" target="_blank" rel="noopener noreferrer" className="nef-link-card">
              FUNDESJ – Fundação Educacional de São José
            </a>
          </div>
        </section>

        {/* Benefícios Section */}
        <section className="nef-beneficios-section">
          <div className="nef-section-header">
            <h2 className="nef-section-title">Por que participar?</h2>
            <div className="nef-divider"></div>
          </div>

          <div className="nef-beneficios-grid">
            <div className="nef-beneficio-card">
              <h3>Capacitação gratuita</h3>
              <p>Conteúdo atualizado e aplicável ao serviço público</p>
            </div>

            <div className="nef-beneficio-card">
              <h3>Desenvolvimento profissional</h3>
              <p>Certificação reconhecida</p>
            </div>

            <div className="nef-beneficio-card">
              <h3>Fortalecimento institucional</h3>
              <p>Valorização dos servidores e agentes públicos</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Nef;