import { useEffect } from 'react';
import './projetosAnteriores.css';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';

function ProjetosAnteriores() {

  const projetos = [
    {
      id: 'id-todos',
      titulo: 'ID para Todos',
      descricao: 'Iniciativa de inclusão digital que ofereceu palestras e oficinas para pessoas idosas, ensinando o uso básico do celular e de ferramentas digitais do dia a dia, promovendo autonomia e participação ativa na sociedade conectada.'
    },
    {
      id: 'golfinho',
      titulo: 'Projeto Golfinho',
      descricao: 'Iniciativa de preservação ambiental voltada à conscientização sobre a importância da conservação dos oceanos e da vida marinha, por meio de atividades educativas e mobilizações comunitárias.'
    },
    {
      id: 'afetar-com-afeto',
      titulo: 'Projeto Afetar com Afeto',
      descricao: 'Programa de apoio emocional e psicológico criado durante a pandemia, com foco no acolhimento e acompanhamento de famílias em momentos de fragilidade social e emocional.'
    },
    {
      id: "ilpi",
      titulo: "Bem-Estar e Conectividade",
      descricao: "Voltado ao cuidado e à conectividade de idosos em instituições de longa permanência, melhorando sua qualidade de vida.",
    },
  ];

  useEffect(() => {
    const scrollReveals = document.querySelectorAll('.pa-scroll-reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('pa-visible');
        }
      });
    }, { threshold: 0.1 });

    scrollReveals.forEach(el => observer.observe(el));

    return () => {
      scrollReveals.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="pa-page">
      <Header />
      <main className="pa-main">
        <div className="pa-container">
          <h1 className="pa-scroll-reveal pa-title">Projetos anteriores</h1>
          <p className="pa-scroll-reveal pa-intro">
            Nossa organização já realizou diversos projetos impactantes na comunidade.
            Cada iniciativa foi cuidadosamente planejada para trazer transformações
            positivas e duradouras.
          </p>

          <div className="pa-grid">
            {projetos.map((projeto) => (
              <div key={projeto.id} className="pa-card pa-scroll-reveal">
                <Link to={`/projetos-anteriores/${projeto.id}`}>
                  <div className="pa-content">
                    <h3 className="pa-card-title">{projeto.titulo}</h3>
                    <p className="pa-card-description">
                      {projeto.descricao}
                    </p>
                    <a href={`/projetos-anteriores/${projeto.id}`} className="pa-link">Saiba mais</a>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="pa-section">
            <h2 className="pa-scroll-reveal">Nossa abordagem</h2>
            <p className="pa-scroll-reveal">
              Trabalhamos com metodologias inovadoras que combinam conhecimento técnico
              com envolvimento comunitário. Cada projeto é desenvolvido em parceria com
              os beneficiários, garantindo que as soluções sejam sustentáveis e adequadas
              ao contexto local.
            </p>
          </div>

          <div className="pa-section">
            <h2 className="pa-scroll-reveal">Impacto alcançado</h2>
            <p className="pa-scroll-reveal">
              Nos últimos anos, nossos projetos têm promovido transformações significativas na vida das pessoas, por meio de ações educativas, tecnológicas e sociais. Avaliamos continuamente os resultados com base em indicadores qualitativos e no acompanhamento próximo dos participantes, mesmo após o encerramento das atividades.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjetosAnteriores;