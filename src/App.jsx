import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import ListaTemas from './components/temas/listaTemas/ListaTemas'
import FormTema from './components/temas/formTema/FormTema'
import DeletarTema from './components/temas/deletarTema/DeletarTema'
import ListaPostagens from './components/postagens/listaPostagens/ListaPostagens'
import FormPostagem from './components/postagens/formPostagem/FormPostagem'
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/temas' element={<ListaTemas />} />
        <Route path='/cadastrarTema' element={<FormTema />} />
        <Route path='/editarTema/:id' element={<FormTema />} />
        <Route path='/deletarTema/:id' element={<DeletarTema />} />
        <Route path='/postagens' element={<ListaPostagens />} />
        <Route path='/cadastrarPostagem' element={<FormPostagem />} />
        <Route path='/editarPostagem/:id' element={<FormPostagem />} />
        <Route path='/deletarPostagem/:id' element={<DeletarPostagem />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

