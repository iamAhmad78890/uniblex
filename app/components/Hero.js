'use client'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.badge}>
        <span className={styles.dot}></span>
        6 games live
      </div>

      <h1 className={styles.title}>
        Browser games, built from scratch
      </h1>

      <p className={styles.subtitle}>
        WebGL experiments, dev breakdowns, and games — playable instantly, no installs.
      </p>

      <div className={styles.buttonGroup}>
        <button className={styles.primaryBtn}>Play latest game</button>
        <button className={styles.secondaryBtn}>Read the blog</button>
      </div>
    </div>
  )
}