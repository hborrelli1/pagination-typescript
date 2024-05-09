import Link from 'next/link'
import React from 'react'
import styles from './Container.module.css'

export const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <div className={styles.appWrapper}>
      <header className={styles.containerHeader}>
        <nav>
          <Link href={'/'}>Home</Link>
        </nav>
      </header>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
