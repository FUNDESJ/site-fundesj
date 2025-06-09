import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
    
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <header className="navbar">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      <nav className="menu">
        <ul>
          {/* A INSTITUIÇÃO */}
          <li
            className="dropdown has-submenu"
            onMouseEnter={() => setOpenMenu('instituicao')}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link to="/instituição">
              A INSTITUIÇÃO
            </Link>

            {openMenu === 'instituicao' && (
              <ul className="submenu">
                <li><Link to="/equipe" className="submenu-link">Equipe</Link></li>
                <li><Link to="/realizações" className="submenu-link">Realizações 2024</Link></li>
                <li><Link to="/parceiros" className="submenu-link">Parceiros</Link></li>
              </ul>
            )}
          </li>


          

          {/* Outros itens sem submenu */}
          <li><Link to="/certificados">CERTIFICADOS</Link></li>
          <li><Link to="/noticias">NOTÍCIAS</Link></li>
          <li><Link to="/usj">USJ</Link></li>
          <li><Link to="/contatos">CONTATOS</Link></li>
        </ul>
      </nav>
    </header>
  );
}