import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '../app/components/Nav'
import Providers from './components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Job offerts',
  description: 'Start your job adventure',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,

}) {
  return (
    <html lang="en">
     <body className="bg-slate-800 text-slate-100 min-h-full min-w-full relative">
      <Providers>
      <Nav/>
      {children}
      </Providers>
      </body>
    </html>
  )
}
