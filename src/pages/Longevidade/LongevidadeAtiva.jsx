import React from "react";
import './longevidadeAtiva.css';
import Header from '../header/index.jsx'
import Footer from '../footer/footer.jsx'
export default function LongevidadeAtiva() {
  return (
    <>
    <Header/>
    <div className="longevidade-container">
      <div className="longevidade-content">
        <h1 className="longevidade-title">
          Programa Longevidade Ativa
        </h1>

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

        <div className="longevidade-card atividades-card">
          <h2 className="card-title">Atividades Oferecidas</h2>
          <ul className="atividades-list">
            <li><span className="atividade-item">Cursos</span></li>
            <li><span className="atividade-item">Oficinas</span></li>
            <li><span className="atividade-item">Palestras</span></li>
            <li><span className="atividade-item">Eventos</span></li>
            <li><span className="atividade-item">Publicações</span></li>
            <li><span className="atividade-item">Projetos Especiais</span></li>
            <li><span className="atividade-item">Inclusão Digital para Idosos</span></li>
            <li><span className="atividade-item">Ciclo de Palestras</span></li>
          </ul>
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
    <Footer/>
    </>
  );
}