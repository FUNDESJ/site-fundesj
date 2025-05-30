import Header from '../header';
import Footer from '../footer/footer';
import './equipe.css';
import Imagem1 from '../../images/fotos equipe/equipe1.png'
import Imagem2 from '../../images/fotos equipe/equipe2.png'
import Imagem3 from '../../images/fotos equipe/equipe3.png'
import Imagem4 from '../../images/fotos equipe/equipe4.png'
import Imagem5 from '../../images/fotos equipe/equipe5.png'

function Equipe() {
    return (
        <>
            <Header />
            <div>
                <div className='equipe1'>
                    <img src={Imagem1} alt="Equipe 1" className='imgequipe1'/>
                    <a href="/contatos" target='_blank'>
                    <button className="botaoenviar">
                    Enviar E-mail
                    </button></a>
                </div>
                <div className='equipe1'>
                    <img src={Imagem2} alt="Equipe 1" className='imgequipe2'/>
                    <a href="/contatos" target='_blank'>
                    <button className="botaoenviar">
                    Enviar E-mail
                    </button></a>
                </div>
                <div className='equipe1'>
                    <img src={Imagem3} alt="Equipe 1" className='imgequipe3'/>
                    <a href="/contatos" target='_blank'>
                    <button className="botaoenviar">
                    Enviar E-mail
                    </button></a>
                </div>
                <div className='equipe1'>
                    <img src={Imagem4} alt="Equipe 1" className='imgequipe4'/>
                    <a href="/contatos" target='_blank'>
                    <button className="botaoenviar">
                    Enviar E-mail
                    </button></a>
                </div>
                <div className='equipe1'>
                    <img src={Imagem5} alt="Equipe 1" className='imgequipe5'/>
                    <a href="/contatos" target='_blank'>
                    <button className="botaoenviar2">
                    Enviar E-mail
                    </button></a>
                </div>




            <Footer />
            </div>

        </>
    )






}

export default Equipe;