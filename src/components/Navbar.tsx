import React, { ChangeEvent, useState } from "react";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCartPlus,
  faShippingFast,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import { MDBBadge } from "mdb-react-ui-kit";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { products } from "./data"; // import local data
interface Product{
  id:number,
  title:string,
  image:string
}
// Define RootState for Redux selector
interface RootState {
  auth: {
    token: string | null;
  };
  cart: {
    quantity: number;
  };
}
const Navbar:React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const navigate = useNavigate();
  const token = useSelector((state:RootState) => state.auth.token);
  const quantity = useSelector((state:RootState) => state.cart.quantity);
  const isLoggedIn = !!token;

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    closeMenu();
  };

  const handleSearch = (e:ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  };

  const handleSuggestionClick = (productId:number) => {
    navigate(`/details/${productId}`);
    setSearchQuery("");
    setFilteredProducts([]);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "crimson",
          padding: "0.3rem",
          textAlign: "center",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Free Delivery Nationwide
        <FontAwesomeIcon icon={faShippingFast} style={{ marginLeft: "5px" }} />
      </div>

      <nav className="navbar">
        <div className="navbar-logo">
          <h1 className="logo-text">Football Wears</h1>
        </div>

        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="icon"
            style={{ color: "#E53935" }}
          />
          {filteredProducts.length > 0 && (
            <div className="search-suggestions">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="suggestion-item"
                  onClick={() => handleSuggestionClick(product.id)}
                >
                  <img src={product.image} alt={product.title} />
                  {product.title.slice(0, 20)}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={`navbar-links ${isOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Contact
          </NavLink>
          {isLoggedIn ? (
            <button className="btn btn-transparent" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => {
                navigate("/login");
                closeMenu();
              }}
            >
              Login
            </button>
          )}
        </div>

        <button className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="hamburger-icon"
          />
        </button>

        <div className="cart-button">
          <NavLink className="mx-3" to="/cart" onClick={closeMenu}>
            <FontAwesomeIcon icon={faCartPlus} className="cart-icon" />
            <MDBBadge color="danger" notification pill>
              {quantity}
            </MDBBadge>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
