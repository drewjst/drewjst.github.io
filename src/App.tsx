import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-dark-text font-sans">
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
