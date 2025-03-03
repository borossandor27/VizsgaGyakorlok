import { NavLink } from "react-router-dom";
export function Navbar() {
  return (
    <>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Kezdőlap</NavLink>
        <NavLink to="/offers" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Ingatlan kínálat</NavLink>
        <NavLink to="/offers2" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Ingatlan kínálat táblázatban</NavLink>
        <NavLink to="/newad" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Hirdetés feladása</NavLink>
      </nav >
    </>
  );
}

export default Navbar;