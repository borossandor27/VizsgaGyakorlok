import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Offers2 from "./pages/Offers2";
import NewAdForm from "./pages/NewAdForm";
//import OfferCard from "./components/OfferCard";
import NoMatch from "./pages/NoMatch";
import "./App.css";

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/offers2" element={<Offers2 />} />
          <Route path="/newad" element={<NewAdForm />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
    </Router>
  );
}

export default App;