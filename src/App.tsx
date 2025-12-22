import './App.css'
import { Container, Box } from '@mui/material'
import Header from './components/Header'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Footer from './components/Footer'
import './styles/print.css'

function App() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fff' }}>
      <Container maxWidth="md" sx={{ py: 2 }}>
        <Header />
        <Experience />
        <Skills />
        <Education />
        <Footer />
      </Container>
    </Box>
  )
}

export default App
