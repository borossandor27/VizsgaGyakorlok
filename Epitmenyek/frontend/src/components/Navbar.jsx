// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fo-nav">
      <div className="container-xl d-flex align-items-center justify-content-between flex-wrap gap-2">
        <NavLink to="/" className="nav-brand">
          <i className="bi bi-buildings nav-brand-ikon"></i>
          Épített Örökség
        </NavLink>
        <div className="d-flex gap-1 flex-wrap">
          <NavLink
            to="/"
            end
            className={({ isActive }) => 'nav-link-gomb' + (isActive ? ' aktiv' : '')}
          >
            <i className="bi bi-house-door"></i> Főoldal
          </NavLink>
          <NavLink
            to="/lista"
            className={({ isActive }) => 'nav-link-gomb' + (isActive ? ' aktiv' : '')}
          >
            <i className="bi bi-list-ul"></i> Építmények
          </NavLink>
          <NavLink
            to="/uj"
            className={({ isActive }) => 'nav-link-gomb' + (isActive ? ' aktiv' : '')}
          >
            <i className="bi bi-plus-circle"></i> Új rögzítése
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
