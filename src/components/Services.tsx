// src/components/Services.tsx
import '../styles/Services.css';

import estetoscopio from '../assets/estetoscopio.gif';
import vacuna from '../assets/vacuna.gif';
import bano from '../assets/bano.gif';
import huella from '../assets/huella.gif';
import ambulancia from '../assets/ambulancia.gif';
import corazon from '../assets/latido-del-corazon.gif';

const Services = () => {
  const services = [
    { icon: estetoscopio, title: 'Consultas' },
    { icon: vacuna, title: 'Vacunación' },
    { icon: bano, title: 'Estética' },
    { icon: huella, title: 'Desparasitación' },
    { icon: ambulancia, title: 'Emergencias' },
    { icon: corazon, title: 'Chequeo general' },
  ];

  return (
    <section className="services" id="servicios" aria-label="Sección de servicios veterinarios ZenPet">
      <h2 className="services-title">Nuestros Servicios</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img
              src={service.icon}
              alt={`Ícono animado de ${service.title}`}
              className="service-gif"
            />
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
