import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import api from '../../../service/Service'

function FormTema() {
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
    if (id) buscarPorId(id)
  }, [id])

  function atualizarEstado(e) {
    setTema({ ...tema, [e.target.name]: e.target.value })
  }

  async function salvarTema(e) {
    e.preventDefault()
    try {
      if (id) {
        await api.put('/temas', tema, {
          headers: { Authorization: usuario.token }
        })
        alert('Tema atualizado com sucesso!')
      } else {
        await api.post('/temas', tema, {
          headers: { Authorization: usuario.token }
        })
        alert('Tema cadastrado com sucesso!')
      }
      navigate('/temas')
    } catch (erro) {
      alert('Erro ao salvar tema!')
    }
  }

  return (
    <div className='w-full flex justify-center min-h-screen bg-indigo-100 py-8'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4'>
        <h2 className='text-3xl font-bold text-indigo-900 text-center'>
          {id ? 'Editar Tema' : 'Cadastrar Tema'}
        </h2>
        <input
          type='text'
          name='descricao'
          placeholder='Descrição do tema'
          value={tema.descricao}
          onChange={atualizarEstado}
          className='border border-indigo-300 rounded-lg p-2 w-full'
        />
        <button
          onClick={salvarTema}
          className='bg-indigo-900 text-white py-2 rounded-lg hover:bg-indigo-700'
        >
          {id ? 'Atualizar' : 'Cadastrar'}
        </button>
      </div>
    </div>
  )
}

export default FormTema
