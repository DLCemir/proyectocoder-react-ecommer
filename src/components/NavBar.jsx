import React from "react";
import "../styles/navBar.css";
import logo from "../assets/LOGO.jpeg";
import CartWidget from "./CartWidget";
//import ItemListContainer from "./ItemListContainer";

const NavBar = () => {
  return (
    <header class="sticky-header">
      <div class="header-container">
        <div class="logo">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <nav class="nav-menu">
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Contactanos</a>
            </li>
            <li>
              <a href="#">Carrito</a>
            </li>
          </ul>
        </nav>
        <div class="search-bar">
          <input type="text" placeholder="Buscar productos..." id="search" />
        </div>
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
