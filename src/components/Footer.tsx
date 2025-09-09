import '../styles/Footer.css';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-dark" aria-label="Pie de página">
      <div className="footer-container">
        <h3 className="footer-brand"><span>ZenPet</span></h3>

        <ul className="footer-nav">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#contacto">Contacto</a></li>
          <li><a href="#formulario">Formulario</a></li>
        </ul>

        <div className="footer-social">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de ZenPet"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook de ZenPet"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://wa.me/5299912224567"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp de ZenPet"
          >
            <FaWhatsapp />
          </a>
        </div>

        <p className="footer-rights">
          © {new Date().getFullYear()} ZenPet — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
