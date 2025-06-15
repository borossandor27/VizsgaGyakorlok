import {  Routes, Route, Link } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../style.css'
const Menu = () => {
    return (
                    <nav class="navbar navbar-expand-md navbar-light d-none d-md-block">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarRealEstateAgency">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" href="/">Kezdőlap</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="/zenekarok">Zenekarok</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="/kapcsolat">Kapcsolat</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;