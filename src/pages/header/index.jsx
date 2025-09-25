import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Abre/fecha submenu no clique (mobile)
  const handleSubmenuClick = (menuName) => {
    if (openMenu === menuName) {
      setOpenMenu(null);
    } else {
      setOpenMenu(menuName);
    }
  };

  return (
    <header className="navbar">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      {/* Botão hamburguer (aparece no mobile) */}
      <div
        className="menu-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul>
          {/* A INSTITUIÇÃO */}
          <li
            className="dropdown has-submenu"
            onMouseEnter={() => !isMobileMenuOpen && setOpenMenu('instituicao')}
            onMouseLeave={() => !isMobileMenuOpen && setOpenMenu(null)}
            onClick={() => isMobileMenuOpen && handleSubmenuClick('instituicao')}
          >
            <Link to="/instituição">
              A INSTITUIÇÃO
            </Link>

            {openMenu === 'instituicao' && (
              <ul className="submenu open">
                <li><Link to="/equipe" className="submenu-link">Equipe</Link></li>
                <li><Link to="/realizações" className="submenu-link">Realizações 2024</Link></li>
                <li><Link to="/parceiros" className="submenu-link">Parceiros</Link></li>
                <li><Link to="/projetos-anteriores" className="submenu-link">Projetos anteriores</Link></li>
              </ul>
            )}
          </li>

          {/* Outros itens */}
          <li><Link to="/validador">CERTIFICADOS</Link></li>
          <li><Link to="/noticias">NOTÍCIAS</Link></li>
          <li><Link to="/usj">USJ</Link></li>
          <li><Link to="/contatos">CONTATOS</Link></li>
        </ul>
      </nav>
    </header>
  );
}
