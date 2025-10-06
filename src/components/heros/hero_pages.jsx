import './hero_pages.css';
export default function HeroPages({ titulo, descricao }) {
    return(
    <section className="cursos-hero">
        <div className="hero-content">
            <h1 className="hero-title">{titulo}</h1>
            <p className="hero-subtitle">
                {descricao}
            </p>
        </div>
    </section>
    )
}