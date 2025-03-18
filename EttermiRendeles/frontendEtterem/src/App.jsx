import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./etterem.css";

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
    axios.get("/menuitems").then((response) => {
      setMenu(response.data);
    });
  }, []);

  return (
    <main className="col-md-6 row">
      {menu
        .filter((item) => !selectedCategory || item.category === selectedCategory)
        .map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
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
    <div className="container">
      <Navbar />
      <div className="row mt-3">
        <CategoryFilter categories={categories} onSelectCategory={setSelectedCategory} />
        <Menu selectedCategory={selectedCategory} addToCart={addToCart} />
        <Cart cartItems={cart} />
      </div>
      <footer className="bg-light text-center p-3">&copy; 2020 Szász étterem</footer>
    </div>
  );
};

export default App;
