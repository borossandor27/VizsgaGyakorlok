import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link" to="/">Főoldal</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/nevnap">Névnap</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/szulinap">Születésnap</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/kapcsolat">Kapcsolat</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu;