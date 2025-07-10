import { BrowserRouter, Routes, Route } from "react-router-dom";
import Instituicao from './pages/instituicao/index.jsx';
import Realizacoes from './pages/realizacoes/index.jsx';
import Programas from './pages/programas/index.jsx';
import ProjetosAnteriores from './pages/projetosAnteriores/index.jsx';
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
import Ciclo from "./pages/ciclo/index.jsx";
import Inscricoes from "./pages/ciclo/ciclo/inscricoes.jsx";
import Calendario from "./pages/ciclo/ciclo/calendario.jsx";
import Idbasico from "./pages/idbasico/index.jsx";
import Idintermediario from "./pages/idintermediario/index.jsx";
import Requerimento from "./pages/usj/paginas/Requerimento.jsx";
import Trasnferencia from "./pages/usj/paginas/TransferenciaAssistida.jsx";
import ProjetosAtivos from "./pages/projetosAtivos/index.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/instituição' element={<Instituicao />} />
        <Route path='/realizações' element={<Realizacoes />} />
        <Route path='/programas' element={<Programas />} />
        <Route path='/projetos-anteriores' element={<ProjetosAnteriores />} />
        <Route path='/cursos' element={<Cursos />} />
        <Route path='/eventos' element={<Eventos />} />
        <Route path='/validador' element={<Certificados />} />
        <Route path='/noticias' element={<Noticias />} />
        <Route path='/usj/*' element={<USJ />} />
        <Route path='/contatos' element={<Contato />} />
        <Route path='/wp-admin' element={<Login />} />
        <Route path='/equipe' element={<Equipe />} />
        <Route path='/parceiros' element={<Parceiros />} />
        <Route path="/ciclo" element={<Ciclo />} />
        <Route path="/ciclo/inscricoes" element={<Inscricoes />} />
        <Route path="calendario" element={<Calendario />} />
        <Route path="/idintermediario" element={<Idintermediario />} />
        <Route path="/requerimento" element={<Requerimento />} />
        <Route path="/transferencia-assistida" element={<Trasnferencia/>}/>
        <Route path='/idbasico/*' element={<Idbasico />} />
        <Route path= '/projetos-ativos' element={<ProjetosAtivos/>}/>

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