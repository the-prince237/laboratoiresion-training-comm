import { ReactNode } from 'react'
import logo from '../favicon.ico'
import Image from 'next/image';
import { StepBack } from 'lucide-react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='pt-20'>
      <header className='h-20 z-50 max-w-7xl w-full flex px-4 items-center justify-between fixed top-0 bg-white shadow-2xl'>
        <Image src={logo} alt='sion' width={50} height={50} />
        <a className='text-black flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-lg' href="/">Retour à l'accueil <StepBack /></a>
      </header>
      {children }
    </div>
  )
}

export default Layout