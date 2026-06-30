import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'
import api from '../../../service/Service'
import CardTema from '../cardTema/CardTema'
import { Link } from 'react-router-dom'

function ListaTemas() {
  const [temas, setTemas] = useState([])
  const { usuario } = useContext(AuthContext)

  async function buscarTemas() {
    try {
      const resposta = await api.get('/temas', {
        headers: { Authorization: usuario.token }
      })
      setTemas(resposta.data)
    } catch (erro) {
      alert('Erro ao buscar temas!')
    }
  }

  useEffect(() => {
    buscarTemas()
  }, [])

  return (
    <div className='w-full flex justify-center min-h-screen bg-indigo-100 py-8'>
      <div className='container flex flex-col items-center gap-4'>
        <div className='flex justify-between w-full'>
          <h1 className='text-4xl font-bold text-indigo-900'>Temas</h1>
          <Link to='/cadastrarTema'
            className='bg-indigo-900 text-white px-4 py-2 rounded-lg hover:bg-indigo-700'>
            Novo Tema
          </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full'>
          {temas.map(tema => (
            <CardTema key={tema.id} tema={tema} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ListaTemas
