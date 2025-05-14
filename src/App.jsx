import { BrowserRouter, Routes, Route } from "react-router-dom" 
import Home from './pages/home'
import Instituicao from './pages/instituicao'
import Programas from './pages/programas'
import Projetos from './pages/projetos'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/instituição' element={<Instituicao/>}/>
        <Route path='/programas' element={<Programas/>}/>
        <Route path='/projetos' element={<Projetos/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
