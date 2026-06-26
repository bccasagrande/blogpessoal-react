import { createContext, useState } from 'react'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: ''
  })

  const [isLoading, setIsLoading] = useState(false)

  async function login(usuarioLogin) {
    setIsLoading(true)
    try {
      const resposta = await fetch('https://blogpessoal-7qr2.onrender.com/usuarios/logar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuarioLogin)
      })
      const dados = await resposta.json()
      setUsuario(dados)
      alert('Login realizado com sucesso!')
    } catch (erro) {
      alert('Usuário ou senha incorretos!')
    }
    setIsLoading(false)
  }

  function logout() {
    setUsuario({
      id: 0,
      nome: '',
      usuario: '',
      senha: '',
      foto: '',
      token: ''
    })
  }

  return (
    <AuthContext.Provider value={{ usuario, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

