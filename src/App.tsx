import Sidebar from './components/Sidebar'
import CompanyHeader from './components/CompanyHeader'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Footer from './components/Footer'
import './styles/print.css'
import resumeData from './data/resume.json'

function App() {
  return (
    <div className="min-h-screen bg-zed-bg text-zed-text font-mono flex flex-col md:flex-row">
      {/* Sidebar - Fixed on desktop, top on mobile */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 min-w-0">
        <div className="max-w-4xl mx-auto p-6 md:p-12">
          {/* Quick summary check at top for mobile context or just intro */}
          <div className="mb-8">
             <p className="text-zed-text leading-relaxed max-w-2xl">
               {resumeData.summary}
             </p>
          </div>

          <CompanyHeader />

          <div className="space-y-12">
            <Experience />
            <Skills />
            <Education />
          </div>

          <div className="mt-12 pt-8 border-t border-zed-border">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
