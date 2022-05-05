import "./Header.scss";
import logo from "./img/Attentify_Logo.svg";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <div id="logo_wrapper">
          <img src={logo} className="logo" alt="" />
        </div>
        <div id="menu">
          <ul>
            <li>
              <a href="#infosection">Læs mere</a>
            </li>
            <li>
              <a href="#/">Til forældre</a>
            </li>
            <li>
              <a href="#/">Til skoler</a>
            </li>
          </ul>
        </div>
        <div id="burgermenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>
    </header>
  );
}
