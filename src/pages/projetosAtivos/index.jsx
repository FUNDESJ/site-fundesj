import React, { useState, useRef, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from './ProjetosAtivos.module.css';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/footer.jsx';
import ciclo from '../../images/pagina inicial/ciclo.jpg';
import inclusaoidosos from '../../images/pagina inicial/inclusao.png';
import idtodos from '../../images/pagina inicial/idtodosfi.jpeg';
import bemEstar from '../../images/pagina inicial/bemEstar.jpeg';
import HeroPages from '../../components/heros/hero_pages.jsx';
const ProjetosAtivos = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carosselRef = useRef(null);
    const projects = [
        {
            title: "Ciclo de Palestras",
            description: "Estimula o diálogo e a reflexão sobre temas relevantes da atualidade, trazendo especialistas para debates enriquecedores.",
            image: ciclo,
            link: '/ciclo'
        },
        {
            title: "Inclusão Digital para Idosos",
            description: "Capacita pessoas da terceira idade para o uso de tecnologias, promovendo autonomia e conexão com o mundo digital.",
            image: inclusaoidosos,
            link: '/idbasico'
        },
        {
            title: "Oficinas de Inclusão Digital Intermediárias",
            description: "Aprofunda habilidades digitais já adquiridas, permitindo maior domínio tecnológico e oportunidades.",
            image: idtodos,
            link: '/idintermediario'
        },
        {
            title: "Projeto ILPI",
            description: "Voltado ao cuidado e à conectividade de idosos em instituições de longa permanência, melhorando sua qualidade de vida.",
            image: bemEstar,
            link: '/ilpi'
        },

    ];

    const cardWidth = 300;
    const gap = 20;
    const cardsToShow = 3;

    const nextProjects = () => {
        setCurrentIndex(prev => Math.min(prev + 1, projects.length - cardsToShow));
    };

    const prevProjects = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
    };

    useEffect(() => {
        if (carosselRef.current) {
            const translateX = -currentIndex * (cardWidth + gap);
            carosselRef.current.style.transform = `translateX(${translateX}px)`;
        }
    }, [currentIndex]);

    return (
        <>
            <Header />
            <main className={styles.container}>

                <HeroPages
                    titulo="Nossos Projetos Ativos"
                    descricao="Cada iniciativa da Fundação Educacional de São José é cuidadosamente planejada para transformar vidas e
                            fortalecer vínculos sociais por meio da educação, inclusão e bem-estar comunitário."
                />

                <div className={styles.carosselWrapper}>
                    <button
                        className={`${styles.carosselButton} ${styles.prev}`}
                        onClick={prevProjects}
                        aria-label="Projetos anteriores"
                        style={{ display: currentIndex === 0 ? 'none' : 'flex' }}
                    >
                        <FiChevronLeft size={32} />
                    </button>

                    <div className={styles.carosselContainer}>
                        <div className={styles.projectsCarossel} ref={carosselRef}>
                            {projects.map((project, index) => (
                                <div
                                    className={styles.projectCardWrapper}
                                    key={index}
                                    style={{ width: `${cardWidth}px` }}
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
                        className={`${styles.carosselButton} ${styles.next}`}
                        onClick={nextProjects}
                        aria-label="Próximos projetos"
                        style={{ display: currentIndex >= projects.length - cardsToShow ? 'none' : 'flex' }}
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

const ProjectCard = ({ title, description, image }) => (
    <div className={styles.projectCard}>
        <div className={styles.projectImage}>
            <img src={image} alt={title} />
        </div>
        <div className={styles.projectContent}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
);

const ImpactSection = () => (
    <section className={styles.impactSection}>
        <div className={styles.impactContent}>
            <h2 className={styles.impactTitle}>Impacto Social e Resultados</h2>
            <div className={styles.impactText}>
                <p>
                    Nossos projetos já beneficiaram diretamente mais de <strong>1.000 pessoas</strong>, com mais de <strong>2.000 horas de atividades educacionais realizadas</strong>.
                    Acreditamos que a educação transformadora é o alicerce de uma sociedade mais justa e igualitária.
                </p>
                <p>
                    Todos os nossos programas são estruturados com base em <strong>metodologias consolidadas</strong> e passam por avaliações sistemáticas de resultados,
                    assegurando que os recursos sejam aplicados com máxima eficiência e impacto.
                </p>
            </div>
            <div className={styles.statsGrid}>
                <StatItem number="3.000+" label="Pessoas impactadas" />
                <StatItem number="2.000+" label="Horas de atividades educacionais" />
                <StatItem number="15+" label="Parceiros institucionais" />
                <StatItem number="500+" label="Oficinas e encontros" />
            </div>
        </div>
    </section>
);

const StatItem = ({ number, label }) => (
    <div className={styles.statItem}>
        <span className={styles.statNumber}>{number}</span>
        <span className={styles.statLabel}>{label}</span>
    </div>
);

export default ProjetosAtivos;