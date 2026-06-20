'use client'
import { useRouter } from 'next/navigation'
import styles from './GameGrid.module.css'

const games = [
  { id: 1, name: 'Speed Racer', category: 'racing · 3D', emoji: '🏎️' },
  { id: 2, name: 'Block Puzzle', category: 'puzzle · low-poly', emoji: '🧩' },
  { id: 3, name: 'Battle Zone', category: 'shooting · arcade', emoji: '🔫' },
  { id: 4, name: 'Kick Off!', category: 'sports · 3D', emoji: '⚽' },
  { id: 5, name: 'Shadow Fight', category: 'action · 2D', emoji: '🗡️' },
  { id: 6, name: 'Space Wars', category: 'arcade · space', emoji: '🚀' },
]

export default function GameGrid() {
  const router = useRouter()

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Featured games</h2>
        <span className={styles.viewAll}>view all →</span>
      </div>

      <div className={styles.grid}>
        {games.map((game) => (
          <div
            key={game.id}
            onClick={() => router.push(`/games/${game.id}`)}
            className={styles.card}
          >
            <div className={styles.thumb}>
              {game.emoji}
              <span className={styles.tag}>WebGL</span>
            </div>
            <div className={styles.info}>
              <p className={styles.name}>{game.name}</p>
              <p className={styles.category}>{game.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}