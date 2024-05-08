import Link from 'next/link'
import React from 'react'

export const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <header>
        <Link href={'/'}>Home</Link>
      </header>
      {children}
    </div>
  )
}
