// src/components/Cta.tsx
import '../styles/CTA.css';

const Cta = () => {
  return (
    <div className="cta-full">
      <section className="cta-section" id="cta">
        <h3 className="cta-title">¿Listo para agendar la cita de tu mascota?</h3>
        <p className="cta-subtitle">Estamos aquí para cuidarla como se merece 💚</p>
        <a
          href="https://wa.me/529991234567"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Agendar por WhatsApp
        </a>
      </section>
    </div>
  );
};

export default Cta;
