function Login() {
  return (
    <div className='w-full flex justify-center items-center min-h-screen bg-indigo-100'>
      <div className='bg-white p-8 rounded-lg shadow-md w-96 flex flex-col gap-4'>
        <h2 className='text-3xl font-bold text-indigo-900 text-center'>Entrar</h2>
        <input type='text' placeholder='Usuário' className='border border-indigo-300 rounded-lg p-2 w-full' />
        <input type='password' placeholder='Senha' className='border border-indigo-300 rounded-lg p-2 w-full' />
        <button className='bg-indigo-900 text-white py-2 rounded-lg hover:bg-indigo-700'>
          Entrar
        </button>
      </div>
    </div>
  )
}

export default Login
