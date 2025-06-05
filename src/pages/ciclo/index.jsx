import './ciclo.css';
import Header from '../header';
import Footer from '../footer/footer';
import Imagem1 from '../../images/fotos ciclo/ciclo.png';
function Ciclo() {
    return (
        <>
            <Header />
            <div>
                <div className='ciclo'>
                    <h1 className='cabecalho'>Ciclo de Palestras</h1>
                    <p className='paragrafociclo'>O Ciclo de Palestras, do Programa Longevidade Ativa da Prefeitura Municipal de São José, acontece neste ano de 2024, quinzenalmente nas sextas-feiras de cada mês, com convidados especiais.
                        O objetivo do Ciclo de Palestras é orientar e informar sobre longevidade, inspirando as pessoas idosas numa jornada de bem-estar para uma vida plena e saudável.</p>
                    <p className='local'>Local: Centro de Atenção a Terceira Idade (CATI)</p>
                    <p className='inscricao'>Inscrições</p>
                    <p className='calendario'>Calendário</p>
                </div>
                <img src={Imagem1} alt="Imgagem ciclo" className='imgciclo'/>
            </div>
            <Footer />
        </>

    )
}

export default Ciclo;