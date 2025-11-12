import Header from "../../../components/header";
import Footer from "../../footer/footer";
import "./transferencia.css";

export default function Transferencia() {
    return (
        <div className="transferencia-container">
            <Header />
            
            <h1>Transferência Assistida e Regular USJ</h1>
            
            <div className="content-card">
                <h2>Edital de chamada pública para adesão ao processo de transferência assistida dos alunos USJ</h2>
                <div className="document-link">
                    <a href="https://fundesj.com.br/wp-content/uploads/2022/10/EDITAL-008-04.11.pdf" target="_blank" rel="noopener noreferrer">
                        EDITAL 008/FUNDESJ
                    </a>
                </div>
            </div>
            
            <div className="content-card">
                <h2>Notícias</h2>
                <a href="https://saojose.sc.gov.br/?s=transfer%C3%AAncia+assistida&cpsp-autocomplete=transfer%C3%AAncia+assistida" className="special-link" target="_blank" rel="noopener noreferrer">
                    ACESSE AS NOTÍCIAS
                </a>
            </div>
            
            <div className="content-card">
                <h2>Documentos</h2>
                <a href="https://saojose.sc.gov.br/edital-de-chamada-publica-de-instituicoes-de-ensino-superior-adesao-ao-processo-de-transferencia-assistida/18485/" className="special-link" target="_blank" rel="noopener noreferrer">
                    ACESSE OS DOCUMENTOS
                </a>
            </div>
            
            <div className="highlight-box">
                <h2>Comunicados transferência assistida e regular USJ</h2>
                <div className="document-link">
                    <a href="https://drive.google.com/file/d/1u45VBKjUUB7Xwwpg17b_Ea2zHDlyPVeJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        Informações sobre a transferência Assistida
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    )
}