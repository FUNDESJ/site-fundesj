import { BrowserRouter, Routes, Route } from "react-router-dom";
import Instituicao from './pages/instituicao/index.jsx';
import Realizacoes from './pages/realizacoes/index.jsx';
import Programas from './pages/programas/index.jsx'; 
import Projetos from './pages/projetos/index.jsx';
import Cursos from './pages/cursos/index.jsx';
import Home from './pages/home/index.jsx';
import Eventos from './pages/eventos/index.jsx'; 
import Certificados from './pages/certificados/index.jsx'; 
import Noticias from './pages/noticias/index.jsx';
import USJ from './pages/usj/index.jsx';
import Contato from './pages/contato/index.jsx';
import Equipe from './pages/equipe/index.jsx';
import Login from "./pages/admin/login/index.jsx";
import Admin from "./pages/admin/index.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Parceiros from "./pages/parceiros/index.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/instituição' element={<Instituicao />} />
        <Route path='/realizações' element={<Realizacoes />} />
        <Route path='/programas' element={<Programas />} />
        <Route path='/projetos' element={<Projetos />} />
        <Route path='/cursos' element={<Cursos />} />
        <Route path='/eventos' element={<Eventos />} />
        <Route path='/certificados' element={<Certificados />} />
        <Route path='/noticias' element={<Noticias />} />
        <Route path='/usj' element={<USJ />} />
        <Route path='/contatos' element={<Contato />} />
        <Route path='/wp-admin' element={<Login />} />
        <Route path='/equipe' element={<Equipe />} />
        <Route path='/parceiros' element={<Parceiros />} />
         <Route
          path='/admin/*'
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;