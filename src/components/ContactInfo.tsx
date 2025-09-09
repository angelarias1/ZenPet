import '../styles/ContactInfo.css';
import tiempoGif from '../assets/tiempo.gif';
import mensajeGif from '../assets/mensaje.gif';
import llamadaGif from '../assets/llamada-entrante.gif';
import mapaGif from '../assets/mapas-de-google.gif';

const ContactInfo = () => {
  return (
    <section className="contact-info" id="contacto" aria-label="Información de contacto">
      <h2 className="contact-title">¿Dónde estamos?</h2>
      <p className="contact-subtitle">Puedes visitarnos o escribirnos cuando lo necesites 💬</p>

      <div className="contact-grid">
        <article className="contact-card" aria-label="Dirección de la clínica veterinaria">
          <img src={mapaGif} alt="Ícono de ubicación" className="contact-gif" />
          <h3>Dirección</h3>
          <p>Calle Mascotas Felices 123, Cancún, Q. Roo</p>
        </article>

        <article className="contact-card" aria-label="Teléfono de contacto">
          <img src={llamadaGif} alt="Ícono de llamada telefónica" className="contact-gif" />
          <h3>Teléfono</h3>
          <p>+52 999 123 4567</p>
        </article>

        <article className="contact-card" aria-label="Correo electrónico de contacto">
          <img src={mensajeGif} alt="Ícono de correo electrónico" className="contact-gif" />
          <h3>Correo</h3>
          <p>zenpet@veterinaria.com</p>
        </article>

        <article className="contact-card" aria-label="Horario de atención">
          <img src={tiempoGif} alt="Ícono de reloj" className="contact-gif" />
          <h3>Horario</h3>
          <p>Lun a Sáb: 9:00 am – 7:00 pm</p>
        </article>
      </div>

      <div className="contact-map">
        <iframe
          title="Ubicación de ZenPet en Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.014837357556!2d-86.85000000000001!3d21.161910000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2b5d9d1234ab%3A0x123456789abcde!2sCancún!5e0!3m2!1ses-419!2smx!4v0000000000000"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactInfo;
