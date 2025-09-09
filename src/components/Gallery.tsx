// src/components/Gallery.tsx
import '../styles/Gallery.css';

import pet1 from '../assets/gato3.jpg';
import pet2 from '../assets/pet2.jpg';
import pet3 from '../assets/pet3.jpg';
import pet4 from '../assets/gato2.jpg';

const pets = [
    { src: pet1, name: 'Luna', desc: 'Vacunada y desparasitada 🐶' },
    { src: pet2, name: 'Milo', desc: 'Chequeo general y baño 🛁' },
    { src: pet3, name: 'Nala', desc: 'Emergencia resuelta con éxito ❤️‍🩹' },
    { src: pet4, name: 'Toby', desc: 'Vacuna + mimo extra 🐾' },
  ];
  

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <h2 className="gallery-title">Historias felices, colas felices</h2>
      <p className="gallery-subtitle">
        Algunas de nuestras mascotas atendidas en ZenPet 💚
      </p>

      <div className="gallery-round-grid">
        {pets.map((pet, index) => (
         <div className="round-img" key={index}>
         <div className="round-img-wrapper">
           <img src={pet.src} alt={pet.name} />
           <div className="round-overlay">
             <p>{pet.desc}</p>
           </div>
         </div>
         <span>{pet.name}</span>
       </div>
       
        ))}
      </div>

      <p className="gallery-cta">¿Quieres que tu mascota esté aquí? Visítanos en ZenPet 🐾</p>
    </section>
  );
};

export default Gallery;
