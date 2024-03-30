import React, { useEffect, useRef } from 'react';
import { ReactComponent as MenuIcon } from "../../images/menu.svg";
import "../../App.css";
import "./navbar.css";

function Navbar() {
  const dialogRef = useRef(null);

  function openMobileMenu() {
    dialogRef.current.showModal();
  }
  function closeMobileMenu() {
    dialogRef.current.close();
  }

  function scrollTo(scrollElement) {
    const scrollPosition = document.querySelector(`.${scrollElement}`).offsetTop;
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", closeMobileMenu);

    return () => {
      window.removeEventListener("scroll", closeMobileMenu);
    }
  }, []);

  return (
    <nav className="navbar">
      <section className="navbarContent">
        <h1 className="navbarTitle">GAIAGYM</h1>
        <MenuIcon className="navbarIcon" onClick={openMobileMenu} />
        <div className="navbarOptions">
          <h2 onClick={() => scrollTo("home")}>Início</h2>
          <h2 onClick={() => scrollTo("about")}>Sobre</h2>
          <h2 onClick={() => scrollTo("contact")}>Contato</h2>
        </div>
      </section>
      <dialog className="navbarMobileMenuBox" ref={dialogRef} onClick={closeMobileMenu}>
        <div className="navbarMobileMenu">
          <h2 onClick={() => scrollTo("home")}>Início</h2>
          <h2 onClick={() => scrollTo("about")}>Sobre</h2>
          <h2 onClick={() => scrollTo("contact")}>Contato</h2>
        </div>
      </dialog>
    </nav>
  );
}

export default Navbar;
