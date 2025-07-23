import './ciclo.css';
import Header from '../header';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';

function Ciclo() {
    return (
        <>
            <Header />
            <div className="ciclo-container">
                <div className='ciclo-content'>
                    <h1 className='cabecalho'>Ciclo de Palestras sobre Longevidade Ativa</h1>
                    <p className='paragrafociclo'>
                        O Programa Longevidade Ativa da Prefeitura Municipal de São José promove em 2025 um ciclo de palestras quinzenais sobre envelhecimento saudável. Realizadas às sextas-feiras, estas sessões trazem especialistas para compartilhar conhecimentos e práticas para uma vida plena na terceira idade.
                    </p>
                    <p className='paragrafociclo'>
                        Cada encontro aborda temas essenciais como saúde física, bem-estar emocional, planejamento financeiro e manutenção de relações sociais, sempre com base em evidências científicas e abordagens práticas.
                    </p>
                    <p className='local'>
                        <span>📍</span> Centro de Atenção à Terceira Idade (CATI) - Av. das Palmeiras, 500
                    </p>
                    
                    <div className="nav-buttons">
                        <p className='inscricao'>
                            <Link to="/ciclo/inscricoes">Inscreva-se</Link>
                        </p>
                        <p className='calendario'>
                            <Link to="/calendario">Ver Calendário</Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Ciclo;
