import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./etterem.css";

const baseUrl="http://localhost:3000";
const Navbar = () => (
  <header className="d-flex justify-content-between p-3 bg-success text-white">
    <h1>
      <img src="images/etterem_logo_white.png" alt="Szász Étterem logó" className="logo" /> Szász Étterem
    </h1>
    <nav>
      <a href="#">Főoldal</a>
      <a href="#">Menü</a>
      <a href="#">Kapcsolat</a>
    </nav>
  </header>
);

const CategoryFilter = ({ categories, onSelectCategory }) => (
  <aside className="col-md-3 category-filter">
    <h3>Kategóriák</h3>
    {categories.map((category) => (
      <label key={category} onClick={() => onSelectCategory(category)}>
        {category}
      </label>
    ))}
  </aside>
);

const Menu = ({ selectedCategory, addToCart }) => {
  const [menu, setMenu] = useState([]);
  

  useEffect(() => {
    axios.get(`${baseUrl}/menuitems`).then((response) => {
      setMenu(response.data);
    });
  }, []);

  return (
    <main className="col-md-6 row">
      {
      menu
        .filter((item) => !selectedCategory || item.category_name === selectedCategory)
        .map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image_url} alt={item.name} />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text">{item.price} Ft</p>
              <p className="card-text">{item.available ? "Elérhető" : "Nem elérhető"}</p>
              <button onClick={() => addToCart(item)}>Kosárba</button>
            </div>
          </div>
        ))}
    </main>
  );
};

const Cart = ({ cartItems }) => (
  <aside className="col-md-3">
    <h3>&#128722; Kosár</h3>
    <ul>
      {cartItems.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  </aside>
);

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const categories = ["Levesek", "Főételek", "Desszertek", "Italok"];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <>
      <Navbar />
      <div className="row mt-3">
        <CategoryFilter categories={categories} onSelectCategory={setSelectedCategory} />
        <Menu selectedCategory={selectedCategory} addToCart={addToCart} />
        <Cart cartItems={cart} />
      </div>
      <footer className="bg-light text-center p-3">&copy; 2020 Szász étterem</footer>
    </>
  );
};

export default App;
