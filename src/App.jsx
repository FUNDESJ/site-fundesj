import { BrowserRouter, Routes, Route } from "react-router-dom";
import Instituicao from './pages/instituicao/index.jsx'; // Corrigido o caminho relativo
import Programas from './pages/programas/index.jsx'; // Corrigido o caminho relativo
import Projetos from './pages/projetos/index.jsx';
import Cursos from './pages/cursos/index.jsx' // Corrigido o caminho relativo
import Home from './pages/home/index.jsx';
import Eventos from './pages/eventos/index.jsx'; // Corrigido o caminho relativo
import Certificados from './pages/certificados/index.jsx'; // Corrigido o caminho relativo
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/instituição' element={<Instituicao />} />
        <Route path='/programas' element={<Programas />} />
        <Route path='/projetos' element={<Projetos />} />
        <Route path='/cursos' element={<Cursos />} />
        <Route path='/eventos' element={<Eventos />} />
        <Route path='/certificados' element={<Certificados />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;