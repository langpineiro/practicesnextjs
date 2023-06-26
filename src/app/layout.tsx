import './globals.css'
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Softplay Company',
  description: 'My first next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
