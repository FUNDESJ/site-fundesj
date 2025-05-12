import { BrowserRouter, Routes, Route } from "react-router-dom" 
import Home from './pages/home'
import Instituicao from './pages/instituicao'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/instituição' element={<Instituicao/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
