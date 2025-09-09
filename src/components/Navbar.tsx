import { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#inicio" className="navbar-logo">
          Zen<span>Pet</span>
        </a>

        <nav className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a>
          <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a>
          <a href="#promotions" onClick={() => setMenuOpen(false)}>Promociones</a>
          <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
        </nav>

        <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
