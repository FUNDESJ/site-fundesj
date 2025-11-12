import './bombeiroMirim.css'
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import { FaMedal, FaHandsHelping , FaUsers, FaHandHoldingHeart   } from 'react-icons/fa';

const BombeiroMirim = () => {
  return (
    <>
      
      <Header/>
      <div className="bombeiro-mirim-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Programa Bombeiro Mirim</h1>
            <p className="subtitle">Formando jovens cidadãos com valores e habilidades para a vida</p>
            <div className='divider'></div>       

          </div>
        </section>

        {/* About Section */}
        <section className="about-section">
       
          
          <div className="about-content">
            <p>
              O <strong>Projeto Bombeiro Mirim</strong> é uma iniciativa promovida pela <strong>Fundção Educacional de São José (FUNDESJ)</strong> em parceria com a <strong>Prefeitura de São José-SC</strong>, o <strong>Corpo de Bombeiros Militar de Santa Catarina (CBMSC)</strong> e a <strong>Associação Recreativa Social do Corpo de Bombeiros de São José (ABSJ)</strong>.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <div className="section-header">
            <h2>Valores e Objetivos</h2>
            <div className="divider"></div>
            <p className="section-subtitle">Vamos além da capacitação técnica, focando em valores essenciais</p>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><FaMedal  />
</div>
              <h3>Disciplina</h3>
              <p>Individual e coletiva</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><FaHandsHelping /></div>
              <h3>Respeito</h3>
              <p>À vida e ao meio ambiente</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><FaHandHoldingHeart/></div>
              <h3>Solidariedade</h3>
              <p>Autoestima e autoconfiança</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><FaUsers/></div>
              <h3>Cidadania</h3>
              <p>Valorização dos seres humanos</p>
            </div>
          </div>
        </section>

      

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-container">
            <div className="stat-item">
              <h3>Público-Alvo</h3>
              <p>Alunos do <strong>7º ano do Ensino Fundamental</strong> em escolas da rede municipal</p>
            </div>
            <div className="stat-item highlight">
              <h3>Alcance em 2023</h3>
              <p><strong>242 estudantes</strong> atendidos em <strong>4 unidades escolares</strong></p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <div className="section-header">
            <h2>Benefícios do Programa</h2>
            <div className="divider"></div>
          </div>
          
          <div className="benefits-cards">
            <div className="benefit-card">
              <h3>Consciência e Habilidades</h3>
              <p>Desenvolvimento de habilidades para enfrentar situações de risco</p>
            </div>
            <div className="benefit-card">
              <h3>Responsabilidade</h3>
              <p>Aumento do senso de responsabilidade e cuidado com o outro</p>
            </div>
            <div className="benefit-card">
              <h3>Autoestima</h3>
              <p>Elevação da autoestima e visão de futuro</p>
            </div>
          
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Transformando jovens em cidadãos conscientes</h2>
          <p>Um projeto que vai além do ensino técnico, formando valores para a vida</p>
        </section>
      </div>
    <Footer/>
    </>
  );
};

export default BombeiroMirim;