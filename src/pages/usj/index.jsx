import Header from '../header/index.jsx';
import Footer from '../footer/footer';
import './usj.css';
import { Link } from 'react-router-dom';

function USJ() {
  return (
    <div className="usj-page">
      <Header />
      
      <div className="usj-qrcode-container">
      <a href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/NDc1Ng==">
        <img 
          src="https://fundesj.com.br/wp-content/uploads/2022/12/qrcode.png" 
          alt="QR Code para acesso rápido" 
          className='usj-qrcode' 
        />
         </a>
      </div>
     
      
      <div className="usj-content-section">
        <h2 className="usj-section-title">SOLICITAÇÃO DE DOCUMENTOS ACADÊMICOS ON-LINE</h2>
        <p className="usj-section-text">
          A Solicitação de documentos acadêmicos poderá ser feita através de requerimento on-line ou presencialmente na secretaria da
          Fundação Educacional Municipal, seguindo as orientações da Instrução normativa Nº 002/2022/FUNDESJ.
          <br /><br />
          O requerimento on-line poderá ser acessado através do link abaixo e deverá ser preenchido corretamente, anexando os arquivos
          necessários para a solicitação da documentação requerida.
          <br /><br />
          O prazo para a resposta é de 48 horas.
          <br />
          REQUERIMENTO ON-LINE <Link to='/requerimento' className="usj-link">(ACESSE AQUI)</Link>
        </p>
      </div>
      
      <div className="usj-content-section usj-highlighted">
        <h2 className="usj-section-title">TRANSFERÊNCIA ASSISTIDA USJ</h2>
        <Link to='/transferencia-assistida' className="usj-link">INFORMAÇÕES</Link>
      </div>
      
      <div className="usj-content-section">
        <h2 className="usj-section-title">LEGISLAÇÃO</h2>
        <a href="https://fundesj.com.br/wp-content/uploads/2022/10/INSTRUC%CC%A7A%CC%83O-NORMATIVA-No-002-2022-FUNDESJ-COM-SITE.pdf" target="_blank" rel="noopener noreferrer"><p className="usj-section-text">Instrução normativa Nº 002/2022/FUNDESJ</p></a>
      </div>
      
      <Footer />
    </div>
  );
}

export default USJ;