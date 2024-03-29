import React from 'react';
import { ReactComponent as MenuIcon } from "./images/menu.svg";
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar">
        <section className="navbarContent">
          <h1 className="navbarTitle">GaiaGym</h1>
          <MenuIcon className="navbarIcon" />
          <div className="navbarOptions">
            <h2>Início</h2>
            <h2>Sessões</h2>
            <h2>Contato</h2>
          </div>
        </section>
      </nav>
    </div>
  );
}

export default App;
