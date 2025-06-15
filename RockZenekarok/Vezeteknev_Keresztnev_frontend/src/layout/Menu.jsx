import { NavLink } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../style.css';

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light d-none d-md-block">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarRealEstateAgency">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
              >
                Kezdőlap
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/zenekarok"
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
              >
                A rock zene nagy csapatai
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/kapcsolat"
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
              >
                Együttes feltöltése
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
