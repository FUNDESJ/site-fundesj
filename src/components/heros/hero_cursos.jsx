import './hero_cursos.css';
export default function HeroCursos({ titulo1, titulo2, subtitulo }) {
    return (
        <div className="cursos-hero-cursos-container">
            <section className="cursos-hero-section">
                <div className="cursos-hero-content">
                    <h1 className="cursos-hero-title">{titulo1} <span className="cursos-hero-highlight">{titulo2}</span></h1>
                    <p className="cursos-hero-subtitle">{subtitulo}</p>
                    <div className="cursos-hero-divider"></div>
                </div>
                <div className="hero-overlay"></div>
            </section>
        </div>
    )

}