import './globals.css'
import { Rufina } from 'next/font/google'

const inter = Rufina({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Tlali',
  description: 'El mejor restaurante de Hidalgo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
