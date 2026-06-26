import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const { login, isLoading } = useContext(AuthContext)

  const [usuarioLogin, setUsuarioLogin] = useState({
    usuario: '',
    senha: ''
  })

  function atualizarEstado(e) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    })
  }

  async function logarUsuario(e) {
    e.preventDefault()
    await login(usuarioLogin)
    navigate('/')
  }

  return (
    <div className='w-full flex justify-center items-center min-h-screen bg-indigo-100'>
      <div className='bg-white p-8 rounded-lg shadow-md w-96 flex flex-col gap-4'>
        <h2 className='text-3xl font-bold text-indigo-900 text-center'>Entrar</h2>
        <input
          type='text'
          placeholder='Usuário'
          name='usuario'
          value={usuarioLogin.usuario}
          onChange={atualizarEstado}
          className='border border-indigo-300 rounded-lg p-2 w-full'
        />
        <input
          type='password'
          placeholder='Senha'
          name='senha'
          value={usuarioLogin.senha}
          onChange={atualizarEstado}
          className='border border-indigo-300 rounded-lg p-2 w-full'
        />
        <button
          onClick={logarUsuario}
          className='bg-indigo-900 text-white py-2 rounded-lg hover:bg-indigo-700'
        >
          {isLoading ? 'Carregando...' : 'Entrar'}
        </button>
      </div>
    </div>
  )
}

export default Login
