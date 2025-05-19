import { BrowserRouter, Routes, Route } from "react-router-dom";
import Instituicao from './pages/instituicao/index.jsx'; // Corrigido o caminho relativo
import Programas from './pages/programas/index.jsx'; // Corrigido o caminho relativo
import Projetos from './pages/projetos/index.jsx';
import Cursos from './pages/cursos/index.jsx' // Corrigido o caminho relativo
import Home from './pages/home/index.jsx';
import Eventos from './pages/eventos/index.jsx'; // Corrigido o caminho relativo
import Certificados from './pages/certificados/index.jsx'; 
import Noticias from './pages/noticias/index.jsx'
import USJ from './pages/usj/index.jsx'
import Contato from './pages/contato/index.jsx'// Corrigido o caminho relativo
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
        <Route path='/noticias' element={<Noticias />} />
        <Route path='/usj' element={<USJ />} />
        <Route path='/contatos' element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;