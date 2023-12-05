import { Inter } from 'next/font/google'
import './globals.css'
import { Provider } from './utils/provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'skillHUB',
  description: 'one web for all skills',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
