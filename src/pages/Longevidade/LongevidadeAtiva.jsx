import React, { useRef } from "react";
import './longevidadeAtiva.css';
import Header from '../header/index.jsx';
import Footer from '../footer/footer.jsx';
import ciclo from '../../images/pagina inicial/ciclo.jpg';
import inclusaoidosos from '../../images/pagina inicial/inclusao.png';
import idtodos from '../../images/pagina inicial/idtodosfi.jpeg';
import bemEstar from '../../images/pagina inicial/bemEstar.jpeg';

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function LongevidadeAtiva() {
  const carouselRef = useRef(null);

  const atividades = [
    {
      id: 1,
      nome: "Ciclo de Palestras",
      imagem: ciclo,
      descricao: "Palestras quinzenais sobre saúde e bem-estar para a terceira idade",
      link: "./ciclo" 
    },
    {
      id: 2,
      nome: "Curso Básico de Inclusão Digital para Idosos",
      imagem: inclusaoidosos,
      descricao: "Aulas de informática básica para a melhor idade",
      link: "./idbasico"
    },
    {
      id: 3,
      nome: "Inclusão Digital Intermediário",
      imagem: idtodos,
      descricao: "Curso avançado de ferramentas digitais",
      link: "./idintermediario"
    },
    {
      id: 4,
      nome: "Bem-Estar e Conectividade",
      imagem: bemEstar,
      descricao: "Atividades físicas e sociais para idosos"
    }
  ];

  const scrollCarousel = (direction) => {
    const container = carouselRef.current;
    const scrollAmount = 300;

    if (direction === 'prev') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <div className="longevidade-container">
        <div className="longevidade-content">
          <h1 className="longevidade-title">Programa Longevidade Ativa</h1>

          <div className="longevidade-text-group">
            <p className="longevidade-text">
              O <strong>Programa Longevidade Ativa</strong> é uma iniciativa da FUNDESJ voltada aos
              moradores de São José com mais de 60 anos. Desenvolvido em parceria com o
              Centro de Atenção à Terceira Idade (CATI) e a Secretaria Municipal de Assistência
              Social, o programa tem como objetivo principal promover um envelhecimento
              saudável e ativo.
            </p>

            <p className="longevidade-text">
              Por meio de ações integradas, o programa estimula a vitalidade física, o bem-estar
              mental e o engajamento social, contribuindo para a autonomia e a qualidade de vida
              da população idosa. Entre as iniciativas em destaque estão o projeto de
              <strong> Inclusão Digital para Idosos</strong>, que promove o acesso à tecnologia e à informação,
              e o <strong>Ciclo de Palestras</strong>, que aborda temas relevantes sobre saúde, bem-estar e
              cidadania.
            </p>
          </div>

          <div className="longevidade-card">
            <h2 className="card-title">Atividades Oferecidas</h2>
            <div className="atividades-carousel">
              <div className="atividades-track" ref={carouselRef}>
                {atividades.map((atividade) => (
                  <div key={atividade.id} className="atividade-card">
                    <div className="atividade-icon">
                     <a href={atividade.link}>
                      <img
                        src={atividade.imagem}
                        alt={atividade.nome}
                        loading="lazy"
                      />
                      <div className="atividade-hover-text">
                        Saiba mais
                      </div>
                      </a>
                    </div>
                    <span className="atividade-item">{atividade.nome}</span>
                  </div>
                ))}
              </div>
              <div className="carousel-nav">
                <button
                  className="carousel-btn"
                  onClick={() => scrollCarousel('prev')}
                  aria-label="Atividade anterior"
                >
                  <FaChevronLeft className="carousel-icon" />
                </button>
                <button
                  className="carousel-btn"
                  onClick={() => scrollCarousel('next')}
                  aria-label="Próxima atividade"
                >
                  <FaChevronRight className="carousel-icon" />
                </button>
              </div>
            </div>
          </div>

          <div className="longevidade-card proposito-card">
            <h2 className="card-title">Propósito</h2>
            <p className="longevidade-text">
              Promover estilos de vida mais saudáveis por meio da convivência, da aprendizagem
              permanente e da valorização do protagonismo na terceira idade, contribuindo para
              uma sociedade mais justa, ativa e intergeracional.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
