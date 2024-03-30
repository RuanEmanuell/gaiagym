import React from 'react';
import GymBackground from "../../images/gym2.png";
import { ReactComponent as WhatsappIcon } from "../../images/whatsapp.svg";
import { ReactComponent as InstagramIcon } from "../../images/instagram.svg";
import { ReactComponent as GooglePlayIcon } from "../../images/googleplay.svg";
import "../../App.css";
import "./contact.css";

function Contact() {
  return (
    <div className="contact container">
      <main>
        <h1 className="title">Contato</h1>
        <div className="contactGrid">
          <div className="contactMapBox">
            <iframe className="contactMap" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15020.783548003294!2d-47.957493659155276!3d-19.746830374961384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1711804202414!5m2!1sen!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <p>Venha nos visitar!</p>
          </div>
          <div className="contactButtonsBox">
            <button className="contactButton" style={{backgroundColor:"#14c700"}}><WhatsappIcon className="contactButtonIcon"/>Whatsapp</button>
            <button className="contactButton" style={{backgroundColor:"#dd2a7b"}}><InstagramIcon className="contactButtonIcon"/>Instagram</button>
            <button className="contactButton" style={{backgroundColor:"#000000"}}><GooglePlayIcon className="contactButtonIcon"/>Nosso app</button>
          </div>
        </div>
      </main>
      <img className="containerBackground" src={GymBackground}></img>
    </div>
  );
}

export default Contact;
