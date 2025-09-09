// src/components/ContactForm.tsx
import { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ nombre: '', correo: '', mensaje: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Mensaje enviado con éxito!');
    setFormData({ nombre: '', correo: '', mensaje: '' });
  };

  return (
    <section className="contact-form-section" id="formulario">
      <h2 className="form-title">Envíanos un mensaje</h2>
      <p className="form-subtitle">Estamos listos para ayudarte</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="correo"
          placeholder="Tu correo"
          value={formData.correo}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensaje"
          placeholder="Escribe tu mensaje aquí..."
          rows={5}
          value={formData.mensaje}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar mensaje</button>
      </form>
    </section>
  );
};

export default ContactForm;
