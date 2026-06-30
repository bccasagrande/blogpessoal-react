import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Postagens from './pages/postagens/Postagens'
import ListaTemas from './components/temas/listaTemas/ListaTemas'
import FormTema from './components/temas/formTema/FormTema'
import DeletarTema from './components/temas/deletarTema/DeletarTema'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/postagens' element={<Postagens />} />
        <Route path='/temas' element={<ListaTemas />} />
        <Route path='/cadastrarTema' element={<FormTema />} />
        <Route path='/editarTema/:id' element={<FormTema />} />
        <Route path='/deletarTema/:id' element={<DeletarTema />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

