import { Navbar } from '@/components'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center align-middle">
        <h1>Hola mundo</h1>
        {children}
      </div>
    </>
  )
}
