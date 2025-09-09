// src/components/Hero.tsx
import '../styles/Hero.css';
import vido from '../assets/vido.mp4';

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={vido} type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

      <div className="hero-content">
        <h1 className="hero-title"><span>ZenPet</span></h1>
        <p className="hero-phrase">Tu mascota en buenas manos</p>
        <p className="hero-subtext">Cuidamos con amor y experiencia</p>
        <a
          href="https://wa.me/529991234567"
          className="hero-button"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contáctanos por WhatsApp"
        >
          Contáctanos por WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Hero;
