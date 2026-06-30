import { Link } from 'react-router-dom'

function CardTema({ tema }) {
  return (
    <div className='border border-indigo-300 rounded-lg p-4 flex flex-col gap-2'>
      <h3 className='text-lg font-bold text-indigo-900'>{tema.descricao}</h3>
      <div className='flex gap-2'>
        <Link to={`/editarTema/${tema.id}`}
          className='bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-700'>
          Editar
        </Link>
        <Link to={`/deletarTema/${tema.id}`}
          className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700'>
          Deletar
        </Link>
      </div>
    </div>
  )
}

export default CardTema
