import "./Header.scss";
import logo from "./img/Attentify_Logo.svg";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  function ToggleBurgermenu() {
    setMenuOpen((old) => !old);
  }

  const menuRef = useRef();
  useEffect(() => {
    gsap.from(menuRef.current, { y: -200 });
    gsap.to(menuRef.current, { duration: 1, y: 60 });
  });
  return (
    <header className="header">
      <nav>
        <div id="logo_wrapper">
          <img src={logo} className="logo" alt="" />
        </div>
        <div id="menu" ref={menuRef} className={menuOpen ? null : "inactive"}>
          <ul>
            <li>
              <a
                href="#infosection"
                className="nav-link"
                onClick={ToggleBurgermenu}
              >
                <h5>Læs mere</h5>
              </a>
            </li>
            <li>
              <a
                href="#toparents"
                className="nav-link"
                onClick={ToggleBurgermenu}
              >
                <h5>Til forældre</h5>
              </a>
            </li>
            <li>
              <a
                href="#toschools"
                className="nav-link"
                onClick={ToggleBurgermenu}
              >
                <h5>Til skoler</h5>
              </a>
            </li>
            <li>
              <a href="#footer" className="nav-link" onClick={ToggleBurgermenu}>
                <h5>Kontakt os</h5>
              </a>
            </li>
          </ul>
        </div>
        <div id="burgermenu" onClick={ToggleBurgermenu}>
          <span id="bar1" className={menuOpen ? "active1" : null}></span>
          <span id="bar2" className={menuOpen ? "active2" : null}></span>
          <span id="bar3" className={menuOpen ? "active3" : null}></span>
        </div>
      </nav>
    </header>
  );
}
