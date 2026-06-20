'use client'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GameGrid from './components/GameGrid'
import BlogSection from './components/BlogSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div style={{minHeight: '100vh', background: '#0B0D0C'}}>
      <Navbar />
      <div>
        <Hero />
        <GameGrid />
        <BlogSection />
        <Footer/>
      </div>
    </div>
  )
}