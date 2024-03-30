import React from 'react';
import GymBackground from "../../images/gym.png";
import "../../App.css";
import "./contact.css";

function Contact() {
  return (
    <div className="contact container">
      <main>
        <h1 className="title">Contato</h1>
      </main>
      <img className="containerBackground" src={GymBackground}></img>
    </div>
  );
}

export default Contact;
