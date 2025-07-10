import React, { useState, useRef, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './ProjetosAtivos.css';
import Header from '../header/index.jsx';
import Footer from '../footer/footer';

const ProjetosAtivos = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    const projects = [
        {
            title: "Inclusão Digital para Idosos",
            description: "Capacita pessoas da terceira idade para o uso de tecnologias, promovendo autonomia e conexão com o mundo digital.",
            icon: "👵🏽💻",
        },
        {
            title: "Ciclo de Palestras",
            description: "Estimula o diálogo e a reflexão sobre temas relevantes da atualidade, trazendo especialistas para debates enriquecedores.",
            icon: "🎤🧠",
        },
        {
            title: "Projeto ILPI",
            description: "Voltado ao cuidado e à conectividade de idosos em instituições de longa permanência, melhorando sua qualidade de vida.",
            icon: "🏥❤️",
        },
        {
            title: "Oficinas de Inclusão Digital Intermediárias",
            description: "Aprofunda habilidades digitais já adquiridas, permitindo maior domínio tecnológico e oportunidades.",
            icon: "📱🚀",
        },
        {
            title: "Educação Continuada",
            description: "Oferece cursos e workshops para atualização profissional em diversas áreas do conhecimento.",
            icon: "📚✨",
        },
    ];

    const cardWidth = 300; // Fixed width for each card
    const gap = 20; // Gap between cards
    const cardsToShow = 3; // Number of cards to show at once

    const nextProjects = () => {
        setCurrentIndex(prev => Math.min(prev + 1, projects.length - cardsToShow));
    };

    const prevProjects = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
    };

    useEffect(() => {
        if (carouselRef.current) {
            const translateX = -currentIndex * (cardWidth + gap);
            carouselRef.current.style.transform = `translateX(${translateX}px)`;
        }
    }, [currentIndex]);

    return (
        <>
            <Header />
            <main className="projetos-container">
                <section className="page-header">
                    <h1 className="section-title">Nossos Projetos Ativos</h1>
                    <p className="section-subtitle">
                        Cada iniciativa da Fundação Educacional de São José é cuidadosamente planejada para transformar vidas e
                        fortalecer vínculos sociais por meio da educação, inclusão e bem-estar comunitário.
                    </p>
                </section>

                <div className="carousel-wrapper">
                    <button
                        className="carousel-button prev"
                        onClick={prevProjects}
                        aria-label="Projetos anteriores"
                        style={{ display: currentIndex === 0 ? 'none' : 'flex' }}
                    >
                        <FiChevronLeft size={32} />
                    </button>

                    <div className="carousel-container">
                        <div className="projects-carousel" ref={carouselRef}>
                            {projects.map((project, index) => (
                                <div 
                                    className="project-card-wrapper"
                                    key={index}
                                    style={{ width: `${cardWidth}px` }}
                                >
                                    <ProjectCard
                                        title={project.title}
                                        description={project.description}
                                        icon={project.icon}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className="carousel-button next"
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
    <div className="project-card">
        <div className="project-image">
            <div className="icon-wrapper">{icon}</div>
        </div>
        <div className="project-content">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
);

const ImpactSection = () => (
    <section className="impact-section">
        <div className="impact-content">
            <h2 className="impact-title">Impacto Social e Resultados</h2>
            <div className="impact-text">
                <p>
                    Nossos projetos já beneficiaram diretamente mais de <strong>1.000 pessoas</strong>, com mais de <strong>2.000 horas de atividades educacionais realizadas</strong>.
                    Acreditamos que a educação transformadora é o alicerce de uma sociedade mais justa e igualitária.
                </p>
                <p>
                    Todos os nossos programas são estruturados com base em <strong>metodologias consolidadas</strong> e passam por avaliações sistemáticas de resultados,
                    assegurando que os recursos sejam aplicados com máxima eficiência e impacto.
                </p>
            </div>
            <div className="stats-grid">
                <StatItem number="1.000+" label="Pessoas diretamente impactadas" />
                <StatItem number="2.000+" label="Horas de atividades educacionais" />
                <StatItem number="15+" label="Parceiros institucionais" />
                <StatItem number="100+" label="Oficinas e encontros" />
            </div>
        </div>
    </section>
);

const StatItem = ({ number, label }) => (
    <div className="stat-item">
        <span className="stat-number">{number}</span>
        <span className="stat-label">{label}</span>
    </div>
);

export default ProjetosAtivos;