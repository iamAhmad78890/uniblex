const games = [
  { id: '1', name: 'Speed Racer', emoji: '🏎️', url: 'https://www.crazygames.com/embed/moto-road-rash-3d' },
  { id: '2', name: 'Block Puzzle', emoji: '🧩', url: 'https://www.crazygames.com/embed/block-puzzle-jewel' },
  { id: '3', name: 'Battle Zone', emoji: '🔫', url: 'https://www.crazygames.com/embed/bullet-force-multiplayer' },
  { id: '4', name: 'Kick Off!', emoji: '⚽', url: 'https://www.crazygames.com/embed/penalty-shooters-2' },
  { id: '5', name: 'Shadow Fight', emoji: '🗡️', url: 'https://www.crazygames.com/embed/shadow-fight-2' },
  { id: '6', name: 'Space Wars', emoji: '🚀', url: 'https://www.crazygames.com/embed/space-shooter-pi85i' },
]

export default function GamePage({ params }) {
  const game = games.find(g => g.id === params.id)

  if (!game) {
    return (
      <div style={{minHeight: '100vh', background: '#1a1b2e', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{textAlign: 'center'}}>
          <h1 style={{color: '#e5e7eb', fontSize: '32px'}}>Game nahi mila 😕</h1>
          <a href="/" style={{display: 'inline-block', marginTop: '24px', padding: '10px 24px', background: '#7c3aed', borderRadius: '8px', color: '#fff', textDecoration: 'none'}}>← Back to Home</a>
        </div>
      </div>
    )
  }

  return (
    <div style={{minHeight: '100vh', background: '#1a1b2e'}}>
      
      {/* Top Bar */}
      <div style={{background: '#12131f', padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '16px', borderBottom: '1px solid #2a2b3d'}}>
        <a href="/" style={{color: '#a78bfa', textDecoration: 'none', fontSize: '14px'}}>← Back</a>
        <h1 style={{fontSize: '18px', color: '#e5e7eb'}}>{game.emoji} {game.name}</h1>
      </div>

      {/* Game iframe */}
      <div style={{width: '100%', height: 'calc(100vh - 57px)'}}>
        <iframe
          src={game.url}
          style={{width: '100%', height: '100%', border: 'none'}}
          allowFullScreen
        />
      </div>

    </div>
  )
}