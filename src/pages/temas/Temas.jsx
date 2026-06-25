function Temas() {
  return (
    <div className='w-full flex justify-center min-h-screen bg-indigo-100 py-8'>
      <div className='container flex flex-col items-center gap-4'>
        <h1 className='text-4xl font-bold text-indigo-900'>Temas</h1>
        <div className='bg-white rounded-lg shadow-md p-6 w-full max-w-2xl'>
          <h2 className='text-2xl font-bold text-indigo-800'>Tecnologia</h2>
          <p className='text-gray-700 mt-2'>Postagens sobre tecnologia e inovação</p>
        </div>
        <div className='bg-white rounded-lg shadow-md p-6 w-full max-w-2xl'>
          <h2 className='text-2xl font-bold text-indigo-800'>Programação</h2>
          <p className='text-gray-700 mt-2'>Postagens sobre programação e desenvolvimento</p>
        </div>
      </div>
    </div>
  )
}

export default Temas
