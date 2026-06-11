'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
const games = [
  { id: 1, name: 'Speed Racer', category: 'Racing', emoji: '🏎️', bg: '#1e1b4b' },
  { id: 2, name: 'Block Puzzle', category: 'Puzzle', emoji: '🧩', bg: '#1a2e1a' },
  { id: 3, name: 'Battle Zone', category: 'Shooting', emoji: '🔫', bg: '#2e1a1a' },
  { id: 4, name: 'Kick Off!', category: 'Sports', emoji: '⚽', bg: '#1a1a2e' },
  { id: 5, name: 'Shadow Fight', category: 'Action', emoji: '🗡️', bg: '#2e2a1a' },
  { id: 6, name: 'Space Wars', category: 'Shooting', emoji: '🚀', bg: '#2e1a2e' },
]

const categories = ['All', 'Action', 'Puzzle', 'Racing', 'Shooting', 'Sports']

export default function Home() {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = games.filter(g => {
    const matchCat = activeCategory === 'All' || g.category === activeCategory
    const matchSearch = g.name.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div style={{display: 'flex', minHeight: '100vh'}}>

      {/* Sidebar */}
      <div style={{width: '200px', background: '#12131f', padding: '20px 0', position: 'fixed', height: '100vh'}}>
        <h2 style={{color: '#a78bfa', padding: '0 16px 20px', fontSize: '20px'}}>🎮 GameZone</h2>
        <a href="#" style={{display: 'block', padding: '10px 16px', color: '#9ca3af', textDecoration: 'none'}}>🏠 Home</a>
        <a href="#" style={{display: 'block', padding: '10px 16px', color: '#9ca3af', textDecoration: 'none'}}>🔥 Popular</a>
        <a href="#" style={{display: 'block', padding: '10px 16px', color: '#9ca3af', textDecoration: 'none'}}>✨ New Games</a>
        <a href="#" style={{display: 'block', padding: '10px 16px', color: '#9ca3af', textDecoration: 'none'}}>🏆 Leaderboard</a>
      </div>

      {/* Main Content */}
      <div style={{flex: 1, padding: '24px', marginLeft: '200px'}}>

        {/* Search */}
        <div style={{marginBottom: '16px'}}>
          <input
            type="text"
            placeholder="🔍 Search games..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{width: '100%', padding: '12px 16px', background: '#12131f', border: '1px solid #2a2b3d', borderRadius: '8px', color: '#e5e7eb', fontSize: '14px', outline: 'none'}}
          />
        </div>

        {/* Category Filters */}
        <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '24px'}}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{padding: '8px 16px', background: activeCategory === cat ? '#7c3aed' : '#12131f', border: '1px solid #2a2b3d', borderRadius: '20px', color: activeCategory === cat ? '#fff' : '#9ca3af', fontSize: '13px', cursor: 'pointer'}}
            >
              {cat}
            </button>
          ))}
        </div>

        <h1 style={{marginBottom: '24px', fontSize: '24px'}}>🔥 Popular Games</h1>

        {/* Game Cards */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '16px'}}>
          {filtered.map((game) => (
            <div
            onClick={() => router.push(`/games/${game.id}`)}
              key={game.id}
              style={{background: '#12131f', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer', border: '1px solid #2a2b3d'}}
            >
              <div style={{height: '100px', background: game.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px'}}>
                {game.emoji}
              </div>
              <div style={{padding: '10px'}}>
                <p style={{fontWeight: '500'}}>{game.name}</p>
                <p style={{color: '#6b7280', fontSize: '12px'}}>{game.category}</p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{color: '#6b7280', textAlign: 'center', marginTop: '60px', fontSize: '16px'}}>
            No games found 😕
          </p>
        )}

      </div>
    </div>
  )
}