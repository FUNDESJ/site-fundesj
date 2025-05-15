import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './header.css';
export default function Header () {
    return (
        <header className="navbar">
            <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
            <nav className="menu">
                <ul>
                    <Link to="/instituição"><li>A INSTITUIÇÃO ▾</li></Link>
                    <Link to="/programas"><li>PROGRAMAS ▾</li></Link>
                    <Link to="/projetos"><li>PROJETOS ▾</li></Link>
                    <Link to="/cursos"><li>CURSOS ▾</li></Link>
                    <Link to="/eventos"><li>EVENTOS ▾</li></Link>
                    <Link to="/certificados"><li>CERTIFICADOS</li></Link>
                    <Link to="/noticias"><li>NOTÍCIAS</li></Link>
                    <Link to="/usj"><li>USJ</li></Link>
                    <Link to="/contatos"><li>CONTATOS</li></Link>
                </ul>
            </nav>
        </header>
    );
}