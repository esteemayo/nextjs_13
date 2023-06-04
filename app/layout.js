import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Esteem Designs',
  description: 'Web development tutorials and courses',
  keywords: 'web development, web design, javascript, reacr, node, angular, vue, html, css',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
