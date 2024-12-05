import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow p-3">
    <div className="container">
      <Link className="navbar-brand fw-bold" to="/">
        Leyes de Gestalt
      </Link>
      <button
        className="navbar-toggler "
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {[
            'Proximidad',
            'Semejanza',
            'Cerramiento',
            'Continuidad',
            'Movimiento Común',
            'Pregnancia',
            'Experiencia',
          ].map((ley, index) => (
            <li key={index} className="nav-item">
              <Link
                className="nav-link text-white mx-2 p-2 rounded nav-hover"
                to={`/leyes/${ley.toLowerCase()}`}
              >
                {ley}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
