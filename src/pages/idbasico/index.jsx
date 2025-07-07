import { Routes, Route } from "react-router-dom";
import Header from "../header/index.jsx";
import Footer from "../footer/footer";
import "./idbasico.css";

import Home from "./home.jsx";
import Voluntarios from "./voluntarios/Voluntarios.jsx";
import Conheca from "./conheca/Conheca.jsx";
import Chamada from "./chamada/Chamada.jsx";
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
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default Idbasico;
