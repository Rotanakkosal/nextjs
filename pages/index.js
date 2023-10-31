import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Hello From Next JS Home Page</h1>
      <ul>
        <li>
          <Link href="/clients">Client</Link>
        </li>
      </ul>
    </main>
  )
}
