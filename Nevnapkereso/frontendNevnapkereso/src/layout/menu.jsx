import {Routes, Route, Link} from 'react-router-dom';
import Fooldal from '../pages/Fooldal.jsx';
import Nevnap from '../pages/Nevnap.jsx';
import Szuletesnap from '../pages/Szuletesnap.jsx';
import Kapcsolat from '../pages/Kapcsolat.jsx';


const Menu = ()=> {
    return (
        <nav>
            <ul>
                <li><Link to="/">Főoldal</Link></li>
                <li><Link to="/nevnap">Névnap</Link></li>
                <li><Link to="/szulinap">Születésnap</Link></li>
                <li><Link to="/kapcsolat">Kapcsolat</Link></li>
            </ul>
            <Routes>
                <Route path="/" element={<Fooldal />} />
                <Route path="/nevnap" element={<Nevnap />} />
                <Route path="/szulinap" element={<Szuletesnap />} />
                <Route path="/kapcsolat" element={<Kapcsolat />} />
            </Routes>
        </nav>
    )
}

export default Menu;