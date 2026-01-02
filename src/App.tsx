import './App.css'
import Header from './components/Header'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Footer from './components/Footer'
import './styles/print.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Header />
        <Experience />
        <Skills />
        <Education />
        <Footer />
      </div>
    </div>
  )
}

export default App
