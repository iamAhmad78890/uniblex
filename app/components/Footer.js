import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>

        <div>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>🎮</span>
            <span className={styles.logoText}>gamezone.dev</span>
          </div>
          <p className={styles.tagline}>
            Browser games built from scratch by Mohsin. WebGL experiments, playable instantly.
          </p>
        </div>

        <div>
          <p className={styles.colTitle}>Site</p>
          <div className={styles.linkList}>
            <Link href="/" className={styles.link}>Games</Link>
            <Link href="/blog" className={styles.link}>Blog</Link>
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
          </div>
        </div>

        <div>
          <p className={styles.colTitle}>Legal</p>
          <div className={styles.linkList}>
            <Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link>
            <Link href="/terms-of-service" className={styles.link}>Terms of Service</Link>
          </div>
        </div>

      </div>

      <div className={styles.bottom}>
        <span className={styles.copyright}>© 2026 gamezone.dev — All rights reserved</span>
        <div className={styles.bottomLinks}>
          <Link href="/privacy-policy" className={styles.bottomLink}>Privacy</Link>
          <Link href="/terms-of-service" className={styles.bottomLink}>Terms</Link>
        </div>
      </div>
    </footer>
  )
}