import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { isAuthenticated } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'
import { logout } from '@/lib/actions/auth.action'

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated()
  if (!isUserAuthenticated) redirect('/sign-in')

  return (
    <div className="root-layout">
      <nav className="flex justify-between items-center px-4 py-2">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={38} height={32} />
          <h2 className="text-primary-100">Prepview</h2>
        </Link>
        <form action={logout}>
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </form>
      </nav>

      {children}
    </div>
  )
}

export default RootLayout
