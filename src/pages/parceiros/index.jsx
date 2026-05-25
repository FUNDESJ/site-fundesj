import './parceiros.css';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import Imagem1 from '../../images/fotos parceiros/CITTADINO.png'
import Imagem2 from '../../images/fotos parceiros/BOMBEIRO.png'
import Imagem3 from '../../images/fotos parceiros/ESTÁCIO.png'
import Imagem4 from '../../images/fotos parceiros/UNIASSELVI.png'
import Imagem5 from '../../images/fotos parceiros/FMP.png'
import Imagem6 from '../../images/fotos parceiros/ACATE SJ.png'
import Imagem7 from '../../images/fotos parceiros/marista.png'
import Imagem8 from '../../images/fotos parceiros/NATURAÇÃO.png'
import Imagem9 from '../../images/fotos parceiros/UFSC_NETI.png'
import Imagem10 from '../../images/fotos parceiros/OAB.png'
import Imagem11 from '../../images/fotos parceiros/SENAC.png'
import Imagem13 from '../../images/fotos parceiros/UNICESUMAR.png'
import Imagem14 from '../../images/fotos parceiros/UNIVALI.png'
import Imagem15 from '../../images/fotos parceiros/BB.png'
import Imagem16 from '../../images/fotos parceiros/ela.png'
import Imagem17 from '../../images/fotos parceiros/redeFemininaContraCancer.png'
import Imagem18 from '../../images/fotos parceiros/funiber.png'
import Imagem19 from '../../images/fotos parceiros/Logo-AVOS-Coracao.jpg'
function Parceiros() {

    const parceiros = [
        {
            id: 1,
            nome: "Avos",
            link: "https://avos.org.br/",
            img: Imagem19
        },
        {
            id: 2,
            nome: "Banco do Brasil",
            link: "https://www.bb.com.br/site/",
            img: Imagem15
        },
        {
            id: 3,
            nome: "Corpo de Bombeiros Militar de Santa Catarina",
            link: "https://www.cbm.sc.gov.br/",
            img: Imagem2
        },
        {
            id: 4,
            nome: "Cittadino",
            link: "https://cittadino.com.br/",
            img: Imagem1,
        },
        {
            id: 5,
            nome: "Faculdade Fadesc",
            link: "https://www.fadesc.com.br/",
            img: Imagem4,
        },
        {
            id: 6,
            nome: "Faculdade Municipal da Palhoça",
            link: "https://fmpsc.edu.br/",
            img: Imagem5
        },
        {
            id: 7,
            nome: "Funiber",
            link: "https://www.funiber.org.br/",
            img: Imagem18
        },
        {
            id: 8,
            nome: "Instituto ELA",
            link: "https://www.institutoela.org.br/",
            img: Imagem16
        },
        {
            id: 9,
            nome: "JA Santa Catarina",
            link: "https://www.instagram.com/jasantacatarina/",
            img: Imagem6
        },
        {
            id: 10,
            nome: "Marista Escola Social São José",
            link: "https://maristaescolassociais.org.br/escola/marista-escola-social-sao-jose/",
            img: Imagem7
        },
        {
            id: 11,
            nome: "NETI UFSC",
            link: "https://neti.ufsc.br/",
            img: Imagem9
        },
        {
            id: 12,
            nome: "Naturação Brasil",
            link: "https://www.linkedin.com/company/natura%C3%A7%C3%A3o-brasil/?originalSubdomain=br",
            img: Imagem8
        },
        {
            id: 13,
            nome: "OAB São José",
            link: "https://www.instagram.com/oabsaojose/",
            img: Imagem10
        },
        {
            id: 14,
            nome: "Rede Feminina de Combate ao Câncer",
            link: "https://redefemininasc.com.br/",
            img: Imagem17
        },
        {
            id: 15,
            nome: "Senac",
            link: "https://portal.sc.senac.br/portal/novo/",
            img: Imagem11
        },
        {
            id: 16,
            nome: "Universidade Estácio",
            link: "https://estacio.br/",
            img: Imagem3
        },
        {
            id: 17,
            nome: "Unicesumar",
            link: "https://www.unicesumar.edu.br/",
            img: Imagem13
        },
        {
            id: 18,
            nome: "Univali",
            link: "https://univali.br/Paginas/default.aspx",
            img: Imagem14
        }
    ];
    return (
        <>
            <Header />

            <div className="parceiros-container">
                {parceiros.map((parceiro) => (
                    <div className="parceiro-card" key={parceiro.id}>
                        <a href={parceiro.link} target="_blank" rel="noopener noreferrer">
                            <div className="logo-box">
                                <img
                                    src={parceiro.img}
                                    alt={parceiro.nome}
                                    className="imgparceiros"
                                />
                            </div>

                            <span className="nome-parceiro">{parceiro.nome}</span>
                        </a>
                    </div>
                ))}
            </div>

            <Footer />
        </>
    );
}

export default Parceiros;