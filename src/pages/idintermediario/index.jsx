import './idintermediario.css';
import Header from '../header/index.jsx';
import Footer from '../footer/footer';  



function Idintermediario() {
    return (

        <>
            <Header />
            <div className="idintermediario-container">
                <div className="idintermediario-content">
                    <h1>Curso de Inclusão Digital Intermediário</h1>
                    <p>
                        O Curso Inclusão Digital Intermediário oferece conhecimentos sobre as tecnologias atuais, com oficinas realizadas semanalmente no Centro de Atenção à Terceira Idade (CATI).
                    </p>
                    <p>
                        O curso é voltado para pessoas com mais de 60 anos que já possuem conhecimentos básicos de informática e desejam aprimorar suas habilidades.
                    </p>
                    <p>
                        As aulas são ministradas por instrutores qualificados e abordam temas como redes sociais, aplicativos úteis, segurança digital e muito mais.
                    </p>
                </div>
                <div className="idintermediario-image">
                    <img src="https://fundesj.org.br/wp-content/uploads/2023/10/ID-Intermediario.png" alt="Curso de Inclusão Digital Intermediário" />
                </div>
            </div>
            <Footer />
        </>
    );  
}




export default Idintermediario;