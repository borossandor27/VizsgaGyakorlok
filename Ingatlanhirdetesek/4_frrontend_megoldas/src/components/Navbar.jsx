import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <Link to="/">Kezdőlap</Link>
          <Link to="/offers">Ingatlan kínálat</Link>
          <Link to="/newad">Hirdetés feladása</Link>
        </ul >
      </nav >
    </>
  );
}

export default Navbar;