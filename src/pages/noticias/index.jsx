import { useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/index.jsx';
import { FaClock, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './noticias.css';

const Noticias = () => {
    // Estado para paginação
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [itensPorPagina] = useState(6); // 3 notícias por página
    
    const noticias = [
        {
            titulo: 'Programa Longevidade Ativa promove palestra sobre nutrição para idosos em São José',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-19-at-16.35.45.jpeg?fit=1200%2C701&ssl=1',
            data: '19/08/2025',
            url: 'https://saojose.sc.gov.br/programa-longevidade-ativa-promove-palestra-sobre-nutricao-para-idosos-em-sao-jose/89141/'
        },
        {
            titulo: 'Parceria entre Fundesj e Cultura vai oficializar cursos da Escola de Oleiros de São José',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-16-at-16.11.43-jpeg.webp?resize=960%2C720&ssl=1',
            data: '16/06/2025',
            url: 'https://saojose.sc.gov.br/parceria-entre-fundesj-e-cultura-vai-oficializar-cursos-da-escola-de-oleiros-de-sao-jose/79450/'
        },
        {
            titulo: 'Envelhecer com Saúde: Palestra em São José aborda caminhos para uma vida mais ativa',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2025/05/1349060.webp?fit=1500%2C910&ssl=1',
            data: '27/05/2025',
            url: 'https://saojose.sc.gov.br/envelhecer-com-saude-palestra-em-sao-jose-aborda-caminhos-para-uma-vida-mais-ativa/78571/'
        },
        {
            titulo: 'Fundação Educacional de São José forma líderes escolares em comunicação com empatia',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2025/05/IMG_3909-scaled-1.webp?resize=960%2C720&ssl=1',
            data: '12/05/2025',
            url: 'https://saojose.sc.gov.br/fundesj-forma-lideres-escolares-em-comunicacao-com-empatia/77961/'
        },
        {
            titulo: 'Inclusão Digital: São José inicia novas turmas para capacitação de idosos',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2025/05/telefones_094354.webp?resize=960%2C540&ssl=1',
            data: '05/05/2025',
            url: 'https://saojose.sc.gov.br/inclusao-digital-sao-jose-inicia-novas-turmas-para-capacitacao-de-idosos/77565/'
        },
        {
            titulo: 'São José capacita voluntários para apoio a pacientes de câncer no Hospital Infantil Joana Gusmão',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2025/04/20250324_MARIANASMANIA-7.webp?resize=960%2C640&ssl=1',
            data: '24/04/2025',
            url: 'https://saojose.sc.gov.br/sao-jose-capacita-voluntarios-para-apoio-a-pacientes-de-cancer-no-hospital-infantil-joana-gusmao/77135/'
        },
        {
            titulo: 'Turmas lotadas e histórias transformadas: inclusão digital muda a vida de idosos em São José',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-24-at-11.28.03.webp?resize=960%2C720&ssl=1',
            data: '24/04/2025',
            url: 'https://saojose.sc.gov.br/turmas-lotadas-e-historias-transformadas-inclusao-digital-muda-a-vida-de-idosos-em-sao-jose/77130/'
        },
        {
            titulo: 'Palestra no Cati, em São José, orienta idosos sobre como equilibrar mente e corpo',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2025/04/atividade-fisica-na-terceira-idade-e-bom-para-o-corpo-e-mente-1887280-article.webp?w=600&ssl=1',
            data: '24/04/2025',
            url: 'https://saojose.sc.gov.br/palestra-no-cati-em-sao-jose-orienta-idosos-sobre-como-equilibrar-mente-e-corpo/77126/'
        },
        {
            titulo: 'Dinheiro na Maturidade: palestra vai ajudar idosos a cuidar melhor do próprio bolso em São José',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2025/04/idoso-dinheiro.webp?resize=960%2C480&ssl=1',
            data: '08/04/2025',
            url: 'https://saojose.sc.gov.br/dinheiro-na-maturidade-palestrafundesj-sao-jose/76673/'
        },
        {
            titulo: 'Superintendente da Fundação Educacional de São José atua como avaliadora no GEduc 2025',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-26-at-16.29.24.webp?resize=960%2C754&ssl=1',
            data: '26/03/2025',
            url: 'https://saojose.sc.gov.br/superintendente-da-fundesj-atua-como-avaliadora-no-geduc-2025/76029/'
        },
        {
            titulo: 'Longevidade Ativa: Palestra ensina idosos de São José a exercitar o cérebro e prevenir doenças',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2025/03/divulgacao-metodo-supera-materiais-3-1024x683-1.webp?resize=960%2C640&ssl=1',
            data: '26/03/2025',
            url: 'https://saojose.sc.gov.br/longevidade-ativa-palestra-ensina-idosos-de-sao-jose-a-exercitar-o-cerebro-e-prevenir-doencas/76011/'
        },
        {
            titulo: 'Fundação Educacional de São José e Avos lançam Programa de Formação de Voluntários',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2025/03/20250324_MARIANASMANIA-7.webp?resize=960%2C640&ssl=1',
            data: '24/03/2025',
            url: 'https://saojose.sc.gov.br/fundacao-educacional-de-sao-jose-e-avos-lancam-programa-de-formacao-de-voluntarios/75897/'
        },
        {
            titulo: 'Programa Longevidade Ativa inicia ciclo de palestras para idosos em São José',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-17-at-16.11.49.webp?resize=960%2C572&ssl=1',
            data: '17/03/2025',
            url: 'https://saojose.sc.gov.br/programa-longevidade-ativa-inicia-ciclo-de-palestras-para-idosos-em-sao-jose/75614/'
        },
        {
            titulo: 'Aulas do Projeto Inclusão Digital têm início com recorde de procura em 2025',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-10-at-18.17.47.webp?resize=960%2C522&ssl=1',
            data: '10/03/2025',
            url: 'https://saojose.sc.gov.br/aulas-do-projeto-inclusao-digital-tem-inicio-com-recorde-de-procura-em-2025/75347/'
        },
        {
            titulo: 'Fundesj expande oportunidades de qualificação para servidores municipais de São José',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-25-at-16.22.36-1.webp?resize=960%2C541&ssl=1',
            data: '25/02/2025',
            url: 'https://saojose.sc.gov.br/fundesj-expande-oportunidades-de-qualificacao-para-servidores-municipais-de-sao-jose/74915/'
        },
        {
            titulo: 'São José investe na capacitação dos servidores e firma nova parceria para qualificação',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2025/02/a0c66099-eee6-4298-b88f-d26cb95ee387.webp?resize=960%2C532&ssl=1',
            data: '19/02/2025',
            url: 'https://saojose.sc.gov.br/sao-jose-investe-na-capacitacao-dos-servidores-e-firma-nova-parceria-para-qualificacao/74715/'
        },
        {
            titulo: 'Projeto Inclusão Digital, em São José, disponibiliza 400 vagas para idosos',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2022/12/Inclusao_Digital_para_pessoa_idosa_102-scaled-e1712347122826.webp?resize=960%2C560&ssl=1',
            data: '14/02/2025',
            url: 'https://saojose.sc.gov.br/projeto-inclusao-digital-em-sao-jose-disponibiliza-400-vagas-para-idosos/74604/'
        },
        {
            titulo: 'Fundesj anuncia 400 vagas no projeto Inclusão Digital para Pessoas Idosas',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2025/01/20230519_094341-scaled-1.webp?resize=960%2C540&ssl=1',
            data: '15/01/2025',
            url: 'https://saojose.sc.gov.br/fundesj-anuncia-400-vagas-no-projeto-inclusao-digital-para-pessoas-idosas/73544/'
        },
        {
            titulo: 'Projeto Inclusão Digital Para Idosos certifica mais 108 idosos em São José',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2024/11/Formatura-Projeto-Inclusao-Digital-19-scaled.webp?resize=960%2C720&ssl=1',
            data: '26/11/2024',
            url: 'https://saojose.sc.gov.br/projeto-inclusao-digital-certifica-mais-108-idosos-em-sao-jose/71905/'
        },
        {
            titulo: 'Aviso de pauta: CEM Jardim Solemar recebe roda de conversa e ação solidária',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-15-at-11.50.01-jpeg.webp?resize=960%2C540&ssl=1',
            data: '26/11/2024',
            url: 'https://saojose.sc.gov.br/aviso-de-pauta-cem-jardim-solemar-recebe-roda-de-conversa-e-acao-solidaria/71891/'
        },
        {
            titulo: '“Segurança na internet” encerra ciclo de palestras do Programa Longevidade Ativa',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2024/11/IMG_4077-scaled.webp?resize=960%2C720&ssl=1',
            data: '08/11/2024',
            url: 'https://saojose.sc.gov.br/seguranca-na-internet-encerra-ciclo-de-palestras-do-programa-longevidade-ativa/70818/'
        },
        {
            titulo: 'Projeto Longevidade Ativa conscientiza idosos sobre a importância da sexualidade',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2024/06/Depositphotos_33900591_original-1170x508-1-jpg.webp?resize=960%2C417&ssl=1',
            data: '27/06/2024',
            url: 'https://saojose.sc.gov.br/projeto-longevidade-ativa-conscientiza-idosos-sobre-a-importancia-da-sexualidade/66658/'
        },
        {
            titulo: 'Servidores de São José recebem capacitação sobre Inteligência Artificial',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-13-at-18.54.49-jpeg.webp?w=887&ssl=1',
            data: '13/06/2024',
            url: 'https://saojose.sc.gov.br/servidores-de-sao-jose-recebem-capacitacao-sobre-inteligencia-artificial/66003/'
        },
        {
            titulo: 'Qualidade de vida para idosos é tema de palestra do Programa Longevidade Ativa',
            imagem: 'https://saojose.sc.gov.br/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-07-at-15.59.45-960x541.avif',
            data: '10/06/2024',
            url: 'https://saojose.sc.gov.br/qualidade-de-vida-para-idosos-e-tema-de-palestra-do-programa-longevidade-ativa/65724/'
        },
        {
            titulo: 'Parceria entre Fundesj e Banco do Brasil ensina idosos a evitar golpes digitais',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2024/05/2022_06_14_Divulgacao_idosos_junho-violeta_violencia-contra-idosos-jpg.webp?resize=960%2C548&ssl=1',
            data: '28/05/2024',
            url: 'https://saojose.sc.gov.br/fundesj-e-bb-firmam-parceria-para-conscientizar-idosos-sobre-golpes-e-fraudes-no-ambiente-digital/65085/'
        },
        {
            titulo: 'Programa Longevidade Ativa fala da importância do autoconhecimento na terceira idade',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-14.01.43-1-jpeg.webp?resize=960%2C639&ssl=1',
            data: '20/05/2024',
            url: 'https://saojose.sc.gov.br/programa-longevidade-ativa-fala-da-importancia-do-autoconhecimento-na-terceira-idade/64542/'
        },
        {
            titulo: 'Superintendente da Fundesj coordena Encontro Nacional de Secretários de Educação',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2024/02/Maria_Helena_Kruger_GEduc2024-jpg.webp?resize=960%2C624&ssl=1',
            data: '02/05/2024',
            url: 'https://saojose.sc.gov.br/superintendente-da-fundesj-coordena-encontro-nacional-de-secretarios-de-educacao/60809/'
        },
        {
            titulo: 'Palestra no Cati abordará autoestima e autoimagem para idosos de São José',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2024/04/Longevidade-Ativa_Sedo-15-scaled.webp?resize=960%2C720&ssl=1',
            data: '01/04/2024',
            url: 'https://saojose.sc.gov.br/palestra-no-cati-vai-abordar-sobre-autoestima-e-autoimagem/60786/'
        },
        {
            titulo: 'Servidores de São José fazem participação no curso “Redação Oficial”',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2024/03/Redacao-Oficial-13-scaled-e1711399334355.webp?resize=960%2C544&ssl=1',
            data: '26/03/2024',
            url: 'https://saojose.sc.gov.br/servidores-municipais-participam-do-curso-redacao-oficial/60458/'
        },
        {
            titulo: 'Programa Longevidade Ativa: palestra compartilha dicas para estilo de vida saudável',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2024/03/Longevidade-Ativa_Sedo-22-scaled-e1711144815258.webp?resize=960%2C473&ssl=1',
            data: '22/03/2024',
            url: 'https://saojose.sc.gov.br/programa-longevidade-ativa-palestra-compartilha-dicas-para-estilo-de-vida-saudavel/60306/'
        },
        {
            titulo: 'Prefeitura de São José inicia projeto Inclusão Digital para Todos',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2024/03/Inclusao-Digital-4-scaled.webp?resize=960%2C720&ssl=1',
            data: '21/03/2024',
            url: 'https://saojose.sc.gov.br/prefeitura-de-sao-jose-inicia-projeto-inclusao-digital-para-todos/60167/'
        },
        {
            titulo: 'Programa Longevidade Ativa abre o ano com palestra sobre saúde mental',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2024/03/IMG_2720-scaled.webp?resize=960%2C720&ssl=1',
            data: '21/03/2024',
            url: 'https://saojose.sc.gov.br/programa-longevidade-ativa-abre-o-ano-com-palestra-sobre-saude-mental/60200/'
        },
        {
            titulo: 'Feirão de Oportunidades oferecerá mais de 1,7 mil vagas de emprego em São José',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2024/03/carteira_de_trabalho-jpg.webp?resize=960%2C641&ssl=1',
            data: '13/03/2024',
            url: 'https://saojose.sc.gov.br/feirao-de-oportunidades-oferecera-mais-de-17-mil-vagas-de-emprego/59572/'
        },
        {
            titulo: 'Prefeitura de São José amplia projeto Inclusão Digital para Pessoas Idosas',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2023/12/Projeto_Inclusao_Digital_9.JPG.jpg?resize=960%2C720&ssl=1',
            data: '12/03/2024',
            url: 'https://saojose.sc.gov.br/prefeitura-de-sao-jose-amplia-projeto-inclusao-digital-para-pessoas-idosas/59560/'
        },
        {
            titulo: 'Programa Longevidade Ativa recebe inscrições para palestra “Sedo Farmácia da Mente”',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2024/03/IMG_2720-scaled.webp?resize=960%2C720&ssl=1',
            data: '26/11/2024',
            url: 'https://saojose.sc.gov.br/programa-longevidade-ativa-recebe-inscricoes-para-palestra-sedo-farmacia-da-mente/59154/'
        },
        {
            titulo: 'Fundesj e Serte discutem cooperação no projeto Inclusão Digital para Todos',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2024/02/Fundesj-visita-a-Serte-2-jpeg.webp?resize=960%2C720&ssl=1',
            data: '29/02/2024',
            url: 'https://saojose.sc.gov.br/fundesj-e-serte-discutem-cooperacao-no-projeto-inclusao-digital-para-todos/58789/'
        },
        {
            titulo: 'Projeto Inclusão Digital inspira outras instituições da Grande Florianópolis',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2024/02/Fundesj_Serte_Inclusao-Digital-jpeg.webp?resize=960%2C720&ssl=1',
            data: '23/02/2024',
            url: 'https://saojose.sc.gov.br/projetos-inclusao-digital-inspira-outras-instituicoes-da-grande-florianopolis/58434/'
        },
        {
            titulo: 'Idosos aprendem funcionalidades dos smartphones no Cati',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2024/02/Projeto-Inclusao-Digital-24-scaled.webp?resize=960%2C720&ssl=1',
            data: '22/02/2024',
            url: 'https://saojose.sc.gov.br/idosos-aprendem-funcionalidades-dos-smartphones-no-cati/58417/'
        },
        {
            titulo: 'Projeto busca combater bullying e cyberbullying nas escolas de São José',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2024/02/Protecao-em-Rede_-PMSJ-e-OAB-SJ-jpeg.webp?w=960&ssl=1',
            data: '21/02/2024',
            url: 'https://saojose.sc.gov.br/projeto-busca-combater-bullying-e-cyberbullying-nas-escolas-de-sao-jose/58364/'
        },
        {
            titulo: 'Projeto Inclusão Digital ensina idosos sobre funcionalidades do celular',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2023/12/Projeto_Inclusao_Digital_9.JPG.jpg?resize=960%2C720&ssl=1',
            data: '19/02/2024',
            url: 'https://saojose.sc.gov.br/projeto-inclusao-digital-ensina-idosos-sobre-funcionalidades-do-celular/58154/'
        },
        {
            titulo: 'Fundesj alinha curso de Redação Oficial para servidores municipais',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2024/02/Fundesj-Redacao-Oficial-2-jpg.webp?resize=960%2C720&ssl=1',
            data: '05/02/2024',
            url: 'https://saojose.sc.gov.br/fundesj-alinha-curso-de-redacao-oficial-para-servidores-municipais/57651/'
        },
        {
            titulo: 'Projeto Inclusão Digital alinha novas turmas para 2024',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2023/12/Projeto_Inclusao_Digital_9.JPG.jpg?resize=960%2C720&ssl=1',
            data: '04/12/2023',
            url: 'https://saojose.sc.gov.br/projeto-inclusao-digital-alinha-novas-turmas-para-2024/54855/'
        },
        {
            titulo: 'Violência nas escolas e projetos de proteção de crianças são temas de Seminário',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2023/09/WhatsApp_Image_2023-09-15_at_13.19.19.jpeg?resize=960%2C720&ssl=1',
            data: '15/09/2023',
            url: 'https://saojose.sc.gov.br/violencia-nas-escolas-e-projetos-de-protecao-de-criancas-sao-temas-de-seminario/49672/'
        },
        {
            titulo: 'Inclusão Digital ensina funcionalidades do celular para pessoas idosas',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2022/09/20220902_152422-scaled.jpg?resize=960%2C540&ssl=1',
            data: '05/09/2022',
            url: 'https://saojose.sc.gov.br/inclusao-digital-ensina-funcionalidades-do-celular-para-pessoas-idosas/28487/'
        },
        {
            titulo: 'Inclusão Digital para pessoas idosas começa sexta-feira',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2022/08/IMG_5337-1-scaled.jpg?resize=960%2C720&ssl=1',
            data: '31/08/2022',
            url: 'https://saojose.sc.gov.br/inclusao-digital-para-pessoas-idosas-comeca-sexta-feira/28339/'
        },
        {
            titulo: 'Terceira idade vai aprender a usar recursos do celular para o cotidiano',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2022/08/IMG_5337-scaled.jpg?resize=960%2C720&ssl=1',
            data: '23/02/2024',
            url: 'https://saojose.sc.gov.br/terceira-idade-vai-aprender-a-usar-recursos-do-celular-para-o-cotidiano/27622/'
        },
        {
            titulo: 'Núcleo da Escola Federativa de São José vai oferecer formação permanente',
            imagem: 'https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2022/02/020821_retorno_aulas-scaled.jpg?resize=960%2C655&ssl=1',
            data: '23/02/2024',
            url: 'https://saojose.sc.gov.br/nucleo-da-escola-federativa-de-sao-jose-vai-oferecer-formacao-permanente/26716/'
        },
        
    ];

    // Lógica de paginação
    const totalPaginas = Math.ceil(noticias.length / itensPorPagina);
    const noticiasPaginaAtual = noticias.slice(
        (paginaAtual - 1) * itensPorPagina,
        paginaAtual * itensPorPagina
    );

    return (
        <>
            <Header />
            <div className="noticias-container">
                <header className="cabecalho">
                    <h1>Últimas Notícias</h1>
                </header>

                <main className="lista-noticias">
                    {noticiasPaginaAtual.map((noticia) => (
                        <article className="card-noticia">
                            <img src={noticia.imagem} alt={noticia.titulo} />
                            <div className="conteudo-noticia">
                                <h2>{noticia.titulo}</h2>
                                <span className="data"> <FaClock className="icone-relogio" />{noticia.data}</span> <br />
                                {noticia.url && (
                                    <a
                                        href={noticia.url}
                                        className="ler-mais"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Ler mais
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </main>

                {/* Paginação */}
                {totalPaginas > 1 && (
                    <div className="paginacao">
                        <button 
                            onClick={() => setPaginaAtual(paginaAtual - 1)} 
                            disabled={paginaAtual === 1}
                            className="botao-paginacao"
                        >
                            <FaChevronLeft /> Anterior
                        </button>
                        
                        {Array.from({ length: totalPaginas }, (_, i) => i + 1).map(numero => (
                            <button
                                key={numero}
                                onClick={() => setPaginaAtual(numero)}
                                className={`botao-paginacao ${paginaAtual === numero ? 'ativo' : ''}`}
                            >
                                {numero}
                            </button>
                        ))}
                        
                        <button 
                            onClick={() => setPaginaAtual(paginaAtual + 1)} 
                            disabled={paginaAtual === totalPaginas}
                            className="botao-paginacao"
                        >
                            Próximo <FaChevronRight />
                        </button>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Noticias;