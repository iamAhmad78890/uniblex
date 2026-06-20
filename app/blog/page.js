import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlogSection from '../components/BlogSection'

export default function Blog() {
  return (
    <div style={{minHeight: '100vh', background: '#0B0D0C'}}>
      <Navbar />
      <div style={{paddingTop: '64px'}}>
        <BlogSection />
      </div>
      <Footer />
    </div>
  )
}