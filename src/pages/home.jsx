import { useState } from "react";
import '../styles/home.css';
import logo from '../images/logo.png';
import background from '../images/background.mp4';
function Home() {

    return (
        <div className="home">
        <header className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <nav className="menu">
                <ul>
                    <a href=""><li>A INSTITUIÇÃO ▾</li></a>
                    <a href=""><li>PROGRAMAS ▾</li></a>
                    <a href=""><li>PROJETOS ▾</li></a>
                    <a href=""><li>CURSOS ▾</li></a>
                    <a href=""><li>EVENTOS ▾</li></a>
                    <a href=""><li>CERTIFICADOS</li></a>
                    <a href=""><li>USJ</li></a>
                    <a href=""><li>CONTATO</li></a>
                </ul>
            </nav>
        </header>
    
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
