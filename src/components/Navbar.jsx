import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="logo" aria-label="Ir al inicio">
        <span>BLITZ</span>
        <strong>{'{CORE}'}</strong>
      </NavLink>

      <nav className="nav-links">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/servicios">Servicios</NavLink>
        <a href="#portafolio">Portafolio</a>
        <NavLink to="/equipo">Equipo</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>
    </header>
  )
}

export default Navbar