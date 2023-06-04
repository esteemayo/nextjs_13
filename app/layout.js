import './globals.css'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Esteem Designs',
  description: 'Web development tutorials and courses',
  keywords: 'web development, web design, javascript, reacr, node, angular, vue, html, css',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className='container'>{children}</main>
      </body>
    </html>
  )
}
