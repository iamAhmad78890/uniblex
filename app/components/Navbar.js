'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.logo} style={{textDecoration: 'none'}}>
        <span className={styles.logoIcon}>🎮</span>
        <span className={styles.logoText}>gamezone.dev</span>
      </Link>
      <div className={styles.menu}>
        <Link href="/" className={`${styles.menuItem} ${pathname === '/' ? styles.active : ''}`}>games</Link>
        <Link href="/blog" className={`${styles.menuItem} ${pathname === '/blog' ? styles.active : ''}`}>blog</Link>
        <Link href="/about" className={`${styles.menuItem} ${pathname === '/about' ? styles.active : ''}`}>about</Link>
        <Link href="/contact" className={`${styles.menuItem} ${pathname === '/contact' ? styles.active : ''}`}>contact</Link>
      </div>
    </div>
  )
}