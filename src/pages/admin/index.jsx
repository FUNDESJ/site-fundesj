import React, { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import "./admin.css";
import { FiUsers, FiCalendar, FiFolderMinus, FiPieChart, FiFileText } from "react-icons/fi";

import Dashboard from "./paginas/Dashboard.jsx";
import Certificados from "./paginas/Certificados/Certificados.jsx";
import Eventos from "./paginas/eventos/Eventos.jsx";
import Inscricoes from "./paginas/inscricoes/Inscricoes.jsx";
import IdBasico from "./paginas/IdBasico/IdBasico.jsx";

function Admin() {
  const [openModalInscrito, setOpenModalInscrito] = useState(false);
  const [openModalEventos, setOpenModalEventos] = useState(false);
  const location = useLocation();

  function abrirModalInscritos() {
    setOpenModalInscrito(true);
  }

  const isActive = (path) => {
    return location.pathname === `/admin${path}`;
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <h2>Painel Admin</h2>
        <ul>
          <li className={isActive('/') ? "active" : ""}>
            <Link to="/admin">
              <FiPieChart />
              Dashboard
            </Link>
          </li>
          <li className={isActive('/certificados') ? "active" : ""}>
            <Link to="/admin/certificados">
              <FiUsers />
              Certificados
            </Link>
          </li>
          <li className={isActive('/eventos') ? "active" : ""}>
            <Link to="/admin/eventos">
              <FiCalendar />
              Eventos
            </Link>
          </li>
          <li className={isActive('/inscricoes') ? "active" : ""}>
            <Link to="/admin/inscricoes">
              <FiFileText />
              Inscrições
            </Link>
          </li>
          <li className={isActive('/IdBasico') ? "active" : ""}>
            <Link to="/admin/IdBasico">
              <FiFolderMinus />
              Inclusão Digital
            </Link>
          </li>
        </ul>
      </aside>

      <main className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/certificados" element={<Certificados />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/inscricoes" element={<Inscricoes />} />
          <Route path="/IdBasico" element={<IdBasico />} />
        </Routes>
      </main>

    </div>
  );
}

export default Admin;