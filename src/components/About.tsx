// src/components/About.tsx
import '../styles/About.css';
import equipoImg from '../assets/equipo.jpg';

const About = () => {
  return (
    <section className="about" id="about" aria-label="Sección sobre ZenPet">
      <div className="about-card">
        <div className="about-text">
          <h2><span className="line"></span> ¿Quiénes somos?</h2>
          <p>
            En <strong>ZenPet</strong>, transformamos el cuidado veterinario en una experiencia de confianza, amor y tecnología. Nuestro equipo combina experiencia clínica con atención personalizada para garantizar la salud y felicidad de tus mascotas.
          </p>
          <p>
            Desde nuestros inicios, nos hemos comprometido a brindar un espacio donde tú y tu peludo se sientan seguros. ¡Conócenos y sé parte de la familia <strong>ZenPet</strong>!
          </p>
        </div>
        <div className="about-image">
          <img
            src={equipoImg}
            alt="Equipo veterinario de ZenPet posando en la clínica"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
