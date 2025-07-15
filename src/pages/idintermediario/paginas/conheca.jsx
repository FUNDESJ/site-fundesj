import Header from '../../header/index.jsx'
import Footer from '../../footer/footer.jsx'
import './conheca.css'

export default function Conheca(){
    return(
        <>
            <Header/>
            <div className="conheca-container">
                <h1 className="conheca-title">Oficinas Temáticas de Inclusão Digital para Pessoas com 60+</h1>

                <section className="conheca-section">
                    <p className="conheca-text">
                        A iniciativa visa proporcionar o acesso significativo às tecnologias digitais, ampliando a autonomia, o bem-estar e a participação social do público idoso na sociedade contemporânea.
                    </p>
                    <p className="conheca-text">
                        As oficinas são destinadas a pessoas que já participaram e receberam certificação no Projeto Inclusão Digital, previamente oferecido pela Fundação Educacional de São José – FUNDESJ. Trata-se de um público com conhecimentos iniciais em tecnologia digital, pronto para avançar em novos temas e ferramentas com foco prático e contextualizado.
                    </p>
                    <p className="conheca-text">
                        O programa, estruturado em oficinas presenciais semanais, contempla uma metodologia centrada no participante, baseada em princípios geragógicos. Os encontros são realizados em grupos reduzidos, com até dez participantes, garantindo atendimento individualizado e a construção de um ambiente acolhedor, respeitoso e propício à aprendizagem colaborativa.
                    </p>
                    <p className="conheca-text">
                        O conteúdo programático abrange temas de alta relevância para o cotidiano dos idosos, tais como o uso do portal Gov.br e seus principais serviços digitais, introdução à inteligência artificial e assistentes virtuais, segurança e privacidade na internet, além da utilização de aplicativos voltados à saúde, mobilidade e entretenimento.
                    </p>
                    <p className="conheca-text">
                        A avaliação do projeto é processual e formativa, centrada no engajamento e no desenvolvimento individual. Ao final do ciclo de oficinas, os participantes recebem certificação que reconhece sua dedicação, seu progresso e sua integração ao universo digital, simbolizando uma conquista pessoal e social.
                    </p>
                    <p className="conheca-text">
                        Com esta iniciativa, a Fundação Educacional reafirma seu compromisso com a inclusão, o respeito à diversidade etária e a construção de uma sociedade mais acessível, conectada e humana.
                    </p>
                </section>

                <section className="conheca-section conheca-section--highlight">
                    <h2 className="conheca-subtitle">Público-Alvo</h2>
                    <p className="conheca-text">
                        As oficinas são destinadas a pessoas que já participaram e receberam certificação no Projeto Inclusão Digital, previamente oferecido pela Fundação Educacional de São José – FUNDESJ. Trata-se de um público com conhecimentos iniciais em tecnologia digital, pronto para avançar em novos temas e ferramentas com foco prático e contextualizado.
                    </p>
                </section>

                <section className="conheca-section">
                    <h2 className="conheca-subtitle">Objetivos Principais</h2>
                    <ul className="conheca-list">
                        <li className="conheca-list-item">Capacitar os participantes no uso de serviços e ferramentas digitais essenciais</li>
                        <li className="conheca-list-item">Estimular o envelhecimento ativo com foco em saúde cognitiva e emocional</li>
                        <li className="conheca-list-item">Reduzir barreiras geracionais e fortalecer vínculos familiares e comunitários</li>
                        <li className="conheca-list-item">Combater o isolamento social e incentivar a cidadania digital</li>
                    </ul>
                </section>

                <section className="conheca-section conheca-section--highlight">
                    <h2 className="conheca-subtitle">Metodologia</h2>
                    <p className="conheca-text">
                        A abordagem geragógica utilizada é centrada no respeito, na empatia e na valorização das experiências individuais dos idosos. As oficinas acontecem em formato presencial, com grupos reduzidos de até 10 participantes, e duração de 2 horas por sessão, realizadas semanalmente. O conteúdo é prático, dialogado e adaptado ao ritmo de cada participante.
                    </p>
                </section>

                <section className="conheca-section">
                    <h2 className="conheca-subtitle">Conteúdo Programático</h2>
                    <ul className="conheca-list">
                        <li className="conheca-list-item">Acesso e uso do portal Gov.br e serviços públicos digitais</li>
                        <li className="conheca-list-item">Introdução à Inteligência Artificial e assistentes virtuais (Alexa, Google Assistant, ChatGPT)</li>
                        <li className="conheca-list-item">Aplicativos para saúde, mobilidade, segurança pessoal e lazer</li>
                        <li className="conheca-list-item">Privacidade e segurança digital, prevenção de golpes e fake news</li>
                        <li className="conheca-list-item">Recursos de conectividade como videoconferências e compartilhamento seguro</li>
                    </ul>
                </section>

                <section className="conheca-section conheca-section--highlight">
                    <h2 className="conheca-subtitle">Avaliação e Certificação</h2>
                    <p className="conheca-text">
                        A avaliação dos participantes é contínua e formativa, focada no progresso individual, engajamento e autonomia digital. Ao final do programa, é concedido certificado de participação, simbolizando a conquista pessoal e social dos envolvidos.
                    </p>
                </section>
            </div>
            <Footer/>
        </>
    )
}