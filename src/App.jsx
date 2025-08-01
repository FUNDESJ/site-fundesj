import { BrowserRouter, Routes, Route } from "react-router-dom";
import Instituicao from './pages/instituicao/index.jsx';
import Realizacoes from './pages/realizacoes/index.jsx';
import Programas from './pages/programas/index.jsx';
import ProjetosAnteriores from './pages/projetosAnteriores/index.jsx';
import Cursos from './pages/cursos/index.jsx';
import Home from './pages/home/index.jsx';
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
import LongevidadeAtiva from "./pages/Longevidade/LongevidadeAtiva.jsx";
import Conheca from './pages/idintermediario/paginas/conheca.jsx';
import InscricoesIntermediario from './pages/idintermediario/paginas/inscricoes.jsx';
import ChamadaIntermediario from './pages/idintermediario/paginas/chamadas.jsx';
import Ilpi from './pages/ilpi/index.jsx'
import Voluntariado from "./pages/voluntariado/index.jsx";
import BombeiroMirim from "./pages/bombeiro mirim/index.jsx";
import Nef from "./pages/nef/index.jsx";
import InteligenciaArtificial from "./pages/ia/index.jsx";
import OrientacaoParental from "./pages/orientacao parental/index.jsx";
import RedacaoOficial from "./pages/redacao oficial/index.jsx";
import Golfinho from "./pages/golfinho/index.jsx";
import IdTodos from "./pages/idTodos/index.jsx";
import AfertarAfeto from "./pages/afeto/index.jsx";
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
        <Route path="/transferencia-assistida" element={<Trasnferencia />} />
        <Route path='/idbasico/*' element={<Idbasico />} />
        <Route path='/projetos-ativos' element={<ProjetosAtivos />} />
        <Route path='/longevidade-ativa' element={<LongevidadeAtiva />} />
        <Route path="/idintermediario/conheca" element={<Conheca />} />
        <Route path="/idintermediario/inscricao" element={<InscricoesIntermediario />} />
        <Route path="/idintermediario/chamada" element={<ChamadaIntermediario />} />
        <Route path="/ilpi" element={<Ilpi />} />
        <Route path='/voluntariado' element={<Voluntariado />} />
        <Route path='/bombeiro-mirim' element={<BombeiroMirim />} />
        <Route path="/cursos/nef" element={<Nef />} />
        <Route path="/cursos/inteligencia-artificial" element={<InteligenciaArtificial />} />
        <Route path= "/cursos/orientacao-parental" element={<OrientacaoParental/>}/>
        <Route path="/cursos/redacao-oficial" element= {<RedacaoOficial/>}/>
        <Route path="/projetos-anteriores/golfinho" element={<Golfinho/>}/>
        <Route path="/projetos-anteriores/id-todos" element={<IdTodos/>}/>
        <Route path="/projetos-anteriores/afetar-com-afeto" element={<AfertarAfeto/>}/>
        <Route path='/admin/*'
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