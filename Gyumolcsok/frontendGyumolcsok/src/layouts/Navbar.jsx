import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/" >Főoldal</Link></li>
                <li><Link to="/about" >Rólunk</Link></li>
                <li><Link to="/contact" >Kapcsolat</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;