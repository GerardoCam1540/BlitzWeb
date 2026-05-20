import { Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import ServiceDetail from './pages/ServiceDetail'
import TeamPage from './pages/TeamPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="app">
      <div className="page-shell">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/servicios/:serviceSlug" element={<ServiceDetail />} />
          <Route path="/equipo" element={<TeamPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App