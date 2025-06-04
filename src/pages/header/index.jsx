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

          {/* PROGRAMAS */}
          <li
            className="dropdown has-submenu"
            onMouseEnter={() => setOpenMenu('programas')}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link to="/programas">
              PROGRAMAS
            </Link>

            {openMenu === 'programas' && (
              <ul className="submenu">
                <li><Link to="/programas/programa1" className="submenu-link">Longevidade Ativa</Link></li>
                <li><Link to="/programas/programa2" className="submenu-link">Formação de Voluntariado</Link></li>
                <li><Link to="/programas/programa3" className="submenu-link">Bombeiro Mirim</Link></li>
              </ul>
            )}
          </li>

          {/* PROJETOS */}
          <li
            className="dropdown has-submenu"
            onMouseEnter={() => setOpenMenu('projetos')}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link to="/projetos">
              PROJETOS
            </Link>

            {openMenu === 'projetos' && (
              <ul className="submenu">
                <li><Link to="/projetos/projeto1" className="submenu-link">Inclusão Digital Para Todos</Link></li>
                <li><Link to="/projetos/projeto2" className="submenu-link">Golfinho</Link></li>
                <li><Link to="/projetos/projeto3" className="submenu-link">Afetar com Afeto</Link></li>
              </ul>
            )}
          </li>

          {/* CURSOS */}
          <li
            className="dropdown has-submenu"
            onMouseEnter={() => setOpenMenu('cursos')}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link to="/cursos">
              CURSOS
            </Link>

            {openMenu === 'cursos' && (
              <ul className="submenu">
                <li><Link to="/cursos/curso1" className="submenu-link">Potencial das IAs</Link></li>
                <li><Link to="/cursos/curso2" className="submenu-link">Orientação Parental</Link></li>
                <li><Link to="/cursos/curso3" className="submenu-link">NEF - Educação Continuada</Link></li>
                <li><Link to="/cursos/curso4" className="submenu-link">Redação Oficial</Link></li>
              </ul>
            )}
          </li>

          {/* EVENTOS */}
          <li
            className="dropdown has-submenu"
            onMouseEnter={() => setOpenMenu('eventos')}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link to="/eventos">
              EVENTOS
            </Link>

            {openMenu === 'eventos' && (
              <ul className="submenu">
                <li><Link to="/eventos/evento1" className="submenu-link">Proteção em Rede</Link></li>
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