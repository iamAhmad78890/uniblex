import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GameGrid from '../components/GameGrid'

export default function AllGames() {
  return (
    <div style={{minHeight: '100vh', background: '#0B0D0C'}}>
      <Navbar />
      <div style={{paddingTop: '64px'}}>
        <div style={{padding: '40px 24px 0', textAlign: 'center'}}>
          <h1 style={{fontSize: '30px', fontWeight: '500', color: '#F1EFE8', margin: '0 0 8px'}}>
            All Games
          </h1>
          <p style={{fontFamily: 'monospace', fontSize: '13px', color: '#5F5E5A', margin: 0}}>
            // every game, all in one place
          </p>
        </div>
        <GameGrid />
      </div>
      <Footer />
    </div>
  )
}