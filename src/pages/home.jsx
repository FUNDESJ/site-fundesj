import '../styles/home.css';
import background from '../images/background.mp4';
import { Link } from 'react-router-dom';
import Header from './header';
function Home() {

    return (
        <div className="home">
        <Header />
        <div className="hero">
            {/* Agora o vídeo está dentro da .hero */}
            <video
                className="video-bg"
                src={background}
                type="video/mp4"
                autoPlay
                loop
                muted
                playsInline
            ></video>
    
            <div className="overlay" />
            <div className="hero-content">
                <h1>FUNDESJ</h1>
                <p>Fundação Educacional de São José</p>
                <div className="buttons">
                    <button className="btn">SOBRE</button>
                    <button className="btn">INSCRIÇÕES</button>
                </div>
            </div>
        </div>
    
        <div className="section-cards">
            <div className="card">
                <i className="fas fa-sitemap"></i>
                <p>PROGRAMAS</p>
            </div>
            <div className="card">
                <i className="fas fa-file-alt"></i>
                <p>PROJETOS</p>
            </div>
            <div className="card">
                <i className="fas fa-book"></i>
                <p>CURSOS</p>
            </div>
            <div className="card">
                <i className="fas fa-users"></i>
                <p>EVENTOS</p>
            </div>
        </div>
    </div>
    
    );
}


export default Home;
