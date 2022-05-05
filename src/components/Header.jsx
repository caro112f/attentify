import "./Header.scss";
import logo from "./img/Attentify_Logo.svg";
import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  function ToggleBurgermenu() {
    if (setMenuOpen === true) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  }
  return (
    <header className="header">
      <nav>
        <div id="logo_wrapper">
          <img src={logo} className="logo" alt="" />
        </div>
        <div id="menu" className={menuOpen ? null : "inactive"}>
          <ul>
            <li>
              <a
                href="#infosection"
                className="nav-link"
                onClick={ToggleBurgermenu}
              >
                Læs mere
              </a>
            </li>
            <li>
              <a
                href="#toparents"
                className="nav-link"
                onClick={ToggleBurgermenu}
              >
                Til forældre
              </a>
            </li>
            <li>
              <a
                href="#toschools"
                className="nav-link"
                onClick={ToggleBurgermenu}
              >
                Til skoler
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
