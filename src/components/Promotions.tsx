import '../styles/Promotions.css';
import vacunaGif from '../assets/vacuna.gif';
import estetoscopioGif from '../assets/estetoscopio.gif';

const Promotions = () => {
  return (
    <section className="promotions" id="promotions" aria-label="Sección de promociones destacadas de ZenPet">
      <h2 className="promotions-title">Promociones destacadas</h2>
      <div className="promotions-wrapper">
        <article className="promo-card" aria-label="Promoción Consulta más Vacuna para mascotas">
          <img src={vacunaGif} alt="GIF de vacunación para mascotas" className="promo-icon" />
          <div className="promo-info">
            <h3>Consulta + Vacuna</h3>
            <p>
              Paquete ideal para primeras visitas. Incluye revisión general y vacunación inicial.
            </p>
          </div>
          <span className="promo-badge" aria-label="Precio de la promoción: 450 pesos mexicanos">$450 MXN</span>
        </article>

        <article className="promo-card" aria-label="Promoción Chequeo General para mascotas">
          <img src={estetoscopioGif} alt="GIF de chequeo médico para mascotas" className="promo-icon" />
          <div className="promo-info">
            <h3>Chequeo general</h3>
            <p>
              Revisión médica completa, desparasitación y asesoría nutricional para tu mascota.
            </p>
          </div>
          <span className="promo-badge" aria-label="Precio de la promoción: 500 pesos mexicanos">$500 MXN</span>
        </article>
      </div>
    </section>
  );
};

export default Promotions;
