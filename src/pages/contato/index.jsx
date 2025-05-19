import Header from '../header/index.jsx';
import Footer from '../footer/footer';
import './contato.css';

function Contato() {

    return (
        <>
            <Header />

            <div className='contato-container'>
                <h1>Fale Conosco</h1>
                <input type="text" placeholder='Digite seu nome' className='nome' /><br />
                <input type="text" placeholder='Digite seu Sobrenome' className='sobrenome' /><br />
                <input type="e-mail" placeholder='Digite seu E-mail' className='email' /><br />
                <div className='areatexto'>
                    <textarea
                        name="Mensagem de Contato"
                        id="mensagem"
                        rows={5}
                        cols={40}
                        placeholder='Digite sua Mensagem'>
                    </textarea>
                </div>
                <button
                    onClick={() => alert("Formulário enviado com sucesso! Entraremos em contato o mais breve possível.")}
                    className="botaoenviar"
                >
                    Enviar
                </button>
            </div>





            <Footer />
        </>

    )





}

export default Contato;