import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'
import api from '../../../service/Service'
import CardPostagem from '../cardPostagem/CardPostagem'
import { Link } from 'react-router-dom'

function ListaPostagens() {
  const [postagens, setPostagens] = useState([])
  const { usuario } = useContext(AuthContext)

  async function buscarPostagens() {
    try {
      const resposta = await api.get('/postagens', {
        headers: { Authorization: usuario.token }
      })
      setPostagens(resposta.data)
    } catch (erro) {
      alert('Erro ao buscar postagens!')
    }
  }

  useEffect(() => {
    buscarPostagens()
  }, [])

  return (
    <div className='w-full flex justify-center min-h-screen bg-indigo-100 py-8'>
      <div className='container flex flex-col items-center gap-4'>
        <div className='flex justify-between w-full'>
          <h1 className='text-4xl font-bold text-indigo-900'>Postagens</h1>
          <Link to='/cadastrarPostagem'
            className='bg-indigo-900 text-white px-4 py-2 rounded-lg hover:bg-indigo-700'>
            Nova Postagem
          </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full'>
          {postagens.map(postagem => (
            <CardPostagem key={postagem.id} postagem={postagem} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ListaPostagens
