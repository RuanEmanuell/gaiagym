import React from 'react';
import GymBackground from "../../images/gym.png";
import Plan1Img from "../../images/fitplan.jpg";
import Plan2Img from "../../images/smartplan.jpeg";
import "../../App.css";
import "./home.css";

function Home() {
  return (
      <div className="home container">
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
  );
}

export default Home;
