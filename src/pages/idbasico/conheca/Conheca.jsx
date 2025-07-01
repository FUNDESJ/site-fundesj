import React from 'react';
import './Conheca.css';

const Conheca = () => {
  const timelineData = [
    {
      year: '2022',
      description: 'Início do Projeto Piloto, com uma turma, para aplicação e validação da metodologia de aprendizagem, em oficinas presenciais e certificação dos participantes.'
    },
    {
      year: '2023',
      description: 'Foi aberto um edital de chamada, pelo Centro de Atenção à Terceira Idade – CATI, para pessoas idosas do município de São José participarem do Projeto Inclusão Digital. Houve 132 inscrições, resultando na oferta de 10 turmas ao longo do ano nos bairros Bela Vista e Praia Comprida.'
    },
    {
      year: '2024',
      description: 'Aberto novo Edital de Chamada com a inscrição de 472 pessoas idosas. O projeto é realizado em parceria com o CATI, Banco do Brasil e Estácio Santa Catarina.'
    },
    {
      year: '2025',
      description: 'Novo Edital de Chamada com a previsão de formação de 400 pessoas idosas. As parcerias com o CATI, Banco do Brasil e Estácio Santa Catarina se mantêm.'
    }
  ];

  return (
    <section className="conheca-section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Projeto Inclusão Digital</h1>
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
        </div>

        <div className="section-content">
          <p className="section-description">
            O Projeto Inclusão Digital para Idosos visa a redução das desigualdades sociais por meio de ações que atendam as demandas da sociedade digital, promovendo inovação e inclusão.
          </p>

          <p className="section-description">
            Tem como objetivo tornar as pessoas idosas mais adeptas, autônomas e independentes na utilização dos dispositivos móveis digitais em suas atividades diárias, propiciando a elas oportunidades para que usem os dispositivos, com seus diversos atrativos e aplicativos, para o pertencimento na sociedade digital.
          </p>

          <div className="impact-statement">
            <div className="impact-content">
              <h3 className="impact-title">Mais que tecnologia: transformação social</h3>
              <p className="impact-text">
                O Projeto Inclusão Digital, desenvolvido pela Fundação Educacional de São José/SC, vai além do ensino tecnológico: promove autonomia, cidadania e transformação social. A iniciativa oferece muito mais que acesso ao uso de dispositivos eletrônicos — ela fortalece a saúde cognitiva, estimula o aprendizado contínuo e incentiva a convivência e a construção de vínculos entre os participantes.
              </p>
              <p className="impact-text">
                Ao unir tecnologia, inclusão e bem-estar, o projeto abre portas para novas possibilidades, ampliando horizontes e despertando o protagonismo digital com mais confiança, autonomia e senso de pertencimento.
              </p>
            </div>
            <div className="impact-visual">
              <div className="visual-circle"></div>
            </div>
          </div>
        </div>

        <div className="timeline">
          <div className="timeline-line"></div>
          {timelineData.map((item, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">
                <p>{item.description}</p>
              </div>
              <div className="timeline-marker">
                <div className="marker-outer"></div>
                <div className="marker-inner"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conheca;