function Postagens() {
  return (
    <div className='w-full flex justify-center min-h-screen bg-indigo-100 py-8'>
      <div className='container flex flex-col items-center gap-4'>
        <h1 className='text-4xl font-bold text-indigo-900'>Postagens</h1>
        <div className='bg-white rounded-lg shadow-md p-6 w-full max-w-2xl'>
          <h2 className='text-2xl font-bold text-indigo-800'>Título da Postagem</h2>
          <p className='text-gray-600 mt-2'>Tema: Tecnologia</p>
          <p className='text-gray-700 mt-4'>Conteúdo da postagem aqui...</p>
        </div>
      </div>
    </div>
  )
}

export default Postagens
