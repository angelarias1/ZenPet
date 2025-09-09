// src/components/FloatingWhatsapp.tsx
import '../styles/FloatingWhatsapp.css';

const FloatingWhatsapp = () => {
  return (
    <a
      href="https://wa.me/529991234567"
      className="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contáctanos por WhatsApp"
    >
      <img src="/whatsapp-icon.png" alt="WhatsApp" />
    </a>
  );
};

export default FloatingWhatsapp;
