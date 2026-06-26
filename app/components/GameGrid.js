'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import styles from './GameGrid.module.css'

const games = [
  { id: 1, name: 'Speed Racer', category: 'racing · 3D', image: '/games/cargame.png', badge: 'Hot' },
  { id: 2, name: 'Cricket World', category: 'sports · arcade', image: '/games/cricketgame.png', badge: 'New' },
  { id: 3, name: 'Football Showdown', category: 'sports · 3D', image: '/games/footballgame.png', badge: 'Updated' },
  { id: 4, name: 'Pizza Master', category: 'cooking · casual', image: '/games/pizzagame.png', badge: null },
  { id: 5, name: 'Puzzle Blast', category: 'puzzle · arcade', image: '/games/puzzlegame.png', badge: 'Top' },
  { id: 6, name: 'Runner X', category: 'action · endless', image: '/games/runnergame.png', badge: 'New' },
]

const badgeStyles = {
  Hot: { bg: '#7c2d12', color: '#fb923c', icon: '🔥' },
  New: { bg: '#1e3a5f', color: '#60a5fa', icon: '✨' },
  Updated: { bg: '#1e3a3a', color: '#5eead4', icon: '🔄' },
  Top: { bg: '#3f2e0f', color: '#fbbf24', icon: '⭐' },
}

export default function GameGrid() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Featured games</h2>
        <Link href="/games" className={styles.viewAll}>view all</Link>
      </div>

      <div className={styles.grid}>
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className={styles.skeletonCard}>
                <div className={styles.skeletonThumb}></div>
                <div className={styles.skeletonInfo}>
                  <div className={styles.skeletonLine}></div>
                  <div className={`${styles.skeletonLine} ${styles.skeletonLineShort}`}></div>
                </div>
              </div>
            ))
          : games.map((game) => {
              const badge = game.badge ? badgeStyles[game.badge] : null
              return (
                <div
                  key={game.id}
                  onClick={() => router.push(`/games/${game.id}`)}
                  className={styles.card}
                >
                  <div className={styles.thumb}>
                    <img
                      src={game.image}
                      alt={game.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                    {badge && (
                      <span
                        className={styles.tag}
                        style={{ background: badge.bg, color: badge.color }}
                      >
                        {badge.icon} {game.badge}
                      </span>
                    )}
                  </div>
                  <div className={styles.info}>
                    <p className={styles.name}>{game.name}</p>
                    <p className={styles.category}>{game.category}</p>
                  </div>
                </div>
              )
            })}
      </div>
    </div>
  )
}