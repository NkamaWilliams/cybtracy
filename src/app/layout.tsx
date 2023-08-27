import './globals.css'
import type { Metadata } from 'next'
import { Inter, Quicksand } from 'next/font/google'
import NavBar from '@/Components/NavBar'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cybtracy',
  description: 'This is the official website of Cybtracy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <NavBar />
        <div className='navbar'></div>
        {children}
      </body>
    </html>
  )
}
