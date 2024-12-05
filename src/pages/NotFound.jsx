import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="notFound-container d-flex justify-content-center align-items-center">
    <div className="text-center">
      <h1 className="display-3">ERROR 404</h1>
      <p className="lead">Página no encontrada</p>
      <div>
        <Link to="/" className="btn btn-warning">
          Volver al inicio
        </Link>
      </div>
    </div>
  </div>
);
export default NotFound;