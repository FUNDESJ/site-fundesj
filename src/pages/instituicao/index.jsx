// src/pages/Sobre.jsx
import './instituicao.css';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/footer.jsx'
import Imagem1 from '../../images/fotos instituicao/missao.png'
import Imagem2 from '../../images/fotos instituicao/visao.png'
import Imagem3 from '../../images/fotos instituicao/valores.png'

function Instituicao() {
  return (
    <>
      <Header />
      <div className="instituicao-header">
        <h1>FUNDESJ</h1>
        <h3><strong>Educação que aproxima, parcerias que fortalecem, um futuro construído com todos.</strong></h3>
        <p>A FUNDESJ é uma fundação pública dedicada a promover oportunidades
          por meio da educação, da inovação e da colaboração. Com projetos voltados para diferentes públicos e realidades, buscamos fazer da aprendizagem uma força transformadora em
          São José.</p>
        <h2>Quem Somos</h2>
        <h3><strong>Uma Fundação feita de pessoas, saberes e compromissos com o futuro.</strong></h3>
        <p>A Fundação Educacional de São José (FUNDESJ) é uma instituição pública que atua no fortalecimento do desenvolvimento educacional, cultural, econômico e social do município.
          Com programas voltados à formação continuada, à inclusão digital, à valorização da longevidade e à qualificação profissional, trabalhamos para que a educação chegue a todos — com significado, afeto e impacto real.
          Somos também um espaço de articulação com parceiros públicos e privados, locais e internacionais, criando redes que ampliam o alcance de nossas ações e reafirmam nosso compromisso com uma São José mais justa e preparada.
        </p>
      </div>
      <div className="sobre-page">

        <section className="missao-visao-valores">
          <div className="cartao">
            <h2>Missão</h2>
            <img src={Imagem1} alt="Missão" className='missao' />
            <p>Promover o desenvolvimento humano, educacional e econômico de São José por meio de programas e projetos em parceria com entidades públicas e privadas,
              visando transformação social e bem-estar coletivo.</p>
          </div>

          <div className="cartao">
            <h2>Propósito</h2>
            <img src={Imagem2} alt="Visão" className='visao' />
            <p>
              Ser referência no desenvolvimento educacional, econômico, cultural e social de São José, através de projetos inovadores e parcerias estratégicas que promovam o
              bem-estar, a felicidade e o aprimoramento das pessoas na sociedade.
            </p>
          </div>

          <div className="cartao">
            <h2>Valores</h2>
            <img src={Imagem3} alt="Valores" className='valores' />
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
      <div className="somos-ods">
        <h2>Também somos ODS!</h2>
        <div className="texto-ods">
          <p>
            Os <strong>Objetivos de Desenvolvimento Sustentável</strong> (ODS), são uma coleção de 17 metas globais,
            estabelecidas pela Assembleia Geral das Nações Unidas, abrangendo questões de desenvolvimento social e econômico,
            incluindo: pobreza, fome, saúde, educação, mudanças climáticas, igualdade de gênero, água, saneamento, energia,
            urbanização, meio ambiente e justiça social.
          </p>
          <p>
            As metas são amplas e interdependentes, mas cada uma tem uma lista separada de pontos a serem alcançados.
            Em nossa missão de apoio à educação, a Fundesj impacta em 4 objetivos:
          </p>
        </div>
        <img
          src="https://mamiferosaquaticos.org.br/system/7LvBKdYaKWvf49WM80Vk6Eqm8Lc4OOTKUMLejaqGyOsh5zcpcaxlx-Dem951Mj-vHWl_h-xYS4RIssVH__HHOg/files/Imagens%20Blog/1%20ODS.jpg"
          alt="ods"
          className="ods"
        />
      </div>
      <div className="ods-icons">
        <a href="https://brasil.un.org/pt-br/sdgs/3" target="_blank" rel="noopener noreferrer">
          <img src="https://observavix.vitoria.es.gov.br/objetivo/3/imagem" alt="ODS 3" />
        </a>
        <a href="https://brasil.un.org/pt-br/sdgs/4" target="_blank" rel="noopener noreferrer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShz5l9s5erZCkm5W3EVGQT83lxhBviMIo6lA&s" alt="ODS 4" />
        </a>
        <a href="https://brasil.un.org/pt-br/sdgs/10" target="_blank" rel="noopener noreferrer">
          <img src="https://projetoods.ib.usp.br/wp-content/uploads/2021/06/ODS10-1-e1630340276440.jpg" alt="ODS 10" />
        </a>
        <a href="https://brasil.un.org/pt-br/sdgs/17" target="_blank" rel="noopener noreferrer">
          <img src="https://gtagenda2030.org.br/wp-content/uploads/2019/10/ods17.jpg" alt="ODS 17" />
        </a>
      </div>

      <Footer />
    </>
  );
}

export default Instituicao;