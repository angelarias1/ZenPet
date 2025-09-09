// src/components/Testimonials.tsx
import { useEffect, useRef, useState } from 'react';
import '../styles/Testimonials.css';
import quoteGif from '../assets/huella.gif';

const testimonialsData = [
  {
    quote: 'ZenPet cuidó de mi gatito como si fuera suyo. 100% recomendado.',
    name: 'Laura G.',
  },
  {
    quote: 'Servicio excelente y veterinarios muy profesionales. Gracias ZenPet.',
    name: 'Carlos M.',
  },
  {
    quote: 'Mi perrita salió feliz del baño. ¡Amamos este lugar!',
    name: 'Ana y Canela',
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && activeIndex === -1) {
          // Activar uno por uno con retraso
          testimonialsData.forEach((_, i) => {
            setTimeout(() => {
              setActiveIndex((prev) => (prev < i ? i : prev));
            }, i * 800); // Delay entre cada testimonio
          });
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [activeIndex]);

  return (
    <section className="testimonials" id="testimonials" ref={sectionRef}>
      <h2 className="testimonials-title">Lo que dicen nuestros clientes</h2>
      <p className="testimonials-subtitle">Testimonios reales de mascotas felices 🐾</p>

      <div className="testimonials-grid">
        {testimonialsData.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <img src={quoteGif} alt="Icono de huella de mascota" className="quote-icon" />
            <TypewriterText text={item.quote} active={index <= activeIndex} />
            <span className="quote-name">— {item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const TypewriterText = ({ text, active }: { text: string; active: boolean }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!active) return;
    let i = 0;
    setDisplayedText('');
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, [active, text]);

  return <p className="quote-text">{displayedText}</p>;
};

export default Testimonials;
