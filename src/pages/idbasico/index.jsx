import { Routes, Route } from "react-router-dom";
import Header from "../../components/header/index.jsx";
import Footer from "../footer/footer";
import "./idbasico.css";

import Home from "./home.jsx";
import Voluntarios from "./voluntarios/Voluntarios.jsx";
import Conheca from "./conheca/Conheca.jsx";
import Chamada from "./chamada/Chamada.jsx";
import Inscricoes from "./inscricoes/Inscricoes.jsx";
function Idbasico() {
  return (
    <>
      <Header />
      <div className="projeto-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="voluntarios" element={<Voluntarios />} />
          <Route path="conheca" element={<Conheca />} />
          <Route path="chamada" element={<Chamada />} />
          <Route path="inscricoes" element={<Inscricoes />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default Idbasico;
