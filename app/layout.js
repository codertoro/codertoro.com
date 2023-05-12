import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CoderToro',
  description: 'You finally found me.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ch">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
