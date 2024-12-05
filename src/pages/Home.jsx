import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className="hero bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-2 ">Leyes de Gestalt</h1>
          <p className="lead">
            Explora cómo la psicología de la percepción influye en el diseño gráfico y visual. Aprende sobre cada ley en esta página.
          </p>
          <Link to="/leyes/proximidad" className="btn btn-warning btn-lg mt-3">
            Comenzar ahora
          </Link>
        </div>
      </section>

      <section className="about bg-light py-5">
        <div className="container">
          <h2 className="mb-4 text-center">¿Qué son las Leyes de la Gestalt?</h2>
          <p>
            Las Leyes de la Gestalt son principios psicológicos que explican cómo las personas percibimos patrones y estructuras en el mundo visual.
            Estas leyes ayudan a los diseñadores a crear composiciones visuales que sean claras, equilibradas y atractivas. Los 4 principios clave para describir los procesos de percepción visual son:
          </p>
          <ul>
            <li><strong>Emergencia:</strong> reconocimiento global de objetos, emergiendo formas 
              percibidas anteriormente de forma simultánea, no por la suma de sus partes
              constitutivas. </li>
            <li><strong>Reificación:</strong> construcción de nuevas formas partiendo de las existentes
              gracias a la propia experiencia visual. </li>
            <li><strong>Multiestabilidad:</strong> percepción ambigua entre fondo y figura que se dan en
              algunas imágenes.</li>
            <li><strong>Invariancia:</strong> prioridad en el reconocimiento y percepción de las formas y
              contornos de los elementos por encima de otras cualidades: color, textura,
              estilo, etc. </li>
          </ul>
        </div>
      </section>

      <section className="laws py-5">
        <div className="container">
          <h2 className="text-center mb-4">Explora las Leyes</h2>
          <div className="row">
            {[
              { id: 'proximidad', name: 'Ley de Proximidad' },
              { id: 'semejanza', name: 'Ley de Semejanza' },
              { id: 'cerramiento', name: 'Ley de Cerramiento' },
              { id: 'continuidad', name: 'Ley de Continuidad' },
              { id: 'movimiento común', name: 'Ley de Movimiento Común' },
              { id: 'pregnancia', name: 'Ley de Pregnancia' },
              { id: 'experiencia', name: 'Ley de la Experiencia' },
            ].map((law, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100">
                  <div className="card-body text-center">
                    <h5 className="card-title">{law.name}</h5>
                    <p className="card-text">
                      Aprende cómo aplicar la {law.name} en tus diseños.
                    </p>
                    <Link to={`/leyes/${law.id}`} className="btn btn-warning">
                      Ver más
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Esta sección ha sido creada para probar que funcione correctamente la página 'NotFound'*/}
      <section className="cta bg-warning text-dark text-center py-5">
        <div className="container">
          <h2>¡Descubre más sobre las leyes de Gestalt!</h2>
          <p>
            Si no te has quedado satisfecho con lo que has visto no dudes en contactarnos.</p>
          <Link to="/contacto" className="btn btn-dark btn-lg mt-3">
            Contáctanos
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
