import React from 'react';
import { ReactComponent as MenuIcon } from "./images/menu.svg";
import GymBackground from "./images/gym.png";
import Plan1Img from "./images/fitplan.jpg";
import Plan2Img from "./images/smartplan.jpeg";
import './App.css';

function App() {
  return (
    <div>
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
      <div className="container">
        <main>
          <h1 className="title">GAIAGYM</h1>
          <h2 className="subtitle">A academia que você estava procurando</h2>
          <article className="prices">
            <div className="priceBox">
              <h3 className="priceTitle">
                Plano Fit
              </h3>
              <img src={Plan1Img} className="priceImg"></img>
              <section className="descriptionBox">
              <p className="priceDescription">Treine quando puder, quando quiser</p>
              </section>
              <section className="choiceBox">
                <h3 className="priceTitle">
                  A partir de R$ 89,99
                </h3>
                <button className="standartButton">Escolher</button>
              </section>
            </div>
            <div className="priceBox">
              <h3 className="priceTitle">
                Plano Smart
              </h3>
              <img src={Plan2Img} className="priceImg"></img>
              <section className="descriptionBox">
              <p className="priceDescription">Treine acompanhando por um de nossos profissionais</p>
              </section>
              <section className="choiceBox">
                <h3 className="priceTitle">
                  A partir de R$ 129,99
                </h3>
                <button className="standartButton">Escolher</button>
              </section>
            </div>
          </article>
        </main>
        <img className="containerBackground" src={GymBackground}></img>
      </div>
    </div>
  );
}

export default App;
