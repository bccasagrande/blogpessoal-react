function Navbar() {
  return (
    <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
        <div className='container flex justify-between text-lg'>
            <span className='text-2xl font-bold'>Blog Pessoal</span>
            <div className='flex gap-4'>
                <a href='#' className='hover:underline'>Home</a>
                <a href='#' className='hover:underline'>Postagens</a>
                <a href='#' className='hover:underline'>Temas</a>
                <a href='#' className='hover:underline'>Login</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
