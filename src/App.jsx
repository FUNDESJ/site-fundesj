import { BrowserRouter, Routes, Route } from "react-router-dom";
import Instituicao from './pages/instituicao/index.jsx'; // Corrigido o caminho relativo
import Programas from './pages/programas/index.jsx'; // Corrigido o caminho relativo
import Projetos from './pages/projetos/index.jsx'; // Corrigido o caminho relativo
import Home from './pages/home/index.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/instituição' element={<Instituicao />} />
        <Route path='/programas' element={<Programas />} />
        <Route path='/projetos' element={<Projetos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;