import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import api from '../../../service/Service'

function FormPostagem() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { usuario } = useContext(AuthContext)

  const [temas, setTemas] = useState([])
  const [postagem, setPostagem] = useState({
    titulo: '',
    texto: '',
    tema: { id: 0 }
  })

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

  async function buscarPorId(id) {
    try {
      const resposta = await api.get(`/postagens/${id}`, {
        headers: { Authorization: usuario.token }
      })
      setPostagem(resposta.data)
    } catch (erro) {
      alert('Erro ao buscar postagem!')
    }
  }

  useEffect(() => {
    buscarTemas()
    if (id) buscarPorId(id)
  }, [id])

  function atualizarEstado(e) {
    setPostagem({ ...postagem, [e.target.name]: e.target.value })
  }

  function atualizarTema(e) {
    setPostagem({ ...postagem, tema: { id: e.target.value } })
  }

  async function salvarPostagem(e) {
    e.preventDefault()
    try {
      if (id) {
        await api.put('/postagens', postagem, {
          headers: { Authorization: usuario.token }
        })
        alert('Postagem atualizada com sucesso!')
      } else {
        await api.post('/postagens', postagem, {
          headers: { Authorization: usuario.token }
        })
        alert('Postagem cadastrada com sucesso!')
      }
      navigate('/postagens')
    } catch (erro) {
      alert('Erro ao salvar postagem!')
    }
  }

  return (
    <div className='w-full flex justify-center min-h-screen bg-indigo-100 py-8'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4'>
        <h2 className='text-3xl font-bold text-indigo-900 text-center'>
          {id ? 'Editar Postagem' : 'Nova Postagem'}
        </h2>
        <input
          type='text'
          name='titulo'
          placeholder='Título da postagem'
          value={postagem.titulo}
          onChange={atualizarEstado}
          className='border border-indigo-300 rounded-lg p-2 w-full'
        />
        <textarea
          name='texto'
          placeholder='Texto da postagem'
          value={postagem.texto}
          onChange={atualizarEstado}
          className='border border-indigo-300 rounded-lg p-2 w-full h-32'
        />
        <select
          onChange={atualizarTema}
          className='border border-indigo-300 rounded-lg p-2 w-full'
        >
          <option value='0'>Selecione um tema</option>
          {temas.map(tema => (
            <option key={tema.id} value={tema.id}>{tema.descricao}</option>
          ))}
        </select>
        <button
          onClick={salvarPostagem}
          className='bg-indigo-900 text-white py-2 rounded-lg hover:bg-indigo-700'
        >
          {id ? 'Atualizar' : 'Cadastrar'}
        </button>
      </div>
    </div>
  )
}

export default FormPostagem
