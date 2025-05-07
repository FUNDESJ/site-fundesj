import { useState } from "react";
import '../styles/home.css';
import logo from '../images/logo.png';
import backgound from '../images/background.mp4';
function Home() {

    return (
        <div className="home">
            <video
                className="video-bg"
                src={backgound}
                type="video/mp4"
                autoPlay
                loop
                playsInline
            ></video>
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
        </div>
    );
}


export default Home;
