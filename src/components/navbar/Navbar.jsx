import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
        <div className='container flex justify-between text-lg'>
            <Link to='/' className='text-2xl font-bold'>Blog Pessoal</Link>
            <div className='flex gap-4'>
                <Link to='/' className='hover:underline'>Home</Link>
                <Link to='/postagens' className='hover:underline'>Postagens</Link>
                <Link to='/temas' className='hover:underline'>Temas</Link>
                <Link to='/login' className='hover:underline'>Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar
