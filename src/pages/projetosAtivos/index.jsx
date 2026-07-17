import { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from './ProjetosAtivos.module.css';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/footer.jsx';
import HeroPages from '../../components/heros/hero_pages.jsx';
import ciclo from '../../images/pagina inicial/ciclo.jpg';
import inclusaoidosos from '../../images/pagina inicial/inclusao.png';
import idtodos from '../../images/pagina inicial/idtodosfi.jpeg';
import univali from '../../images/fotos parceiros/UNIVALI.png';
import institutoElaImg from '../../images/fotos parceiros/ela.png';
import movmulherviva from '../../images/projetos/mulher-viva.jpeg';
import avosImg from '../../images/projetos/avos-carrosel.png';
const CARD_WIDTH = 300;
const CARD_GAP = 20;
const CARDS_TO_SHOW = 3;

const ProjetosAtivos = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carosselRef = useRef(null);

    const projects = [
        {
            title: 'Ciclo de Palestras',
            description:
                'Estimula o diálogo e a reflexão sobre temas relevantes da atualidade, trazendo especialistas para debates enriquecedores.',
            image: ciclo,
            link: '/ciclo',
        },
        {
            title: 'Inclusão Digital para Idosos',
            description:
                'Capacita pessoas da terceira idade para o uso de tecnologias, promovendo autonomia e conexão com o mundo digital.',
            image: inclusaoidosos,
            link: '/idbasico',
        },
        {
            title: 'Oficina Temática de Inclusão Digital',
            description:
                'Aprofunda habilidades digitais já adquiridas, permitindo maior domínio tecnológico e oportunidades.',
            image: idtodos,
            link: '/idintermediario',
        },
        {
            title: 'Projeto Mulher Viva',
            description:
                'Movimento de prevenção à violência contra mulheres, com foco em acolhimento e autonomia.',
            image: movmulherviva,
            link: '/mulher-viva',
        },
        {
            title: 'Instituto ELA – Educadoras do Brasil',
            description:
                'Parceria com o Instituto ELA para valorização da força feminina por meio da educação, acolhimento e transformação social.',
            image: institutoElaImg,
            link: '/instituto-ela',
        },
        {
            title: 'Formação e Capacitação FUNDESJ e AVOS',
            description:
                'Parceria com a AVOS para formação de colaboradores e voluntários, com foco em comunicação, escuta qualificada e cuidado emocional.',
            image: avosImg,
            link: '/avos',
        },
        {
            title: 'Inserção de egressos da Univali',
            description:
                'Projeto de inserção de egressos da Univali em projetos e ações comunitárias.',
            image: univali,
            link: '/egressos-univali',
        },
    ];

    const maxIndex = Math.max(projects.length - CARDS_TO_SHOW, 0);

    const nextProjects = () => {
        setCurrentIndex((previousIndex) =>
            Math.min(previousIndex + 1, maxIndex)
        );
    };

    const prevProjects = () => {
        setCurrentIndex((previousIndex) =>
            Math.max(previousIndex - 1, 0)
        );
    };

    useEffect(() => {
        if (!carosselRef.current) {
            return;
        }

        const translateX = -currentIndex * (CARD_WIDTH + CARD_GAP);

        carosselRef.current.style.transform = `translateX(${translateX}px)`;
    }, [currentIndex]);

    return (
        <>
            <Header />

            <main className={styles.container}>
                <HeroPages
                    titulo="Nossos Projetos"
                    descricao="Cada iniciativa da Fundação Educacional de São José é cuidadosamente planejada para transformar vidas e fortalecer vínculos sociais por meio da educação, inclusão e bem-estar comunitário."
                />

                <div className={styles.carosselWrapper}>
                    <button
                        type="button"
                        className={`${styles.carosselButton} ${styles.prev}`}
                        onClick={prevProjects}
                        aria-label="Projetos anteriores"
                        disabled={currentIndex === 0}
                        style={{
                            display: currentIndex === 0 ? 'none' : 'flex',
                        }}
                    >
                        <FiChevronLeft size={32} />
                    </button>

                    <div className={styles.carosselContainer}>
                        <div
                            className={styles.projectsCarossel}
                            ref={carosselRef}
                        >
                            {projects.map((project) => (
                                <div
                                    className={styles.projectCardWrapper}
                                    key={project.link}
                                    style={{ width: `${CARD_WIDTH}px` }}
                                >
                                    <a href={project.link}>
                                        <ProjectCard
                                            title={project.title}
                                            description={project.description}
                                            image={project.image}
                                        />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        type="button"
                        className={`${styles.carosselButton} ${styles.next}`}
                        onClick={nextProjects}
                        aria-label="Próximos projetos"
                        disabled={currentIndex >= maxIndex}
                        style={{
                            display: currentIndex >= maxIndex ? 'none' : 'flex',
                        }}
                    >
                        <FiChevronRight size={32} />
                    </button>
                </div>

                <ImpactSection />
            </main>

            <Footer />
        </>
    );
};

const ProjectCard = ({ title, description, image }) => {
    return (
        <div className={styles.projectCard}>
            <div className={styles.projectImage}>
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                />
            </div>

            <div className={styles.projectContent}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

const ImpactSection = () => {
    return (
        <section className={styles.impactSection}>
            <div className={styles.impactContent}>
                <h2 className={styles.impactTitle}>
                    Impacto Social e Resultados
                </h2>

                <div className={styles.impactText}>
                    <p>
                        Nossos projetos já beneficiaram diretamente mais de{' '}
                        <strong>1.000 pessoas</strong>, com mais de{' '}
                        <strong>
                            2.000 horas de atividades educacionais realizadas
                        </strong>
                        . Acreditamos que a educação transformadora é o alicerce de
                        uma sociedade mais justa e igualitária.
                    </p>

                    <p>
                        Todos os nossos programas são estruturados com base em{' '}
                        <strong>metodologias consolidadas</strong> e passam por
                        avaliações sistemáticas de resultados, assegurando que os
                        recursos sejam aplicados com máxima eficiência e impacto.
                    </p>
                </div>

                <div className={styles.statsGrid}>
                    <StatItem
                        number="3.000+"
                        label="Pessoas impactadas"
                    />

                    <StatItem
                        number="2.000+"
                        label="Horas de atividades educacionais"
                    />

                    <StatItem
                        number="15+"
                        label="Parceiros institucionais"
                    />

                    <StatItem
                        number="500+"
                        label="Oficinas e encontros"
                    />
                </div>
            </div>
        </section>
    );
};

const StatItem = ({ number, label }) => {
    return (
        <div className={styles.statItem}>
            <span className={styles.statNumber}>{number}</span>
            <span className={styles.statLabel}>{label}</span>
        </div>
    );
};

export default ProjetosAtivos;