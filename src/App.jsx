import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Postagens from './pages/postagens/Postagens'
import Temas from './pages/temas/Temas'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/postagens' element={<Postagens />} />
        <Route path='/temas' element={<Temas />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
