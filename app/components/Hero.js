'use client'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero() {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const words = ['Browser', 'games,', 'built', 'from', 'scratch']

  const handleSearch = (e) => {
    e.preventDefault()
    if (search.trim()) {
      router.push(`/games?search=${encodeURIComponent(search)}`)
    }
  }

  return (
    <div className={styles.hero}>
      <div className={styles.badge}>
        <span className={styles.dot}></span>
        6 games live
      </div>

      <div className={styles.titleWrapper}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            className={styles.title}
            style={{ display: 'inline-block', marginRight: '12px' }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      <p className={styles.subtitle}>
        WebGL experiments, dev breakdowns, and games — playable instantly, no installs.
      </p>

      <form onSubmit={handleSearch} className={styles.searchBox}>
        <input
          type="text"
          placeholder="Search games..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchIcon} aria-label="Search">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </form>

      <div className={styles.buttonGroup}>
        <Link href="/games" className={styles.primaryBtn}>Play latest game</Link>
        <Link href="/blog" className={styles.secondaryBtn}>Read the blog</Link>
      </div>
    </div>
  )
}