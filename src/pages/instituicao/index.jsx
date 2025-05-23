// src/pages/Sobre.jsx
import './instituicao.css';
import Header from '../header/index.jsx'; // Co
import Footer from '../footer/footer'
import Imagem1 from '../../images/fotos instituicao/missao.png'
import Imagem2 from '../../images/fotos instituicao/visao.png'
import Imagem3 from '../../images/fotos instituicao/valores.png'

function Instituicao() {
  return (
    <>
    <Header />  
    <div className="sobre-page">

      <section className="missao-visao-valores">
        <div className="cartao">
          <h2>Missão</h2>
          <img src={Imagem1} alt="Missão" className='missao'/>
          <p>Promover o desenvolvimento humano, educacional e econômico de São José por meio de programas e projetos em parceria com entidades públicas e privadas, 
            visando transformação social e bem-estar coletivo.</p>
        </div>

        <div className="cartao">
          <h2>Visão</h2>
          <img src={Imagem2} alt="Visão" className='visao'/>
          <p>
            Ser referência no desenvolvimento educacional, econômico, cultural e social de São José, através de projetos inovadores e parcerias estratégicas que promovam o 
            bem-estar, a felicidade e o aprimoramento das pessoas na sociedade.
          </p>
        </div>

        <div className="cartao">
          <h2>Valores</h2>
          <img src={Imagem3} alt="Valores" className='valores'/>
          <ul>
            <li>Educação Transformadora</li>
            <li>Parcerias Estratégicas</li>
            <li>Inovação</li>
            <li>Compromisso Social</li>
            <li>Ética e Transparência</li>
            <li>Sustentabilidade</li>
            <li>Felicidade e Bem-Estar</li>
          </ul>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}

export default Instituicao;