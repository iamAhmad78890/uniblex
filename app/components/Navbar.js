'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/assets/Horizontal Lockup.png"
          alt="GameCraftHub"
          width={150}
          height={40}
          style={{ objectFit: 'contain' }}
          priority
        />
      </Link>
      <div className={styles.menu}>
        <Link href="/" className={`${styles.menuItem} ${pathname === '/' ? styles.active : ''}`}>home</Link>
        <Link href="/games" className={`${styles.menuItem} ${pathname === '/games' ? styles.active : ''}`}>games</Link>
        <Link href="/blog" className={`${styles.menuItem} ${pathname === '/blog' ? styles.active : ''}`}>blog</Link>
        <Link href="/about" className={`${styles.menuItem} ${pathname === '/about' ? styles.active : ''}`}>about</Link>
        <Link href="/contact" className={`${styles.menuItem} ${pathname === '/contact' ? styles.active : ''}`}>contact</Link>
      </div>
    </div>
  )
}