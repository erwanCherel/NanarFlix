import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search";

export default function Header() {
  const [burgerActive, setBurgerActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const displaySearchBar = () => {
    const headerSearch = document.querySelector(".header-search");
    if (searchActive) {
      headerSearch.style.visibility = "hidden";
      setSearchActive(false);
    } else {
      headerSearch.style.visibility = "visible";
      setSearchActive(true);
    }
  };

  const displayMenu = () => {
    const headerMenu = document.querySelector(".header-menu");
    const hamburgerIcon = document.querySelector(".hamburger");
    if (burgerActive) {
      headerMenu.style.visibility = "hidden";
      hamburgerIcon.style.backgroundImage =
        "url('/src/assets/icons/hamburger-icon.svg')";
      hamburgerIcon.style.position = "";
      setBurgerActive(false);
    } else {
      headerMenu.style.visibility = "visible";
      hamburgerIcon.style.backgroundImage =
        "url('/src/assets/icons/close-icon.svg')";
      hamburgerIcon.style.position = "fixed";
      setBurgerActive(true);
    }
  };

  return (
    <header className="header-container bg-slate-50">
      <header className="">
        <div className="header-logo">
          <NavLink to="/">NANARFLIX</NavLink>
        </div>
        <ul className="header-icons">
          <li className="icon hamburger" onClick={displayMenu} />
          <li className="icon search flex" onClick={displaySearchBar}>
            <Search />
          </li>
          <NavLink to="/profil/4" className="">
            <li className="icon account" />
          </NavLink>
        </ul>

        <div className="header-menu" style={{ visibility: "hidden" }}>
          <div className="nav accueil">
            <NavLink onClick={displayMenu} to="/" className="">
              Accueil
            </NavLink>
          </div>
          <div className="nav annuaire">
            <NavLink onClick={displayMenu} to="/annuaire" className="">
              Annuaire
            </NavLink>
          </div>
          <div className="nav communaute">
            <NavLink onClick={displayMenu} to="/communaute" className="">
              Communauté
            </NavLink>
          </div>
          <div className="nav profil">
            <NavLink onClick={displayMenu} to="/profil/4" className="">
              Profil
            </NavLink>
          </div>
          <div className="nav contact">
            <NavLink onClick={displayMenu} to="/contact" className="">
              Nous contacter
            </NavLink>
          </div>
        </div>
        <label
          htmlFor=""
          className="header-search"
          style={{ visibility: "hidden" }}
        >
          <div className="search-container ">
            <input
              placeholder="Recherche..."
              type="text"
              className="inputSearch"
            />
            <button className="buttonSearch" type="button">
              Rechercher
            </button>
          </div>
        </label>
      </header>
    </header>
  );
}
