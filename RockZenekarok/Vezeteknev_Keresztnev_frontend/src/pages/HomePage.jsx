
import { Link } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../style.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Üdvözöljük a Rock Zenekarok oldalán!</h1>
      <p>Itt megtalálhatja a legjobb rock zenekarokat és információkat róluk.</p>
      <Link to="/zenekarok" className="btn btn-primary">Zenekarok listája</Link>
    </div>
  );
}

export default HomePage;