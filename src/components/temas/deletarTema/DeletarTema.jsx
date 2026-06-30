import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import api from '../../../service/Service'

function DeletarTema() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { usuario } = useContext(AuthContext)

  const [tema, setTema] = useState({ descricao: '' })

  async function buscarPorId(id) {
    try {
      const resposta = await api.get(`/temas/${id}`, {
        headers: { Authorization: usuario.token }
      })
      setTema(resposta.data)
    } catch (erro) {
      alert('Erro ao buscar tema!')
    }
  }

  useEffect(() => {
    buscarPorId(id)
  }, [id])

  async function deletarTema() {
    try {
      await api.delete(`/temas/${id}`, {
        headers: { Authorization: usuario.token }
      })
      alert('Tema deletado com sucesso!')
      navigate('/temas')
    } catch (erro) {
      alert('Erro ao deletar tema!')
    }
  }

  return (
    <div className='w-full flex justify-center min-h-screen bg-indigo-100 py-8'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4 items-center'>
        <h2 className='text-3xl font-bold text-red-600 text-center'>Deletar Tema</h2>
        <p className='text-gray-600 text-center'>
          Tem certeza que deseja deletar o tema:
        </p>
        <p className='text-xl font-bold text-indigo-900'>{tema.descricao}</p>
        <div className='flex gap-4'>
          <button
            onClick={() => navigate('/temas')}
            className='bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-600'
          >
            Cancelar
          </button>
          <button
            onClick={deletarTema}
            className='bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-700'
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeletarTema
