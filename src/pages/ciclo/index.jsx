import './ciclo.css';
import Header from '../header';
import Footer from '../footer/footer';
import Imagem1 from '../../images/fotos ciclo/ciclo.png';
import { Link } from 'react-router-dom';

function Ciclo() {
    return (
        <>
            <Header />
            <div className="ciclo-container">
                <div className='ciclo-content'>
                    <h1 className='cabecalho'>Ciclo de Palestras</h1>
                    <p className='paragrafociclo'>
                        O Ciclo de Palestras, do Programa Longevidade Ativa da Prefeitura Municipal de São José, acontece neste ano de 2025, quinzenalmente nas sextas-feiras de cada mês, com convidados especiais.
                        O objetivo do Ciclo de Palestras é orientar e informar sobre longevidade, inspirando as pessoas idosas numa jornada de bem-estar para uma vida plena e saudável.
                    </p>
                    <p className='local'>Local: Centro de Atenção à Terceira Idade (CATI)</p>
                    
                    <div className="nav-buttons">
                        <p className='inscricao'>
                            <Link to="/ciclo/inscricoes">Inscrições</Link>
                        </p>
                        <p className='calendario'>
                            <Link to="/calendario">Calendário</Link>
                        </p>
                    </div>
                </div>
                <img src={Imagem1} alt="Imagem do Ciclo de Palestras" className='imgciclo'/>
            </div>
            <Footer />
        </>
    );
}

export default Ciclo;