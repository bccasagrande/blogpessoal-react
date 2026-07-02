import { Link } from 'react-router-dom'

function CardPostagem({ postagem }) {
  return (
    <div className='border border-indigo-300 rounded-lg p-4 flex flex-col gap-2'>
      <h3 className='text-lg font-bold text-indigo-900'>{postagem.titulo}</h3>
      <p className='text-gray-600 text-sm'>Tema: {postagem.tema?.descricao}</p>
      <p className='text-gray-700'>{postagem.texto}</p>
      <p className='text-gray-400 text-xs'>{postagem.data}</p>
      <div className='flex gap-2'>
        <Link to={`/editarPostagem/${postagem.id}`}
          className='bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-700'>
          Editar
        </Link>
        <Link to={`/deletarPostagem/${postagem.id}`}
          className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700'>
          Deletar
        </Link>
      </div>
    </div>
  )
}

export default CardPostagem
