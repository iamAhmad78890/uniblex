import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import styles from './GamePage.module.css'

const games = [
  { id: '1', name: 'Speed Racer', category: 'racing · 3D', emoji: '🏎️', url: 'https://www.crazygames.com/embed/moto-road-rash-3d' },
  { id: '2', name: 'Block Puzzle', category: 'puzzle · low-poly', emoji: '🧩', url: 'https://www.crazygames.com/embed/block-puzzle-jewel' },
  { id: '3', name: 'Battle Zone', category: 'shooting · arcade', emoji: '🔫', url: 'https://www.crazygames.com/embed/bullet-force-multiplayer' },
  { id: '4', name: 'Kick Off!', category: 'sports · 3D', emoji: '⚽', url: 'https://www.crazygames.com/embed/penalty-shooters-2' },
  { id: '5', name: 'Shadow Fight', category: 'action · 2D', emoji: '🗡️', url: 'https://www.crazygames.com/embed/shadow-fight-2' },
  { id: '6', name: 'Space Wars', category: 'arcade · space', emoji: '🚀', url: 'https://www.crazygames.com/embed/space-shooter-pi85i' },
]

export default function GamePage({ params }) {
  const game = games.find(g => g.id === params.id)

  if (!game) {
    return (
      <div style={{minHeight: '100vh', background: '#0B0D0C'}}>
        <Navbar />
        <div style={{paddingTop: '120px', textAlign: 'center'}}>
          <p style={{color: '#F1EFE8', fontSize: '20px'}}>Game not found 😕</p>
          <Link href="/" style={{color: '#97C459', fontFamily: 'monospace', fontSize: '13px'}}>← back to games</Link>
        </div>
        <Footer />
      </div>
    )
  }

  const otherGames = games.filter(g => g.id !== game.id).slice(0, 3)

  return (
    <div style={{minHeight: '100vh', background: '#0B0D0C'}}>
      <Navbar />

      <div className={styles.wrapper}>

        <div className={styles.breadcrumb}>
          <Link href="/" className={styles.breadcrumbLink}>games</Link>
          <span>/</span>
          <span style={{color: '#888780'}}>{game.name}</span>
        </div>

        <div className={styles.titleRow}>
          <div className={styles.titleLeft}>
            <span style={{fontSize: '24px'}}>{game.emoji}</span>
            <div>
              <h1 className={styles.title}>{game.name}</h1>
              <p className={styles.category}>{game.category}</p>
            </div>
          </div>
          <span className={styles.tag}>WebGL</span>
        </div>

        <div className={styles.gameFrameBox}>
          <iframe
            src={game.url}
            className={styles.iframe}
            allowFullScreen
          />
        </div>

        <div className={styles.moreSection}>
          <h2 className={styles.moreTitle}>More games</h2>
          <div className={styles.moreGrid}>
            {otherGames.map((g) => (
              <Link href={`/games/${g.id}`} key={g.id} className={styles.moreCard}>
                <div className={styles.moreThumb}>{g.emoji}</div>
                <div>
                  <p className={styles.moreName}>{g.name}</p>
                  <p className={styles.moreCategory}>{g.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}