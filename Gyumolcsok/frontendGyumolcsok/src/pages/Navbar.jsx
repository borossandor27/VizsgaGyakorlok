import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-2">
      <ul className="flex space-x-4 justify-center">
        <li><Link to="/" className="hover:underline">Főoldal</Link></li>
        <li><Link to="/about" className="hover:underline">Rólunk</Link></li>
        <li><Link to="/contact" className="hover:underline">Kapcsolat</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
