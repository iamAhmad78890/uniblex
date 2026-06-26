'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <span className={styles.logoIcon}>🎮</span>
      <span className={styles.logoText}>GameCraftHub</span>
      </Link>
      <div className={styles.menu}>
        <Link href="/" className={`${styles.menuItem} ${pathname === '/' ? styles.active : ''}`}>Home</Link>
        <Link href="/games" className={`${styles.menuItem} ${pathname === '/games' ? styles.active : ''}`}>Games</Link>
        <Link href="/blog" className={`${styles.menuItem} ${pathname === '/blog' ? styles.active : ''}`}>Blog</Link>
        <Link href="/about" className={`${styles.menuItem} ${pathname === '/about' ? styles.active : ''}`}>About</Link>
        <Link href="/contact" className={`${styles.menuItem} ${pathname === '/contact' ? styles.active : ''}`}>Contact</Link>
      </div>
    </div>
  )
}