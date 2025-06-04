import React, { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import "./admin.css";
import { FiUsers, FiCalendar, FiSettings, FiPieChart, FiFileText } from "react-icons/fi";

// Importe suas páginas
import Dashboard from "./paginas/Dashboard.jsx";
import Usuarios from "./paginas/Usuarios.jsx";
import Eventos from "./paginas/eventos/Eventos.jsx";
import Inscricoes from "./paginas/inscricoes/Inscricoes.jsx";
import Configuracoes from "./paginas/Configuracoes.jsx";
import ModalInscritos from "./paginas/inscricoes/modal/Inscritos.jsx";
import ModalEvento from "./paginas/eventos/modal/ModalEvento.jsx";

function Admin() {
  const [openModalInscrito, setOpenModalInscrito] = useState(false);
  const [openModalEventos, setOpenModalEventos] = useState(false);
  const location = useLocation();

  function abrirModalInscritos() {
    setOpenModalInscrito(true);
  }
  function abrirModalEventos() {
    setOpenModalEventos(true);
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
          <li className={isActive('/usuarios') ? "active" : ""}>
            <Link to="/admin/usuarios">
              <FiUsers />
              Usuários
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
          <li className={isActive('/configuracoes') ? "active" : ""}>
            <Link to="/admin/configuracoes">
              <FiSettings />
              Configurações
            </Link>
          </li>
        </ul>
      </aside>

      <main className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/eventos" element={<Eventos abrirModal={openModalEventos} />} />
          <Route path="/inscricoes" element={<Inscricoes abrirModal={abrirModalInscritos} />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
        </Routes>
      </main>

      <ModalInscritos
        isOpen={openModalInscrito}
        onClose={() => setOpenModalInscrito(false)}
      />


      <ModalEvento
        isOpen={openModalEventos}
        onClose={() => setOpenModalEventos(false)}
      />

    </div>
  );
}

export default Admin;