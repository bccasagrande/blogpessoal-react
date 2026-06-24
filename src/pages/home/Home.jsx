function Home() {
  return (
    <div className='w-full bg-indigo-200 flex justify-center'>
        <div className='container flex flex-col items-center py-16 gap-4'>
            <h1 className='text-5xl font-bold text-indigo-900'>Seja Bem Vindo!</h1>
            <p className='text-xl text-indigo-800'>Expresse aqui seus pensamentos e ideias</p>
            <button className='bg-indigo-900 text-white px-6 py-2 rounded-lg hover:bg-indigo-700'>
                Ver Postagens
            </button>
        </div>
    </div>
  )
}

export default Home
