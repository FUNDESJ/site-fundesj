import React, { useState, useRef, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from './ProjetosAtivos.module.css';
import Header from '../header/index.jsx';
import Footer from '../footer/footer';

const ProjetosAtivos = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carosselRef = useRef(null);
    const projects = [
        {
            title: "Inclusão Digital para Idosos",
            description: "Capacita pessoas da terceira idade para o uso de tecnologias, promovendo autonomia e conexão com o mundo digital.",
            icon: "👵🏽💻",
            link: '/idbasico'
        },
        {
            title: "Ciclo de Palestras",
            description: "Estimula o diálogo e a reflexão sobre temas relevantes da atualidade, trazendo especialistas para debates enriquecedores.",
            icon: "🎤🧠",
            link: '/ciclo'
        },
        {
            title: "Projeto ILPI",
            description: "Voltado ao cuidado e à conectividade de idosos em instituições de longa permanência, melhorando sua qualidade de vida.",
            icon: "🏥❤️",
            link: '/ilpi'
        },
        {
            title: "Oficinas de Inclusão Digital Intermediárias",
            description: "Aprofunda habilidades digitais já adquiridas, permitindo maior domínio tecnológico e oportunidades.",
            icon: "📱🚀",
            link: '/idintermediario'
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

                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Nossos Projetos Ativos</h1>
                        <p className={styles.heroSubtitle}>
                            Cada iniciativa da Fundação Educacional de São José é cuidadosamente planejada para transformar vidas e
                            fortalecer vínculos sociais por meio da educação, inclusão e bem-estar comunitário.
                        </p>
                    </div>
                </section>

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
                                            icon={project.icon}
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

const ProjectCard = ({ title, description, icon }) => (
    <div className={styles.projectCard}>
        <div className={styles.projectImage}>
            <div className={styles.iconWrapper}>{icon}</div>
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
                <StatItem number="1.000+" label="Pessoas diretamente impactadas" />
                <StatItem number="2.000+" label="Horas de atividades educacionais" />
                <StatItem number="15+" label="Parceiros institucionais" />
                <StatItem number="100+" label="Oficinas e encontros" />
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
