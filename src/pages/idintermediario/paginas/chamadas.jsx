import Header from '../../../components/header/index.jsx';
import Footer from '../../footer/footer';
import './estiloGeral.css'
export default function ChamadaIntermediario() {
    return (
        <>
            <Header />
            <div className='titulo-container'> 
                <h1 className='titulo'>Chamadas em breve</h1>
            </div>

            <Footer />
        </>
    )
}