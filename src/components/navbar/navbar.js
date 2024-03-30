import React from 'react';
import { ReactComponent as MenuIcon } from "../../images/menu.svg";
import "../../App.css";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
    <section className="navbarContent">
      <h1 className="navbarTitle">GAIAGYM</h1>
      <MenuIcon className="navbarIcon" />
      <div className="navbarOptions">
        <h2>Início</h2>
        <h2>Sobre</h2>
        <h2>Contato</h2>
      </div>
    </section>
  </nav>
  );
}

export default Navbar;
