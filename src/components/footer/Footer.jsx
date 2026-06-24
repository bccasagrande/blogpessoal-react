import { GithubLogo, LinkedinLogo, InstagramLogo } from '@phosphor-icons/react'

function Footer() {
  return (
    <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
        <div className='container flex flex-col items-center gap-2'>
            <p className='text-xl font-bold'>Blog Pessoal</p>
            <p>Desenvolvido por Bianc ❤️</p>
            <div className='flex gap-4'>
                <a href='#'><GithubLogo size={32} /></a>
                <a href='#'><LinkedinLogo size={32} /></a>
                <a href='#'><InstagramLogo size={32} /></a>
            </div>
        </div>
    </div>
  )
}

export default Footer
